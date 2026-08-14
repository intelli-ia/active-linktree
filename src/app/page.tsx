import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FeaturedLinkCard } from "@/components/FeaturedLinkCard";
import { LINKS, PROFESSIONAL_NAME, PROFESSIONAL_TITLE, PROFESSIONAL_BIO } from "@/lib/constants";

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-6 pb-12">
      {/* Profile */}
      <section className="animate-fade-in-up flex flex-col items-center gap-2 mb-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-[3px] ring-[#90C3A4] ring-offset-[4px] ring-offset-[#F5EFE2] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <Image
            src="/profile.jpg"
            alt={PROFESSIONAL_NAME}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center mt-1">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#1E1E1E] tracking-wide">
            {PROFESSIONAL_NAME}
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#90C3A4]" />
          {PROFESSIONAL_TITLE && (
            <p className="font-body text-lg text-[#4E7C61] mt-3">
              {PROFESSIONAL_TITLE}
            </p>
          )}
          {PROFESSIONAL_BIO && (
            <p className="font-body text-lg text-[#6B675F] mt-0.5">
              {PROFESSIONAL_BIO}
            </p>
          )}
        </div>
      </section>

      {/* Link blocks */}
      <section className="w-full max-w-xl flex flex-col gap-6">
        {LINKS.map((link, index) =>
          link.featured ? (
            <FeaturedLinkCard
              key={link.id}
              link={link}
              style={{ animationDelay: `${index * 90}ms` }}
            />
          ) : (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${index * 90}ms` }}
            className="animate-fade-in-up group relative flex items-center rounded-[28px] overflow-hidden bg-[#1E1E1E] ring-1 ring-[#90C3A4]/20 min-h-[170px] sm:min-h-[250px] shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:ring-[#90C3A4]/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out"
          >
            {/* Sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

            {/* Image – right side (vazio enquanto não houver imagem) */}
            <div className="absolute right-0 inset-y-0 w-1/2 overflow-hidden">
              {link.image ? (
                <>
                  <Image
                    src={link.image}
                    alt=""
                    fill
                    className={`${
                      link.imageFit === "contain"
                        ? "object-contain object-bottom p-1.5 translate-y-3"
                        : "object-cover object-top"
                    } scale-100 group-hover:scale-105 transition-transform duration-700 ease-out`}
                    style={
                      link.imagePosition
                        ? { objectPosition: link.imagePosition }
                        : undefined
                    }
                    sizes="(max-width: 448px) 50vw, 224px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/10 to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-white/[0.03]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/10 to-transparent" />
                </>
              )}
            </div>

            {/* Text – left side */}
            <div className="relative z-10 px-8 py-8 w-[58%] flex flex-col gap-2">
              <h2 className="font-heading font-bold text-[#F5F3EF] text-[1.02rem] sm:text-[1.85rem] leading-[1.15] sm:leading-[1.12] tracking-wide whitespace-pre-line">
                {link.title}
              </h2>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center ${
                    link.compactCta
                      ? "gap-1 text-[0.53rem] pl-2.5"
                      : "gap-1.5 text-[0.62rem] pl-3"
                  } sm:gap-2.5 sm:text-[0.92rem] sm:pl-5 bg-gradient-to-r from-[#A8D4B8] to-[#7FB094] text-[#1E1E1E] font-body font-semibold rounded-lg sm:rounded-xl pr-0.5 py-0.5 sm:pr-1 sm:py-1 shadow-[0_8px_22px_rgba(144,195,164,0.25)] ring-1 ring-white/15 transition-all duration-300 group-hover:shadow-[0_10px_28px_rgba(144,195,164,0.4)] group-hover:brightness-105`}
                >
                  {link.cta}
                  <span
                    className={`flex items-center justify-center ${
                      link.compactCta ? "w-4 h-4" : "w-[18px] h-[18px]"
                    } sm:w-7 sm:h-7 rounded-full bg-[#1E1E1E]/15 shrink-0 transition-all duration-300 group-hover:bg-[#1E1E1E]/25 group-hover:translate-x-0.5`}
                  >
                    <ArrowRight
                      className={`${
                        link.compactCta ? "w-2 h-2" : "w-2.5 h-2.5"
                      } sm:w-[15px] sm:h-[15px]`}
                    />
                  </span>
                </span>
              </div>
            </div>
          </a>
          )
        )}
      </section>

      {/* Footer */}
      <footer className="mt-14 flex flex-col items-center gap-3 text-center">
        <div className="h-px w-16 bg-[#1E1E1E]/10" />
        <p className="font-body text-xs tracking-wide text-[#9C978C]">
          © {new Date().getFullYear()} {PROFESSIONAL_NAME}
        </p>
      </footer>
    </main>
  );
}
