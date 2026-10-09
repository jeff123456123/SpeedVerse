import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@IShowSpeed",
    icon: <FaYoutube />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ishowspeed/",
    icon: <FaInstagram />,
  },
  { label: "TikTok", href: "https://www.tiktok.com/@ishowspeed", icon: <FaTiktok /> },
  { label: "X", href: "https://x.com/ishowspeed", icon: <FaTwitter /> },
];

const initialForm = {
  name: "",
  email: "",
  country: "",
  favorite_speed_moment: "",
};

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/20 bg-black px-4 py-3 font-circular-web text-white placeholder:text-white/40 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/50";

const Join = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus("error");
      setFeedback("Enter a valid email address to join.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setFeedback("Signups are temporarily unavailable. Please try again later.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...form,
          email: form.email.trim(),
          subject: "New SPEEDVERSE signup",
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "We couldn’t submit your signup. Please try again."
        );
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("You’re in! Thanks for joining the Speed Squad.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We couldn’t submit your signup. Please try again."
      );
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 pb-20 pt-32 text-white">
      <p className="font-general text-sm uppercase text-red">You&apos;re invited</p>
      <h1 className="special-font mt-5 max-w-5xl text-center text-5xl font-black uppercase leading-[.9] sm:text-7xl md:text-9xl">
        Join the <span className="text-red">Speed Squad</span>
      </h1>
      <p className="mt-8 max-w-2xl text-center font-circular-web text-lg text-white/70 md:text-2xl">
        Catch every SIUUU, football challenge, wild reaction, and world tour
        moment. Follow IShowSpeed on his official channels and be part of the
        energy.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-2xl rounded-xl border border-white/15 bg-white/[.04] p-6 text-left sm:p-8"
        aria-busy={status === "loading"}
      >
        <h2 className="font-general text-2xl font-bold uppercase sm:text-3xl">
          Join the Speed Squad
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-name" className="font-general text-sm uppercase">
              Name <span className="text-red" aria-hidden="true">*</span>
            </label>
            <input
              id="signup-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="font-general text-sm uppercase">
              Email <span className="text-red" aria-hidden="true">*</span>
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-country" className="font-general text-sm uppercase">
              Country <span className="text-red" aria-hidden="true">*</span>
            </label>
            <input
              id="signup-country"
              name="country"
              type="text"
              autoComplete="country-name"
              required
              value={form.country}
              onChange={handleChange}
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="signup-moment" className="font-general text-sm uppercase">
              Favorite Speed moment{" "}
              <span className="text-red" aria-hidden="true">*</span>
            </label>
            <select
              id="signup-moment"
              name="favorite_speed_moment"
              required
              value={form.favorite_speed_moment}
              onChange={handleChange}
              className={fieldClassName}
            >
              <option value="" disabled>
                Choose a moment
              </option>
              <option value="SIUUU celebration">The SIUUU celebration</option>
              <option value="World tour">A world tour moment</option>
              <option value="Football and sports">Football and sports</option>
              <option value="Reactions">A classic reaction</option>
              <option value="Other">Another Speed moment</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-7 w-full rounded-full bg-red px-7 py-3 font-general text-sm uppercase text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Joining..." : "Join the Speed Squad"}
        </button>

        {feedback && (
          <p
            className={`mt-5 font-circular-web ${
              status === "success" ? "text-white" : "text-red"
            }`}
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {feedback}
          </p>
        )}
      </form>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-red px-6 py-3 font-general text-sm uppercase text-white transition-colors hover:bg-white hover:text-black"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Join;
