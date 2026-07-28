import { SESClient } from "@aws-sdk/client-ses"
import { SendEmailCommand } from "@aws-sdk/client-ses"

async function verifyTurnstileToken(token, remoteip) {
    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
        console.error("TURNSTILE_SECRET_KEY is not configured")
        return false
    }

    if (!token || typeof token !== "string" || token.length > 2048) {
        return false
    }

    try {
        const body = new URLSearchParams({
            secret,
            response: token,
        })
        if (remoteip) {
            body.set("remoteip", remoteip)
        }

        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            },
        )

        if (!response.ok) {
            console.error("Turnstile siteverify HTTP error:", response.status)
            return false
        }

        const result = await response.json()
        return result.success === true
    } catch (error) {
        console.error("Turnstile siteverify failed:", error)
        return false
    }
}

export default async function handler(request, response) {
    // Add CORS headers
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    response.setHeader("Access-Control-Allow-Headers", "Content-Type")

    // Handle preflight requests
    if (request.method === "OPTIONS") {
        response.status(200).end()
        return
    }

    const { email, phone, turnstileToken } = request.body || {}
    console.log("request", {
        email,
        phone,
        hasTurnstileToken: !!turnstileToken,
    })

    if (!process.env.TURNSTILE_SECRET_KEY) {
        console.error("TURNSTILE_SECRET_KEY is not configured")
        response.status(500).json({
            message: "Server configuration error.",
            status: "error",
        })
        return
    }

    const remoteip =
        request.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        request.headers["x-real-ip"] ||
        request.socket?.remoteAddress

    const turnstileOk = await verifyTurnstileToken(turnstileToken, remoteip)
    if (!turnstileOk) {
        console.log("Turnstile verification failed")
        response.status(403).json({
            message: "Verification failed.",
            status: "error",
        })
        return
    }

    if (!email && !phone) {
        response.status(400).json({
            message: "Please provide either email or phone number.",
            status: "error",
        })
        return
    }

    const credentials = {
        accessKeyId: process.env.AWS_SDK_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SDK_SECRET_ACCESS_KEY,
    }

    const sesClient = new SESClient({
        region: process.env.AWS_SDK_REGION,
        credentials: credentials,
    })

    var params = {
        Destination: {
            ToAddresses: ["anttituomola8@gmail.com"],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Yhteydenottopyyntö Tyovuorolista.fi:sta! 
          
          Ota yhteyttä asiakkaaseen: ${email} tai ${phone}`,
                },
            },
            Subject: {
                Data: `Yhteydenottopyyntö ${email} ${phone}`,
            },
        },
        ReplyToAddresses: [email ? email : "noreply@notvalid.com"],
        Source: "anttituomola8@gmail.com",
    }

    return sesClient
        .send(new SendEmailCommand(params))
        .then(() => {
            response.status(200).json({
                message: "Message sent.",
                status: "success",
            })
        })
        .catch((error) => {
            response.status(500).json({
                message: `Error occured: ${error}`,
                status: "error",
            })
            console.log(error)
        })
}
