// Configuração central — troque aqui o número, o endereço e as mensagens.
export const WHATSAPP_NUMBER = "5561999999999"; // TODO: número real (DDI + DDD + número)

export function whatsappLink(message = "Olá! Vim pelo site e quero falar com um contador da Efycaz.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// TODO: confirmar com o escritório (endereço tirado do cadastro público da empresa)
export const ADDRESS = {
  street: "Quadra 6, Lote 18, Salas 104 e 105",
  district: "Jardim Brasília",
  city: "Águas Lindas de Goiás",
  state: "GO",
};

export const ADDRESS_LINE = `${ADDRESS.street} - ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}`;

// Busca do mapa sem o número das salas (o Google localiza melhor pelo lote)
const MAPS_QUERY = `Quadra 6 Lote 18, ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;

export const EMAIL = "efycaz.contabil@gmail.com";
export const PHONE_DISPLAY = "(61) 3613-8796";
export const PHONE_TEL = "+556136138796";

// TODO: confirmar com o escritório. Se mudar, atualize também "openingHours" no JSON-LD do index.html
export const HOURS = "Segunda a sexta, das 8h às 18h";

// Ano de abertura do CNPJ (cadastro público). TODO: confirmar
export const FOUNDED_YEAR = 2016;

// Abre a tela de "Escrever" do Gmail já com o destinatário e o assunto preenchidos
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Contato pelo site")}`;
