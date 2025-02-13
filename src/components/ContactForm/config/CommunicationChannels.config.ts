const communicationChannelsConfig = [
  {
    name_channel: "Correo de soporte",
    description: "Nos comunicaremos en un plazo máximo de 24 horas.",
    name_link: "contacto@forjandi.com",
    link: "mailto:contacto@forjandi.com",
    active: true,
    show: true
  },
  {
    name_channel: "WhatsApp",
    description: "Estaremos encantados de atenderte.",
    name_link: "+51 9xxxxxxxxx",
    link: "tel:+51988652374",
    active: true,
    show: false
  },
  {
    name_channel: "Chat support",
    description: "Chatee con nuestro soporte de chat, disponible 24/7.",
    name_link: "Empezar a chatear",
    link: "#show-chat",
    active: false,
    show: true
  },
];

export default communicationChannelsConfig;
