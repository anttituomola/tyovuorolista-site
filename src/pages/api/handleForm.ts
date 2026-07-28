// API route for handling contact form submissions
import type { APIContext } from 'astro'
import { SESClient } from "@aws-sdk/client-ses";
import { SendEmailCommand } from "@aws-sdk/client-ses";

async function verifyTurnstileToken(token: string, remoteip?: string): Promise<boolean> {
    const secret = import.meta.env.TURNSTILE_SECRET_KEY
    if (!secret) {
        console.error("❌ TURNSTILE_SECRET_KEY is not configured")
        return false
    }

    if (!token || token.length > 2048) {
        return false
    }

    try {
        const body = new URLSearchParams({
            secret,
            response: token,
        })
        if (remoteip) {
            body.set('remoteip', remoteip)
        }

        const response = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            },
        )

        if (!response.ok) {
            console.error("❌ Turnstile siteverify HTTP error:", response.status)
            return false
        }

        const result = await response.json() as { success?: boolean }
        return result.success === true
    } catch (error) {
        console.error("❌ Turnstile siteverify failed:", error)
        return false
    }
}

export async function POST({ request, clientAddress }: APIContext) {
    try {
        const { email, phone, turnstileToken } = await request.json();
        console.log("🚀 API request body", { email, phone, hasTurnstileToken: !!turnstileToken });

        if (!import.meta.env.TURNSTILE_SECRET_KEY) {
            console.error("❌ TURNSTILE_SECRET_KEY is not configured");
            return new Response(JSON.stringify({
                message: "Server configuration error.",
                status: "error",
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const turnstileOk = await verifyTurnstileToken(
            typeof turnstileToken === 'string' ? turnstileToken : '',
            clientAddress,
        )

        if (!turnstileOk) {
            console.log("❌ Turnstile verification failed");
            return new Response(JSON.stringify({
                message: "Verification failed.",
                status: "error",
            }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Validate input
        if (!email && !phone) {
            console.log("❌ No email or phone provided");
            return new Response(JSON.stringify({
                message: "Please provide either email or phone number.",
                status: "error",
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Check if we have AWS credentials (for production)
        const hasAWSCredentials = import.meta.env.AWS_SDK_ACCESS_KEY_ID && 
                                 import.meta.env.AWS_SDK_SECRET_ACCESS_KEY && 
                                 import.meta.env.AWS_SDK_REGION;
        
        console.log("🔧 Has AWS credentials:", hasAWSCredentials);
        console.log("🔧 Environment variables:", {
            hasAccessKey: !!import.meta.env.AWS_SDK_ACCESS_KEY_ID,
            hasSecretKey: !!import.meta.env.AWS_SDK_SECRET_ACCESS_KEY,
            hasRegion: !!import.meta.env.AWS_SDK_REGION,
        });

        if (hasAWSCredentials) {
            console.log("📧 Using AWS SES to send email");
            // Production: Send actual email via AWS SES
            const credentials = {
                accessKeyId: import.meta.env.AWS_SDK_ACCESS_KEY_ID,
                secretAccessKey: import.meta.env.AWS_SDK_SECRET_ACCESS_KEY,
            }

            const sesClient = new SESClient({
                region: import.meta.env.AWS_SDK_REGION,
                credentials: credentials,
            })

            const params = {
                Destination: {
                    ToAddresses: ['anttituomola8@gmail.com'],
                },
                Message: {
                    Body: {
                        Text: {
                            Data: `Yhteydenottopyyntö Tyovuorolista.fi:sta! 
              
              Ota yhteyttä asiakkaaseen: ${email ? `sähköpostilla ${email}` : `puhelimitse ${phone}`}`,
                        },
                    },
                    Subject: {
                        Data: email ? `Yhteydenottopyyntö ${email}` : `Yhteydenottopyyntö puhelinnumerosta ${phone}`,
                    },
                },
                ReplyToAddresses: [email ? email : 'noreply@notvalid.com'],
                Source: "anttituomola8@gmail.com",
            }

            console.log("📧 SES params:", JSON.stringify(params, null, 2));
            const result = await sesClient.send(new SendEmailCommand(params));
            console.log("✅ SES result:", result);
        } else {
            // Development: Just log the email (no actual sending)
            console.log("🚀 DEVELOPMENT MODE - Email would be sent:");
            console.log("📧 To: anttituomola8@gmail.com");
            console.log("📧 Subject: Yhteydenottopyyntö", email, phone);
            console.log("📧 Contact info:", { email, phone });
            console.log("⚠️  Add AWS credentials to .env for actual email sending");
        }

        return new Response(JSON.stringify({
            message: "Message sent.",
            status: "success",
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });

    } catch (error) {
        console.error("❌ API Error:", error);

        const errorMessage =
            error instanceof Error ? error.message : 'Unknown error'

        return new Response(JSON.stringify({
            message: `Error occurred: ${errorMessage}`,
            status: "error",
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }
}

export async function OPTIONS() {
    console.log("🔧 OPTIONS request received");
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
