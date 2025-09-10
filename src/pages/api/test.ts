export async function get() {
    console.log("🔥 TEST API GET endpoint hit!");
    return new Response(JSON.stringify({
        message: "Test API GET endpoint working!",
        timestamp: new Date().toISOString(),
        status: "success"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function post() {
    console.log("🔥 TEST API POST endpoint hit!");
    return new Response(JSON.stringify({
        message: "Test API POST endpoint working!",
        timestamp: new Date().toISOString(),
        status: "success"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
