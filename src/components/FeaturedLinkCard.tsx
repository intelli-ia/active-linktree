import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { LinkItem } from "@/lib/constants";

export function FeaturedLinkCard({
  link,
  style,
}: {
  link: LinkItem;
  style?: CSSProperties;
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className="animate-fade-in-up grain group relative flex flex-col overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[#24382D] min-h-[440px] sm:min-h-[620px] shadow-[0_16px_44px_rgba(0,0,0,0.28)] ring-1 ring-[#90C3A4]/15 hover:-translate-y-[3px] hover:shadow-[0_22px_56px_rgba(0,0,0,0.34)] transition-[transform,box-shadow] duration-500 ease-out"
    >
      {/* Bloco tipográfico */}
      <div className="relative z-10 flex flex-1 flex-col px-7 pt-7 pb-4 sm:px-14 sm:pt-16 sm:pb-7">
        {link.eyebrow && (
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-7 sm:w-10 bg-[#90C3A4]" />
            <span className="font-body font-medium text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.32em] text-[#90C3A4]">
              {link.eyebrow}
            </span>
          </div>
        )}

        <h2 className="mt-3 sm:mt-5 max-w-[92%] sm:max-w-[84%] font-heading font-normal text-[#F5EFE2] text-[1.32rem] sm:text-[2.5rem] leading-[1.18] sm:leading-[1.14] tracking-[-0.015em]">
          {link.title}
          {link.titleAccent && (
            <>
              {" "}
              <em className="italic text-[#A8D4B8]">{link.titleAccent}</em>
            </>
          )}
        </h2>

        <div className="mt-4 sm:mt-auto sm:pt-6">
          <span className="relative mt-3.5 sm:mt-5 inline-flex items-center gap-2 sm:gap-2.5 overflow-hidden rounded-full bg-[#F5EFE2] px-4 py-2 sm:px-6 sm:py-2.5 ring-1 ring-[#F5EFE2] font-body font-semibold text-[0.5rem] sm:text-[0.64rem] uppercase tracking-[0.13em] sm:tracking-[0.16em] text-[#24382D] transition-[color,transform] duration-300 ease-out group-hover:text-[#F5EFE2] group-hover:delay-100 group-active:scale-[0.97]">
            {/* Tinta que sobe e inverte o botão */}
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom scale-y-0 bg-[#16241C] transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
            />
            <span className="relative">{link.cta}</span>
            {/* Seta em fenda: a atual sai pela direita, a próxima entra pela esquerda */}
            <span className="relative w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-full h-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[190%]" />
              <ArrowRight className="absolute inset-0 w-full h-full -translate-x-[190%] transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0" />
            </span>
          </span>
        </div>
      </div>

      {/* Arte — faixa inferior sangrando de ponta a ponta.
          A altura é explícita (nunca herdada), que é o que o `fill` do next/image exige. */}
      <div className="relative h-[180px] sm:h-[260px] w-full shrink-0 overflow-hidden border-t border-[#F5EFE2]/10">
        {link.image ? (
          <Image
            src={link.image}
            alt=""
            fill
            className={
              link.imageFit === "contain"
                ? "object-contain object-bottom"
                : "object-cover object-center"
            }
            style={
              link.imagePosition
                ? { objectPosition: link.imagePosition }
                : undefined
            }
            sizes="(max-width: 640px) 100vw, 576px"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1F3127]" />
        )}
      </div>
    </a>
  );
}
