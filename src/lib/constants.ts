export const PROFESSIONAL_NAME = "Patricia Souza";
export const PROFESSIONAL_TITLE = "Psicoterapeuta e Mentora de Negócios";
export const PROFESSIONAL_BIO = "";

export type LinkItem = {
  id: string;
  /** Aceita \n para quebra manual e U+00A0 (espaco rigido) para impedir uma quebra. */
  title: string;
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
    id: "sessao-gratuita",
    featured: true,
    eyebrow: "Sessão Gratuita",
    title: "O passo a passo para alinhar sua mente e posicionar seu",
    titleAccent: "negócio premium",
    cta: "Agendar minha sessão",
    image: "/sessao-gratuita.webp",
    // Retrato vertical numa faixa larga. Y menor = janela sobe na foto = imagem desce no recorte
    imagePosition: "50% 10%",
    href: "https://form.respondi.app/wEcBq4qa",
  },
  {
    id: "mentoria",
    title: "Lista de espera Mentoria",
    cta: "Entrar na Lista",
    image: "/mentoria.webp",
    href: "https://docs.google.com/forms/d/1O33hQfuDJmEzxoKdqgcQ4QRV-mMEMY-Hg6c1LOAosZA/edit",
  },
  {
    id: "sementes",
    title: "Conheça o Sementes da Prosperidade",
    cta: "Fazer Parte",
    image: "/sementes.png",
    imageFit: "contain",
    href: "https://sun.eduzz.com/G96V21JQ01",
  },
  {
    id: "palestras",
    title: "Contato para Palestras e Treinamentos",
    cta: "Falar no WhatsApp",
    compactCta: true,
    image: "/palestras.webp",
    href: "https://api.whatsapp.com/send?phone=557188461603&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20palestras%20e%20treinamentos.%20Como%20posso%20obter%20mais%20informa%C3%A7%C3%B5es%3F",
  },
  {
    id: "atendimento",
    // Atencao: ha um U+00A0 invisivel entre "Imersao" e "Chaves" que os mantem juntos
    title: "Lista de\nespera Imersão Chaves",
    cta: "Conheça",
    image: "/atendimento.png",
    href: "https://forms.gle/5KZgnTbRsufWJvnb7",
  },
  {
    id: "imersao",
    title: "Sessão Terapêutica",
    cta: "Agendar",
    image: "/sessao-terapeutica.webp",
    // Mensagem pre-preenchida: "Ola! Tenho interesse em agendar uma sessao terapeutica. Como posso obter mais informacoes?"
    href: "https://api.whatsapp.com/send?phone=557188461603&text=Ol%C3%A1!%20Tenho%20interesse%20em%20agendar%20uma%20sess%C3%A3o%20terap%C3%AAutica.%20Como%20posso%20obter%20mais%20informa%C3%A7%C3%B5es%3F",
  },
];
