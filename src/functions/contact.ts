export async function onRequest(context: any) {
  try {
    const req = context.request;
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await req.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
    const TO_EMAIL = context.env.TO_EMAIL;
    const FROM_EMAIL = context.env.FROM_EMAIL ?? TO_EMAIL;

    if (!SENDGRID_API_KEY || !TO_EMAIL) {
      return new Response(JSON.stringify({ error: "Server not configured" }), { status: 500 });
    }

    const sgPayload = {
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: subject,
        },
      ],
      from: { email: FROM_EMAIL },
      reply_to: { email },
      content: [
        {
          type: "text/plain",
          value:
            `Name: ${name}\nEmail: ${email}\n\n${message}`,
        },
      ],
    };

    const sendResp = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sgPayload),
    });

    if (!sendResp.ok) {
      const text = await sendResp.text().catch(() => "");
      return new Response(JSON.stringify({ error: "Failed to send email", details: text }), { status: sendResp.status || 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message ?? "Unknown error" }), { status: 500 });
  }
}
