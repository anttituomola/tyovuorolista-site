// API route for handling contact form submissions
import type { APIContext } from 'astro'
import { SESClient } from "@aws-sdk/client-ses";
import { SendEmailCommand } from "@aws-sdk/client-ses";

export async function POST({ request }: APIContext) {
    try {
        const { email, phone } = await request.json();
        console.log("🚀 API request body", { email, phone });

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
