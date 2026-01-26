// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        branches: "Branch Companies",
        about: "About Us",
        contact: "Contact",
      },
      hero: {
        title: "Diversified Growth in",
        titleHighlight: "Mongolia's Key Sectors",
        subtitle: "Mining • Agriculture • Trade • Services",
        cta: "View Our Portfolio",
      },
      network: {
        subtitle: "Group Structure",
        title: "Four Pillars of Operations",
        link: "View corporate structure",
        learnMore: "Learn more"
      },
      story: {
        established: "ESTABLISHED 2011",
        title: "Sustainable Operations Across Economic Zones",
        description: "Land Mineral Group LLC was founded in 2011. The Group operates sustainably in Mongolia's key economic regions with a structure of 4 subsidiary companies.",
        areas: "Key Business Areas:",
        link: "Read our full story",
        experience: "Years of Excellence",
        activityList: {
            0: "Mining",
            1: "Food & Agriculture",
            2: "Meat Products",
            3: "Dairy Products",
            4: "Trade",
            5: "Export",
            6: "Services",
            7: "Leasing",
            8: "Manufacturing",
            9: "Coffee Shop",
            10: "Secured Lending"
        }
      },
      about: {
        header: {
          profile: "Corporate Profile",
          title: "Building Value Across",
          titleHighlight: "Generations",
          description: "Land Mineral Group LLC is a diversified conglomerate founded in 2011. We operate sustainably across four major pillars: Mining, Agriculture, Trade, and Services."
        },
        stats: {
          founded: "Founded",
          subsidiaries: "Subsidiaries",
          sectors: "Key Sectors",
          zones: "Economic Zones",
          central: "Central"
        },
        journey: {
          title: "Our Journey",
          p1: "Established in <strong class='text-white'>2011</strong>, Land Mineral Group began with a vision to harness Mongolia's rich natural resources responsibly. Over the last 15 years, we have expanded from a single entity into a robust group with <strong class='text-white'>4 subsidiary companies</strong>.",
          p2: "Today, our operations span the full economic spectrum. We don't just extract resources; we process food, export goods, lease property, and provide financial services.",
          focusTitle: "Strategic Focus Areas",
          focusList: {
            0: "Responsible Mining",
            1: "Food Security (Meat/Dairy)",
            2: "Import/Export Logistics",
            3: "Commercial Leasing"
          },
          quote: "We are committed to diversifying Mongolia's economy through sustainable industry and service excellence."
        },
        values: {
          title: "Our Core Values",
          subtitle: "The principles that guide our 15-year legacy.",
          items: {
            sustainability: { title: "Sustainability", desc: "We prioritize environmental stewardship in mining and agriculture, ensuring resources serve future generations." },
            innovation: { title: "Innovation", desc: "From advanced industrial manufacturing to modern coffee shop services, we constantly evolve." },
            integrity: { title: "Integrity", desc: "Transparent governance and secured lending services that build lasting trust with our partners." },
            community: { title: "Community", desc: "Creating jobs and supporting local infrastructure across Mongolia's key economic regions." }
          }
        },
        cta: {
          title: "Ready to Partner With Us?",
          desc: "Whether you are looking for agricultural products, mining cooperation, or commercial leasing, Land Mineral Group is your trusted partner.",
          button: "Contact Us"
        }
      },
      // --- NEW: BRANCH DETAIL PAGE LABELS ---
      branchDetail: {
        overview: "Company Overview",
        highlights: "Key Highlights",
        founder: "Founder Information",
        glance: "At a Glance",
        established: "Established",
        headquarters: "Headquarters",
        website: "Visit Website",
        opensTab: "Opens in a new tab",
        hqLocation: "Ulaanbaatar, Mongolia"
      },
      companies: {
        mining: {
          name: "Mining & Industry",
          description: "Sustainable mining operations and industrial manufacturing projects.",
          introduction: "Leading the way in responsible mineral extraction and heavy industry.",
          founder: "Founder Info Not Available",
          features: { 0: "Sustainable extraction methods", 1: "Heavy machinery logistics", 2: "Rehabilitation projects" }
        },
        agriculture: {
          name: "Tsetsen Dald Trade LLC",
          description: "Meat production, trade, and export.",
          introduction: "Specializing in meat and meat product production, trade, and export. Our facility operates on a 3.5-hectare site in Ulaanbaatar.",
          founder: "Information not currently available",
          features: { 0: "Factory facility: 3.5 hectares in Ulaanbaatar", 1: "Storage: 4 deep freezers with 200-ton capacity", 2: "Experience: Exported meat products to China (2018–2020)" }
        },
        dairy: {
          name: "Lansyn Tsatsal LLC",
          description: "Dairy products and sustainable farming operations.",
          introduction: "A premier dairy and farming enterprise operating in Ulaanbaatar and Baganuur district, dedicated to providing fresh, high-quality milk and dairy products.",
          founder: "Information not currently available",
          features: { 0: "Sector: Milk & Dairy Products", 1: "Operations: Sustainable Farming", 2: "Location: Ulaanbaatar & Baganuur District" }
        },
        danista: {
          name: "Danista-Od LLC",
          description: "Trade, service, and commercial leasing operations.",
          introduction: "A key player in the trade and service sector, operating commercial and leasing facilities in the heart of Erdenet City.",
          founder: "Information not currently available",
          features: { 0: "Location: Orkhon Province, Erdenet City", 1: "Activities: Trade, Services, Leasing", 2: "Established: 2002" }
        },
        vajra: {
          name: "Vajra Wisdom Foundation",
          description: "Tourism and travel initiatives across Mongolia.",
          introduction: "A newly established foundation focused on tourism development, operating in Ulaanbaatar, Uvs, and Tuv provinces in collaboration with leading travel agencies.",
          founder: "Information not currently available",
          features: { 0: "Regions: Ulaanbaatar, Uvs, Tuv Aimag", 1: "Focus: Tourism & Cultural Travel", 2: "Partners: Collaboration with tourism companies" }
        }
      }
    }
  },
  mn: {
    translation: {
      nav: {
        home: "Нүүр",
        branches: "Салбар Компаниуд",
        about: "Бидний Тухай",
        contact: "Холбоо Барих",
      },
      hero: {
        title: "Монгол Улсын эдийн засгийн",
        titleHighlight: "Гол салбарууд дахь өсөлт",
        subtitle: "Уул уурхай • Хөдөө аж ахуй • Худалдаа • Үйлчилгээ",
        cta: "Бидний Тухай",
      },
      network: {
        subtitle: "Группийн Бүтэц",
        title: "Үйл Ажиллагааны Дөрвөн Тулгуур",
        link: "Компанийн засаглалыг харах",
        learnMore: "Дэлгэрэнгүй"
      },
      story: {
        established: "2011 ОНД БАЙГУУЛАГДСАН",
        title: "Эдийн Засгийн Бүсүүд дэх Тогтвортой Үйл Ажиллагаа",
        description: "Ланд Минерал Групп ХХК нь 2011 онд байгуулагдсан. Тус групп нь 4 охин компанийн бүтэцтэйгээр Монгол Улсын эдийн засгийн гол бүсүүдэд тогтвортой үйл ажиллагаа явуулж байна.",
        areas: "Үйл ажиллагааны үндсэн чиглэлүүд:",
        link: "Дэлгэрэнгүй түүх",
        experience: "Жилийн Туршлага",
        activityList: {
            0: "Уул уурхай",
            1: "Хүнс, хөдөө аж ахуй",
            2: "Мах, махан бүтээгдэхүүн",
            3: "Сүү, сүүн бүтээгдэхүүн",
            4: "Худалдаа",
            5: "Экспорт",
            6: "Үйлчилгээ",
            7: "Түрээс",
            8: "Үйлдвэрлэл",
            9: "Кофе шоп",
            10: "Зээлдүүлэн барьцаалах үйлчилгээ"
        }
      },
      about: {
        header: {
          profile: "Компанийн Танилцуулга",
          title: "Үеийн Үед",
          titleHighlight: "Үнэ Цэнийг Бүтээнэ",
          description: "Ланд Минерал Групп ХХК нь 2011 онд байгуулагдсан олон салбарт үйл ажиллагаа явуулдаг групп компани юм. Бид Уул уурхай, Хөдөө аж ахуй, Худалдаа, Үйлчилгээ гэсэн дөрвөн үндсэн тулгуурт тогтвортой үйл ажиллагаа явуулж байна."
        },
        stats: {
          founded: "Байгуулагдсан",
          subsidiaries: "Охин Компани",
          sectors: "Гол Салбарууд",
          zones: "Эдийн Засгийн Бүс",
          central: "Төвийн"
        },
        journey: {
          title: "Бидний Түүх",
          p1: "<strong class='text-white'>2011</strong> онд байгуулагдсан Ланд Минерал Групп нь Монгол орны байгалийн баялгийг хариуцлагатайгаар ашиглах зорилготойгоор эхэлсэн. Өнгөрсөн 15 жилийн хугацаанд бид нэг аж ахуйн нэгжээс <strong class='text-white'>4 охин компани</strong> бүхий томоохон групп болон өргөжсөн.",
          p2: "Өнөөдөр бидний үйл ажиллагаа эдийн засгийн өргөн хүрээг хамарч байна. Бид зөвхөн олборлолт хийгээд зогсохгүй хүнсний үйлдвэрлэл, экспорт, үл хөдлөх хөрөнгийн түрээс, санхүүгийн үйлчилгээ үзүүлж байна.",
          focusTitle: "Стратегийн Тэргүүлэх Чиглэлүүд",
          focusList: {
            0: "Хариуцлагатай Уул Уурхай",
            1: "Хүнсний Аюулгүй Байдал (Мах/Сүү)",
            2: "Импорт/Экспортын Ложистик",
            3: "Худалдааны Түрээс"
          },
          quote: "Бид тогтвортой аж үйлдвэр, үйлчилгээний шилдэг чанараар дамжуулан Монгол Улсын эдийн засгийг төрөлжүүлэхийн төлөө ажиллаж байна."
        },
        values: {
          title: "Бидний Үнэт Зүйлс",
          subtitle: "Бидний 15 жилийн түүхийг тодорхойлох зарчмууд.",
          items: {
            sustainability: { title: "Тогтвортой Байдал", desc: "Бид уул уурхай, хөдөө аж ахуйн салбарт байгаль орчныг хамгаалахыг эн тэргүүнд тавьж, ирээдүй хойч үедээ баялгаа өвлүүлэхийг зорьдог." },
            innovation: { title: "Инноваци", desc: "Аж үйлдвэрийн дэвшилтэт үйлдвэрлэлээс эхлээд орчин үеийн кофе шопын үйлчилгээ хүртэл бид байнга шинэчлэгдэн хөгжиж байна." },
            integrity: { title: "Шударга Байдал", desc: "Ил тод засаглал болон барьцаат зээлийн найдвартай үйлчилгээ нь бидний харилцагчидтайгаа тогтоосон итгэлцлийн үндэс юм." },
            community: { title: "Нийгмийн Хариуцлага", desc: "Монгол Улсын эдийн засгийн гол бүс нутгуудад ажлын байр бий болгож, орон нутгийн дэд бүтцийг дэмжин ажилладаг." }
          }
        },
        cta: {
          title: "Бидэнтэй Хамтран Ажиллах уу?",
          desc: "Та хөдөө аж ахуйн бүтээгдэхүүн, уул уурхайн хамтын ажиллагаа эсвэл худалдааны түрээс сонирхож байвал Ланд Минерал Групп таны найдвартай түнш байх болно.",
          button: "Холбоо Барих"
        }
      },
      // --- NEW: BRANCH DETAIL PAGE LABELS (MONGOLIAN) ---
      branchDetail: {
        overview: "Компанийн Танилцуулга",
        highlights: "Онцлох Үзүүлэлтүүд",
        founder: "Үүсгэн Байгуулагч",
        glance: "Товчхон",
        established: "Байгуулагдсан",
        headquarters: "Төв Оффис",
        website: "Вебсайт руу зочлох",
        opensTab: "Шинэ цонхонд нээгдэнэ",
        hqLocation: "Монгол улс, Улаанбаатар"
      },
      companies: {
        mining: {
          name: "Уул Уурхай & Аж Үйлдвэр",
          description: "Тогтвортой уул уурхайн олборлолт болон аж үйлдвэрийн төслүүд.",
          introduction: "Хариуцлагатай ашигт малтмал олборлолт, хүнд үйлдвэрийн салбарт тэргүүлэгч.",
          founder: "Мэдээлэл байхгүй",
          features: { 0: "Тогтвортой олборлолтын аргууд", 1: "Хүнд машин механизмын ложистик", 2: "Нөхөн сэргээлтийн төслүүд" }
        },
        agriculture: {
          name: "Цэцэн Далд Трейд ХХК",
          description: "Мах, махан бүтээгдэхүүний үйлдвэрлэл, худалдаа, экспорт.",
          introduction: "Мах, махан бүтээгдэхүүний үйлдвэрлэл, худалдаа, экспортын чиглэлээр мэргэшсэн. Улаанбаатар хотод 3.5 га газарт үйлдвэрийн үйл ажиллагаа явуулдаг.",
          founder: "Мэдээлэл байхгүй",
          features: { 0: "Үйлдвэрийн объект: Улаанбаатар хотод 3.5 га газар", 1: "Хадгалалт: 200 тонны багтаамжтай 4 гүн хөлдөөгч", 2: "Туршлага: 2018–2020 онд БНХАУ-д махан бүтээгдэхүүн экспортолсон" }
        },
        dairy: {
          name: "Лансын Цацал ХХК",
          description: "Сүү, сүүн бүтээгдэхүүн, фермийн аж ахуй.",
          introduction: "Улаанбаатар хот болон Багануур дүүрэгт үйл ажиллагаа явуулдаг, шинэхэн, чанартай сүү, сүүн бүтээгдэхүүн нийлүүлэх зорилготой фермийн аж ахуй.",
          founder: "Мэдээлэл байхгүй",
          features: { 0: "Салбар: Сүү & Сүүн бүтээгдэхүүн", 1: "Үйл ажиллагаа: Тогтвортой фермийн аж ахуй", 2: "Байршил: Улаанбаатар & Багануур дүүрэг" }
        },
        danista: {
          name: "Даниста-Од ХХК",
          description: "Худалдаа, үйлчилгээ, түрээсийн үйл ажиллагаа.",
          introduction: "Эрдэнэт хотын төвд худалдаа, үйлчилгээ, түрээсийн чиглэлээр үйл ажиллагаа явуулдаг салбарын гол тоглогч.",
          founder: "Мэдээлэл байхгүй",
          features: { 0: "Байршил: Орхон аймаг, Эрдэнэт хот", 1: "Үйл ажиллагаа: Худалдаа, Үйлчилгээ, Түрээс", 2: "Байгуулагдсан: 2002 он" }
        },
        vajra: {
          name: "Важра Висдом Сан",
          description: "Аялал жуулчлалын хөгжүүлэлт.",
          introduction: "Улаанбаатар, Увс, Төв аймгуудад аялал жуулчлалын компаниудтай хамтран үйл ажиллагаа явуулдаг шинээр байгуулагдсан сан.",
          founder: "Мэдээлэл байхгүй",
          features: { 0: "Бүс нутаг: Улаанбаатар, Увс, Төв аймаг", 1: "Чиглэл: Аялал жуулчлал & Соёлын аялал", 2: "Түншлэл: Аялал жуулчлалын компаниудтай хамтран ажилладаг" }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;