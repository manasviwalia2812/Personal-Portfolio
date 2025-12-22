import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import meIllustration from "../assets/contactme.jpg";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2jm4u0u",        
        "template_0jzxepk",    
        formRef.current,
        "T76NSBdLm09PkD4Jr"        
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="border-t border-neutral-900 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-4xl lg:text-5xl font-semibold tracking-wide"
        >
          Reach out to <span className="text-purple-400">me</span> ✨
        </motion.h2>

        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-[35%_65%] items-start">

          {/* LEFT — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-start"
          >
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-purple-500/60 to-pink-500/40">
              <div className="rounded-3xl bg-neutral-900">
                <img
                  src={meIllustration}
                  alt="Illustration of me"
                  className="w-72 h-[320px] object-cover rounded-3xl border border-neutral-800"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md px-10 py-6 w-full max-w-3xl"
          >
            {/* Info */}
            <div className="mb-6 space-y-3 text-neutral-300">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                <span>{CONTACT.email}</span>
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>{CONTACT.address}</span>
              </p>
            </div>

            {/* Success Message */}
            {sent && (
              <p className="mb-4 text-sm text-green-400">
                ✅ Message sent successfully. Check your inbox!
              </p>
            )}

            {/* Email Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"           // ✅ matches {{name}}
                placeholder="Your name"
                required
                className="w-full bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-purple-400 transition"
              />

              <input
                type="email"
                name="email"          // ✅ matches {{email}}
                placeholder="Your email"
                required
                className="w-full bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-purple-400 transition"
              />

              <textarea
                name="message"        // ✅ matches {{message}}
                placeholder="Your message"
                rows="2"
                required
                className="w-full bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-purple-400 transition resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  mt-2 inline-flex items-center justify-center
                  rounded-full bg-purple-600
                  px-7 py-2.5 text-white
                  hover:bg-purple-700
                  transition
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send message ✉️"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
