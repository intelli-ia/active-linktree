export const PROFESSIONAL_NAME = "Active Pilates";
export const PROFESSIONAL_TITLE =
  "Formação em Pilates Clássico, 3ª Geração do Método.";
/** Prova social — o numero sai destacado do restante da frase. */
export const PROFESSIONAL_PROOF_HIGHLIGHT = "+3 mil";
export const PROFESSIONAL_PROOF_REST = "instrutores formados desde 2004";
/** Chamada que aponta para o bloco logo abaixo. */
export const PROFESSIONAL_NUDGE = "Garanta sua vaga:";

export type LinkItem = {
  id: string;
  /** Aceita \n para quebra manual e U+00A0 (espaco rigido) para impedir uma quebra. */
  title: string;
  /** Só no destaque: linha de apoio abaixo do título. */
  description?: string;
  cta: string;
  href: string;
  /** Deixe ausente enquanto a imagem não existir — o card reserva o espaço. */
  image?: string;
  imageFit?: "cover" | "contain";
  /** Ponto focal do recorte, ex. "50% 20%" para manter o rosto no enquadramento. */
  imagePosition?: string;
  /** Renderiza o bloco no layout editorial de destaque. */
  featured?: boolean;
  /** Só no destaque: linha fina em caixa alta acima do título. */
  eyebrow?: string;
  /** Só no destaque: trecho final do título, em itálico. */
  titleAccent?: string;
  /** Reduz o botão apenas no mobile — para CTAs longos em coluna estreita. */
  compactCta?: boolean;
};

export const LINKS: LinkItem[] = [
  {
    id: "whatsapp",
    featured: true,
    title: "Entre em contato pelo nosso",
    titleAccent: "WhatsApp",
    description: "Tire suas dúvidas e fale diretamente com nossa equipe.",
    cta: "Fale conosco",
    image: "/nossa-equipe.png",
    // Foto mais "alta" que a faixa (1.52 contra ~2.2), entao sobra corte na vertical.
    // Esta versao ja vem enquadrada fechada: qualquer Y acima de 0 come o cabelo da
    // terceira. Ancorado no topo, o corte sai por baixo.
    imagePosition: "50% 0%",
    href: "https://shre.ink/GzjC",
  },
];
