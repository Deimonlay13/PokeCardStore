// mock/noticias.mock.ts
import type { Noticia } from "../interface/noticia.interface";

export const mockNoticias: Noticia[] = [
    {
        id: 1,
        fecha:"24 oct 2025",
        url:"https://pokemongo.com/es/news/dia-de-muertos-2025",
        titulo: "¡Descubre tu espiritu de Día de Muertos en 2025",
        descripcion: "¡Nos emociona anunciar que la celebración del Día de Muertos en Pokémon GO está de regreso como parte del evento de Halloween 2025: Parte II en América Latina! Este año se unirán rostros familiares a la celebración, junto con algunos Pokémon nuevos que han comenzado a aparecer recientemente en estado salvaje.",
        imagen: "https://lh3.googleusercontent.com/Nz8hEoRDkiU-Ki-tgz03HCEviCpsxgMueOUPBd-_Q20ksqp3LClv8UMOb1DhnYc9GHjXePC1T2P3lkoLFfIhEwyjis5FYm0T9y9s=e365-pa-nu-w675-rw",
        enlace: "https://www.pokemon.com/es/pokemon-video-games/",
    },
    {
        id: 2,
        fecha: "20 oct 2025",
        url: "https://pokemongo.com/es/news/enchanted-hollow-2025",
        titulo: "Evento especial en Pokémon GO",
        descripcion: "Encuentros salvajes ¡Os podríais encontrar Pokémon salvajes con la temática del evento, como Paras *, Stantler *, Nickit y más! ¡Incluso os podríais encontrar a Tarountula! Con un poco de suerte, ¡os podréis encontrar uno variocolor.",
        imagen: "https://lh3.googleusercontent.com/41O9iJfGMPf14cmwgK772NAuhzuBWi-vfBFCz-6IEB_YIVo7nILe29KjAQ1E1udb0DDGk7bM-gs4HgZRihOjP6g8xM_gMVm_hXg=e365-pa-nu-w675-rw",
        enlace: "https://pokemongolive.com/es/events/",
    },
    {
        id: 3,
        fecha: "14 oct 2025",
        url: "https://pokemongo.com/es/news/into-the-wild-2025",
        titulo: "Nueva serie de cartas Pokémon TCG",
        descripcion: "Algo se está cociendo en las profundidades de lo silvestre… ¿Todo preparado para descubrir lo que se viene durante el evento Hacia lo silvestre? Antes de que empiece el Área Silvestre de Pokémon GO: Global por todo el mundo, ¡aprovechad la oportunidad de mejorar vuestras habilidades y preparaos para una gran aventura!",
        imagen: "https://lh3.googleusercontent.com/uwL8wu89s0phAhfsg6BXDGxnFLUBJuqDm9oiUH9EikFdYmRlIkKskfJtfUeCptE8kc5nrIZKvhn_Ohow1t0A8im23ZzHXf2etQ=e365-pa-nu-w675-rw",
        enlace: "https://www.pokemon.com/es/pokemon-tcg/",
    },
];
