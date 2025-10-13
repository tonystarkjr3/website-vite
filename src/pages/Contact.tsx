import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const validate = (values: FormState) => {
    const e: Partial<FormState> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!values.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email";
    if (!values.subject.trim()) e.subject = "Please enter a subject";
    if (!values.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const sendContact = async (values: FormState) => {
    const endpoint = "/api/contact";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => res.statusText);
      throw new Error(text || "Request failed");
    }
    return res;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    const validation = validate(form);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setStatus("sending");

    try {
      await sendContact(form);
      setStatus("sent");
      setFeedback("Message sent successfully. Thank you!");
      setForm(initialState);
    } catch (err: any) {
      setStatus("error");
      setFeedback(typeof err === "string" ? err : err?.message ?? "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-4">Get in touch!</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Shoot me a message below if you have any questions or ideas you want to share.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`px-3 py-2 rounded-md border focus:ring-2 focus:ring-sky-200 focus:border-sky-500 ${
                errors.name ? "border-red-400" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="Your name"
            />
            {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`px-3 py-2 rounded-md border focus:ring-2 focus:ring-sky-200 focus:border-sky-500 ${
                errors.email ? "border-red-400" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="you@example.com"
              type="email"
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email}</span>}
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Subject</span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-sky-200 focus:border-sky-500 ${
              errors.subject ? "border-red-400" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            placeholder="Topic or short summary"
          />
          {errors.subject && <span className="text-sm text-red-500 mt-1">{errors.subject}</span>}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-sky-200 focus:border-sky-500 resize-vertical ${
              errors.message ? "border-red-400" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
            placeholder="Write your message..."
          />
          {errors.message && <span className="text-sm text-red-500 mt-1">{errors.message}</span>}
        </label>

        <div className="flex items-center justify-between">
          <div>
            {status === "sent" && <span className="text-sm text-green-600">{feedback}</span>}
            {status === "sending" && <span className="text-sm text-gray-700 dark:text-gray-300">Sending message...</span>}
            {status === "error" && <span className="text-sm text-red-600">{feedback}</span>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 disabled:opacity-60"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );

};

export default Contact;
