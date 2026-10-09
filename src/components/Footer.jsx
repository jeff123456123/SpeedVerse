import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/ishowspeed/", icon: <FaInstagram /> },
  { href: "https://x.com/ishowspeed", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@IShowSpeed", icon: <FaYoutube /> },
  { href: "https://www.tiktok.com/@ishowspeed", icon: <FaTiktok /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-red py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © SPEEDVERSE. Unofficial fan site.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-black"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          About this fan site
        </a>
      </div>
    </footer>
  );
};

export default Footer;
