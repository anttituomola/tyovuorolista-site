import { SESClient } from "@aws-sdk/client-ses"
import { SendEmailCommand } from "@aws-sdk/client-ses"

export default function handler(
    request,
    response,
) {
    // Add CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    const { email, phone } = request.body
    console.log("request", request.body)

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
            ToAddresses: ['anttituomola8@gmail.com'],
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
        ReplyToAddresses: [email ? email : 'noreply@notvalid.com'] ,
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
