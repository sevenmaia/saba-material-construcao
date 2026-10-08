export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
  bioName?: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  logo: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const siteConfig = {
  companyName: "Sabá Material de Construção",
  tagline: "Tudo para sua obra, do poço artesiano ao acabamento.",
  foundationYear: 2010,
  experienceText: "Desde 2010 em Manaus",
  displayPhone: "(92) 99103-9337",
  whatsappNumber: "5592991039337",
  address: {
    street: "Av. Praia da Ponta Negra, Nº 15",
    neighborhood: "PQ. Solimões, Tarumã",
    city: "Manaus - AM",
    zipCode: "69041-410",
    full: "Av. Praia da Ponta Negra, Nº 15, PQ. Solimões, Tarumã, Manaus - AM, CEP 69041-410",
  },
  mapsUrl: "https://maps.google.com/?q=Av.+Praia+da+Ponta+Negra,+15,+Tarum%C3%A3,+Manaus+-+AM,+69041-410",
  instagramUrl: "https://www.instagram.com/sabamaterialdeconstrucao/",
  hours: {
    weekdays: "Segunda a Sábado: 07h às 18h",
    sunday: "Domingo: 08h às 12h",
  },
  branding: {
    logoBlack: "/assets/branding/logo-saba-preta.png",
    logoYellow: "/assets/branding/logo-saba-amarela.png",
  },
  realPhotos: {
    heroPortrait: "/assets/real/retrato-profissional-saba.png",
    storeFacade: "/assets/real/fachada-loja-saba.png",
  },
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Olá! Gostaria de solicitar um orçamento na Sabá Material de Construção.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export const lpCategories: Category[] = [
  {
    id: "poco-artesiano",
    name: "Poço Artesiano",
    description: "Tubos, bombas e acessórios para poço artesiano.",
    image: "/assets/categories/poco-artesiano.jpg",
    whatsappMessage: "Olá! Gostaria de consultar opções e orçamentos para materiais de poço artesiano.",
  },
  {
    id: "materiais-construcao",
    name: "Materiais de Construção",
    description: "Cimento, areia, brita, blocos, telhas e muito mais.",
    image: "/assets/categories/materiais-construcao.jpg",
    whatsappMessage: "Olá! Gostaria de um orçamento de materiais de construção (cimento, blocos, agregados).",
  },
  {
    id: "tintas",
    name: "Tintas e Acabamentos",
    description: "Linha completa Suvinil e marcas líderes para pintura.",
    image: "/assets/categories/tintas.jpg",
    whatsappMessage: "Olá! Gostaria de consultar tintas, complementos e acabamentos para minha obra.",
  },
  {
    id: "hidraulica",
    name: "Hidráulica",
    description: "Conexões, tubos, registros e acessórios hidráulicos.",
    image: "/assets/categories/hidraulica.jpg",
    whatsappMessage: "Olá! Gostaria de orçamento para materiais e conexões hidráulicas.",
  },
  {
    id: "eletrica",
    name: "Elétrica",
    description: "Fios, cabos, disjuntores e materiais elétricos seguros.",
    image: "/assets/categories/eletrica.jpg",
    whatsappMessage: "Olá! Gostaria de solicitar orçamento de cabos, disjuntores e materiais elétricos.",
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    description: "Ferramentas manuais e elétricas para seu projeto.",
    image: "/assets/categories/ferramentas.jpg",
    whatsappMessage: "Olá! Gostaria de saber os modelos e preços de ferramentas manuais e elétricas.",
  },
];

export const bioCategories: Category[] = [
  {
    id: "poco-artesiano",
    name: "Materiais de Poço Artesiano",
    description: "Bombas submersas, tubos e conexões.",
    image: "/assets/categories/poco-artesiano.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e gostaria de orçamento para poço artesiano.",
  },
  {
    id: "materiais-construcao",
    name: "Materiais de Construção",
    description: "Cimento, blocos, argamassas e tijolos.",
    image: "/assets/categories/materiais-construcao.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e quero solicitar orçamento de materiais de construção.",
  },
  {
    id: "tintas",
    name: "Tintas e Acabamentos",
    description: "Tintas para parede, seladores e rolos.",
    image: "/assets/categories/tintas.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e preciso de orçamento de tintas e acabamentos.",
  },
  {
    id: "hidraulica-eletrica",
    name: "Hidráulica e Elétrica",
    description: "Tubos, registros, cabos e disjuntores.",
    image: "/assets/categories/hidraulica.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e gostaria de orçamento para hidráulica e elétrica.",
  },
  {
    id: "ferramentas",
    name: "Ferramentas e Equipamentos",
    description: "Ferramentas elétricas e manuais para obra.",
    image: "/assets/categories/ferramentas.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e tenho interesse em ferramentas e equipamentos.",
  },
  {
    id: "telhas-estruturas",
    name: "Telhas e Estruturas",
    description: "Telhas, perfis metálicos e coberturas.",
    image: "/assets/categories/telhas-estruturas.jpg",
    whatsappMessage: "Olá! Vim pelo Instagram e quero cotação de telhas e materiais estruturais.",
  },
];

export const partnerBrands: PartnerBrand[] = [
  { id: "suvinil", name: "Suvinil", logo: "/assets/partners/suvinil.png" },
  { id: "tigre", name: "Tigre", logo: "/assets/partners/tigre.png" },
  { id: "lorenzetti", name: "Lorenzetti", logo: "/assets/partners/lorenzetti.png" },
  { id: "deca", name: "Deca", logo: "/assets/partners/deca.png" },
  { id: "bosch", name: "Bosch", logo: "/assets/partners/bosch.png" },
  { id: "fortlev", name: "Fortlev", logo: "/assets/partners/fortlev.png" },
  { id: "ilumi", name: "Ilumi", logo: "/assets/partners/ilumi.png" },
  { id: "emar", name: "Emar Bombas", logo: "/assets/partners/emar.png" },
  { id: "ebara", name: "Ebara", logo: "/assets/partners/ebara.png" },
];

export const differentials: Differential[] = [
  {
    id: "atendimento",
    title: "Atendimento especializado",
    description: "Nossa equipe está pronta para orientar e indicar a melhor solução para sua necessidade.",
    iconName: "UsersRound",
  },
  {
    id: "marcas",
    title: "Marcas reconhecidas",
    description: "Trabalhamos com as principais marcas do mercado: Suvinil, Tigre, Lorenzetti, Bosch, Fortlev, Deca, Ilumi, Emar e Ebara.",
    iconName: "BadgeCheck",
  },
  {
    id: "entrega",
    title: "Entrega e agilidade",
    description: "Agilidade no atendimento e suporte consultivo via WhatsApp para facilitar seu pedido com rapidez.",
    iconName: "Truck",
  },
  {
    id: "historia",
    title: "Desde 2010 em Manaus",
    description: "Mais de uma década de dedicação, fornecendo materiais de qualidade e confiança comprovada para a sua obra.",
    iconName: "CalendarDays",
  },
];
