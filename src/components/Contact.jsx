import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

     emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {

      setLoading(false);

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    })
    .catch(() => {

      setLoading(false);
      setStatus("error");

    });
  };

  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
            Let’s Work Together
          </h2>

          <p className="text-center text-gray-400 mb-10">
            Have a project idea or freelance opportunity?
            Send me a message.
          </p>

          <form
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#0b1220] border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#0b1220] border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-[#0b1220] border border-gray-700 focus:border-cyan-400 outline-none"
            ></textarea>

            {/* Status Messages */}
            {status === "success" && (
              <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-xl">
                ✅ Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-xl">
                ❌ Failed to send message.
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition duration-300 flex items-center justify-center"
            >

              {loading ? (
                <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;