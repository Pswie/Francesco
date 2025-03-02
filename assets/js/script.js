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
      fr: "Pour plus d'informations :",
      de: "Für weitere Informationen:",
      ru: "Для дополнительной информации:",
      zh: "有关更多信息："
    },
    heroTitle: {
      it: "Viaggia con Empathy",
      en: "Travel with Empathy",
      es: "Viaja con Empathy",
      fr: "Voyagez avec Empathy",
      de: "Reisen mit Empathy",
      ru: "Путешествуйте с Empathy",
      zh: "与 Empathy 一起旅行"
    },
    heroDescription: {
      it: "Empathy è la tua agenzia di tour e trasporti di fiducia. Offriamo esperienze di viaggio uniche, trasferimenti affidabili e tour personalizzati per farti scoprire il meglio di ogni destinazione, garantendo comfort e sicurezza in ogni spostamento.",
      en: "Empathy is your trusted tour and transfer agency. We offer unique travel experiences, reliable transfers, and personalized tours to help you discover the best of every destination, ensuring comfort and safety every step of the way.",
      es: "Empathy es tu agencia de tours y traslados de confianza. Ofrecemos experiencias de viaje únicas, traslados confiables y tours personalizados para que descubras lo mejor de cada destino, garantizando comodidad y seguridad en cada trayecto.",
      fr: "Empathy est votre agence de tours et de transferts de confiance. Nous offrons des expériences de voyage uniques, des transferts fiables et des tours personnalisés pour vous permettre de découvrir le meilleur de chaque destination, assurant confort et sécurité à chaque étape.",
      de: "Empathy ist Ihre vertrauenswürdige Reise- und Transferagentur. Wir bieten einzigartige Reiseerlebnisse, zuverlässige Transfers und personalisierte Touren, um Ihnen das Beste jedes Reiseziels zu zeigen und Komfort sowie Sicherheit bei jedem Schritt zu gewährleisten.",
      ru: "Empathy - ваше надежное агентство по организации туров и трансферов. Мы предлагаем уникальные впечатления от путешествий, надежные трансферы и индивидуальные туры, чтобы вы могли открыть для себя лучшее в каждом направлении, обеспечивая комфорт и безопасность на каждом шагу.",
      zh: "Empathy 是您值得信赖的旅游和接送机构。我们提供独特的旅行体验、可靠的接送服务和个性化的旅游线路，帮助您发现每个目的地的精华，确保您在旅途中的舒适和安全。"
    },
    learnMore: {
      it: "Servizio Transfer",
      en: "Transfer Service",
      es: "Servicio de Transfer",
      fr: "Service de Transfer",
      de: "Transferservice",
      ru: "Услуги трансфера",
      zh: "接送服务"
    },
    bookNow: {
      it: "Prenota ora",
      en: "Book now",
      es: "Reserva ahora",
      fr: "Réservez maintenant",
      de: "Jetzt buchen",
      ru: "Забронировать сейчас",
      zh: "立即预订"
    },
    sectionSubtitle: {
      it: "Esplora luoghi incantevoli",
      en: "Discover Enchanting Places",
      es: "Descubre lugares encantadores",
      fr: "Découvrez des lieux enchanteurs",
      de: "Entdecken Sie zauberhafte Orte",
      ru: "Откройте для себя очаровательные места",
      zh: "探索迷人的地方"
    },
    sectionTitle: {
      it: "Tour Popolari",
      en: "Popular Tour",
      es: "Tour Populares",
      fr: "Tour Populaires",
      de: "Beliebte Touren",
      ru: "Популярные туры",
      zh: "热门旅游线路"
    },
    sectionText: {
      it: "Scopri i luoghi incantevoli che offrono una combinazione unica di storia, cultura e paesaggi mozzafiato. Ogni destinazione racconta una storia diversa, invitandoti a vivere un'esperienza indimenticabile.",
      en: "Discover enchanting places that offer a unique combination of history, culture, and breathtaking landscapes. Each destination tells a different story, inviting you to experience an unforgettable adventure.",
      es: "Descubre lugares encantadores que ofrecen una combinación única de historia, cultura y paisajes impresionantes. Cada destino cuenta una historia diferente, invitándote a vivir una aventura inolvidable.",
      fr: "Découvrez des lieux enchanteurs offrant une combinaison unique d'histoire, de culture et de paysages à couper le souffle. Chaque destination raconte une histoire différente, vous invitant à vivre une aventure inoubliable.",
      de: "Entdecken Sie zauberhafte Orte, die eine einzigartige Kombination aus Geschichte, Kultur und atemberaubenden Landschaften bieten. Jedes Reiseziel erzählt eine andere Geschichte und lädt Sie ein, ein unvergessliches Abenteuer zu erleben.",
      ru: "Откройте для себя очаровательные места, которые предлагают уникальное сочетание истории, культуры и захватывающих дух пейзажей. Каждое направление рассказывает свою историю, приглашая вас пережить незабываемое приключение.",
      zh: "探索提供历史、文化和壮丽景观独特组合的迷人地方。每个目的地都讲述不同的故事，邀请您体验难忘的冒险。"
    },
    card1Subtitle: {
      it: "Napoli",
      en: "Naples",
      es: "Nápoles",
      fr: "Naples",
      de: "Neapel",
      ru: "Неаполь",
      zh: "那不勒斯"
    },
    card1Title: {
      it: "Pompei",
      en: "Pompeii",
      es: "Pompeya",
      fr: "Pompéi",
      de: "Pompeji",
      ru: "Помпеи",
      zh: "庞贝"
    },
    card1Text: {
      it: "Scopri le meraviglie storiche di Pompei, un sito archeologico unico dove l'antichità prende vita.",
      en: "Discover the historical wonders of Pompeii, a unique archaeological site where antiquity comes to life.",
      es: "Descubre las maravillas históricas de Pompeya, un sitio arqueológico único donde la antigüedad cobra vida.",
      fr: "Découvrez les merveilles historiques de Pompéi, un site archéologique unique où l'Antiquité prend vie.",
      de: "Entdecken Sie die historischen Wunder von Pompeji, einer einzigartigen archäologischen Stätte, an der die Antike zum Leben erwacht.",
      ru: "Откройте для себя исторические чудеса Помпеи, уникального археологического памятника, где оживает античность.",
      zh: "探索庞贝的历史奇迹，这是一个独特的考古遗址，古代在此栩栩如生。"
    },
    card2Subtitle: {
      it: "Napoli",
      en: "Naples",
      es: "Nápoles",
      fr: "Naples",
      de: "Neapel",
      ru: "Неаполь",
      zh: "那不勒斯"
    },
    card2Title: {
      it: "Vesuvio",
      en: "Vesuvius",
      es: "Vesubio",
      fr: "Vésuve",
      de: "Vesuv",
      ru: "Везувий",
      zh: "维苏威火山"
    },
    card2Text: {
      it: "Ammira la maestosità del Vesuvio, il vulcano imponente che domina il panorama napoletano e simboleggia la forza della natura.",
      en: "Admire the majesty of Vesuvius, the imposing volcano that dominates the Neapolitan skyline and symbolizes nature's power.",
      es: "Admira la majestuosidad del Vesubio, el imponente volcán que domina el horizonte napolitano y simboliza el poder de la naturaleza.",
      fr: "Admirez la majesté du Vésuve, le volcan imposant qui domine l'horizon napolitain et symbolise la puissance de la nature.",
      de: "Bewundern Sie die Majestät des Vesuvs, des imposanten Vulkans, der die Skyline Neapels beherrscht und die Kraft der Natur symbolisiert.",
      ru: "Восхититесь величием Везувия, внушительного вулкана, который доминирует над неаполитанским горизонтом и символизирует силу природы.",
      zh: "欣赏维苏威火山的雄伟，这座巍峨的火山主宰着那不勒斯的天际线，象征着大自然的力量。"
    },
    card3Subtitle: {
      it: "Salerno",
      en: "Salerno",
      es: "Salerno",
      fr: "Salerne",
      de: "Salerno",
      ru: "Салерно",
      zh: "萨莱诺"
    },
    card3Title: {
      it: "Costiera Amalfitana",
      en: "Amalfi Coast",
      es: "Costa Amalfitana",
      fr: "Côte Amalfitaine",
      de: "Amalfiküste",
      ru: "Амальфитанское побережье",
      zh: "阿马尔菲海岸"
    },
    card3Text: {
      it: "Esplora la splendida Costiera Amalfitana, con i suoi paesaggi mozzafiato e i villaggi pittoreschi, ideale per una vacanza indimenticabile.",
      en: "Explore the stunning Amalfi Coast, with its breathtaking landscapes and picturesque villages, perfect for an unforgettable vacation.",
      es: "Explora la impresionante Costa Amalfitana, con sus paisajes de ensueño y pintorescos pueblos, ideal para unas vacaciones inolvidables.",
      fr: "Explorez la splendide Côte Amalfitaine, avec ses paysages époustouflants et ses villages pittoresques, idéale pour des vacances inoubliables.",
      de: "Erkunden Sie die atemberaubende Amalfiküste mit ihren atemberaubenden Landschaften und malerischen Dörfern, ideal für einen unvergesslichen Urlaub.",
      ru: "Исследуйте потрясающее Амальфитанское побережье с его захватывающими дух пейзажами и живописными деревнями, идеально подходящими для незабываемого отпуска.",
      zh: "探索迷人的阿马尔菲海岸，欣赏令人叹为观止的景观和如画的村庄，是一次难忘度假的理想选择。"
    },
    buttonText: {
      it: "Altri Tour",
      en: "More Tour",
      es: "Más Tour",
      fr: "Plus de Tour",
      de: "Weitere Touren",
      ru: "Больше туров",
      zh: "更多旅游"
    },
    navHome: {
      it: "home",
      en: "home",
      es: "inicio",
      fr: "accueil",
      de: "Startseite",
      ru: "главная",
      zh: "首页"
    },
    navAbout: {
      it: "chi siamo",
      en: "about us",
      es: "sobre nosotros",
      fr: "à propos",
      de: "über uns",
      ru: "о нас",
      zh: "关于我们"
    },
    navDestination: {
      it: "Tour",
      en: "Tour",
      es: "Tour",
      fr: "Tour",
      de: "Tour",
      ru: "Тур",
      zh: "旅游"
    },
    navPackages: {
      it: "prenotazioni",
      en: "bookings",
      es: "reservas",
      fr: "réservations",
      de: "Buchungen",
      ru: "бронирования",
      zh: "预订"
    },
    navGallery: {
      it: "galleria",
      en: "gallery",
      es: "galería",
      fr: "galerie",
      de: "Galerie",
      ru: "галерея",
      zh: "画廊"
    },
    navContact: {
      it: "contattaci",
      en: "contact us",
      es: "contáctanos",
      fr: "contactez-nous",
      de: "kontaktiere uns",
      ru: "свяжитесь с нами",
      zh: "联系我们"
    },
    navBookNow: {
      it: "prenota ora",
      en: "Book Now",
      es: "reservar ahora",
      fr: "réservez maintenant",
      de: "Jetzt buchen",
      ru: "Бронировать сейчас",
      zh: "立即预订"
    },
    navService: { 
      it: "servizi",
      en: "services",
      es: "servicios",
      fr: "services",
      de: "Dienstleistungen",
      ru: "услуги",
      zh: "服务"
    },
  

    // Sezione Package
    packageSectionSubtitle: {
      it: "Tour e Attività in Campania",
      en: "Exciting Tour Packages in Campania",
      es: "Paquetes de Tours Emocionantes en Campania",
      fr: "Forfaits Tour Passionnants en Campanie",
      de: "Aufregende Tourpakete in Kampanien",
      ru: "Увлекательные туры по Кампании",
      zh: "坎帕尼亚地区精彩旅游套餐"
    },
    packageSectionTitle: {
      it: "Scopri la Regione",
      en: "Discover the Region",
      es: "Descubre la Región",
      fr: "Découvrez la Région",
      de: "Entdecken Sie die Region",
      ru: "Откройте для себя регион",
      zh: "探索这个地区"
    },
    packageSectionText: {
      it: "Vivi un'esperienza unica esplorando i tesori storici e naturali della Campania: Cilento, Pompei, Napoli, la Costiera Amalfitana e molto altro ancora.",
      en: "Experience a unique journey exploring the historical and natural treasures of Campania: Cilento, Pompeii, Naples, the Amalfi Coast, and much more.",
      es: "Vive una experiencia única explorando los tesoros históricos y naturales de Campania: Cilento, Pompeya, Nápoles, la Costa Amalfitana y mucho más.",
      fr: "Vivez une expérience unique en explorant les trésors historiques et naturels de la Campanie: Cilento, Pompéi, Naples, la Côte Amalfitaine, et bien plus encore.",
      de: "Erleben Sie eine einzigartige Reise und entdecken Sie die historischen und natürlichen Schätze Kampaniens: Cilento, Pompeji, Neapel, die Amalfiküste und vieles mehr.",
      ru: "Совершите уникальное путешествие, исследуя исторические и природные сокровища Кампании: Чиленто, Помпеи, Неаполь, побережье Амальфи и многое другое.",
      zh: "体验独特的旅程，探索坎帕尼亚地区的历史和自然宝藏：奇伦托、庞贝、那不勒斯、阿马尔菲海岸等等。"
    },
    tour1Title: {
      it: "Tour Storico di Pompei",
      en: "Historical Tour of Pompeii",
      es: "Tour Histórico de Pompeya",
      fr: "Tour Historique de Pompéi",
      de: "Historische Tour durch Pompeji",
      ru: "Исторический тур по Помпеям",
      zh: "庞贝历史之旅"
    },
    tour1Text: {
      it: "Esplora il sito archeologico di Pompei e immergiti nella storia antica, visitando rovine mozzafiato e scoprendo leggende millenarie.",
      en: "Explore the archaeological site of Pompeii and immerse yourself in ancient history, visiting breathtaking ruins and uncovering millennial legends.",
      es: "Explora el sitio arqueológico de Pompeya y sumérgete en la historia antigua, visitando ruinas impresionantes y descubriendo leyendas milenarias.",
      fr: "Découvrez le site archéologique de Pompéi et plongez dans l'histoire antique en visitant des ruines époustouflantes et en découvrant des légendes millénaires.",
      de: "Erkunden Sie die archäologische Stätte von Pompeji und tauchen Sie ein in die antike Geschichte, besuchen Sie atemberaubende Ruinen und entdecken Sie jahrtausendealte Legenden.",
      ru: "Исследуйте археологический памятник Помпеи и погрузитесь в древнюю историю, посещая захватывающие дух руины и раскрывая тысячелетние легенды.",
      zh: "探索庞贝考古遗址，沉浸在古代历史中，参观令人叹为观止的遗迹，揭开千年传说。"
    },
    tour1Price: {
      it: "$700",
      en: "$700",
      es: "$700",
      fr: "$700",
      de: "$700",
      ru: "$700",
      zh: "$700"
    },
    tour1Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant",
      de: "Jetzt Buchen",
      ru: "Забронировать",
      zh: "立即预订"
    },
    tour2Title: {
      it: "Avventura sul Vesuvio",
      en: "Vesuvius Adventure",
      es: "Aventura por el Vesubio",
      fr: "Aventure sur le Vésuve",
      de: "Abenteuer auf dem Vesuv",
      ru: "Приключение на Везувии",
      zh: "维苏威火山探险"
    },
    tour2Text: {
      it: "Scopri l'imponenza del Vesuvio con un'escursione guidata, ammirando panorami spettacolari sulla città di Napoli.",
      en: "Discover the grandeur of Vesuvius with a guided hike, enjoying spectacular views over Naples.",
      es: "Descubre la grandeza del Vesubio con una excursión guiada, disfrutando de vistas espectaculares sobre Nápoles.",
      fr: "Découvrez la grandeur du Vésuve lors d'une randonnée guidée offrant des vues spectaculaires sur Naples.",
      de: "Entdecken Sie die Großartigkeit des Vesuvs bei einer geführten Wanderung und genießen Sie spektakuläre Ausblicke auf Neapel.",
      ru: "Откройте для себя величие Везувия во время пешеходной экскурсии, наслаждаясь потрясающими видами на Неаполь.",
      zh: "参加导览徒步，探索维苏威火山的宏伟，欣赏那不勒斯的壮观景色。"
    },
    tour2Price: {
      it: "$650",
      en: "$650",
      es: "$650",
      fr: "$650",
      de: "$650",
      ru: "$650",
      zh: "$650"
    },
    tour2Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant",
      de: "Jetzt Buchen",
      ru: "Забронировать",
      zh: "立即预订"
    },
    tour3Title: {
      it: "Tour della Costiera Amalfitana",
      en: "Amalfi Coast Tour",
      es: "Tour por la Costa Amalfitana",
      fr: "Tour de la Côte Amalfitaine",
      de: "Tour entlang der Amalfiküste",
      ru: "Тур по Амальфитанскому побережью",
      zh: "阿马尔菲海岸之旅"
    },
    tour3Text: {
      it: "Percorri le strade panoramiche della Costiera Amalfitana, visita borghi pittoreschi e gusta le prelibatezze locali.",
      en: "Drive along the panoramic roads of the Amalfi Coast, visit picturesque villages, and savor local delicacies.",
      es: "Recorre las carreteras panorámicas de la Costa Amalfitana, visita pueblos pintorescos y degusta las delicias locales.",
      fr: "Parcourez les routes panoramiques de la Côte Amalfitaine, visitez des villages pittoresques et savourez les spécialités locales.",
      de: "Fahren Sie entlang der Panoramastraßen der Amalfiküste, besuchen Sie malerische Dörfer und genießen Sie lokale Köstlichkeiten.",
      ru: "Проедьте по панорамным дорогам побережья Амальфи, посетите живописные деревушки и отведайте местные деликатесы.",
      zh: "沿着阿马尔菲海岸的全景公路驾驶，参观如画的村庄，品尝当地美食。"
    },
    tour3Price: {
      it: "$800",
      en: "$800",
      es: "$800",
      fr: "$800",
      de: "$800",
      ru: "$800",
      zh: "$800"
    },
    tour3Button: {
      it: "Prenota Ora",
      en: "Book Now",
      es: "Reservar Ahora",
      fr: "Réservez Maintenant",
      de: "Jetzt Buchen",
      ru: "Забронировать",
      zh: "立即预订"
    },
    perPerson: {
      it: "/ per persona",
      en: "/ per person",
      es: "/ por persona",
      fr: "/ par personne",
      de: "/ pro Person",
      ru: "/ на человека",
      zh: "/ 每人"
    },
    viewAllTours: {
      it: "Visualizza Tutti i Tour",
      en: "View All Tours",
      es: "Ver Todos los Tours",
      fr: "Voir Tous les Tours",
      de: "Alle Touren Ansehen",
      ru: "Посмотреть все туры",
      zh: "查看所有旅游"
    },

    ctaSubtitle: {
      it: "Servizio Transfer",
      en: "Transfer Service",
      es: "Servicio de Transfer",
      fr: "Service de Transfer",
      de: "Transferservice",
      ru: "Трансферные услуги",
      zh: "接送服务"
    },
    ctaTitle: {
      it: "Viaggia con Comfort e Sicurezza. Siamo a Tua Disposizione!",
      en: "Travel with Comfort and Safety. We Are at Your Service!",
      es: "Viaja con Comodidad y Seguridad. ¡Estamos a Tu Disposición!",
      fr: "Voyagez avec Confort et Sécurité. Nous Sommes à Votre Service!",
      de: "Reisen Sie mit Komfort und Sicherheit. Wir stehen zu Ihren Diensten!",
      ru: "Путешествуйте с комфортом и безопасностью. Мы к вашим услугам!",
      zh: "舒适安全地旅行。我们随时为您服务！"
    },
    ctaText: {
      it: "Offriamo un servizio Transfer professionale e affidabile per i tuoi spostamenti. Dall'aeroporto agli hotel, dalle visite guidate alle escursioni personalizzate, garantiamo un viaggio confortevole e puntuale con autisti esperti e veicoli moderni.",
      en: "We offer a professional and reliable Transfer service for your travels. From the airport to hotels, guided tours, and personalized excursions, we ensure a comfortable and punctual ride with expert drivers and modern vehicles.",
      es: "Ofrecemos un servicio de Transfer profesional y confiable para tus desplazamientos. Desde el aeropuerto hasta los hoteles, visitas guiadas y excursiones personalizadas, garantizamos un viaje cómodo y puntual con conductores expertos y vehículos modernos.",
      fr: "Nous offrons un service de Transfer professionnel et fiable pour vos déplacements. De l'aéroport aux hôtels, des visites guidées aux excursions personnalisées, nous garantissons un trajet confortable et ponctuel avec des chauffeurs expérimentés et des véhicules modernes.",
      de: "Wir bieten einen professionellen und zuverlässigen Transferservice für Ihre Reisen. Vom Flughafen zu Hotels, geführten Touren und individuellen Ausflügen garantieren wir eine komfortable und pünktliche Fahrt mit erfahrenen Fahrern und modernen Fahrzeugen.",
      ru: "Мы предлагаем профессиональные и надежные услуги трансфера для ваших поездок. От аэропорта до отелей, экскурсий и индивидуальных поездок, мы гарантируем комфортное и пунктуальное путешествие с опытными водителями и современными автомобилями.",
      zh: "我们为您的旅行提供专业可靠的接送服务。从机场到酒店，从导游游览到个性化旅游，我们保证通过专业司机和现代车辆提供舒适准时的旅程。"
    },
    ctaButton: {
      it: "Contattaci Ora!",
      en: "Contact Us Now!",
      es: "¡Contáctanos Ahora!",
      fr: "Contactez-Nous Maintenant!",
      de: "Kontaktieren Sie uns jetzt!",
      ru: "Свяжитесь с нами сейчас!",
      zh: "立即联系我们！"
    },



     // Chiavi per i placeholder dei form
    labelDeparture: {
     it: "Partenza*",
     en: "Departure*",
     es: "Salida*",
     fr: "Départ*",
     de: "Abfahrt*",
     ru: "Отправление*",
     zh: "出发地*"
      },
      labelDestination: {
     it: "Destinazione*",
     en: "Destination*",
     es: "Destino*",
     fr: "Destination*",
     de: "Ziel*",
     ru: "Назначение*",
     zh: "目的地*"
      },
      labelPeople: {
     it: "Numero di Persone*",
     en: "Number of People*",
     es: "Número de personas*",
     fr: "Nombre de personnes*",
     de: "Anzahl der Personen*",
     ru: "Количество человек*",
     zh: "人数*"
      },
      labelCheckin: {
     it: "Data Partenza**",
     en: "Departure Date**",
     es: "Fecha de Salida**",
     fr: "Date de Départ**",
     de: "Abfahrtsdatum**",
     ru: "Дата отправления**",
     zh: "出发日期**"
      },
      labelDepartureTime: {
     it: "Ora Partenza**",
     en: "Departure Time**",
     es: "Hora de Salida**",
     fr: "Heure de Départ**",
     de: "Abfahrtszeit**",
     ru: "Время отправления**",
     zh: "出发时间**"
      },
      // Placeholder degli input
      placeholderDeparture: {
     it: "Inserisci Partenza",
     en: "Enter Departure",
     es: "Ingrese Salida",
     fr: "Entrez Départ",
     de: "Abfahrtsort eingeben",
     ru: "Введите место отправления",
     zh: "输入出发地"
      },
      placeholderDestination: {
     it: "Inserisci Destinazione",
     en: "Enter Destination",
     es: "Ingrese Destino",
     fr: "Entrez Destination",
     de: "Zielort eingeben",
     ru: "Введите место назначения",
     zh: "输入目的地"
      },
      placeholderPeople: {
     it: "Inserisci numero di persone",
     en: "Enter Number of People",
     es: "Ingrese número de personas",
     fr: "Entrez le nombre de personnes",
     de: "Anzahl der Personen eingeben",
     ru: "Введите количество человек",
     zh: "输入人数"
      },
      placeholderCheckin: {
     it: "Seleziona Data Partenza",
     en: "Select Departure Date",
     es: "Selecciona Fecha de Salida",
     fr: "Sélectionnez la date de départ",
     de: "Abfahrtsdatum auswählen",
     ru: "Выберите дату отправления",
     zh: "选择出发日期"
      },
      placeholderDepartureTime: {
     it: "Seleziona Ora Partenza",
     en: "Select Departure Time",
     es: "Selecciona Hora de Salida",
     fr: "Sélectionnez l'heure de départ",
     de: "Abfahrtszeit auswählen",
     ru: "Выберите время отправления",
     zh: "选择出发时间"
      },
      // Bottone del form
      inquireNow: {
     it: "Richiedi Informazioni",
     en: "Inquire Now",
     es: "Solicitar información",
     fr: "Demandez maintenant",
     de: "Jetzt anfragen",
     ru: "Запросить информацию",
     zh: "立即咨询"
      },
      // Sezione Tour Pompei
   
     // Sezione Tour Pompei
     tourPompeiAmalfiTitle: {
       it: "Pompei e Costiera Amalfitana",
       en: "Pompeii and Amalfi Coast",
       es: "Pompeya y Costa Amalfitana",
       fr: "Pompéi et la Côte Amalfitaine",
       de: "Pompeji und Amalfiküste",
       ru: "Помпеи и Амальфитанское побережье",
       zh: "庞贝和阿马尔菲海岸"
     },
     tourPompeiAmalfiText: {
       it: "Immergiti nella cultura italiana con un tour che combina la storia di Pompei con la bellezza della Costiera Amalfitana.",
       en: "Immerse yourself in Italian culture with a tour that combines the history of Pompeii with the beauty of the Amalfi Coast.",
       es: "Sumérgete en la cultura italiana con un recorrido que combina la historia de Pompeya con la belleza de la Costa Amalfitana.",
       fr: "Imprégnez-vous de la culture italienne avec une visite qui combine l'histoire de Pompéi avec la beauté de la Côte Amalfitaine.",
       de: "Tauchen Sie ein in die italienische Kultur mit einer Tour, die die Geschichte von Pompeji mit der Schönheit der Amalfiküste verbindet.",
       ru: "Погрузитесь в итальянскую культуру с экскурсией, которая сочетает историю Помпей с красотой Амальфитанского побережья.",
       zh: "通过这次旅行，沉浸在意大利文化中，将庞贝的历史与阿马尔菲海岸的美景完美结合。"
     },
      
     tourPompeiMuseoTitle: {
       it: "Pompei e Museo Archeologico di Napoli",
       en: "Pompeii and Naples Archaeological Museum",
       es: "Pompeya y Museo Arqueológico de Nápoles",
       fr: "Pompéi et Musée Archéologique de Naples",
       de: "Pompeji und Archäologisches Museum von Neapel",
       ru: "Помпеи и Археологический музей Неаполя",
       zh: "庞贝和那不勒斯考古博物馆"
     },
     tourPompeiMuseoText: {
       it: "Scopri i tesori dell'antica Roma con un tour che include le rovine di Pompei e le incredibili collezioni del Museo Archeologico di Napoli.",
       en: "Discover the treasures of ancient Rome with a tour that includes the ruins of Pompeii and the incredible collections of the Naples Archaeological Museum.",
       es: "Descubre los tesoros de la antigua Roma con un recorrido que incluye las ruinas de Pompeya y las increíbles colecciones del Museo Arqueológico de Nápoles.",
       fr: "Découvrez les trésors de la Rome antique avec une visite qui comprend les ruines de Pompéi et les collections incroyables du Musée Archéologique de Naples.",
       de: "Entdecken Sie die Schätze des antiken Roms bei einer Tour, die die Ruinen von Pompeji und die unglaublichen Sammlungen des Archäologischen Museums von Neapel umfasst.",
       ru: "Откройте для себя сокровища Древнего Рима в ходе экскурсии, включающей руины Помпей и потрясающие коллекции Археологического музея Неаполя.",
       zh: "探索古罗马的宝藏，这次旅行包括参观庞贝遗址和那不勒斯考古博物馆令人难以置信的收藏。"
     },
      
     tourPompeiErcolanoTitle: {
       it: "Pompei ed Ercolano",
       en: "Pompeii and Herculaneum",
       es: "Pompeya y Herculano",
       fr: "Pompéi et Herculanum",
       de: "Pompeji und Herculaneum",
       ru: "Помпеи и Геркуланум",
       zh: "庞贝和赫库兰尼姆"
     },
     tourPompeiErcolanoText: {
       it: "Scopri due città antiche perfettamente conservate dopo l'eruzione del Vesuvio del 79 d.C. in un affascinante viaggio nel passato.",
       en: "Discover two ancient cities perfectly preserved after the eruption of Vesuvius in 79 AD on a fascinating journey into the past.",
       es: "Descubre dos ciudades antiguas perfectamente conservadas después de la erupción del Vesubio en el año 79 d.C. en un fascinante viaje al pasado.",
       fr: "Découvrez deux villes antiques parfaitement conservées après l'éruption du Vésuve en 79 après J.-C. lors d'un fascinant voyage dans le passé.",
       de: "Entdecken Sie zwei perfekt erhaltene antike Städte nach dem Ausbruch des Vesuvs im Jahr 79 n. Chr. auf einer faszinierenden Reise in die Vergangenheit.",
       ru: "Откройте для себя два прекрасно сохранившихся древних города после извержения Везувия 79 г. н.э. в увлекательном путешествии в прошлое.",
       zh: "在这次引人入胜的穿越之旅中，探索在公元79年维苏威火山爆发后完好保存的两座古城。"
     },
      
     tourPompeiVesuvioTitle: {
       it: "Pompei e Vesuvio",
       en: "Pompeii and Mount Vesuvius",
       es: "Pompeya y el Monte Vesubio",
       fr: "Pompéi et le Mont Vésuve",
       de: "Pompeji und Vesuv",
       ru: "Помпеи и Везувий",
       zh: "庞贝和维苏威火山"
     },
     tourPompeiVesuvioText: {
       it: "Esplora le meraviglie di Pompei e sali sulla cima del Vesuvio per una vista mozzafiato sul Golfo di Napoli.",
       en: "Explore the wonders of Pompeii and climb to the top of Mount Vesuvius for a breathtaking view of the Gulf of Naples.",
       es: "Explora las maravillas de Pompeya y sube a la cima del Monte Vesubio para disfrutar de una vista impresionante del Golfo de Nápoles.",
       fr: "Explorez les merveilles de Pompéi et montez au sommet du Mont Vésuve pour une vue imprenable sur le golfe de Naples.",
       de: "Erkunden Sie die Wunder von Pompeji und besteigen Sie den Gipfel des Vesuvs für einen atemberaubenden Blick auf den Golf von Neapel.",
       ru: "Исследуйте чудеса Помпей и поднимитесь на вершину Везувия, чтобы насладиться захватывающим видом на Неаполитанский залив.",
       zh: "探索庞贝的奇迹，并攀登维苏威火山顶峰，欣赏那不勒斯湾令人叹为观止的景色。"
     },
      
     tourPompeiSorrentoTitle: {
       it: "Pompei e Sorrento",
       en: "Pompeii and Sorrento",
       es: "Pompeya y Sorrento",
       fr: "Pompéi et Sorrente",
       de: "Pompeji und Sorrent",
       ru: "Помпеи и Сорренто",
       zh: "庞贝和索伦托"
     },
     tourPompeiSorrentoText: {
       it: "Visita la storica città di Pompei e poi rilassati nel meraviglioso paesaggio di Sorrento, tra limoneti e vista mare.",
       en: "Visit the historic city of Pompeii and then relax in the beautiful scenery of Sorrento, with its lemon groves and sea views.",
       es: "Visita la histórica ciudad de Pompeya y luego relájate en el maravilloso paisaje de Sorrento, entre limoneros y vistas al mar.",
       fr: "Visitez la ville historique de Pompéi puis détendez-vous dans le magnifique paysage de Sorrente, entre vergers de citronniers et vue sur la mer.",
       de: "Besuchen Sie die historische Stadt Pompeji und entspannen Sie anschließend in der wunderschönen Landschaft von Sorrent, zwischen Zitronenhainen und Meerblick.",
       ru: "Посетите исторический город Помпеи, а затем расслабьтесь в прекрасных пейзажах Сорренто, среди лимонных рощ с видом на море.",
       zh: "参观历史悠久的庞贝古城，然后在索伦托美丽的风景中放松，那里有柠檬园和海景。"
     },
      
     tourPompeiHalfDayTitle: {
       it: "Pompei Mezza Giornata",
       en: "Pompeii Half Day",
       es: "Pompeya Medio Día",
       fr: "Pompéi Demi-journée",
       de: "Pompeji Halbtagesausflug",
       ru: "Помпеи - полдня",
       zh: "庞贝半日游"
     },
     tourPompeiHalfDayText: {
       it: "Scopri Pompei in un tour breve ma intenso, perfetto per chi ha poco tempo ma vuole esplorare le rovine più famose d'Italia.",
       en: "Discover Pompeii in a short but intense tour, perfect for those with limited time who want to explore Italy's most famous ruins.",
       es: "Descubre Pompeya en un recorrido corto pero intenso, ideal para quienes tienen poco tiempo pero desean explorar las ruinas más famosas de Italia.",
       fr: "Découvrez Pompéi lors d'une visite courte mais intense, idéale pour ceux qui disposent de peu de temps mais souhaitent explorer les ruines les plus célèbres d'Italie.",
       de: "Entdecken Sie Pompeji bei einer kurzen, aber intensiven Tour, perfekt für diejenigen, die wenig Zeit haben, aber die berühmtesten Ruinen Italiens erkunden möchten.",
       ru: "Откройте для себя Помпеи в ходе короткой, но насыщенной экскурсии, идеально подходящей для тех, у кого мало времени, но есть желание исследовать самые известные руины Италии.",
       zh: "通过这次简短但内容丰富的旅行探索庞贝，非常适合时间有限但想要探索意大利最著名遗址的游客。"
     },
    
      // Nuovi tour da aggiungere
      tourPompeiErcolanoVesuvioTitle: {
        it: "Pompei, Ercolano e Vesuvio",
        en: "Pompeii, Herculaneum and Vesuvius",
        es: "Pompeya, Herculano y Vesubio",
        fr: "Pompéi, Herculanum et Vésuve",
        de: "Pompeji, Herculaneum und Vesuv",
        ru: "Помпеи, Геркуланум и Везувий",
        zh: "庞贝、赫库兰尼姆和维苏威火山"
      },
      tourPompeiErcolanoVesuvioText: {
        it: "Visita i due siti archeologici meglio conservati al mondo e sali sul Vesuvio per godere di un panorama spettacolare.",
        en: "Visit the two best-preserved archaeological sites in the world and climb Mount Vesuvius to enjoy a spectacular view.",
        es: "Visita los dos sitios arqueológicos mejor conservados del mundo y sube al Vesubio para disfrutar de una vista espectacular.",
        fr: "Visitez les deux sites archéologiques les mieux conservés au monde et montez sur le Vésuve pour profiter d'une vue spectaculaire.",
        de: "Besuchen Sie die beiden am besten erhaltenen archäologischen Stätten der Welt und besteigen Sie den Vesuv, um einen spektakulären Ausblick zu genießen.",
        ru: "Посетите два наиболее хорошо сохранившихся археологических памятника в мире и поднимитесь на Везувий, чтобы насладиться захватывающим видом.",
        zh: "参观世界上保存最完好的两个考古遗址，并爬上维苏威火山欣赏壮观的景色。"
      },
        
      tourPompeiVesuvioWineTitle: {
        it: "Pompei, Vesuvio e Degustazione di Vini",
        en: "Pompeii, Vesuvius and Wine Tasting",
        es: "Pompeya, Vesubio y Degustación de Vinos",
        fr: "Pompéi, Vésuve et Dégustation de Vins",
        de: "Pompeji, Vesuv und Weinverkostung",
        ru: "Помпеи, Везувий и дегустация вин",
        zh: "庞贝、维苏威火山和葡萄酒品鉴"
      },
      tourPompeiVesuvioWineText: {
        it: "Un tour che unisce storia, natura e sapori: visita Pompei, sali sul Vesuvio e concludi la giornata con una degustazione di vini locali.",
        en: "A tour that combines history, nature, and flavors: visit Pompeii, climb Vesuvius, and end your day with a tasting of local wines.",
        es: "Un tour que combina historia, naturaleza y sabores: visita Pompeya, sube al Vesubio y termina el día con una degustación de vinos locales.",
        fr: "Un tour qui allie histoire, nature et saveurs : visitez Pompéi, montez sur le Vésuve et terminez la journée par une dégustation de vins locaux.",
        de: "Eine Tour, die Geschichte, Natur und Geschmack verbindet: Besuchen Sie Pompeji, besteigen Sie den Vesuv und beenden Sie Ihren Tag mit einer Verkostung lokaler Weine.",
        ru: "Тур, сочетающий историю, природу и вкусы: посетите Помпеи, поднимитесь на Везувий и завершите день дегустацией местных вин.",
        zh: "一次结合历史、自然和美食的旅行：参观庞贝，攀登维苏威火山，以当地葡萄酒品鉴结束您的一天。"
      },
        
      tourPompeiVesuvioWinePremiumTitle: {
        it: "Pompei, Vesuvio e Degustazione di Vini Premium",
        en: "Pompeii, Vesuvius and Premium Wine Tasting",
        es: "Pompeya, Vesubio y Degustación de Vinos Premium",
        fr: "Pompéi, Vésuve et Dégustation de Vins Premium",
        de: "Pompeji, Vesuv und Premium-Weinverkostung",
        ru: "Помпеи, Везувий и дегустация премиальных вин",
        zh: "庞贝、维苏威火山和高级葡萄酒品鉴"
      },
      tourPompeiVesuvioWinePremiumText: {
        it: "Un'esperienza esclusiva che combina la storia di Pompei, la vista mozzafiato dal Vesuvio e una degustazione di vini pregiati in una cantina locale.",
        en: "An exclusive experience that combines the history of Pompeii, breathtaking views from Vesuvius, and a tasting of premium wines at a local winery.",
        es: "Una experiencia exclusiva que combina la historia de Pompeya, la impresionante vista del Vesubio y una degustación de vinos premium en una bodega local.",
        fr: "Une expérience exclusive qui allie l'histoire de Pompéi, une vue imprenable depuis le Vésuve et une dégustation de vins premium dans une cave locale.",
        de: "Ein exklusives Erlebnis, das die Geschichte von Pompeji, atemberaubende Aussichten vom Vesuv und eine Verkostung erlesener Weine in einem lokalen Weingut kombiniert.",
        ru: "Эксклюзивный опыт, сочетающий историю Помпей, захватывающие дух виды с Везувия и дегустацию премиальных вин в местной винодельне.",
        zh: "一次独特体验，结合庞贝的历史，从维苏威火山欣赏令人叹为观止的景色，以及在当地酒庄品尝优质葡萄酒。"
      },
      pompeiSectionSubtitle: {
        it: "Tour e Attività a Pompei",
        en: "Tours and Activities in Pompeii",
        es: "Tours y Actividades en Pompeya",
        fr: "Tours et Activités à Pompéi",
        de: "Touren und Aktivitäten in Pompeji",
        ru: "Туры и мероприятия в Помпеях",
        zh: "庞贝旅游和活动"
      },
      pompeiSectionTitle: {
        it: "Esplora l'Antica Pompei",
        en: "Explore Ancient Pompeii",
        es: "Explora la Antigua Pompeya",
        fr: "Explorez l'Ancienne Pompéi",
        de: "Erkunden Sie das antike Pompeji",
        ru: "Исследуйте древние Помпеи",
        zh: "探索古庞贝"
      },
      pompeiSectionText: {
        it: "Vivi l'emozione di immergerti nella storia di Pompei, visitando rovine antiche e scoprendo la vita quotidiana di un tempo passato.",
        en: "Experience the thrill of immersing yourself in Pompeii's history, visiting ancient ruins and uncovering everyday life from a bygone era.",
        es: "Vive la emoción de sumergirte en la historia de Pompeya, visitando antiguas ruinas y descubriendo la vida cotidiana de tiempos pasados.",
        fr: "Vivez l'émotion de vous plonger dans l'histoire de Pompéi, en visitant d'anciennes ruines et en découvrant la vie quotidienne d'une époque révolue.",
        de: "Erleben Sie den Nervenkitzel, in die Geschichte von Pompeji einzutauchen, antike Ruinen zu besichtigen und den Alltag einer vergangenen Zeit zu entdecken.",
        ru: "Испытайте волнение от погружения в историю Помпей, посещения древних руин и знакомства с повседневной жизнью ушедшей эпохи.",
        zh: "体验沉浸在庞贝历史中的激动，参观古代遗迹，探索逝去时代的日常生活。"
      },

      tourCilentoTitle: {
        it: "Avventura nel Cilento",
        en: "Adventure in Cilento",
        es: "Aventura en Cilento",
        fr: "Aventure dans le Cilento",
        de: "Abenteuer in Cilento",
        ru: "Приключения в Чиленто",
        zh: "奇伦托探险"
      },
      tourCilentoText: {
        it: "Esplora le bellezze naturali e la cultura autentica del Cilento con un tour immersivo in tra paesaggi mozzafiato.",
        en: "Explore the natural beauty and authentic culture of Cilento with an immersive tour through breathtaking landscapes.",
        es: "Explora la belleza natural y la cultura auténtica del Cilento con un tour inmersivo a través de paisajes impresionantes.",
        fr: "Explorez la beauté naturelle et la culture authentique du Cilento lors d'une visite immersive à travers des paysages à couper le souffle.",
        de: "Erkunden Sie die natürliche Schönheit und authentische Kultur von Cilento mit einer immersiven Tour durch atemberaubende Landschaften.",
        ru: "Исследуйте природную красоту и подлинную культуру Чиленто во время иммерсивного тура по захватывающим дух ландшафтам.",
        zh: "通过身临其境的旅行，探索奇伦托地区壮丽景观中的自然美景和原汁原味的文化。"
      },
      tourCilentoButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant",
        de: "Jetzt Buchen",
        ru: "Забронировать сейчас",
        zh: "立即预订"
      },


      tourSorrentoTitle: {
        it: "Esplora Sorrento",
        en: "Explore Sorrento",
        es: "Explora Sorrento",
        fr: "Explorez Sorrento",
        de: "Erkunden Sie Sorrent",
        ru: "Исследуйте Сорренто",
        zh: "探索索伦托"
      },
      tourSorrentoText: {
        it: "Goditi la magia di Sorrento, tra panorami mozzafiato e l'atmosfera rilassante della costa sorrentina.",
        en: "Enjoy the magic of Sorrento, with breathtaking views and the relaxing atmosphere of the Sorrentine coast.",
        es: "Disfruta de la magia de Sorrento, con vistas impresionantes y el ambiente relajante de la costa de Sorrento.",
        fr: "Profitez de la magie de Sorrento, avec des vues à couper le souffle et l'atmosphère relaxante de la côte de Sorrento.",
        de: "Genießen Sie den Zauber von Sorrent mit atemberaubenden Ausblicken und der entspannenden Atmosphäre der sorrentinischen Küste.",
        ru: "Наслаждайтесь волшебством Сорренто с его захватывающими видами и расслабляющей атмосферой побережья Сорренто.",
        zh: "享受索伦托的魔力，欣赏令人叹为观止的美景和索伦托海岸的轻松氛围。"
      },
      tourSorrentoButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant",
        de: "Jetzt Buchen",
        ru: "Забронировать сейчас",
        zh: "立即预订"
      },


      tourNapoliTitle: {
        it: "Scopri Napoli",
        en: "Discover Naples",
        es: "Descubre Nápoles",
        fr: "Découvrez Naples",
        de: "Entdecken Sie Neapel",
        ru: "Откройте для себя Неаполь",
        zh: "探索那不勒斯"
      },
      tourNapoliText: {
        it: "Immergiti nell'energia di Napoli, esplorando il suo ricco patrimonio culturale e la vibrante vita urbana.",
        en: "Immerse yourself in the energy of Naples, exploring its rich cultural heritage and vibrant urban life.",
        es: "Sumérgete en la energía de Nápoles, explorando su rico patrimonio cultural y la vibrante vida urbana.",
        fr: "Imprégnez-vous de l'énergie de Naples, en explorant son riche patrimoine culturel et sa vie urbaine vibrante.",
        de: "Tauchen Sie ein in die Energie Neapels, erkunden Sie sein reiches kulturelles Erbe und das pulsierende Stadtleben.",
        ru: "Погрузитесь в энергию Неаполя, исследуя его богатое культурное наследие и яркую городскую жизнь.",
        zh: "沉浸在那不勒斯的活力中，探索其丰富的文化遗产和充满活力的城市生活。"
      },
      tourNapoliButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserva Ahora",
        fr: "Réservez Maintenant",
        de: "Jetzt Buchen",
        ru: "Забронировать сейчас",
        zh: "立即预订"
      },

      tourButton1: {
        it: "Visualizza Tutti i Tour",
        en: "View All Tours",
        es: "Ver Todos los Tours",
        fr: "Voir Tous les Tours",
        de: "Alle Touren Ansehen",
        ru: "Посмотреть все туры",
        zh: "查看所有旅游"
      },



      // Sezione Amalfi

      amalfiSectionSubtitle: {
        it: "Tour e Attività ad Amalfi",
        en: "Tours and Activities in Amalfi",
        es: "Tours y Actividades en Amalfi",
        fr: "Circuits et Activités à Amalfi",
        de: "Touren und Aktivitäten in Amalfi",
        ru: "Туры и мероприятия в Амальфи",
        zh: "阿马尔菲旅游和活动"
      },
      amalfiSectionTitle: {
        it: "Scopri la Magia della Costiera Amalfitana",
        en: "Discover the Magic of the Amalfi Coast",
        es: "Descubre la Magia de la Costa Amalfitana",
        fr: "Découvrez la Magie de la Côte Amalfitaine",
        de: "Entdecken Sie den Zauber der Amalfiküste",
        ru: "Откройте для себя волшебство побережья Амальфи",
        zh: "探索阿马尔菲海岸的魔力"
      },
      amalfiSectionText: {
        it: "Esplora panorami mozzafiato, borghi incantevoli e la straordinaria bellezza della Costiera Amalfitana con i nostri tour esclusivi.",
        en: "Explore breathtaking views, charming villages, and the extraordinary beauty of the Amalfi Coast with our exclusive tours.",
        es: "Explora vistas impresionantes, pueblos encantadores y la extraordinaria belleza de la Costa Amalfitana con nuestros tours exclusivos.",
        fr: "Découvrez des panoramas à couper le souffle, des villages pittoresques et la beauté extraordinaire de la Côte Amalfitaine avec nos circuits exclusifs.",
        de: "Erkunden Sie atemberaubende Ausblicke, charmante Dörfer und die außergewöhnliche Schönheit der Amalfiküste mit unseren exklusiven Touren.",
        ru: "Исследуйте захватывающие дух виды, очаровательные деревни и необычайную красоту побережья Амальфи с нашими эксклюзивными турами.",
        zh: "通过我们的独家旅游线路，探索令人叹为观止的景色、迷人的村庄和阿马尔菲海岸的非凡美景。"
      },
      // Schede dei tour
      tourAmalfiTitle: {
        it: "Amalfi Coast",
        en: "Amalfi Coast",
        es: "Costa Amalfitana",
        fr: "Côte Amalfitaine",
        de: "Amalfiküste",
        ru: "Амальфитанское побережье",
        zh: "阿马尔菲海岸"
      },
      tourAmalfiText: {
        it: "Con le sue viste mozzafiato, la Costiera Amalfitana è una delle più belle del mondo.",
        en: "With its breathtaking views, the Amalfi Coast is one of the most beautiful in the world.",
        es: "Con sus impresionantes vistas, la Costa Amalfitana es una de las más bellas del mundo.",
        fr: "Avec ses vues spectaculaires, la Côte Amalfitaine est l'une des plus belles au monde.",
        de: "Mit ihren atemberaubenden Ausblicken gehört die Amalfiküste zu den schönsten der Welt.",
        ru: "С захватывающими видами, Амальфитанское побережье является одним из самых красивых в мире.",
        zh: "阿马尔菲海岸以其令人叹为观止的美景，成为世界上最美丽的海岸线之一。"
      },
      tourAmalfiSorrentoTitle: {
        it: "Amalfi Coast and Sorrento",
        en: "Amalfi Coast and Sorrento",
        es: "Costa Amalfitana y Sorrento",
        fr: "Côte Amalfitaine et Sorrento",
        de: "Amalfiküste und Sorrent",
        ru: "Амальфитанское побережье и Сорренто",
        zh: "阿马尔菲海岸和索伦托"
      },
      tourAmalfiSorrentoText: {
        it: "Panorami incredibili, città uniche, borghi pittoreschi e i colori della natura ti aspettano.",
        en: "Incredible panoramas, unique cities, charming villages and the vibrant colors of nature await you.",
        es: "Panoramas increíbles, ciudades únicas, pueblos pintorescos y los vibrantes colores de la naturaleza te esperan.",
        fr: "Des panoramas incroyables, des villes uniques, des villages pittoresques et les couleurs vibrantes de la nature vous attendent.",
        de: "Unglaubliche Panoramen, einzigartige Städte, malerische Dörfer und die lebendigen Farben der Natur erwarten Sie.",
        ru: "Невероятные панорамы, уникальные города, живописные деревни и яркие краски природы ждут вас.",
        zh: "令人难以置信的全景、独特的城市、迷人的村庄和大自然的鲜艳色彩等待着您。"
      },
      tourAmalfiFullDayTitle: {
        it: "Amalfi Coast Full Day",
        en: "Amalfi Coast Full Day",
        es: "Costa Amalfitana Full Day",
        fr: "Journée Complète sur la Côte Amalfitaine",
        de: "Amalfiküste Ganztagesausflug",
        ru: "Амальфитанское побережье - полный день",
        zh: "阿马尔菲海岸全日游"
      },
      tourAmalfiFullDayText: {
        it: "Un viaggio attraverso una delle strade costiere più belle che tu possa mai percorrere.",
        en: "A journey along one of the most beautiful coastal roads you can ever travel.",
        es: "Un viaje por una de las carreteras costeras más bellas que puedas recorrer.",
        fr: "Un voyage sur l'une des plus belles routes côtières que vous puissiez emprunter.",
        de: "Eine Reise entlang einer der schönsten Küstenstraßen, die Sie je bereisen können.",
        ru: "Путешествие по одной из самых красивых прибрежных дорог, по которым вы когда-либо проезжали.",
        zh: "沿着您可能走过的最美丽的海岸公路之一的旅程。"
      },
      tourAmalfiHalfDayTitle: {
        it: "Amalfi Coast Half Day",
        en: "Amalfi Coast Half Day",
        es: "Costa Amalfitana Medio Día",
        fr: "Demi-Journée sur la Côte Amalfitaine",
        de: "Amalfiküste Halbtagesausflug",
        ru: "Амальфитанское побережье - полдня",
        zh: "阿马尔菲海岸半日游"
      },
      tourAmalfiHalfDayText: {
        it: "Il tour perfetto per scoprire il fascino della Costiera Amalfitana in poche ore.",
        en: "The perfect tour to discover the charm of the Amalfi Coast in just a few hours.",
        es: "El tour perfecto para descubrir el encanto de la Costa Amalfitana en pocas horas.",
        fr: "Le circuit idéal pour découvrir le charme de la Côte Amalfitaine en quelques heures.",
        de: "Die perfekte Tour, um den Charme der Amalfiküste in wenigen Stunden zu entdecken.",
        ru: "Идеальный тур, чтобы открыть для себя очарование Амальфитанского побережья всего за несколько часов.",
        zh: "在短短几个小时内发现阿马尔菲海岸魅力的完美旅程。"
      },
      tourPompeiiAmalfiTitle: {
        it: "Pompeii and Amalfi Coast",
        en: "Pompeii and the Amalfi Coast",
        es: "Pompeya y la Costa Amalfitana",
        fr: "Pompéi et la Côte Amalfitaine",
        de: "Pompeji und die Amalfiküste",
        ru: "Помпеи и Амальфитанское побережье",
        zh: "庞贝和阿马尔菲海岸"
      },
      tourPompeiiAmalfiText: {
        it: "Immergiti nella cultura italiana visitando Pompei e la Costiera Amalfitana in un unico tour.",
        en: "Immerse yourself in Italian culture by visiting Pompeii and the Amalfi Coast on one tour.",
        es: "Sumérgete en la cultura italiana visitando Pompeya y la Costa Amalfitana en un solo tour.",
        fr: "Plongez dans la culture italienne en visitant Pompéi et la Côte Amalfitaine lors d'un circuit unique.",
        de: "Tauchen Sie in die italienische Kultur ein, indem Sie Pompeji und die Amalfiküste auf einer Tour besuchen.",
        ru: "Погрузитесь в итальянскую культуру, посетив Помпеи и Амальфитанское побережье в одном туре.",
        zh: "通过一次旅行参观庞贝和阿马尔菲海岸，沉浸在意大利文化中。"
      },
      tourWineTitle: {
        it: "Wine and Fancy Food Experience",
        en: "Wine and Fancy Food Experience",
        es: "Experiencia de Vino y Gastronomía",
        fr: "Expérience Vin et Gastronomie",
        de: "Wein- und Gourmet-Erlebnis",
        ru: "Вино и изысканная еда",
        zh: "葡萄酒与美食体验"
      },
      tourWineText: {
        it: "Un'esperienza unica per gli amanti del vino, immersi nella natura incontaminata della Costiera.",
        en: "A unique experience for wine lovers, immersed in the unspoiled nature of the coast.",
        es: "Una experiencia única para los amantes del vino, inmersos en la naturaleza virgen de la costa.",
        fr: "Une expérience unique pour les amateurs de vin, immergés dans la nature préservée de la côte.",
        de: "Ein einzigartiges Erlebnis für Weinliebhaber, eingebettet in die unberührte Natur der Küste.",
        ru: "Уникальный опыт для любителей вина, погруженных в нетронутую природу побережья.",
        zh: "为葡萄酒爱好者提供独特体验，沉浸在海岸原始自然中。"
      },



      vesuviusSectionSubtitle: {
        it: "Tour e Attività al Vesuvio",
        en: "Tours and Activities at Vesuvius",
        es: "Tours y Actividades en el Vesubio",
        fr: "Circuits et Activités au Vésuve",
        de: "Touren und Aktivitäten am Vesuv",
        ru: "Туры и мероприятия на Везувии",
        zh: "维苏威火山旅游和活动"
      },
      vesuviusSectionTitle: {
        it: "Esplora il Vesuvio e le sue Meraviglie Storiche",
        en: "Explore Vesuvius and its Historical Wonders",
        es: "Explora el Vesubio y sus Maravillas Históricas",
        fr: "Découvrez le Vésuve et ses Merveilles Historiques",
        de: "Entdecken Sie den Vesuv und seine historischen Wunder",
        ru: "Исследуйте Везувий и его исторические чудеса",
        zh: "探索维苏威火山及其历史奇观"
      },
      vesuviusSectionText: {
        it: "Scopri il vulcano che ha segnato la storia di Pompei ed Ercolano, esplorando rovine antiche e paesaggi unici con i nostri tour guidati.",
        en: "Discover the volcano that marked the history of Pompeii and Herculaneum by exploring ancient ruins and unique landscapes with our guided tours.",
        es: "Descubre el volcán que marcó la historia de Pompeya y Herculano explorando ruinas antiguas y paisajes únicos con nuestros tours guiados.",
        fr: "Découvrez le volcan qui a marqué l'histoire de Pompéi et d'Herculanum en explorant des ruines anciennes et des paysages uniques avec nos circuits guidés.",
        de: "Entdecken Sie den Vulkan, der die Geschichte von Pompeji und Herculaneum prägte, indem Sie mit unseren geführten Touren antike Ruinen und einzigartige Landschaften erkunden.",
        ru: "Откройте для себя вулкан, который оставил след в истории Помпеи и Геркуланума, исследуя древние руины и уникальные пейзажи в наших экскурсиях с гидом.",
        zh: "通过我们的导游游览，探索古代遗迹和独特的景观，发现这座标志着庞贝和赫库兰尼姆历史的火山。"
      },
      tourHerculaneumVesuviusTitle: {
        it: "Ercolano e Vesuvio",
        en: "Herculaneum and Vesuvius",
        es: "Herculano y Vesubio",
        fr: "Herculanum et Vésuve",
        de: "Herculaneum und Vesuv",
        ru: "Геркуланум и Везувий",
        zh: "赫库兰尼姆和维苏威火山"
      },
      tourHerculaneumVesuviusText: {
        it: "Scopri Ercolano, la città romana sepolta dall'eruzione del Vesuvio nel 79 d.C., e sali sul vulcano per ammirare un panorama mozzafiato.",
        en: "Discover Herculaneum, the Roman city buried by the eruption of Vesuvius in 79 AD, and climb the volcano for a breathtaking view.",
        es: "Descubre Herculano, la ciudad romana sepultada por la erupción del Vesubio en el 79 d.C., y sube al volcán para disfrutar de una vista impresionante.",
        fr: "Découvrez Herculanum, la ville romaine ensevelie par l'éruption du Vésuve en 79 après J.-C., et grimpez sur le volcan pour admirer un panorama à couper le souffle.",
        de: "Entdecken Sie Herculaneum, die römische Stadt, die beim Ausbruch des Vesuvs im Jahr 79 n.Chr. verschüttet wurde, und besteigen Sie den Vulkan für einen atemberaubenden Ausblick.",
        ru: "Откройте для себя Геркуланум, римский город, погребенный во время извержения Везувия в 79 г. н.э., и поднимитесь на вулкан, чтобы насладиться захватывающим видом.",
        zh: "探索赫库兰尼姆，这座在公元79年被维苏威火山爆发掩埋的罗马城市，并攀登火山欣赏令人叹为观止的景色。"
      },
      tourPompeiiVesuviusTitle: {
        it: "Pompei e Vesuvio",
        en: "Pompeii and Vesuvius",
        es: "Pompeya y Vesubio",
        fr: "Pompéi et Vésuve",
        de: "Pompeji und Vesuv",
        ru: "Помпеи и Везувий",
        zh: "庞贝和维苏威火山"
      },
      tourPompeiiVesuviusText: {
        it: "Unisciti a noi per un tour alla scoperta di Pompei, una delle città più affascinanti dell'antichità, con un'escursione sul Vesuvio.",
        en: "Join us on a tour to discover Pompeii, one of the most fascinating cities of antiquity, along with an excursion to Vesuvius.",
        es: "Únete a nosotros en un tour para descubrir Pompeya, una de las ciudades más fascinantes de la antigüedad, junto con una excursión al Vesubio.",
        fr: "Rejoignez-nous pour un circuit de découverte de Pompéi, l'une des villes les plus fascinantes de l'Antiquité, accompagné d'une excursion au Vésuve.",
        de: "Begleiten Sie uns auf einer Tour zur Entdeckung von Pompeji, einer der faszinierendsten Städte der Antike, zusammen mit einem Ausflug zum Vesuv.",
        ru: "Присоединяйтесь к нам в туре по открытию Помпеи, одного из самых увлекательных городов древности, вместе с экскурсией на Везувий.",
        zh: "加入我们的旅行，探索庞贝，这座古代最迷人的城市之一，同时参观维苏威火山。"
      },
      tourPompeiiVesuviusWineTitle: {
        it: "Pompeii, Vesuvio ed Esperienza Enogastronomica",
        en: "Pompeii, Vesuvius and Wine & Gastronomy Experience",
        es: "Pompeya, Vesubio y Experiencia Enogastronómica",
        fr: "Pompéi, Vésuve et Expérience Œnogastronomique",
        de: "Pompeji, Vesuv und Wein- & Gastronomie-Erlebnis",
        ru: "Помпеи, Везувий и опыт вина и гастрономии",
        zh: "庞贝、维苏威火山与葡萄酒美食体验"
      },
      tourPompeiiVesuviusWineText: {
        it: "Combina storia e sapori con un tour esclusivo tra Pompei, il Vesuvio e una degustazione di vini in una cantina locale.",
        en: "Combine history and flavors with an exclusive tour of Pompeii, Vesuvius, and a wine tasting at a local winery.",
        es: "Combina historia y sabores con un tour exclusivo por Pompeya, el Vesubio y una degustación de vinos en una bodega local.",
        fr: "Alliez histoire et saveurs avec un circuit exclusif de Pompéi, du Vésuve et une dégustation de vins dans une cave locale.",
        de: "Verbinden Sie Geschichte und Aromen mit einer exklusiven Tour durch Pompeji, den Vesuv und einer Weinprobe in einem lokalen Weingut.",
        ru: "Сочетайте историю и вкус в эксклюзивном туре по Помпеям, Везувию и дегустацией вин в местной винодельне.",
        zh: "将历史与美食结合在一起，参加庞贝、维苏威火山和当地酒庄品酒的独家之旅。"
      },
      tourPompeiiVesuviusWine2Title: {
        it: "Pompeii, Vesuvio ed Esperienza Enogastronomica Premium",
        en: "Pompeii, Vesuvius and Wine & Gastronomy Premium Experience",
        es: "Pompeya, Vesubio y Experiencia Enogastronómica Premium",
        fr: "Pompéi, Vésuve et Expérience Œnogastronomique Premium",
        de: "Pompeji, Vesuv und Premium-Wein- & Gastronomie-Erlebnis",
        ru: "Помпеи, Везувий и премиальный опыт вина и гастрономии",
        zh: "庞贝、维苏威火山与高级葡萄酒美食体验"
      },
      tourPompeiiVesuviusWine2Text: {
        it: "Cerchi un tour che unisca cultura, storia ed esperienza culinaria? Questo è il tour perfetto per te!",
        en: "Looking for a tour that combines local culture, history, and culinary experiences? This is the perfect tour for you!",
        es: "¿Buscas un tour que combine cultura local, historia y experiencias culinarias? ¡Este es el tour perfecto para ti!",
        fr: "Vous cherchez un circuit alliant culture locale, histoire et expériences culinaires ? C'est le circuit parfait pour vous !",
        de: "Suchen Sie eine Tour, die lokale Kultur, Geschichte und kulinarische Erlebnisse verbindet? Dies ist die perfekte Tour für Sie!",
        ru: "Ищете тур, сочетающий местную культуру, историю и кулинарные впечатления? Это идеальный тур для вас!",
        zh: "寻找结合当地文化、历史和美食体验的旅游？这就是适合您的完美旅程！"
      },
      perPerson: {
        it: "/ per gruppo",
        en: "/ per group",
        es: "/ por grupo",
        fr: "/ par groupe",
        de: "/ pro Gruppe",
        ru: "/ за группу",
        zh: "/ 每组"
      },
