import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FeaturedLinkCard } from "@/components/FeaturedLinkCard";
import {
  LINKS,
  PROFESSIONAL_NAME,
  PROFESSIONAL_TITLE,
  PROFESSIONAL_PROOF_HIGHLIGHT,
  PROFESSIONAL_PROOF_REST,
  PROFESSIONAL_NUDGE,
} from "@/lib/constants";

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-6 pb-12">
      {/* Profile */}
      <section className="animate-fade-in-up flex flex-col items-center gap-2 mb-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-[3px] ring-[#CF9D2F] ring-offset-[4px] ring-offset-[#FFFFFF] overflow-hidden bg-[#FFFFFF] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <Image
            src="/active-pilates.png"
            alt={PROFESSIONAL_NAME}
            fill
            /* Logo, nao retrato: contain para nao cortar o lettering nas bordas do circulo.
               O PNG ja tem fundo branco puro, entao ele funde com o circulo. */
            className="object-contain p-1"
            sizes="128px"
            priority
          />
        </div>
        <div className="text-center mt-1">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#CF9D2F] tracking-wide">
            {PROFESSIONAL_NAME}
          </h1>
          <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-[#CF9D2F]" />
          {/* Credencial — a linha que carrega a autoridade da marca */}
          <p className="font-body text-[1.02rem] sm:text-[1.15rem] leading-snug text-[#000000] mt-4 max-w-[21rem] sm:max-w-[26rem] mx-auto text-balance">
            {PROFESSIONAL_TITLE}
          </p>

          {/* Prova social num selo de fio dourado */}
          <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#CF9D2F]/45 bg-[#CF9D2F]/[0.06] px-4 py-1.5 font-body text-[0.72rem] sm:text-[0.8rem] tracking-[0.02em] text-[#000000]">
            <span className="font-semibold text-[#CF9D2F]">
              {PROFESSIONAL_PROOF_HIGHLIGHT}
            </span>
            {PROFESSIONAL_PROOF_REST}
          </p>

          {/* Empurra o olho para o bloco logo abaixo */}
          <p className="mt-5 flex items-center justify-center gap-1.5 font-body font-semibold text-[0.88rem] sm:text-[0.95rem] tracking-[0.03em] text-[#000000]">
            <span aria-hidden="true" className="animate-nudge-down">
              ⬇️
            </span>
            {PROFESSIONAL_NUDGE}
          </p>
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
            className="animate-fade-in-up group relative flex items-center rounded-[28px] overflow-hidden bg-[#000000] ring-1 ring-[#CF9D2F]/25 min-h-[170px] sm:min-h-[250px] shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:ring-[#CF9D2F]/50 hover:shadow-[0_16px_45px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/10 to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-white/[0.03]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/10 to-transparent" />
                </>
              )}
            </div>

            {/* Text – left side */}
            <div className="relative z-10 px-8 py-8 w-[58%] flex flex-col gap-2">
              <h2 className="font-heading font-bold text-[#FFFFFF] text-[1.02rem] sm:text-[1.85rem] leading-[1.15] sm:leading-[1.12] tracking-wide whitespace-pre-line">
                {link.title}
              </h2>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center ${
                    link.compactCta
                      ? "gap-1 text-[0.53rem] pl-2.5"
                      : "gap-1.5 text-[0.62rem] pl-3"
                  } sm:gap-2.5 sm:text-[0.92rem] sm:pl-5 bg-gradient-to-r from-[#E0B655] to-[#CF9D2F] text-[#000000] font-body font-semibold rounded-lg sm:rounded-xl pr-0.5 py-0.5 sm:pr-1 sm:py-1 shadow-[0_8px_22px_rgba(207,157,47,0.25)] ring-1 ring-white/15 transition-all duration-300 group-hover:shadow-[0_10px_28px_rgba(207,157,47,0.4)] group-hover:brightness-105`}
                >
                  {link.cta}
                  <span
                    className={`flex items-center justify-center ${
                      link.compactCta ? "w-4 h-4" : "w-[18px] h-[18px]"
                    } sm:w-7 sm:h-7 rounded-full bg-[#000000]/15 shrink-0 transition-all duration-300 group-hover:bg-[#000000]/25 group-hover:translate-x-0.5`}
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
        <div className="h-px w-16 bg-[#000000]/15" />
        <p className="font-body text-xs tracking-wide text-[#000000]">
          © {new Date().getFullYear()} {PROFESSIONAL_NAME}
        </p>
      </footer>
    </main>
  );
}
