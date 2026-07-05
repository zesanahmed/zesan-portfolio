import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/contact";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="section-pad bg-navy text-paper">
      <div className="content-max">
        <div className="mb-14">
          <p className="font-mono text-sm text-bronze mb-2 tracking-wide">
            04 — Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's build something together
          </h2>
          <div className="h-1 w-16 bg-bronze rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-paper/75 text-base sm:text-lg leading-relaxed max-w-md">
            Whether it's a full-time role, a freelance project, or just a
            technical conversation — I usually reply within a day. Email is
            the most reliable way to reach me.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded-lg border border-paper/15 bg-paper/5 px-5 py-4 hover:bg-paper/10 transition-colors"
            >
              <HiOutlineMail className="text-2xl text-bronze shrink-0" />
              <div>
                <p className="font-mono text-xs text-paper/60 uppercase tracking-wide">
                  Email
                </p>
                <p className="font-medium">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phoneNumber.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 rounded-lg border border-paper/15 bg-paper/5 px-5 py-4 hover:bg-paper/10 transition-colors"
            >
              <HiOutlinePhone className="text-2xl text-bronze shrink-0" />
              <div>
                <p className="font-mono text-xs text-paper/60 uppercase tracking-wide">
                  Phone
                </p>
                <p className="font-medium">{contactInfo.phoneNumber}</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-paper/15 bg-paper/5 px-5 py-4 hover:bg-paper/10 transition-colors"
            >
              <FaWhatsapp className="text-2xl text-bronze shrink-0" />
              <div>
                <p className="font-mono text-xs text-paper/60 uppercase tracking-wide">
                  WhatsApp
                </p>
                <p className="font-medium">Message me directly</p>
              </div>
            </a>

            <div className="pt-2">
              <SocialLinks variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