//Napoli
      naplesSectionSubtitle: {
        it: "Tour e Attività a Napoli",
        en: "Tours and Activities in Naples",
        es: "Tours y Actividades en Nápoles",
        fr: "Circuits et Activités à Naples",
        de: "Touren und Aktivitäten in Neapel",
        ru: "Туры и мероприятия в Неаполе",
        zh: "那不勒斯旅游和活动"
      },
      naplesSectionTitle: {
        it: "Scopri Napoli e il suo Patrimonio Unico",
        en: "Discover Naples and its Unique Heritage",
        es: "Descubre Nápoles y su Patrimonio Único",
        fr: "Découvrez Naples et son Patrimoine Unique",
        de: "Entdecken Sie Neapel und sein einzigartiges Erbe",
        ru: "Откройте для себя Неаполь и его уникальное наследие",
        zh: "探索那不勒斯及其独特的文化遗产"
      },
      naplesSectionText: {
        it: "Visita Napoli, una delle città più affascinanti d'Italia, con i suoi siti storici, la sua cultura vivace e la sua cucina rinomata in tutto il mondo.",
        en: "Visit Naples, one of Italy's most fascinating cities, with its historic sites, vibrant culture, and world-renowned cuisine.",
        es: "Visita Nápoles, una de las ciudades más fascinantes de Italia, con sus sitios históricos, su cultura vibrante y su cocina reconocida mundialmente.",
        fr: "Visitez Naples, l'une des villes les plus fascinantes d'Italie, avec ses sites historiques, sa culture dynamique et sa cuisine renommée dans le monde entier.",
        de: "Besuchen Sie Neapel, eine der faszinierendsten Städte Italiens, mit ihren historischen Stätten, ihrer lebendigen Kultur und ihrer weltberühmten Küche.",
        ru: "Посетите Неаполь, один из самых увлекательных городов Италии, с его историческими достопримечательностями, яркой культурой и всемирно известной кухней.",
        zh: "参观那不勒斯，这是意大利最迷人的城市之一，拥有历史遗迹、充满活力的文化和世界闻名的美食。"
      },
      tourCasertaNaplesTitle: {
        it: "Caserta e Napoli",
        en: "Caserta and Naples",
        es: "Caserta y Nápoles",
        fr: "Caserta et Naples",
        de: "Caserta und Neapel",
        ru: "Казерта и Неаполь",
        zh: "卡塞塔和那不勒斯"
      },
      tourCasertaNaplesText: {
        it: "Approfitta di questa occasione speciale per visitare due siti Patrimonio dell'Umanità in un solo tour!",
        en: "Take advantage of this special opportunity to visit two UNESCO World Heritage sites in one tour!",
        es: "¡Aprovecha esta oportunidad especial para visitar dos sitios Patrimonio de la Humanidad en un solo tour!",
        fr: "Profitez de cette occasion spéciale pour visiter deux sites du patrimoine mondial de l'UNESCO en un seul circuit !",
        de: "Nutzen Sie diese besondere Gelegenheit, um zwei UNESCO-Welterbestätten in einer Tour zu besichtigen!",
        ru: "Воспользуйтесь этой особой возможностью посетить два объекта Всемирного наследия ЮНЕСКО в одном туре!",
        zh: "把握这个特别的机会，在一次旅行中参观两个联合国教科文组织世界遗产地！"
      },
      tourNaplesCityTitle: {
        it: "Tour della Città di Napoli",
        en: "Naples City Tour",
        es: "Tour de la Ciudad de Nápoles",
        fr: "Circuit dans la Ville de Naples",
        de: "Stadtrundfahrt durch Neapel",
        ru: "Обзорная экскурсия по Неаполю",
        zh: "那不勒斯城市之旅"
      },
      tourNaplesCityText: {
        it: "Scopri la terza città più grande d'Italia, ricca di storia, cultura e una gastronomia senza eguali.",
        en: "Discover Italy's third-largest city, rich in history, culture, and unmatched cuisine.",
        es: "Descubre la tercera ciudad más grande de Italia, rica en historia, cultura y con una gastronomía sin igual.",
        fr: "Découvrez la troisième plus grande ville d'Italie, riche en histoire, culture et une cuisine incomparable.",
        de: "Entdecken Sie die drittgrößte Stadt Italiens, reich an Geschichte, Kultur und unvergleichlicher Küche.",
        ru: "Откройте для себя третий по величине город Италии, богатый историей, культурой и несравненной кухней.",
        zh: "探索意大利第三大城市，这里历史和文化丰富，美食无与伦比。"
      },
      tourPompeiiMuseumTitle: {
        it: "Pompei e Museo Archeologico di Napoli",
        en: "Pompeii and Naples Archaeological Museum",
        es: "Pompeya y Museo Arqueológico de Nápoles",
        fr: "Pompéi et Musée Archéologique de Naples",
        de: "Pompeji und das Archäologische Museum von Neapel",
        ru: "Помпеи и Археологический музей Неаполя",
        zh: "庞贝和那不勒斯考古博物馆"
      },
      tourPompeiiMuseumText: {
        it: "Un tour unico tra gli scavi di Pompei e il Museo Archeologico, che custodisce tesori inestimabili dell'antichità.",
        en: "A unique tour of Pompeii's ruins and the Archaeological Museum, which houses invaluable treasures of antiquity.",
        es: "Un tour único por las ruinas de Pompeya y el Museo Arqueológico, que alberga tesoros invaluables de la antigüedad.",
        fr: "Un circuit unique à travers les ruines de Pompéi et le Musée Archéologique, qui abrite des trésors inestimables de l'Antiquité.",
        de: "Eine einzigartige Tour durch die Ruinen von Pompeji und das Archäologische Museum, das unschätzbare Schätze der Antike beherbergt.",
        ru: "Уникальный тур по руинам Помпеи и Археологическому музею, в котором хранятся бесценные сокровища древности.",
        zh: "独特的庞贝遗址和考古博物馆之旅，博物馆中珍藏着古代无价的宝藏。"
      },
      tourPompeiiNaplesTitle: {
        it: "Pompei e Centro Storico di Napoli",
        en: "Pompeii and Naples Historic Center",
        es: "Pompeya y Centro Histórico de Nápoles",
        fr: "Pompéi et Centre Historique de Naples",
        de: "Pompeji und das historische Zentrum von Neapel",
        ru: "Помпеи и исторический центр Неаполя",
        zh: "庞贝和那不勒斯历史中心"
      },
      tourPompeiiNaplesText: {
        it: "Se ami la storia antica e vuoi immergerti nella cultura partenopea, questo tour è perfetto per te.",
        en: "If you love ancient history and want to immerse yourself in Neapolitan culture, this tour is perfect for you.",
        es: "Si amas la historia antigua y deseas sumergirte en la cultura napolitana, ¡este tour es perfecto para ti!",
        fr: "Si vous aimez l'histoire antique et souhaitez vous immerger dans la culture napolitaine, ce circuit est parfait pour vous.",
        de: "Wenn Sie die antike Geschichte lieben und in die neapolitanische Kultur eintauchen möchten, ist diese Tour perfekt für Sie.",
        ru: "Если вы любите древнюю историю и хотите погрузиться в неаполитанскую культуру, этот тур идеально вам подойдет.",
        zh: "如果您热爱古代历史并想沉浸在那不勒斯文化中，这个旅程非常适合您。"
      },
      tourCasertaNaplesCentreTitle: {
        it: "Reggia di Caserta e Centro Storico di Napoli",
        en: "Caserta Royal Palace and Naples Historic Center",
        es: "La Realeza de Caserta y Centro Histórico de Nápoles",
        fr: "Palais Royal de Caserte et Centre Historique de Naples",
        de: "Königspalast von Caserta und historisches Zentrum von Neapel",
        ru: "Королевский дворец Казерты и исторический центр Неаполя",
        zh: "卡塞塔皇宫和那不勒斯历史中心"
      },
      tourCasertaNaplesCentreText: {
        it: "Un'occasione imperdibile per visitare due siti UNESCO in un solo tour!",
        en: "An unmissable opportunity to visit two UNESCO sites in one tour!",
        es: "¡Una oportunidad imperdible para visitar dos sitios UNESCO en un solo tour!",
        fr: "Une occasion unique de visiter deux sites UNESCO en un seul circuit !",
        de: "Eine unverzichtbare Gelegenheit, zwei UNESCO-Stätten in einer Tour zu besuchen!",
        ru: "Уникальная возможность посетить два объекта ЮНЕСКО в одном туре!",
        zh: "一次参观两个联合国教科文组织遗址的不可错过的机会！"
      },
      perPerson: {
        it: "/ per gruppo",
        en: "/ per group",
        es: "/ por grupo",
        fr: "/ par groupe",
        de: "/ pro Gruppe",
        ru: "/ за группу",
        zh: "/ 每组"
      },
      tourButton: {
        it: "Prenota Ora",
        en: "Book Now",
        es: "Reserve Now",
        fr: "Book Now",
        de: "Jetzt Buchen",
        ru: "Забронировать сейчас",
        zh: "立即预订"
      },
      
      footerEmpathyText: {
        it: "Viaggiare non è solo visitare luoghi, ma comprendere le storie, le emozioni e le vite di chi li abita. Ogni destinazione è un'opportunità per crescere, connettersi e vedere il mondo con occhi più empatici.",
        en: "Travel is not just about visiting places, but about understanding stories, emotions, and the lives of those who live there. Each destination is an opportunity to grow, connect, and see the world with more empathy.",
        es: "Viajar no es solo visitar lugares, sino comprender historias, emociones y las vidas de quienes los habitan. Cada destino es una oportunidad para crecer, conectarse y ver el mundo con más empatía.",
        fr: "Voyager, ce n'est pas seulement visiter des lieux, mais comprendre les histoires, les émotions et les vies de ceux qui y vivent. Chaque destination est une opportunité de grandir, de se connecter et de voir le monde avec plus d'empathie.",
        de: "Reisen bedeutet nicht nur, Orte zu besuchen, sondern Geschichten, Emotionen und das Leben der dort lebenden Menschen zu verstehen. Jedes Reiseziel ist eine Gelegenheit zu wachsen, Verbindungen herzustellen und die Welt mit mehr Empathie zu sehen.",
        ru: "Путешествия — это не просто посещение мест, но и понимание историй, эмоций и жизни тех, кто там живет. Каждое направление — это возможность расти, общаться и видеть мир с большей эмпатией.",
        zh: "旅行不仅仅是参观地点，而是了解故事、情感和那里居民的生活。每个目的地都是一个成长、联结并以更多同理心看世界的机会。"
      },
      
      footerQuote: {
        it: "Ogni viaggio è un incontro, ogni incontro è un'opportunità.",
        en: "Every journey is a meeting, every meeting is an opportunity.",
        es: "Cada viaje es un encuentro, cada encuentro es una oportunidad.",
        fr: "Chaque voyage est une rencontre, chaque rencontre est une opportunité.",
        de: "Jede Reise ist eine Begegnung, jede Begegnung ist eine Gelegenheit.",
        ru: "Каждое путешествие — это встреча, каждая встреча — это возможность.",
        zh: "每次旅程都是一次相遇，每次相遇都是一个机会。"
      },
      
      footerContactTitle: {
        it: "Contattaci",
        en: "Contact Us",
        es: "Contáctanos",
        fr: "Contactez-nous",
        de: "Kontaktiere uns",
        ru: "Связаться с нами",
        zh: "联系我们"
      },
      
      footerContactText: {
        it: "Sentiti libero di contattarci per qualsiasi informazione!",
        en: "Feel free to contact us for any information!",
        es: "¡No dudes en contactarnos para cualquier información!",
        fr: "N'hésitez pas à nous contacter pour toute information!",
        de: "Zögern Sie nicht, uns für weitere Informationen zu kontaktieren!",
        ru: "Не стесняйтесь обращаться к нам за любой информацией!",
        zh: "如有任何问题，请随时与我们联系！"
      },
      
      footerNewsletterText: {
        it: "Iscriviti alla nostra newsletter per ricevere aggiornamenti e novità!",
        en: "Subscribe to our newsletter for updates and news!",
        es: "Suscríbete a nuestro boletín para recibir actualizaciones y noticias!",
        fr: "Abonnez-vous à notre newsletter pour recevoir des mises à jour et des actualités!",
        de: "Abonnieren Sie unseren Newsletter für Updates und Neuigkeiten!",
        ru: "Подпишитесь на нашу рассылку, чтобы получать обновления и новости!",
        zh: "订阅我们的通讯，获取最新更新和消息！"
      },
      
      footerNewsletterPlaceholder: {
        it: "Inserisci la tua email",
        en: "Enter your email",
        es: "Ingresa tu correo electrónico",
        fr: "Entrez votre email",
        de: "Geben Sie Ihre E-Mail-Adresse ein",
        ru: "Введите ваш email",
        zh: "输入您的电子邮箱"
      },
      
      footerSubscribeButton: {
        it: "Iscriviti",
        en: "Subscribe",
        es: "Suscribirse",
        fr: "S'abonner",
        de: "Abonnieren",
        ru: "Подписаться",
        zh: "订阅"
      },
      
      footerPrivacyPolicy: {
        it: "Privacy Policy",
        en: "Privacy Policy",
        es: "Política de Privacidad",
        fr: "Politique de Confidentialité",
        de: "Datenschutzbestimmungen",
        ru: "Политика конфиденциальности",
        zh: "隐私政策"
      },
      
      footerTerms: {
        it: "Termini & Condizioni",
        en: "Terms & Conditions",
        es: "Términos y Condiciones",
        fr: "Termes et Conditions",
        de: "Allgemeine Geschäftsbedingungen",
        ru: "Условия и положения",
        zh: "条款和条件"
      },
      
      footerFAQ: {
        it: "FAQ",
        en: "FAQ",
        es: "Preguntas Frecuentes",
        fr: "FAQ",
        de: "FAQ",
        ru: "Часто задаваемые вопросы",
        zh: "常见问题解答"
      },


      servicesSubtitle: {
        it: "I nostri servizi",
        en: "Our Services",
        es: "Nuestros Servicios",
        fr: "Nos Services",
        de: "Unsere Dienstleistungen",
        ru: "Наши услуги",
        zh: "我们的服务"
      },
      servicesTitle: {
        it: "Servizi esclusivi per il tuo viaggio",
        en: "Exclusive Services for Your Journey",
        es: "Servicios exclusivos para tu viaje",
        fr: "Services exclusifs pour votre voyage",
        de: "Exklusive Dienstleistungen für Ihre Reise",
        ru: "Эксклюзивные услуги для вашего путешествия",
        zh: "为您的旅程提供专属服务"
      },
      servicesDescription: {
        it: "Offriamo servizi personalizzati per ogni esigenza di viaggio, garantendo comfort, puntualità e un'esperienza unica.",
        en: "We offer personalized services for every travel need, ensuring comfort, punctuality, and a unique experience.",
        es: "Ofrecemos servicios personalizados para cada necesidad de viaje, garantizando comodidad, puntualidad y una experiencia única.",
        fr: "Nous offrons des services personnalisés pour chaque besoin de voyage, garantissant confort, ponctualité et une expérience unique.",
        de: "Wir bieten personalisierte Dienstleistungen für jeden Reisebedarf und garantieren Komfort, Pünktlichkeit und ein einzigartiges Erlebnis.",
        ru: "Мы предлагаем индивидуальные услуги для любых потребностей в путешествии, обеспечивая комфорт, пунктуальность и уникальный опыт.",
        zh: "我们为每一种旅行需求提供个性化服务，确保舒适、准时和独特的体验。"
      },
      
      // Concierge Service
      conciergeSubtitle: {
        it: "Assistenza Personale",
        en: "Personal Assistance",
        es: "Asistencia Personal",
        fr: "Assistance Personnalisée",
        de: "Persönliche Betreuung",
        ru: "Персональная помощь",
        zh: "个人助理服务"
      },
      conciergeTitle: {
        it: "Servizio Concierge",
        en: "Concierge Service",
        es: "Servicio de Concierge",
        fr: "Service de Conciergerie",
        de: "Concierge-Service",
        ru: "Консьерж-сервис",
        zh: "礼宾服务"
      },
      conciergeText: {
        it: "Un servizio esclusivo per prenotazioni, consigli e supporto durante il tuo viaggio.",
        en: "An exclusive service for bookings, advice, and support during your trip.",
        es: "Un servicio exclusivo para reservas, consejos y asistencia durante tu viaje.",
        fr: "Un service exclusif pour les réservations, les conseils et l'assistance pendant votre voyage.",
        de: "Ein exklusiver Service für Buchungen, Beratung und Unterstützung während Ihrer Reise.",
        ru: "Эксклюзивная услуга для бронирования, советов и поддержки во время вашего путешествия.",
        zh: "为您的旅行提供预订、建议和支持的专属服务。"
      },
    
      // Wedding Transfer
        weddingSubtitle: {
          it: "Matrimoni",
          en: "Weddings",
          es: "Bodas",
          fr: "Mariages",
          de: "Hochzeiten",
          ru: "Свадьбы",
          zh: "婚礼"
        },
        weddingTitle: {
          it: "Trasferimento per Matrimoni",
          en: "Wedding Transfer",
          es: "Traslado para Bodas",
          fr: "Transfert de Mariage",
          de: "Hochzeitstransfer",
          ru: "Трансфер для свадеб",
          zh: "婚礼接送"
        },
        weddingText: {
          it: "Trasporto per il tuo matrimonio con autista dedicato e attesa inclusa.",
          en: "Transport for your wedding with a dedicated driver and waiting service included.",
          es: "Transporte para tu boda con conductor dedicado y espera incluida.",
          fr: "Transport pour votre mariage avec chauffeur dédié et attente incluse.",
          de: "Transport für Ihre Hochzeit mit einem dedizierten Fahrer und inklusive Wartezeit.",
          ru: "Трансфер для вашей свадьбы с выделенным водителем и включенным временем ожидания.",
          zh: "为您的婚礼提供接送服务，配备专用司机，并包括等待服务。"
        },
        airportSubtitle: {
          it: "Aeroporti",
          en: "Airports",
          es: "Aeropuertos",
          fr: "Aéroports",
          de: "Flughäfen",
          ru: "Аэропорты",
          zh: "机场"
        },
        airportTitle: {
          it: "Trasferimento Aeroportuale",
          en: "Airport Transfer",
          es: "Traslado al Aeropuerto",
          fr: "Transfert Aéroport",
          de: "Flughafen-Transfer",
          ru: "Трансфер из/до аэропорта",
          zh: "机场接送"
        },
        airportText: {
          it: "Raggiungi l'aeroporto con il massimo comfort e senza stress.",
          en: "Reach the airport with maximum comfort and zero stress.",
          es: "Llega al aeropuerto con el máximo confort y sin estrés.",
          fr: "Rejoignez l'aéroport avec un confort maximal et sans stress.",
          de: "Erreichen Sie den Flughafen mit maximalem Komfort und ohne Stress.",
          ru: "Доберитесь до аэропорта с максимальным комфортом и без стресса.",
          zh: "轻松舒适地前往机场，无任何压力。"
        },
        businessSubtitle: {
          it: "Viaggi d'affari",
          en: "Business Travel",
          es: "Viajes de Negocios",
          fr: "Voyages d'Affaires",
          de: "Geschäftsreisen",
          ru: "Деловые поездки",
          zh: "商务旅行"
        },
        businessTitle: {
          it: "Trasferimento Business",
          en: "Business Transfer",
          es: "Traslado Empresarial",
          fr: "Transfert d'Affaires",
          de: "Geschäftstransfer",
          ru: "Трансфер для бизнеса",
          zh: "商务接送"
        },
        businessText: {
          it: "Servizio dedicato per meeting, eventi aziendali e viaggi d’affari.",
          en: "Dedicated service for meetings, corporate events, and business trips.",
          es: "Servicio dedicado para reuniones, eventos corporativos y viajes de negocios.",
          fr: "Service dédié pour les réunions, événements d'entreprise et voyages d'affaires.",
          de: "Dedizierter Service für Meetings, Firmenveranstaltungen und Geschäftsreisen.",
          ru: "Специальный сервис для встреч, корпоративных мероприятий и деловых поездок.",
          zh: "专为会议、企业活动和商务旅行提供的专属服务。"
        },
        privateTourSubtitle: {
          it: "Esperienze Esclusive",
          en: "Exclusive Experiences",
          es: "Experiencias Exclusivas",
          fr: "Expériences Exclusives",
          de: "Exklusive Erlebnisse",
          ru: "Эксклюзивные впечатления",
          zh: "独家体验"
        },
        privateTourTitle: {
          it: "Tour Privati",
          en: "Private Tours",
          es: "Tours Privados",
          fr: "Tours Privés",
          de: "Private Touren",
          ru: "Частные туры",
          zh: "私人游"
        },
        privateTourText: {
          it: "Scopri luoghi unici con un tour personalizzato e un autista a tua disposizione.",
          en: "Discover unique places with a personalized tour and a private driver.",
          es: "Descubre lugares únicos con un tour personalizado y un conductor privado.",
          fr: "Découvrez des lieux uniques avec une visite personnalisée et un chauffeur privé.",
          de: "Entdecken Sie einzigartige Orte mit einer personalisierten Tour und einem privaten Fahrer.",
          ru: "Откройте для себя уникальные места с персонализированным туром и личным водителем.",
          zh: "通过个性化旅游和专属司机，探索独特的地方。"
        },
        luxuryCarSubtitle: {
          it: "Auto di Lusso",
          en: "Luxury Cars",
          es: "Coches de Lujo",
          fr: "Voitures de Luxe",
          de: "Luxusautos",
          ru: "Роскошные автомобили",
          zh: "豪华汽车"
        },
        luxuryCarTitle: {
          it: "Servizio Auto di Lusso",
          en: "Luxury Car Service",
          es: "Servicio de Autos de Lujo",
          fr: "Service de Voiture de Luxe",
          de: "Luxuswagen-Service",
          ru: "Сервис роскошных автомобилей",
          zh: "豪华汽车服务"
        },
        luxuryCarText: {
          it: "Servizio esclusivo con auto di lusso e autista privato.",
          en: "Exclusive service with luxury cars and private driver.",
          es: "Servicio exclusivo con autos de lujo y conductor privado.",
          fr: "Service exclusif avec voitures de luxe et chauffeur privé.",
          de: "Exklusiver Service mit Luxuswagen und privatem Fahrer.",
          ru: "Эксклюзивный сервис с роскошными автомобилями и личным водителем.",
          zh: "提供豪华汽车和专属司机的专属服务。"
        },
        shoppingSubtitle: {
          it: "Shopping",
          en: "Shopping",
          es: "Compras",
          fr: "Shopping",
          de: "Einkaufen",
          ru: "Шоппинг",
          zh: "购物"
        },
        shoppingTitle: {
          it: "Trasferimento per Shopping",
          en: "Shopping Transfer",
          es: "Traslado para Compras",
          fr: "Transfert Shopping",
          de: "Shopping-Transfer",
          ru: "Трансфер для шоппинга",
          zh: "购物接送"
        },
        shoppingText: {
          it: "Viaggia in totale comfort per una giornata di shopping nelle migliori boutique.",
          en: "Travel in total comfort for a shopping day at the best boutiques.",
          es: "Viaja con total comodidad para un día de compras en las mejores boutiques.",
          fr: "Voyagez en tout confort pour une journée de shopping dans les meilleures boutiques.",
          de: "Reisen Sie in vollem Komfort für einen Shopping-Tag in den besten Boutiquen.",
          ru: "Путешествуйте с максимальным комфортом для шоппинга в лучших бутиках.",
          zh: "在最好的精品店中，享受舒适的一整天购物体验。"
        },
        aboutSubtitle: {
          it: "Chi Siamo",
          en: "About Us",
          es: "Quiénes Somos",
          fr: "Qui Sommes-Nous",
          de: "Über Uns",
          ru: "О нас",
          zh: "关于我们"
        },
        aboutTitle: {
          it: "Viaggiare con Empathy",
          en: "Travel with Empathy",
          es: "Viajar con Empathy",
          fr: "Voyager avec Empathy",
          de: "Reisen mit Empathy",
          ru: "Путешествуйте с Empathy",
          zh: "用Empathy旅行"
        },
        aboutText: {
          it: "Viaggiare non è solo visitare luoghi, ma comprendere le storie, le emozioni e le persone che li abitano. Ogni viaggio è un'opportunità per connettersi, imparare e vedere il mondo con occhi più empatici.",
          en: "Traveling is not just about visiting places, but about understanding stories, emotions, and the people who live there. Every journey is an opportunity to connect, learn, and see the world with more empathy.",
          es: "Viajar no es solo visitar lugares, sino comprender historias, emociones y las personas que los habitan. Cada viaje es una oportunidad para conectarse, aprender y ver el mundo con más empatía.",
          fr: "Voyager, ce n'est pas seulement visiter des lieux, mais comprendre les histoires, les émotions et les personnes qui y vivent. Chaque voyage est une opportunité de se connecter, d'apprendre et de voir le monde avec plus d'empathie.",
          de: "Reisen bedeutet nicht nur, Orte zu besuchen, sondern Geschichten, Emotionen und die Menschen, die dort leben, zu verstehen. Jede Reise ist eine Gelegenheit, sich zu verbinden, zu lernen und die Welt mit mehr Empathie zu sehen.",
          ru: "Путешествие — это не только посещение мест, но и понимание историй, эмоций и людей, которые там живут. Каждое путешествие — это возможность установить связь, научиться и увидеть мир с большей эмпатией.",
          zh: "旅行不仅仅是游览景点，而是理解那些居住其中的故事、情感和人。每一次旅行都是一次建立联系、学习和以更具同理心的方式看待世界的机会。"
        },
        viewAllservice: {
          it: "Visualizza tutti i servizi",
          en: "View All Services",
          es: "Ver Todos los Servicios",
          fr: "Voir Tous les Services",
          de: "Alle Dienstleistungen anzeigen",
          ru: "Показать все услуги",
          zh: "查看所有服务"
        }
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
    it: `Ciao, sono interessato a prenotare un servizio di transfer. Partirò da ${departure} e la destinazione è ${destination}. Siamo ${people} persone. La data di partenza è ${checkin} e l'orario previsto è ${departureTime}.`,
    en: `Hello, I am interested in booking a transfer service. I will be departing from ${departure} and heading towards ${destination}. There will be ${people} people traveling with me. Our planned departure date is ${checkin} and we intend to leave at ${departureTime}.`,
    es: `Hola, estoy interesado en reservar un servicio de transfer. Saldré desde ${departure} y me dirigiré hacia ${destination}. Viajarán conmigo ${people} personas. La fecha de salida es ${checkin} y la hora prevista es ${departureTime}.`,
    fr: `Bonjour, je suis intéressé par la réservation d'un service de transfert. Je partirai de ${departure} et me dirigerai vers ${destination}. Il y aura ${people} personnes voyageant avec moi. La date de départ prévue est le ${checkin} et l'heure de départ est ${departureTime}.`
  };
  
  const message = messageTemplates[lang];
  
  // Inserisci il tuo numero WhatsApp in formato internazionale (senza il "+")
  const whatsappNumber = "393311703702"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Apre WhatsApp in una nuova scheda
  window.open(whatsappUrl, '_blank');
});


