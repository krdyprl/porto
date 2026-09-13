"use client";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { LuLink } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import SplitHeading from "../SplitHeading";
import { contacts } from "@/data/portfolio";

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  email: SiGmail,
};

export default function Contact() {
  const { t, lang } = useLanguage();
  return (
    <section id="contact" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.contact.title}
      </SplitHeading>
      <p className="opacity-70 mb-8 max-w-xl">{t.contact.subtitle}</p>
      <div className="flex flex-col gap-2 max-w-md">
        {contacts.map((c) => {
          const Icon = ICONS[c.key] || LuLink;
          return (
            <a
              key={c.key}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-black/5 dark:border-white/10 px-4 py-3 hover:border-black/20 dark:hover:border-white/25 transition-colors"
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-sm">{c.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
