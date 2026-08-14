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
    // Casca de 1px com degrade dourado: o fio nasce forte no topo e some no pe,
    // como luz batendo na quina. E o detalhe que separa "preto chapado" de acabamento.
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className="animate-fade-in-up group relative block rounded-[27px] sm:rounded-[33px] p-px bg-gradient-to-b from-[#CF9D2F]/55 via-[#CF9D2F]/12 to-[#CF9D2F]/[0.03] shadow-[0_18px_50px_-12px_rgba(0,0,0,0.55),0_2px_10px_rgba(0,0,0,0.25)] hover:-translate-y-[3px] hover:shadow-[0_30px_70px_-14px_rgba(0,0,0,0.6),0_0_40px_-10px_rgba(207,157,47,0.35)] transition-[transform,box-shadow] duration-500 ease-out"
    >
      <div
        className={`grain relative flex flex-col overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[#000000] ${
          // Sem arte, a altura reservada viraria um vazio preto — o card acompanha o texto.
          link.image ? "min-h-[440px] sm:min-h-[620px]" : ""
        }`}
      >
        {/* Luz quente entrando pelo alto a esquerda — tira o preto da chapa morta */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_75%_at_12%_-10%,rgba(207,157,47,0.17),transparent_58%)]"
        />
        {/* Reflexo interno no fio de cima, meio pixel de brilho */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CF9D2F]/45 to-transparent"
        />

        {/* Bloco tipográfico */}
        <div className="relative z-10 flex flex-1 flex-col px-7 pt-7 pb-4 sm:px-14 sm:pt-16 sm:pb-7">
          {/* Fio de abertura: com eyebrow vira rotulo, sem ele fica so o traco editorial */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-7 sm:w-10 bg-gradient-to-r from-[#CF9D2F] to-[#CF9D2F]/30" />
            {link.eyebrow && (
              <span className="font-body font-medium text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.32em] text-[#CF9D2F]">
                {link.eyebrow}
              </span>
            )}
          </div>

          <h2 className="mt-4 sm:mt-6 max-w-[92%] sm:max-w-[84%] font-heading font-bold text-[#FFFFFF] text-[1.32rem] sm:text-[2.5rem] leading-[1.18] sm:leading-[1.12] tracking-[-0.022em] text-balance">
            {link.title}
            {link.titleAccent && (
              <>
                {" "}
                {/* Sora nao tem italico real — o destaque fica por conta da cor principal */}
                <em className="not-italic bg-gradient-to-br from-[#E8C46A] via-[#CF9D2F] to-[#A87C1C] bg-clip-text text-transparent">
                  {link.titleAccent}
                </em>
              </>
            )}
          </h2>

          {link.description && (
            <p className="mt-3.5 sm:mt-5 max-w-[92%] sm:max-w-[70%] font-body text-[0.88rem] sm:text-[1.05rem] leading-[1.6] text-[#FFFFFF]/60">
              {link.description}
            </p>
          )}

          <div className="mt-6 sm:mt-auto sm:pt-8">
            <span className="relative inline-flex items-center gap-2.5 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-b from-[#E0B655] to-[#CF9D2F] px-5 py-2.5 sm:px-7 sm:py-3 font-body font-semibold text-[0.55rem] sm:text-[0.68rem] uppercase tracking-[0.16em] sm:tracking-[0.19em] text-[#000000] shadow-[0_10px_28px_-10px_rgba(207,157,47,0.75),inset_0_1px_0_rgba(255,255,255,0.35)] transition-[color,transform,box-shadow] duration-300 ease-out group-hover:text-[#FFFFFF] group-hover:delay-100 group-hover:shadow-[0_14px_36px_-10px_rgba(207,157,47,0.55)] group-active:scale-[0.97]">
              {/* Tinta que sobe e inverte o botão */}
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-[#0A0A0A] transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
              />
              {/* Fio dourado que aparece quando a tinta preenche */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#CF9D2F]/0 transition-[--tw-ring-color] duration-500 group-hover:ring-[#CF9D2F]/60"
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
        {link.image && (
          <div className="relative h-[180px] sm:h-[260px] w-full shrink-0 overflow-hidden">
            <Image
              src={link.image}
              alt=""
              fill
              className={`${
                link.imageFit === "contain"
                  ? "object-contain object-bottom"
                  : "object-cover object-center"
              } scale-100 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
              style={
                link.imagePosition
                  ? { objectPosition: link.imagePosition }
                  : undefined
              }
              sizes="(max-width: 640px) 100vw, 576px"
            />
            {/* A foto emerge do card em vez de ser colada: sombra curta descendo do corte */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-black/80 via-black/25 to-transparent"
            />
            {/* Fio dourado no corte */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CF9D2F]/50 to-transparent"
            />
            {/* Vinheta lateral: fecha as bordas e centra o olho nos rostos */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_45%,rgba(0,0,0,0.4)_100%)]"
            />
          </div>
        )}
      </div>
    </a>
  );
}
