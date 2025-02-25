'use strict';

const flagUrls = {
  it: "https://flagcdn.com/48x36/it.png",
  en: "https://flagcdn.com/48x36/gb.png", // usa il GB per l'inglese
  es: "https://flagcdn.com/48x36/es.png",
  fr: "https://flagcdn.com/48x36/fr.png"
};



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


// Definizione unica dell'oggetto di traduzioni organizzato per chiave
const translations = {
  helplineTitle: {
    it: "Per ulteriori informazioni:",
    en: "For Further Inquiries:",
    es: "Para más información:",
    fr: "Pour plus d'informations :"
  },
  heroTitle: {
    it: "Viaggia con Empathy",
    en: "Travel with Empathy",
    es: "Viaja con Empathy",
    fr: "Voyagez avec Empathy"
  },
  heroDescription: {
    it: "Empathy è la tua agenzia di tour e trasporti di fiducia. Offriamo esperienze di viaggio uniche, trasferimenti affidabili e tour personalizzati per farti scoprire il meglio di ogni destinazione, garantendo comfort e sicurezza in ogni spostamento.",
    en: "Empathy is your trusted tour and transfer agency. We offer unique travel experiences, reliable transfers, and personalized tours to help you discover the best of every destination, ensuring comfort and safety every step of the way.",
    es: "Empathy es tu agencia de tours y traslados de confianza. Ofrecemos experiencias de viaje únicas, traslados confiables y tours personalizados para que descubras lo mejor de cada destino, garantizando comodidad y seguridad en cada trayecto.",
    fr: "Empathy est votre agence de tours et de transferts de confiance. Nous offrons des expériences de voyage uniques, des transferts fiables et des tours personnalisés pour vous permettre de découvrir le meilleur de chaque destination, assurant confort et sécurité à chaque étape."
  },
  learnMore: {
    it: "Servizio Transfer",
    en: "Transfer Service",
    es: "Servicio de Transfer",
    fr: "Service de Transfer"
  },
  bookNow: {
    it: "Prenota ora",
    en: "Book now",
    es: "Reserva ahora",
    fr: "Réservez maintenant"
  },
  sectionSubtitle: {
    it: "Esplora luoghi incantevoli",
    en: "Discover Enchanting Places",
    es: "Descubre lugares encantadores",
    fr: "Découvrez des lieux enchanteurs"
  },
  sectionTitle: {
    it: "Tour Popolari",
    en: "Popular Tour",
    es: "Tour Populares",
    fr: "Tour Populaires"
  },
  sectionText: {
    it: "Scopri i luoghi incantevoli che offrono una combinazione unica di storia, cultura e paesaggi mozzafiato. Ogni destinazione racconta una storia diversa, invitandoti a vivere un'esperienza indimenticabile.",
    en: "Discover enchanting places that offer a unique combination of history, culture, and breathtaking landscapes. Each destination tells a different story, inviting you to experience an unforgettable adventure.",
    es: "Descubre lugares encantadores que ofrecen una combinación única de historia, cultura y paisajes impresionantes. Cada destino cuenta una historia diferente, invitándote a vivir una aventura inolvidable.",
    fr: "Découvrez des lieux enchanteurs offrant une combinaison unique d'histoire, de culture et de paysages à couper le souffle. Chaque destination raconte une histoire différente, vous invitant à vivre une aventure inoubliable."
  },
  card1Subtitle: {
    it: "Napoli",
    en: "Naples",
    es: "Nápoles",
    fr: "Naples"
  },
  card1Title: {
    it: "Pompei",
    en: "Pompeii",
    es: "Pompeya",
    fr: "Pompéi"
  },
  card1Text: {
    it: "Scopri le meraviglie storiche di Pompei, un sito archeologico unico dove l'antichità prende vita.",
    en: "Discover the historical wonders of Pompeii, a unique archaeological site where antiquity comes to life.",
    es: "Descubre las maravillas históricas de Pompeya, un sitio arqueológico único donde la antigüedad cobra vida.",
    fr: "Découvrez les merveilles historiques de Pompéi, un site archéologique unique où l'Antiquité prend vie."
  },
  card2Subtitle: {
    it: "Napoli",
    en: "Naples",
    es: "Nápoles",
    fr: "Naples"
  },
  card2Title: {
    it: "Vesuvio",
    en: "Vesuvius",
    es: "Vesubio",
    fr: "Vésuve"
  },
  card2Text: {
    it: "Ammira la maestosità del Vesuvio, il vulcano imponente che domina il panorama napoletano e simboleggia la forza della natura.",
    en: "Admire the majesty of Vesuvius, the imposing volcano that dominates the Neapolitan skyline and symbolizes nature's power.",
    es: "Admira la majestuosidad del Vesubio, el imponente volcán que domina el horizonte napolitano y simboliza el poder de la naturaleza.",
    fr: "Admirez la majesté du Vésuve, le volcan imposant qui domine l'horizon napolitain et symbolise la puissance de la nature."
  },
  card3Subtitle: {
    it: "Salerno",
    en: "Salerno",
    es: "Salerno",
    fr: "Salerne"
  },
  card3Title: {
    it: "Costiera Amalfitana",
    en: "Amalfi Coast",
    es: "Costa Amalfitana",
    fr: "Côte Amalfitaine"
  },
  card3Text: {
    it: "Esplora la splendida Costiera Amalfitana, con i suoi paesaggi mozzafiato e i villaggi pittoreschi, ideale per una vacanza indimenticabile.",
    en: "Explore the stunning Amalfi Coast, with its breathtaking landscapes and picturesque villages, perfect for an unforgettable vacation.",
    es: "Explora la impresionante Costa Amalfitana, con sus paisajes de ensueño y pintorescos pueblos, ideal para unas vacaciones inolvidables.",
    fr: "Explorez la splendide Côte Amalfitaine, avec ses paysages époustouflants et ses villages pittoresques, idéale pour des vacances inoubliables."
  },
  buttonText: {
    it: "Altri Tour",
    en: "More Tour",
    es: "Más Tour",
    fr: "Plus de Tour"
  },
  navHome: {
    it: "home",
    en: "home",
    es: "inicio",
    fr: "accueil"
  },
  navAbout: {
    it: "chi siamo",
    en: "about us",
    es: "sobre nosotros",
    fr: "à propos"
  },
  navDestination: {
    it: "Tour",
    en: "Tour",
    es: "Tour",
    fr: "Tour"
  },
  navPackages: {
    it: "prenotazioni",
    en: "bookings",
    es: "reservas",
    fr: "réservations"
  },
  navGallery: {
    it: "galleria",
    en: "gallery",
    es: "galería",
    fr: "galerie"
  },
  navContact: {
    it: "contattaci",
    en: "contact us",
    es: "contáctanos",
    fr: "contactez-nous"
  },
  navBookNow: {
    it: "prenota ora",
    en: "Book Now",
    es: "reservar ahora",
    fr: "réservez maintenant"
  },
  navService: { 
    it: "servizi",
    en: "services",
    es: "servicios",
    fr: "services"
  },

    // Sezione Package
    packageSectionSubtitle: {
      it: "Tour e Attività in Campania",
      en: "Exciting Tour Packages in Campania",
      es: "Paquetes de Tours Emocionantes en Campania",
      fr: "Forfaits Tour Passionnants en Campanie"
    },
    packageSectionTitle: {
      it: "Scopri la Regione",
      en: "Discover the Region",
      es: "Descubre la Región",
      fr: "Découvrez la Région"
    },
    packageSectionText: {
      it: "Vivi un'esperienza unica esplorando i tesori storici e naturali della Campania: Cilento, Pompei, Napoli, la Costiera Amalfitana e molto altro ancora.",
      en: "Experience a unique journey exploring the historical and natural treasures of Campania: Cilento, Pompeii, Naples, the Amalfi Coast, and much more.",
      es: "Vive una experiencia única explorando los tesoros históricos y naturales de Campania: Cilento, Pompeya, Nápoles, la Costa Amalfitana y mucho más.",
      fr: "Vivez une expérience unique en explorant les trésors historiques et naturels de la Campanie: Cilento, Pompéi, Naples, la Côte Amalfitaine, et bien plus encore."
    },
    tour1Title: {
      it: "Tour Storico di Pompei",
      en: "Historical Tour of Pompeii",
      es: "Tour Histórico de Pompeya",
      fr: "Tour Historique de Pompéi"
    },
    tour1Text: {
      it: "Esplora il sito archeologico di Pompei e immergiti nella storia antica, visitando rovine mozzafiato e scoprendo leggende millenarie.",
      en: "Explore the archaeological site of Pompeii and immerse yourself in ancient history, visiting breathtaking ruins and uncovering millennial legends.",
      es: "Explora el sitio arqueológico de Pompeya y sumérgete en la historia antigua, visitando ruinas impresionantes y descubriendo leyendas milenarias.",
      fr: "Découvrez le site archéologique de Pompéi et plongez dans l'histoire antique en visitant des ruines époustouflantes et en découvrant des légendes millénaires."
    },
    tour1Price: {
      it: "$700",
      en: "$700",
      es: "$700",
      fr: "$700"
    },
    tour1Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant"
    },
    tour2Title: {
      it: "Avventura sul Vesuvio",
      en: "Vesuvius Adventure",
      es: "Aventura por el Vesubio",
      fr: "Aventure sur le Vésuve"
    },
    tour2Text: {
      it: "Scopri l'imponenza del Vesuvio con un'escursione guidata, ammirando panorami spettacolari sulla città di Napoli.",
      en: "Discover the grandeur of Vesuvius with a guided hike, enjoying spectacular views over Naples.",
      es: "Descubre la grandeza del Vesubio con una excursión guiada, disfrutando de vistas espectaculares sobre Nápoles.",
      fr: "Découvrez la grandeur du Vésuve lors d'une randonnée guidée offrant des vues spectaculaires sur Naples."
    },
    tour2Price: {
      it: "$650",
      en: "$650",
      es: "$650",
      fr: "$650"
    },
    tour2Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant"
    },
    tour3Title: {
      it: "Tour della Costiera Amalfitana",
      en: "Amalfi Coast Tour",
      es: "Tour por la Costa Amalfitana",
      fr: "Tour de la Côte Amalfitaine"
    },
    tour3Text: {
      it: "Percorri le strade panoramiche della Costiera Amalfitana, visita borghi pittoreschi e gusta le prelibatezze locali.",
      en: "Drive along the panoramic roads of the Amalfi Coast, visit picturesque villages, and savor local delicacies.",
      es: "Recorre las carreteras panorámicas de la Costa Amalfitana, visita pueblos pintorescos y degusta las delicias locales.",
      fr: "Parcourez les routes panoramiques de la Côte Amalfitaine, visitez des villages pittoresques et savourez les spécialités locales."
    },
    tour3Price: {
      it: "$800",
      en: "$800",
      es: "$800",
      fr: "$800"
    },
    tour3Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant"
    },
    perPerson: {
      it: "/ per persona",
      en: "/ per person",
      es: "/ por persona",
      fr: "/ par personne"
    },
    viewAllTours: {
      it: "Visualizza Tutti i Tour",
      en: "View All Tours",
      es: "Ver Todos los Tours",
      fr: "Voir Tous les Tours"
    },

    ctaSubtitle: {
      it: "Servizio Transfer",
      en: "Transfer Service",
      es: "Servicio de Transfer",
      fr: "Service de Transfer"
    },
    ctaTitle: {
      it: "Viaggia con Comfort e Sicurezza. Siamo a Tua Disposizione!",
      en: "Travel with Comfort and Safety. We Are at Your Service!",
      es: "Viaja con Comodidad y Seguridad. ¡Estamos a Tu Disposición!",
      fr: "Voyagez avec Confort et Sécurité. Nous Sommes à Votre Service!"
    },
    ctaText: {
      it: "Offriamo un servizio Transfer professionale e affidabile per i tuoi spostamenti. Dall'aeroporto agli hotel, dalle visite guidate alle escursioni personalizzate, garantiamo un viaggio confortevole e puntuale con autisti esperti e veicoli moderni.",
      en: "We offer a professional and reliable Transfer service for your travels. From the airport to hotels, guided tours, and personalized excursions, we ensure a comfortable and punctual ride with expert drivers and modern vehicles.",
      es: "Ofrecemos un servicio de Transfer profesional y confiable para tus desplazamientos. Desde el aeropuerto hasta los hoteles, visitas guiadas y excursiones personalizadas, garantizamos un viaje cómodo y puntual con conductores expertos y vehículos modernos.",
      fr: "Nous offrons un service de Transfer professionnel et fiable pour vos déplacements. De l'aéroport aux hôtels, des visites guidées aux excursions personnalisées, nous garantissons un trajet confortable et ponctuel avec des chauffeurs expérimentés et des véhicules modernes."
    },
    ctaButton: {
      it: "Contattaci Ora!",
      en: "Contact Us Now!",
      es: "¡Contáctanos Ahora!",
      fr: "Contactez-Nous Maintenant!"
    },



     // Chiavi per i placeholder dei form
     labelDeparture: {
      it: "Partenza*",
      en: "Departure*",
      es: "Salida*",
      fr: "Départ*"
    },
    labelDestination: {
      it: "Destinazione*",
      en: "Destination*",
      es: "Destino*",
      fr: "Destination*"
    },
    labelPeople: {
      it: "Numero di Persone*",
      en: "Number of People*",
      es: "Número de personas*",
      fr: "Nombre de personnes*"
    },
    labelCheckin: {
      it: "Data Partenza**",
      en: "Departure Date**",
      es: "Fecha de Salida**",
      fr: "Date de Départ**"
    },
    labelDepartureTime: {
      it: "Ora Partenza**",
      en: "Departure Time**",
      es: "Hora de Salida**",
      fr: "Heure de Départ**"
    },
    // Placeholder degli input
    placeholderDeparture: {
      it: "Inserisci Partenza",
      en: "Enter Departure",
      es: "Ingrese Salida",
      fr: "Entrez Départ"
    },
    placeholderDestination: {
      it: "Inserisci Destinazione",
      en: "Enter Destination",
      es: "Ingrese Destino",
      fr: "Entrez Destination"
    },
    placeholderPeople: {
      it: "Inserisci numero di persone",
      en: "Enter Number of People",
      es: "Ingrese número de personas",
      fr: "Entrez le nombre de personnes"
    },
    placeholderCheckin: {
      it: "Seleziona Data Partenza",
      en: "Select Departure Date",
      es: "Selecciona Fecha de Salida",
      fr: "Sélectionnez la date de départ"
    },
    placeholderDepartureTime: {
      it: "Seleziona Ora Partenza",
      en: "Select Departure Time",
      es: "Selecciona Hora de Salida",
      fr: "Sélectionnez l'heure de départ"
    },
    // Bottone del form
    inquireNow: {
      it: "Richiedi Informazioni",
      en: "Inquire Now",
      es: "Solicitar información",
      fr: "Demandez maintenant"
    },
    // Sezione Tour Pompei
 
      // Sezione Tour Pompei
      tourPompeiAmalfiTitle: {
        it: "Pompei e Costiera Amalfitana",
        en: "Pompeii and Amalfi Coast",
        es: "Pompeya y Costa Amalfitana",
        fr: "Pompéi et la Côte Amalfitaine"
      },
      tourPompeiAmalfiText: {
        it: "Immergiti nella cultura italiana con un tour che combina la storia di Pompei con la bellezza della Costiera Amalfitana.",
        en: "Immerse yourself in Italian culture with a tour that combines the history of Pompeii with the beauty of the Amalfi Coast.",
        es: "Sumérgete en la cultura italiana con un recorrido que combina la historia de Pompeya con la belleza de la Costa Amalfitana.",
        fr: "Imprégnez-vous de la culture italienne avec une visite qui combine l'histoire de Pompéi avec la beauté de la Côte Amalfitaine."
      },
    
      tourPompeiMuseoTitle: {
        it: "Pompei e Museo Archeologico di Napoli",
        en: "Pompeii and Naples Archaeological Museum",
        es: "Pompeya y Museo Arqueológico de Nápoles",
        fr: "Pompéi et Musée Archéologique de Naples"
      },
      tourPompeiMuseoText: {
        it: "Scopri i tesori dell'antica Roma con un tour che include le rovine di Pompei e le incredibili collezioni del Museo Archeologico di Napoli.",
        en: "Discover the treasures of ancient Rome with a tour that includes the ruins of Pompeii and the incredible collections of the Naples Archaeological Museum.",
        es: "Descubre los tesoros de la antigua Roma con un recorrido que incluye las ruinas de Pompeya y las increíbles colecciones del Museo Arqueológico de Nápoles.",
        fr: "Découvrez les trésors de la Rome antique avec une visite qui comprend les ruines de Pompéi et les collections incroyables du Musée Archéologique de Naples."
      },
    
      tourPompeiErcolanoTitle: {
        it: "Pompei ed Ercolano",
        en: "Pompeii and Herculaneum",
        es: "Pompeya y Herculano",
        fr: "Pompéi et Herculanum"
      },
      tourPompeiErcolanoText: {
        it: "Scopri due città antiche perfettamente conservate dopo l'eruzione del Vesuvio del 79 d.C. in un affascinante viaggio nel passato.",
        en: "Discover two ancient cities perfectly preserved after the eruption of Vesuvius in 79 AD on a fascinating journey into the past.",
        es: "Descubre dos ciudades antiguas perfectamente conservadas después de la erupción del Vesubio en el año 79 d.C. en un fascinante viaje al pasado.",
        fr: "Découvrez deux villes antiques parfaitement conservées après l'éruption du Vésuve en 79 après J.-C. lors d'un fascinant voyage dans le passé."
      },
    
      tourPompeiVesuvioTitle: {
        it: "Pompei e Vesuvio",
        en: "Pompeii and Mount Vesuvius",
        es: "Pompeya y el Monte Vesubio",
        fr: "Pompéi et le Mont Vésuve"
      },
      tourPompeiVesuvioText: {
        it: "Esplora le meraviglie di Pompei e sali sulla cima del Vesuvio per una vista mozzafiato sul Golfo di Napoli.",
        en: "Explore the wonders of Pompeii and climb to the top of Mount Vesuvius for a breathtaking view of the Gulf of Naples.",
        es: "Explora las maravillas de Pompeya y sube a la cima del Monte Vesubio para disfrutar de una vista impresionante del Golfo de Nápoles.",
        fr: "Explorez les merveilles de Pompéi et montez au sommet du Mont Vésuve pour une vue imprenable sur le golfe de Naples."
      },
    
      tourPompeiSorrentoTitle: {
        it: "Pompei e Sorrento",
        en: "Pompeii and Sorrento",
        es: "Pompeya y Sorrento",
        fr: "Pompéi et Sorrente"
      },
      tourPompeiSorrentoText: {
        it: "Visita la storica città di Pompei e poi rilassati nel meraviglioso paesaggio di Sorrento, tra limoneti e vista mare.",
        en: "Visit the historic city of Pompeii and then relax in the beautiful scenery of Sorrento, with its lemon groves and sea views.",
        es: "Visita la histórica ciudad de Pompeya y luego relájate en el maravilloso paisaje de Sorrento, entre limoneros y vistas al mar.",
        fr: "Visitez la ville historique de Pompéi puis détendez-vous dans le magnifique paysage de Sorrente, entre vergers de citronniers et vue sur la mer."
      },
    
      tourPompeiHalfDayTitle: {
        it: "Pompei Mezza Giornata",
        en: "Pompeii Half Day",
        es: "Pompeya Medio Día",
        fr: "Pompéi Demi-journée"
      },
      tourPompeiHalfDayText: {
        it: "Scopri Pompei in un tour breve ma intenso, perfetto per chi ha poco tempo ma vuole esplorare le rovine più famose d’Italia.",
        en: "Discover Pompeii in a short but intense tour, perfect for those with limited time who want to explore Italy’s most famous ruins.",
        es: "Descubre Pompeya en un recorrido corto pero intenso, ideal para quienes tienen poco tiempo pero desean explorar las ruinas más famosas de Italia.",
        fr: "Découvrez Pompéi lors d'une visite courte mais intense, idéale pour ceux qui disposent de peu de temps mais souhaitent explorer les ruines les plus célèbres d'Italie."
      },
    
      // Nuovi tour da aggiungere
      tourPompeiErcolanoVesuvioTitle: {
        it: "Pompei, Ercolano e Vesuvio",
        en: "Pompeii, Herculaneum and Vesuvius",
        es: "Pompeya, Herculano y Vesubio",
        fr: "Pompéi, Herculanum et Vésuve"
      },
      tourPompeiErcolanoVesuvioText: {
        it: "Visita i due siti archeologici meglio conservati al mondo e sali sul Vesuvio per godere di un panorama spettacolare.",
        en: "Visit the two best-preserved archaeological sites in the world and climb Mount Vesuvius to enjoy a spectacular view.",
        es: "Visita los dos sitios arqueológicos mejor conservados del mundo y sube al Vesubio para disfrutar de una vista espectacular.",
        fr: "Visitez les deux sites archéologiques les mieux conservés au monde et montez sur le Vésuve pour profiter d'une vue spectaculaire."
      },
    
      tourPompeiVesuvioWineTitle: {
        it: "Pompei, Vesuvio e Degustazione di Vini",
        en: "Pompeii, Vesuvius and Wine Tasting",
        es: "Pompeya, Vesubio y Degustación de Vinos",
        fr: "Pompéi, Vésuve et Dégustation de Vins"
      },
      tourPompeiVesuvioWineText: {
        it: "Un tour che unisce storia, natura e sapori: visita Pompei, sali sul Vesuvio e concludi la giornata con una degustazione di vini locali.",
        en: "A tour that combines history, nature, and flavors: visit Pompeii, climb Vesuvius, and end your day with a tasting of local wines.",
        es: "Un tour que combina historia, naturaleza y sabores: visita Pompeya, sube al Vesubio y termina el día con una degustación de vinos locales.",
        fr: "Un tour qui allie histoire, nature et saveurs : visitez Pompéi, montez sur le Vésuve et terminez la journée par une dégustation de vins locaux."
      },
    
      tourPompeiVesuvioWinePremiumTitle: {
        it: "Pompei, Vesuvio e Degustazione di Vini Premium",
        en: "Pompeii, Vesuvius and Premium Wine Tasting",
        es: "Pompeya, Vesubio y Degustación de Vinos Premium",
        fr: "Pompéi, Vésuve et Dégustation de Vins Premium"
      },
      tourPompeiVesuvioWinePremiumText: {
        it: "Un'esperienza esclusiva che combina la storia di Pompei, la vista mozzafiato dal Vesuvio e una degustazione di vini pregiati in una cantina locale.",
        en: "An exclusive experience that combines the history of Pompeii, breathtaking views from Vesuvius, and a tasting of premium wines at a local winery.",
        es: "Una experiencia exclusiva que combina la historia de Pompeya, la impresionante vista del Vesubio y una degustación de vinos premium en una bodega local.",
        fr: "Une expérience exclusive qui allie l'histoire de Pompéi, une vue imprenable depuis le Vésuve et une dégustation de vins premium dans une cave locale."
      },
      pompeiSectionSubtitle: {
        it: "Tour e Attività a Pompei",
        en: "Tours and Activities in Pompeii",
        es: "Tours y Actividades en Pompeya",
        fr: "Tours et Activités à Pompéi"
      },
      pompeiSectionTitle: {
        it: "Esplora l'Antica Pompei",
        en: "Explore Ancient Pompeii",
        es: "Explora la Antigua Pompeya",
        fr: "Explorez l'Ancienne Pompéi"
      },
      pompeiSectionText: {
        it: "Vivi l'emozione di immergerti nella storia di Pompei, visitando rovine antiche e scoprendo la vita quotidiana di un tempo passato.",
        en: "Experience the thrill of immersing yourself in Pompeii's history, visiting ancient ruins and uncovering everyday life from a bygone era.",
        es: "Vive la emoción de sumergirte en la historia de Pompeya, visitando antiguas ruinas y descubriendo la vida cotidiana de tiempos pasados.",
        fr: "Vivez l'émotion de vous plonger dans l'histoire de Pompéi, en visitant d'anciennes ruines et en découvrant la vie quotidienne d'une époque révolue."
      },

      tourCilentoTitle: {
        it: "Avventura nel Cilento",
        en: "Adventure in Cilento",
        es: "Aventura en Cilento",
        fr: "Aventure dans le Cilento"
      },
      tourCilentoText: {
        it: "Esplora le bellezze naturali e la cultura autentica del Cilento con un tour immersivo in tra paesaggi mozzafiato.",
        en: "Explore the natural beauty and authentic culture of Cilento with an immersive tour through breathtaking landscapes.",
        es: "Explora la belleza natural y la cultura auténtica del Cilento con un tour inmersivo a través de paisajes impresionantes.",
        fr: "Explorez la beauté naturelle et la culture authentique du Cilento lors d'une visite immersive à travers des paysages à couper le souffle."
      },
      tourCilentoButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant"
      },


      tourSorrentoTitle: {
        it: "Esplora Sorrento",
        en: "Explore Sorrento",
        es: "Explora Sorrento",
        fr: "Explorez Sorrento"
      },
      tourSorrentoText: {
        it: "Goditi la magia di Sorrento, tra panorami mozzafiato e l'atmosfera rilassante della costa sorrentina.",
        en: "Enjoy the magic of Sorrento, with breathtaking views and the relaxing atmosphere of the Sorrentine coast.",
        es: "Disfruta de la magia de Sorrento, con vistas impresionantes y el ambiente relajante de la costa de Sorrento.",
        fr: "Profitez de la magie de Sorrento, avec des vues à couper le souffle et l'atmosphère relaxante de la côte de Sorrento."
      },
      tourSorrentoButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant"
      },


      tourNapoliTitle: {
        it: "Scopri Napoli",
        en: "Discover Naples",
        es: "Descubre Nápoles",
        fr: "Découvrez Naples"
      },
      tourNapoliText: {
        it: "Immergiti nell'energia di Napoli, esplorando il suo ricco patrimonio culturale e la vibrante vita urbana.",
        en: "Immerse yourself in the energy of Naples, exploring its rich cultural heritage and vibrant urban life.",
        es: "Sumérgete en la energía de Nápoles, explorando su rico patrimonio cultural y la vibrante vida urbana.",
        fr: "Imprégnez-vous de l'énergie de Naples, en explorant son riche patrimoine culturel et sa vie urbaine vibrante."
      },
      tourNapoliButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant"
      },

      tourButton1: {
        it: "Visualizza Tutti i Tour",
        en: "View All Tours",
        es: "Ver Todos los Tours",
        fr: "Voir Tous les Tours"
      },



      // Sezione Amalfi

      amalfiSectionSubtitle: {
        it: "Tour e Attività ad Amalfi",
        en: "Tours and Activities in Amalfi",
        es: "Tours y Actividades en Amalfi",
        fr: "Circuits et Activités à Amalfi"
      },
      amalfiSectionTitle: {
        it: "Scopri la Magia della Costiera Amalfitana",
        en: "Discover the Magic of the Amalfi Coast",
        es: "Descubre la Magia de la Costa Amalfitana",
        fr: "Découvrez la Magie de la Côte Amalfitaine"
      },
      amalfiSectionText: {
        it: "Esplora panorami mozzafiato, borghi incantevoli e la straordinaria bellezza della Costiera Amalfitana con i nostri tour esclusivi.",
        en: "Explore breathtaking views, charming villages, and the extraordinary beauty of the Amalfi Coast with our exclusive tours.",
        es: "Explora vistas impresionantes, pueblos encantadores y la extraordinaria belleza de la Costa Amalfitana con nuestros tours exclusivos.",
        fr: "Découvrez des panoramas à couper le souffle, des villages pittoresques et la beauté extraordinaire de la Côte Amalfitaine avec nos circuits exclusifs."
      },
      // Schede dei tour
      tourAmalfiTitle: {
        it: "Amalfi Coast",
        en: "Amalfi Coast",
        es: "Costa Amalfitana",
        fr: "Côte Amalfitaine"
      },
      tourAmalfiText: {
        it: "Con le sue viste mozzafiato, la Costiera Amalfitana è una delle più belle del mondo.",
        en: "With its breathtaking views, the Amalfi Coast is one of the most beautiful in the world.",
        es: "Con sus impresionantes vistas, la Costa Amalfitana es una de las más bellas del mundo.",
        fr: "Avec ses vues spectaculaires, la Côte Amalfitaine est l'une des plus belles au monde."
      },
      tourAmalfiSorrentoTitle: {
        it: "Amalfi Coast and Sorrento",
        en: "Amalfi Coast and Sorrento",
        es: "Costa Amalfitana y Sorrento",
        fr: "Côte Amalfitaine et Sorrento"
      },
      tourAmalfiSorrentoText: {
        it: "Panorami incredibili, città uniche, borghi pittoreschi e i colori della natura ti aspettano.",
        en: "Incredible panoramas, unique cities, charming villages and the vibrant colors of nature await you.",
        es: "Panoramas increíbles, ciudades únicas, pueblos pintorescos y los vibrantes colores de la naturaleza te esperan.",
        fr: "Des panoramas incroyables, des villes uniques, des villages pittoresques et les couleurs vibrantes de la nature vous attendent."
      },
      tourAmalfiFullDayTitle: {
        it: "Amalfi Coast Full Day",
        en: "Amalfi Coast Full Day",
        es: "Costa Amalfitana Full Day",
        fr: "Journée Complète sur la Côte Amalfitaine"
      },
      tourAmalfiFullDayText: {
        it: "Un viaggio attraverso una delle strade costiere più belle che tu possa mai percorrere.",
        en: "A journey along one of the most beautiful coastal roads you can ever travel.",
        es: "Un viaje por una de las carreteras costeras más bellas que puedas recorrer.",
        fr: "Un voyage sur l'une des plus belles routes côtières que vous puissiez emprunter."
      },
      tourAmalfiHalfDayTitle: {
        it: "Amalfi Coast Half Day",
        en: "Amalfi Coast Half Day",
        es: "Costa Amalfitana Medio Día",
        fr: "Demi-Journée sur la Côte Amalfitaine"
      },
      tourAmalfiHalfDayText: {
        it: "Il tour perfetto per scoprire il fascino della Costiera Amalfitana in poche ore.",
        en: "The perfect tour to discover the charm of the Amalfi Coast in just a few hours.",
        es: "El tour perfecto para descubrir el encanto de la Costa Amalfitana en pocas horas.",
        fr: "Le circuit idéal pour découvrir le charme de la Côte Amalfitaine en quelques heures."
      },
      tourPompeiiAmalfiTitle: {
        it: "Pompeii and Amalfi Coast",
        en: "Pompeii and the Amalfi Coast",
        es: "Pompeya y la Costa Amalfitana",
        fr: "Pompéi et la Côte Amalfitaine"
      },
      tourPompeiiAmalfiText: {
        it: "Immergiti nella cultura italiana visitando Pompei e la Costiera Amalfitana in un unico tour.",
        en: "Immerse yourself in Italian culture by visiting Pompeii and the Amalfi Coast on one tour.",
        es: "Sumérgete en la cultura italiana visitando Pompeya y la Costa Amalfitana en un solo tour.",
        fr: "Plongez dans la culture italienne en visitant Pompéi et la Côte Amalfitaine lors d'un circuit unique."
      },
      tourWineTitle: {
        it: "Wine and Fancy Food Experience",
        en: "Wine and Fancy Food Experience",
        es: "Experiencia de Vino y Gastronomía",
        fr: "Expérience Vin et Gastronomie"
      },
      tourWineText: {
        it: "Un'esperienza unica per gli amanti del vino, immersi nella natura incontaminata della Costiera.",
        en: "A unique experience for wine lovers, immersed in the unspoiled nature of the coast.",
        es: "Una experiencia única para los amantes del vino, inmersos en la naturaleza virgen de la costa.",
        fr: "Une expérience unique pour les amateurs de vin, immergés dans la nature préservée de la côte."
      },



      vesuviusSectionSubtitle: {
        it: "Tour e Attività al Vesuvio",
        en: "Tours and Activities at Vesuvius",
        es: "Tours y Actividades en el Vesubio",
        fr: "Circuits et Activités au Vésuve"
      },
      vesuviusSectionTitle: {
        it: "Esplora il Vesuvio e le sue Meraviglie Storiche",
        en: "Explore Vesuvius and its Historical Wonders",
        es: "Explora el Vesubio y sus Maravillas Históricas",
        fr: "Découvrez le Vésuve et ses Merveilles Historiques"
      },
      vesuviusSectionText: {
        it: "Scopri il vulcano che ha segnato la storia di Pompei ed Ercolano, esplorando rovine antiche e paesaggi unici con i nostri tour guidati.",
        en: "Discover the volcano that marked the history of Pompeii and Herculaneum by exploring ancient ruins and unique landscapes with our guided tours.",
        es: "Descubre el volcán que marcó la historia de Pompeya y Herculano explorando ruinas antiguas y paisajes únicos con nuestros tours guiados.",
        fr: "Découvrez le volcan qui a marqué l'histoire de Pompéi et d'Herculanum en explorant des ruines anciennes et des paysages uniques avec nos circuits guidés."
      },
      tourHerculaneumVesuviusTitle: {
        it: "Ercolano e Vesuvio",
        en: "Herculaneum and Vesuvius",
        es: "Herculano y Vesubio",
        fr: "Herculanum et Vésuve"
      },
      tourHerculaneumVesuviusText: {
        it: "Scopri Ercolano, la città romana sepolta dall'eruzione del Vesuvio nel 79 d.C., e sali sul vulcano per ammirare un panorama mozzafiato.",
        en: "Discover Herculaneum, the Roman city buried by the eruption of Vesuvius in 79 AD, and climb the volcano for a breathtaking view.",
        es: "Descubre Herculano, la ciudad romana sepultada por la erupción del Vesubio en el 79 d.C., y sube al volcán para disfrutar de una vista impresionante.",
        fr: "Découvrez Herculanum, la ville romaine ensevelie par l'éruption du Vésuve en 79 après J.-C., et grimpez sur le volcan pour admirer un panorama à couper le souffle."
      },
      tourPompeiiVesuviusTitle: {
        it: "Pompei e Vesuvio",
        en: "Pompeii and Vesuvius",
        es: "Pompeya y Vesubio",
        fr: "Pompéi et Vésuve"
      },
      tourPompeiiVesuviusText: {
        it: "Unisciti a noi per un tour alla scoperta di Pompei, una delle città più affascinanti dell'antichità, con un'escursione sul Vesuvio.",
        en: "Join us on a tour to discover Pompeii, one of the most fascinating cities of antiquity, along with an excursion to Vesuvius.",
        es: "Únete a nosotros en un tour para descubrir Pompeya, una de las ciudades más fascinantes de la antigüedad, junto con una excursión al Vesubio.",
        fr: "Rejoignez-nous pour un circuit de découverte de Pompéi, l'une des villes les plus fascinantes de l'Antiquité, accompagné d'une excursion au Vésuve."
      },
      tourPompeiiVesuviusWineTitle: {
        it: "Pompeii, Vesuvio ed Esperienza Enogastronomica",
        en: "Pompeii, Vesuvius and Wine & Gastronomy Experience",
        es: "Pompeya, Vesubio y Experiencia Enogastronómica",
        fr: "Pompéi, Vésuve et Expérience Œnogastronomique"
      },
      tourPompeiiVesuviusWineText: {
        it: "Combina storia e sapori con un tour esclusivo tra Pompei, il Vesuvio e una degustazione di vini in una cantina locale.",
        en: "Combine history and flavors with an exclusive tour of Pompeii, Vesuvius, and a wine tasting at a local winery.",
        es: "Combina historia y sabores con un tour exclusivo por Pompeya, el Vesubio y una degustación de vinos en una bodega local.",
        fr: "Alliez histoire et saveurs avec un circuit exclusif de Pompéi, du Vésuve et une dégustation de vins dans une cave locale."
      },
      tourPompeiiVesuviusWine2Title: {
        it: "Pompeii, Vesuvio ed Esperienza Enogastronomica",
        en: "Pompeii, Vesuvius and Wine & Gastronomy Experience",
        es: "Pompeya, Vesubio y Experiencia Enogastronómica",
        fr: "Pompéi, Vésuve et Expérience Œnogastronomique"
      },
      tourPompeiiVesuviusWine2Text: {
        it: "Cerchi un tour che unisca cultura, storia ed esperienza culinaria? Questo è il tour perfetto per te!",
        en: "Looking for a tour that combines local culture, history, and culinary experiences? This is the perfect tour for you!",
        es: "¿Buscas un tour que combine cultura local, historia y experiencias culinarias? ¡Este es el tour perfecto para ti!",
        fr: "Vous cherchez un circuit alliant culture locale, histoire et expériences culinaires ? C'est le circuit parfait pour vous !"
      },
      perPerson: {
        it: "/ per gruppo",
        en: "/ per group",
        es: "/ por grupo",
        fr: "/ par groupe"
      },

      naplesSectionSubtitle: {
        it: "Tour e Attività a Napoli",
        en: "Tours and Activities in Naples",
        es: "Tours y Actividades en Nápoles",
        fr: "Circuits et Activités à Naples"
      },
      naplesSectionTitle: {
        it: "Scopri Napoli e il suo Patrimonio Unico",
        en: "Discover Naples and its Unique Heritage",
        es: "Descubre Nápoles y su Patrimonio Único",
        fr: "Découvrez Naples et son Patrimoine Unique"
      },
      naplesSectionText: {
        it: "Visita Napoli, una delle città più affascinanti d'Italia, con i suoi siti storici, la sua cultura vivace e la sua cucina rinomata in tutto il mondo.",
        en: "Visit Naples, one of Italy's most fascinating cities, with its historic sites, vibrant culture, and world-renowned cuisine.",
        es: "Visita Nápoles, una de las ciudades más fascinantes de Italia, con sus sitios históricos, su cultura vibrante y su cocina reconocida mundialmente.",
        fr: "Visitez Naples, l'une des villes les plus fascinantes d'Italie, avec ses sites historiques, sa culture dynamique et sa cuisine renommée dans le monde entier."
      },
      tourCasertaNaplesTitle: {
        it: "Caserta e Napoli",
        en: "Caserta and Naples",
        es: "Caserta y Nápoles",
        fr: "Caserta et Naples"
      },
      tourCasertaNaplesText: {
        it: "Approfitta di questa occasione speciale per visitare due siti Patrimonio dell'Umanità in un solo tour!",
        en: "Take advantage of this special opportunity to visit two UNESCO World Heritage sites in one tour!",
        es: "¡Aprovecha esta oportunidad especial para visitar dos sitios Patrimonio de la Humanidad en un solo tour!",
        fr: "Profitez de cette occasion spéciale pour visiter deux sites du patrimoine mondial de l'UNESCO en un seul circuit !"
      },
      tourNaplesCityTitle: {
        it: "Tour della Città di Napoli",
        en: "Naples City Tour",
        es: "Tour de la Ciudad de Nápoles",
        fr: "Circuit dans la Ville de Naples"
      },
      tourNaplesCityText: {
        it: "Scopri la terza città più grande d'Italia, ricca di storia, cultura e una gastronomia senza eguali.",
        en: "Discover Italy's third-largest city, rich in history, culture, and unmatched cuisine.",
        es: "Descubre la tercera ciudad más grande de Italia, rica en historia, cultura y con una gastronomía sin igual.",
        fr: "Découvrez la troisième plus grande ville d'Italie, riche en histoire, culture et une cuisine incomparable."
      },
      tourPompeiiMuseumTitle: {
        it: "Pompei e Museo Archeologico di Napoli",
        en: "Pompeii and Naples Archaeological Museum",
        es: "Pompeya y Museo Arqueológico de Nápoles",
        fr: "Pompéi et Musée Archéologique de Naples"
      },
      tourPompeiiMuseumText: {
        it: "Un tour unico tra gli scavi di Pompei e il Museo Archeologico, che custodisce tesori inestimabili dell’antichità.",
        en: "A unique tour of Pompeii's ruins and the Archaeological Museum, which houses invaluable treasures of antiquity.",
        es: "Un tour único por las ruinas de Pompeya y el Museo Arqueológico, que alberga tesoros invaluables de la antigüedad.",
        fr: "Un circuit unique à travers les ruines de Pompéi et le Musée Archéologique, qui abrite des trésors inestimables de l'Antiquité."
      },
      tourPompeiiNaplesTitle: {
        it: "Pompei e Centro Storico di Napoli",
        en: "Pompeii and Naples Historic Center",
        es: "Pompeya y Centro Histórico de Nápoles",
        fr: "Pompéi et Centre Historique de Naples"
      },
      tourPompeiiNaplesText: {
        it: "Se ami la storia antica e vuoi immergerti nella cultura partenopea, questo tour è perfetto per te.",
        en: "If you love ancient history and want to immerse yourself in Neapolitan culture, this tour is perfect for you.",
        es: "Si amas la historia antigua y deseas sumergirte en la cultura napolitana, ¡este tour es perfecto para ti!",
        fr: "Si vous aimez l'histoire antique et souhaitez vous immerger dans la culture napolitaine, ce circuit est parfait pour vous."
      },
      tourCasertaNaplesCentreTitle: {
        it: "Reggia di Caserta e Centro Storico di Napoli",
        en: "Caserta Royal Palace and Naples Historic Center",
        es: "La Realeza de Caserta y Centro Histórico de Nápoles",
        fr: "Palais Royal de Caserte et Centre Historique de Naples"
      },
      tourCasertaNaplesCentreText: {
        it: "Un'occasione imperdibile per visitare due siti UNESCO in un solo tour!",
        en: "An unmissable opportunity to visit two UNESCO sites in one tour!",
        es: "¡Una oportunidad imperdible para visitar dos sitios UNESCO en un solo tour!",
        fr: "Une occasion unique de visiter deux sites UNESCO en un seul circuit !"
      },
      perPerson: {
        it: "/ per gruppo",
        en: "/ per group",
        es: "/ por grupo",
        fr: "/ par groupe"
      },
      tourButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserve Now",
        fr: "Book Now" // oppure "Réservez maintenant"
      },
      
    

    
  };


  function updateLanguage(lang) {
    // Aggiorna testi e placeholder
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[key] && translations[key][lang]) {
        // Se l'elemento è un input o una textarea, aggiorna il placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[key][lang];
        } else {
          el.textContent = translations[key][lang];
        }
      }
    });
    localStorage.setItem('language', lang);
    // Aggiorna la bandiera nel bubble
    document.querySelector('.flag-bubble').innerHTML = `<img src="${flagUrls[lang]}" alt="Bandiera" style="width:24px; height:auto;">`;
  }

