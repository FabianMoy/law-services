import type { Faq, IconName, Service } from "@/types";

// TODO: todo el contenido es FICTICIO y solo para demostración.
export const site = {
  name: "Vargas & Asociados",
  lawyer: "Lic. Daniel Vargas",
  url: "https://vargas-asociados.example",
  description: "Despacho jurídico ficticio en Monterrey: defensa legal con estrategia, claridad y experiencia. Sitio de demostración.",
  phone: "+52 81 5555 0198",
  email: "contacto@vargas-asociados.example",
  address: "Av. Ejemplo 123, Col. Demo, Monterrey, Nuevo León, México",
  hours: "Lunes a viernes, 9:00 – 18:00",
  social: [
    { label: "Facebook", href: "https://facebook.com/vargasasociados.example" },
    { label: "Instagram", href: "https://instagram.com/vargasasociados.example" },
    { label: "Twitter/X", href: "https://twitter.com/vargaslegal.example" },
  ],
};

export const nav = [
  { label: "Inicio", href: "#inicio" }, { label: "Servicios", href: "#servicios" },
  { label: "Sobre nosotros", href: "#nosotros" }, { label: "Proceso", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#faq" }, { label: "Contacto", href: "#contacto" },
];

export const services: Service[] = [
  { title: "Derecho corporativo", icon: "building", description: "Constitución de sociedades, contratos mercantiles y asesoría continua para empresas." },
  { title: "Derecho laboral", icon: "briefcase", description: "Representación de personas y empresas en relaciones y conflictos laborales." },
  { title: "Derecho civil", icon: "scroll", description: "Obligaciones, propiedad, sucesiones y controversias entre particulares." },
  { title: "Derecho familiar", icon: "home", description: "Acompañamiento sensible y claro en procesos familiares." },
  { title: "Contratos y asesoría", icon: "file", description: "Redacción y revisión de contratos para prevenir conflictos futuros." },
  { title: "Litigio y representación", icon: "shield", description: "Defensa activa ante autoridades y tribunales con estrategia definida." },
];

export const differentiators: { title: string; text: string; icon: IconName }[] = [
  { title: "Atención personalizada", text: "Cada caso recibe una estrategia adaptada a sus circunstancias.", icon: "user" },
  { title: "Comunicación clara", text: "Explicamos las implicaciones legales sin lenguaje innecesariamente complejo.", icon: "chat" },
  { title: "Estrategia", text: "Analizamos cada escenario antes de definir el camino a seguir.", icon: "compass" },
  { title: "Confidencialidad", text: "Tratamos la información de nuestros clientes con absoluta discreción.", icon: "lock" },
];

export const process = [
  { title: "Primera consulta", text: "Conocemos el problema y recopilamos información relevante." },
  { title: "Análisis", text: "Evaluamos las circunstancias y posibles alternativas." },
  { title: "Estrategia", text: "Definimos un plan de acción." },
  { title: "Representación", text: "Acompañamos al cliente durante la ejecución de la estrategia." },
];

// DEMO: testimonios completamente ficticios.
export const testimonials = [
  { quote: "La explicación fue clara desde el primer momento y siempre supimos qué estaba pasando con nuestro caso.", author: "Cliente Demo 1" },
  { quote: "Nos sentimos escuchados y con un plan concreto desde la primera reunión.", author: "Cliente Demo 2" },
  { quote: "Comunicación directa y sin tecnicismos innecesarios. Muy recomendable como ejemplo de servicio.", author: "Cliente Demo 3" },
];

export const faqs: Faq[] = [
  { question: "¿Cómo puedo agendar una consulta?", answer: "Puede usar el formulario de contacto, escribirnos por correo o llamar por teléfono. (Contenido demo)." },
  { question: "¿La primera consulta tiene costo?", answer: "En esta demo no se definen tarifas. En un despacho real, este texto se ajustaría a su política." },
  { question: "¿Qué documentos necesito llevar?", answer: "Identificación oficial y cualquier documento relacionado con su caso: contratos, notificaciones o correspondencia." },
  { question: "¿Atienden consultas empresariales?", answer: "Sí, el despacho contempla asesoría corporativa y contractual para empresas." },
  { question: "¿Puedo realizar una consulta de manera remota?", answer: "Sí, se pueden coordinar consultas por videollamada o teléfono." },
  { question: "¿Cuánto tarda un proceso legal?", answer: "Depende de la naturaleza del caso y de las autoridades involucradas. Tras el análisis inicial se comparte un panorama de tiempos." },
  { question: "¿Cómo puedo contactar al despacho?", answer: "Por teléfono, correo electrónico o el formulario de esta página." },
];
