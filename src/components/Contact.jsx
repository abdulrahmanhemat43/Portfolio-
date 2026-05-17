import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (status) setStatus("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-5 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_38%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase text-cyan-200">
            Contact
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Let's build something professional together.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            Have a project idea, freelance opportunity, or system you want to
            build? Send me a message and I will get back to you.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Ready to collaborate?
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I am available for web applications, database systems, desktop
              software, and information system projects.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-cyan-300">Project Work</p>
                <p className="mt-1 text-sm text-gray-400">
                  Web apps, management systems, and dashboards.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-emerald-300">
                  System Solutions
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Databases, analysis, reporting, and automation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            onSubmit={sendEmail}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-8"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">
                  Name
                </span>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 transition focus-within:border-cyan-300">
                  <User size={18} className="text-cyan-300" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-600"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">
                  Email
                </span>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 transition focus-within:border-cyan-300">
                  <Mail size={18} className="text-cyan-300" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-600"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">
                  Message
                </span>
                <div className="flex gap-3 rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 transition focus-within:border-cyan-300">
                  <MessageSquare
                    size={18}
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <textarea
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full resize-none bg-transparent text-white outline-none placeholder:text-gray-600"
                  />
                </div>
              </label>
            </div>

            <div aria-live="polite" className="mt-5">
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm font-medium text-emerald-300">
                  <CheckCircle2 size={18} />
                  Message sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-lg border border-red-400/30 bg-red-400/10 p-4 text-sm font-medium text-red-300">
                  <AlertCircle size={18} />
                  Failed to send message. Please try again.
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-4 font-bold text-neutral-950 transition hover:-translate-y-1 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;