document.addEventListener("DOMContentLoaded", function () {
  let comuniData = []; // Variabile per salvare i comuni

  fetch("https://raw.githubusercontent.com/Pswie/Francesco/main/comuni.json", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-cache'
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Errore di rete o risposta non valida');
          }
          return response.json();
      })
      .then(data => {
          comuniData = data; // Salva i comuni in una variabile
          console.log("Comuni caricati con successo:", comuniData.length);
      })
      .catch(error => {
          console.error("Errore nel caricamento dei comuni:", error);
          // Fallback con alcuni comuni principali
          comuniData = [
              {"nome": "Napoli"}, {"nome": "Roma"}, {"nome": "Milano"}, 
              {"nome": "Firenze"}, {"nome": "Venezia"}, {"nome": "Torino"}, 
              {"nome": "Bologna"}, {"nome": "Palermo"}, {"nome": "Bari"},
              {"nome": "Sorrento"}, {"nome": "Amalfi"}, {"nome": "Pompei"}
          ];
          console.log("Utilizzando comuni di fallback:", comuniData.length);
      });

  function filterComuni(input, listElement) {
      listElement.innerHTML = ""; // Pulisce i suggerimenti precedenti
      const searchText = input.value.trim().toLowerCase();

      if (searchText.length < 2) return; // Mostra suggerimenti solo dopo 2 lettere

      const filteredComuni = comuniData
          .filter(comune => comune.nome.toLowerCase().startsWith(searchText))
          .slice(0, 5); // Prende solo i primi 5 risultati

      filteredComuni.forEach(comune => {
          let option = document.createElement("option");
          option.value = comune.nome;
          listElement.appendChild(option);
      });
  }


  function validateComune(input) {
      const isValid = comuniData.some(comune => comune.nome.toLowerCase() === input.value.trim().toLowerCase());

      if (!isValid) {
          input.classList.add("error"); // Aggiunge classe errore
          return false; // Il valore non è valido
      } else {
          input.classList.remove("error"); // Rimuove l'errore se il comune è valido
          return true; // Il valore è valido
      }
  }

  // Autocompletamento
  document.getElementById("departure").addEventListener("input", function () {
      filterComuni(this, document.getElementById("departureList"));
  });

  document.getElementById("destination").addEventListener("input", function () {
      filterComuni(this, document.getElementById("destinationList"));
  });

  // Validazione quando si preme il pulsante "Richiedi Informazioni"
  document.querySelector(".tour-search-form").addEventListener("submit", function (event) {
      let isDepartureValid = validateComune(document.getElementById("departure"));
      let isDestinationValid = validateComune(document.getElementById("destination"));

      if (!isDepartureValid || !isDestinationValid) {
          event.preventDefault(); // Blocca l'invio del modulo
          document.getElementById("error-message").style.display = "block"; // Mostra il messaggio di errore
      } else {
          document.getElementById("error-message").style.display = "none"; // Nasconde il messaggio se tutto è corretto
      }
  });
});