// Listener per il cambio lingua dal menu
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const lang = this.getAttribute('data-lang');
    updateLanguage(lang);
    document.querySelector('.language-selector').classList.remove('open');
  });
});

// Imposta la lingua al caricamento della pagina (default: italiano)
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language') || 'it';
  updateLanguage(savedLang);
});





document.querySelector('.tour-search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene il comportamento predefinito del form
  
  // Recupera e "trimm" i valori dei campi
  const departure = document.getElementById('departure').value.trim();
  const destination = document.getElementById('destination').value.trim();
  const people = document.getElementById('people').value.trim();
  const checkin = document.getElementById('checkin').value.trim();
  const departureTime = document.getElementById('departureTime').value.trim();
  
  // Controlla se tutti i campi sono compilati
  if (!departure || !destination || !people || !checkin || !departureTime) {
    alert("Please fill out all the fields before sending your inquiry.");
    return;
  }
  
  // Recupera la lingua corrente, default "it" se non è stata impostata
  const lang = localStorage.getItem('language') || 'it';
  
  // Messaggio precompilato in base alla lingua scelta
  const messageTemplates = {
    it: `Ciao, sono interessato ad prenotare un servizio di transfer. Partirò da ${departure} e arriverò a ${destination}. Viaggeranno con me ${people} persone. La data di partenza è ${checkin} e l'orario previsto è ${departureTime}. Grazie per l'assistenza.`,
    en: `Hello, I am interested in booking a transfer service. I will be departing from ${departure} and heading towards ${destination}. There will be ${people} people traveling with me. Our planned departure date is ${checkin} and we intend to leave at ${departureTime}. Thank you for your assistance.`,
    es: `Hola, estoy interesado en reservar un servicio de transfer. Saldré desde ${departure} y me dirigiré hacia ${destination}. Viajarán conmigo ${people} personas. La fecha de salida es ${checkin} y la hora prevista es ${departureTime}. Gracias por su ayuda.`,
    fr: `Bonjour, je suis intéressé par la réservation d'un service de transfert. Je partirai de ${departure} et me dirigerai vers ${destination}. Il y aura ${people} personnes voyageant avec moi. La date de départ prévue est le ${checkin} et l'heure de départ est ${departureTime}. Merci pour votre aide.`
  };
  
  const message = messageTemplates[lang];
  
  // Inserisci il tuo numero WhatsApp in formato internazionale (senza il "+")
  const whatsappNumber = "393311703702"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Apre WhatsApp in una nuova scheda
  window.open(whatsappUrl, '_blank');
});








