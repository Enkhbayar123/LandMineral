// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // ============================================================
      // 1. MAIN LAND MINERAL GROUP SITE
      // ============================================================
      nav: { home: "Home", branches: "Branch Companies", about: "About Us", contact: "Contact" },
      hero: { title: "Diversified Growth in", titleHighlight: "Mongolia's Key Sectors", subtitle: "Mining • Agriculture • Trade • Services", cta: "View Our Portfolio" },
      network: { subtitle: "Group Structure", title: "Four Pillars of Operations", link: "View corporate structure", learnMore: "Learn more" },
      story: { established: "ESTABLISHED 2011", title: "Sustainable Operations Across Economic Zones", description: "Land Mineral Group LLC was founded in 2011. The Group operates sustainably in Mongolia's key economic regions with a structure of 4 subsidiary companies.", areas: "Key Business Areas:", link: "Read our full story", experience: "Years of Excellence", activityList: { 0: "Mining", 1: "Food & Agriculture", 2: "Meat Products", 3: "Dairy Products", 4: "Trade", 5: "Export", 6: "Services", 7: "Leasing", 8: "Manufacturing", 9: "Coffee Shop", 10: "Secured Lending" } },
      about: { header: { profile: "Corporate Profile", title: "Building Value Across", titleHighlight: "Generations", description: "Land Mineral Group LLC is a diversified conglomerate founded in 2011." }, stats: { founded: "Founded", subsidiaries: "Subsidiaries", sectors: "Key Sectors", zones: "Economic Zones", central: "Central" }, journey: { title: "Our Journey", p1: "Established in 2011...", p2: "Today, our operations span...", focusTitle: "Strategic Focus Areas", focusList: { 0: "Responsible Mining", 1: "Food Security", 2: "Logistics", 3: "Leasing" }, quote: "Committed to diversifying Mongolia's economy." }, values: { title: "Our Core Values", subtitle: "Principles guiding our legacy.", items: { sustainability: { title: "Sustainability", desc: "Environmental stewardship." }, innovation: { title: "Innovation", desc: "Constant evolution." }, integrity: { title: "Integrity", desc: "Transparent governance." }, community: { title: "Community", desc: "Creating jobs." } } }, cta: { title: "Ready to Partner?", desc: "Contact us today.", button: "Contact Us" } },
      branchDetail: { overview: "Company Overview", highlights: "Key Highlights", founder: "Founder Information", glance: "At a Glance", established: "Established", headquarters: "Headquarters", website: "Visit Website", opensTab: "Opens in a new tab", hqLocation: "Ulaanbaatar, Mongolia" },
      companies: {
        mining: { name: "Mining & Industry", description: "Sustainable mining operations.", introduction: "Leading the way in responsible extraction.", founder: "Founder Info Not Available", features: { 0: "Sustainable extraction", 1: "Heavy machinery", 2: "Rehabilitation" } },
        agriculture: { name: "Tsetsen Dalt Trade LLC", description: "Meat production, trade, and export.", introduction: "Specializing in meat and meat product production.", founder: "Information not currently available", features: { 0: "Factory facility: 3.5 hectares", 1: "Storage: 4 deep freezers", 2: "Experience: Exported to China" } },
        dairy: { name: "Lansyn Tsatsal LLC", description: "Dairy products and farming.", introduction: "Premier dairy enterprise.", founder: "Information not currently available", features: { 0: "Sector: Milk & Dairy", 1: "Operations: Farming", 2: "Location: Ulaanbaatar" } },
        danista: { name: "Danista-Od LLC", description: "Trade and service.", introduction: "Key player in trade.", founder: "Information not currently available", features: { 0: "Location: Erdenet", 1: "Activities: Trade", 2: "Established: 2002" } },
        vajra: { name: "Vajra Wisdom Foundation", description: "Tourism development.", introduction: "Newly established foundation.", founder: "Information not currently available", features: { 0: "Regions: Uvs, Tuv", 1: "Focus: Tourism", 2: "Partners: Agencies" } }
      },

      // ============================================================
      // 2. MAIN CONTACT PAGE (FULLY TRANSLATED)
      // ============================================================
      contactPage: {
        hero: {
            title: "Contact",
            subtitle: "Get in touch with our headquarters. We are ready to answer your questions and discuss partnership opportunities."
        },
        info: {
            title: "Headquarters Info",
            phoneLabel: "Phone Number",
            hours: "Mon-Fri, 09:00 - 18:00",
            emailLabel: "Email Address",
            inquiryLabel: "Official Inquiries",
            officeLabel: "Main Office",
            city: "Ulaanbaatar, Mongolia",
            district: "Sukhbaatar District",
            workingHoursTitle: "Working Hours",
            weekdays: "Weekdays",
            weekends: "Weekends",
            closed: "Closed"
        },
        form: {
            title: "Send us a Message",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            subject: "Subject",
            message: "Message",
            placeholder: {
                first: "John",
                last: "Doe",
                email: "john@example.com",
                msg: "How can we help you?"
            },
            options: {
                general: "General Inquiry",
                partner: "Partnership Proposal",
                investor: "Investor Relations",
                other: "Other"
            },
            sendButton: "Send Message"
        }
      },

      // ============================================================
      // 3. SUBSIDIARY COMPANIES
      // ============================================================
      tsetsen: { nav: { group: "Group Home", products: "Products", factory: "Factory", contact: "Contact Us" }, hero: { est: "Est. 2005 • Ulaanbaatar", title: "PREMIUM", subtitle: "QUALITY", desc: "Mongolia's trusted partner in sustainable meat production and international export.", order: "Order Products", back: "Back to Group" }, stats: { factory: "Factory Facility", freeze: "Deep Freeze Capacity", export: "Global Export Ready" }, content: { title: "Our Standards", desc: "Tsetsen Dalt Trade LLC has been a cornerstone of the industry since 2005.", list: { 0: "State-of-the-art Hygiene Control", 1: "4 Deep Freezer Units (200-ton)", 2: "Export Experience (China 2018-2020)", 3: "Located in Ulaanbaatar" }, sales: "Sales Department" }, contact: { back: "Back to Tsetsen Dalt Home", title: "Factory Contact", subtitle: "Direct line to our meat processing facility and export department.", sales: "Sales & Export", email: "Email Inquiries", location: "Factory Location", zone: "Industrial Zone", district: "Khan-Uul District, Ulaanbaatar", hours: { title: "Operating Hours", mon: "Mon - Fri", sat: "Saturday", sun: "Sunday", closed: "Closed" } } },
      lansyn: { nav: { group: "Group Home", farm: "Our Farm", contact: "Contact", gallery: "Farm Gallery" }, hero: { est: "Est. 2005 • Pure Mongolian Dairy", title: "Pure. Fresh.", subtitle: "Natural.", desc: "Bringing the freshness of Baganuur's pastures directly to Ulaanbaatar families.", partner: "Partner With Us", back: "Back to Group" }, features: { title: "Sustainable Farming", subtitle: "Operating in Ulaanbaatar & Baganuur District.", eco: { title: "Eco-Friendly", desc: "Sustainable grazing practices." }, dairy: { title: "Premium Dairy", desc: "High-quality milk processing." }, loc: { title: "Strategic Location", desc: "Located in Baganuur District." } }, contact: { title: "Freshness You Can Trust", pageTitle: "Contact Lansyn Tsatsal", pageSubtitle: "Reach out to our farm and distribution center.", call: "Call Us", email: "Email Us", location: "Farm Location", back: "Back to Home" },galleryPage: {
        title: "Life on the Pasture",
        subtitle: "A glimpse into our daily operations, our cared-for livestock, and the facilities that ensure premium quality.",
        back: "Back to Farm"
      } },
      danista: { nav: { group: "Group Home", services: "Services", lease: "Leasing", contact: "Contact" }, hero: { est: "Since 2002 • Erdenet City", title: "Hub of Commerce", subtitle: "& Services", desc: "Danista-Od LLC is a premier trade and service center located in the heart of Orkhon Province. We connect businesses with customers through modern leasing solutions.", lease: "Leasing Inquiry", back: "Back to Group" }, features: { trade: { title: "Trade Center", desc: "A bustling hub for retail and commerce in Erdenet." }, service: { title: "Premium Services", desc: "High-quality facilities management and customer services." }, location: { title: "Prime Location", desc: "Strategically situated in the center of Erdenet City." } }, contact: { back: "Back to Danista Home", title: "Leasing & Management", subtitle: "Contact our administration office for rental opportunities.", phone: "Administration", email: "Leasing Inquiries", location: "Center Location", hours: "Business Hours", weekdays: "Mon-Fri: 09:00 - 20:00", weekend: "Sat-Sun: 10:00 - 18:00" } },
      vajra: { nav: { group: "Group Home", tourism: "Tourism", projects: "Projects", contact: "Contact", retreat: "Wellness Center" }, hero: { est: "Preserving Heritage • Empowering Communities", title: "Discover", subtitle: "Mongolia", desc: "Vajra Wisdom Foundation is dedicated to developing sustainable tourism and cultural travel initiatives across Ulaanbaatar, Uvs, and Tuv provinces.", explore: "Explore Initiatives", back: "Back to Group" }, features: { culture: { title: "Cultural Tourism", desc: "Promoting Mongolia's rich nomadic heritage to the world." }, region: { title: "Regional Growth", desc: "Active projects in Uvs, Tuv, and Ulaanbaatar." }, partner: { title: "Strategic Partnerships", desc: "Collaborating with leading travel agencies." } }, contact: { back: "Back to Vajra Home", title: "Partner With Us", subtitle: "Let's build the future of Mongolian tourism together.", phone: "Foundation Office", email: "Partnership Inquiries", location: "Headquarters", hours: "Office Hours", weekdays: "Mon-Fri: 09:00 - 18:00", weekend: "Sat-Sun: Closed" }, retreatPage: {
        title: "The Sanctuary Project",
        subtitle: "A vision for holistic welfare and spiritual growth. We are building a world-class meditation retreat aimed at healing the mind and body.",
        missionTitle: "Meditation & Welfare",
        missionDesc: "Our goal is to create a space where modern comfort meets ancient wisdom. This center will provide welfare services, mental health retreats, and cultural immersion programs.",
        back: "Back to Foundation"
      } },
    }
  },
  mn: {
    translation: {
      // ============================================================
      // 1. MAIN SITE (MONGOLIAN)
      // ============================================================
      nav: { home: "Нүүр", branches: "Салбар Компаниуд", about: "Бидний Тухай", contact: "Холбоо Барих" },
      hero: { title: "Монгол Улсын эдийн засгийн", titleHighlight: "Гол салбарууд дахь өсөлт", subtitle: "Уул уурхай • Хөдөө аж ахуй • Худалдаа • Үйлчилгээ", cta: "Бидний багцтай танилцах" },
      network: { subtitle: "Группийн Бүтэц", title: "Үйл Ажиллагааны Дөрвөн Тулгуур", link: "Компанийн засаглалыг харах", learnMore: "Дэлгэрэнгүй" },
      story: { established: "2011 ОНД БАЙГУУЛАГДСАН", title: "Эдийн Засгийн Бүсүүд дэх Тогтвортой Үйл Ажиллагаа", description: "Ланд Минерал Групп ХХК нь 2011 онд байгуулагдсан. Тус групп нь 4 охин компанийн бүтэцтэйгээр Монгол Улсын эдийн засгийн гол бүсүүдэд тогтвортой үйл ажиллагаа явуулж байна.", areas: "Үйл ажиллагааны үндсэн чиглэлүүд:", link: "Дэлгэрэнгүй түүх", experience: "Жилийн Туршлага", activityList: { 0: "Уул уурхай", 1: "Хүнс, хөдөө аж ахуй", 2: "Мах, махан бүтээгдэхүүн", 3: "Сүү, сүүн бүтээгдэхүүн", 4: "Худалдаа", 5: "Экспорт", 6: "Үйлчилгээ", 7: "Түрээс", 8: "Үйлдвэрлэл", 9: "Кофе шоп", 10: "Зээлдүүлэн барьцаалах үйлчилгээ" } },
      about: { header: { profile: "Компанийн Танилцуулга", title: "Үеийн Үед", titleHighlight: "Үнэ Цэнийг Бүтээнэ", description: "Ланд Минерал Групп ХХК нь 2011 онд байгуулагдсан..." }, stats: { founded: "Байгуулагдсан", subsidiaries: "Охин Компани", sectors: "Гол Салбарууд", zones: "Эдийн Засгийн Бүс", central: "Төвийн" }, journey: { title: "Бидний Түүх", p1: "2011 онд байгуулагдсан...", p2: "Өнөөдөр бидний үйл ажиллагаа...", focusTitle: "Стратегийн Чиглэлүүд", focusList: { 0: "Хариуцлагатай Уул Уурхай", 1: "Хүнсний Аюулгүй Байдал", 2: "Ложистик", 3: "Түрээс" }, quote: "Эдийн засгийг төрөлжүүлэхийн төлөө." }, values: { title: "Бидний Үнэт Зүйлс", subtitle: "Зарчмууд.", items: { sustainability: { title: "Тогтвортой Байдал", desc: "Байгаль орчныг хамгаалах." }, innovation: { title: "Инноваци", desc: "Байнга шинэчлэгдэх." }, integrity: { title: "Шударга Байдал", desc: "Ил тод засаглал." }, community: { title: "Нийгмийн Хариуцлага", desc: "Ажлын байр." } } }, cta: { title: "Хамтран Ажиллах уу?", desc: "Бидэнтэй холбогдоорой.", button: "Холбоо Барих" } },
      branchDetail: { overview: "Компанийн Танилцуулга", highlights: "Онцлох Үзүүлэлтүүд", founder: "Үүсгэн Байгуулагч", glance: "Товчхон", established: "Байгуулагдсан", headquarters: "Төв Оффис", website: "Вебсайт руу зочлох", opensTab: "Шинэ цонхонд нээгдэнэ", hqLocation: "Монгол улс, Улаанбаатар" },
      companies: {
        mining: { name: "Уул Уурхай & Аж Үйлдвэр", description: "Тогтвортой уул уурхай.", introduction: "Хариуцлагатай олборлолт.", founder: "Мэдээлэл байхгүй", features: { 0: "Тогтвортой олборлолт", 1: "Хүнд машин механизм", 2: "Нөхөн сэргээлт" } },
        agriculture: { name: "Цэцэн Далт Трейд ХХК", description: "Мах, махан бүтээгдэхүүн.", introduction: "Мах, махан бүтээгдэхүүний үйлдвэрлэл.", founder: "Мэдээлэл байхгүй", features: { 0: "Үйлдвэр: 3.5 га газар", 1: "Хадгалалт: 4 гүн хөлдөөгч", 2: "Туршлага: БНХАУ руу экспортолсон" } },
        dairy: { name: "Лансын Цацал ХХК", description: "Сүү, сүүн бүтээгдэхүүн.", introduction: "Фермийн аж ахуй.", founder: "Мэдээлэл байхгүй", features: { 0: "Салбар: Сүү", 1: "Үйл ажиллагаа: Ферм", 2: "Байршил: Улаанбаатар" } },
        danista: { name: "Даниста-Од ХХК", description: "Худалдаа, үйлчилгээ.", introduction: "Худалдааны төв.", founder: "Мэдээлэл байхгүй", features: { 0: "Байршил: Эрдэнэт", 1: "Үйл ажиллагаа: Түрээс", 2: "Байгуулагдсан: 2002" } },
        vajra: { name: "Важра Висдом Сан", description: "Аялал жуулчлал.", introduction: "Шинэ сан.", founder: "Мэдээлэл байхгүй", features: { 0: "Бүс: Увс, Төв", 1: "Чиглэл: Аялал", 2: "Түншлэл: Компаниуд" } }
      },

      // ============================================================
      // 2. MAIN CONTACT PAGE (FULLY TRANSLATED MONGOLIAN)
      // ============================================================
      contactPage: {
        hero: {
            title: "Холбоо Барих",
            subtitle: "Манай төв оффистой холбогдоно уу. Бид таны асуултад хариулж, хамтран ажиллах боломжуудыг ярилцахад бэлэн байна."
        },
        info: {
            title: "Төв Оффисын Мэдээлэл",
            phoneLabel: "Утасны Дугаар",
            hours: "Даваа-Баасан, 09:00 - 18:00",
            emailLabel: "Имэйл Хаяг",
            inquiryLabel: "Албан Ёсны Лавлагаа",
            officeLabel: "Төв Оффис",
            city: "Улаанбаатар, Монгол Улс",
            district: "Сүхбаатар Дүүрэг",
            workingHoursTitle: "Цагийн Хуваарь",
            weekdays: "Ажлын Өдрүүд",
            weekends: "Амралтын Өдрүүд",
            closed: "Амарна"
        },
        form: {
            title: "Бидэнд Зурвас Илгээх",
            firstName: "Нэр",
            lastName: "Овог",
            email: "Имэйл Хаяг",
            subject: "Сэдэв",
            message: "Зурвас",
            placeholder: {
                first: "Болд",
                last: "Дорж",
                email: "bold@example.com",
                msg: "Бид танд юугаар туслах вэ?"
            },
            options: {
                general: "Ерөнхий Лавлагаа",
                partner: "Хамтын Ажиллагааны Санал",
                investor: "Хөрөнгө Оруулалтын Харилцаа",
                other: "Бусад"
            },
            sendButton: "Зурвас Илгээх"
        }
      },

      // ============================================================
      // 3. SUBSIDIARY COMPANIES (MONGOLIAN)
      // ============================================================
      tsetsen: { nav: { group: "Групп Нүүр", products: "Бүтээгдэхүүн", factory: "Үйлдвэр", contact: "Холбоо Барих" }, hero: { est: "2005 онд байгуулагдсан • Улаанбаатар", title: "ДЭЭД", subtitle: "ЗЭРГИЙН ЧАНАР", desc: "Монгол улсын тогтвортой мах үйлдвэрлэл, экспортын итгэлт түнш.", order: "Захиалга Өгөх", back: "Групп руу буцах" }, stats: { factory: "Үйлдвэрийн Байр", freeze: "Гүн Хөлдөөгч", export: "Экспортод Бэлэн" }, content: { title: "Бидний Стандарт", desc: "Цэцэн Далт Трейд ХХК нь 2005 оноос хойш салбарын тулгуур багана байсаар ирсэн. Бид малчдын хотноос эцсийн бүтээгдэхүүн хүртэл чанарын хатуу хяналтыг хэрэгжүүлдэг.", list: { 0: "Эрүүл ахуйн дээд зэргийн хяналт", 1: "4 Гүн хөлдөөгч (200 тн)", 2: "Экспортын туршлага (БНХАУ 2018-2020)", 3: "Улаанбаатар хотод байршилтай" }, sales: "Борлуулалтын Алба" }, contact: { back: "Цэцэн Далт Нүүр Хуудас", title: "Үйлдвэртэй Холбогдох", subtitle: "Мах боловсруулах үйлдвэр болон экспортын албатай шууд холбогдох.", sales: "Борлуулалт & Экспорт", email: "Имэйл Хаяг", location: "Үйлдвэрийн Байршил", zone: "Аж үйлдвэрийн бүс", district: "Хан-Уул дүүрэг, Улаанбаатар", hours: { title: "Цагийн Хуваарь", mon: "Даваа - Баасан", sat: "Бямба", sun: "Ням", closed: "Амарна" } } },
      lansyn: { nav: { group: "Групп Нүүр", farm: "Фермийн Тухай", contact: "Холбоо Барих", gallery: "Фермийн Зураг" }, hero: { est: "2005 он • Монгол Сүүний Үйлдвэр", title: "Цэвэр.", subtitle: "Шинэхэн.", desc: "Багануур дүүргийн бэлчээрээс Улаанбаатарын хэрэглэгчдэд шууд хүргэж байна.", partner: "Хамтран Ажиллах", back: "Групп руу буцах" }, features: { title: "Тогтвортой Фермийн Аж Ахуй", subtitle: "Амьтны тав тух болон бүтээгдэхүүний цэвэр байдалд анхааран Улаанбаатар, Багануур дүүрэгт үйл ажиллагаа явуулдаг.", eco: { title: "Байгальд Ээлтэй", desc: "Бэлчээрийг хамгаалах." }, dairy: { title: "Дээд Зэргийн Сүү", desc: "Эрүүл ахуйн хатуу шаардлага." }, loc: { title: "Стратегийн Байршил", desc: "Багануур дүүрэгт байрлаж, ложистикийн оновчтой шийдлийг бүрдүүлсэн." } }, contact: { title: "Итгэж Болох Шинэхэн Чанар", pageTitle: "Лансын Цацалтай Холбогдох", pageSubtitle: "Манай ферм болон түгээлтийн төвтэй холбогдоорой.", call: "Залгах", email: "Имэйл Бичих", location: "Фермийн Байршил", back: "Нүүр хуудас руу буцах" }, galleryPage: {
        title: "Малчны Хот",
        subtitle: "Манай өдөр тутмын үйл ажиллагаа, мал маллагаа болон чанарыг баталгаажуулдаг орчин.",
        back: "Ферм рүү буцах"
      } },
      danista: { nav: { group: "Групп Нүүр", services: "Үйлчилгээ", lease: "Түрээс", contact: "Холбоо Барих" }, hero: { est: "2002 оноос хойш • Эрдэнэт хот", title: "Худалдаа,", subtitle: "Үйлчилгээний Төв", desc: "Даниста-Од ХХК нь Орхон аймгийн төвд байрлах худалдаа, үйлчилгээний тэргүүлэх төв юм. Бид бизнесийн таатай орчныг бүрдүүлж, түрээсийн цогц шийдлийг санал болгож байна.", lease: "Түрээсийн Лавлах", back: "Групп руу буцах" }, features: { trade: { title: "Худалдааны Төв", desc: "Эрдэнэт хотын худалдааны гол цэг." }, service: { title: "Дээд Зэрэглэлийн Үйлчилгээ", desc: "Байгууламжийн менежмент болон харилцагчийн үйлчилгээ." }, location: { title: "Стратегийн Байршил", desc: "Хотын төв цэгт байршилтай." } }, contact: { back: "Даниста Нүүр Хуудас", title: "Түрээс & Менежмент", subtitle: "Түрээсийн талаар мэдээлэл авах бол манай захиргаатай холбогдоно уу.", phone: "Захиргаа", email: "Түрээсийн Лавлах", location: "Байршил", hours: "Цагийн Хуваарь", weekdays: "Даваа-Баасан: 09:00 - 20:00", weekend: "Бямба-Ням: 10:00 - 18:00" } },
      vajra: { nav: { group: "Групп Нүүр", tourism: "Аялал Жуулчлал", projects: "Төслүүд", contact: "Холбоо Барих", retreat: "Амралт & Бясалгал" }, hero: { est: "Өвийг Хадгалах • Хамтдаа Хөгжих", title: "Монголыг", subtitle: "Нээгээрэй", desc: "Важра Висдом Сан нь Улаанбаатар, Увс, Төв аймгуудын аялал жуулчлал, соёлын аяллыг хөгжүүлэхэд чиглэсэн тогтвортой санаачилгуудыг хэрэгжүүлдэг.", explore: "Санаачилгууд", back: "Групп руу буцах" }, features: { culture: { title: "Соёлын Аялал", desc: "Монголын нүүдэлчин ахуй соёлыг дэлхийд таниулах." }, region: { title: "Бүс Нутгийн Хөгжил", desc: "Увс, Төв аймаг, Улаанбаатар дахь идэвхтэй төслүүд." }, partner: { title: "Стратегийн Түншлэл", desc: "Тэргүүлэх аялал жуулчлалын агентлагуудтай хамтран ажилладаг." } }, contact: { back: "Важра Нүүр Хуудас", title: "Бидэнтэй Хамтран Ажиллах", subtitle: "Монголын аялал жуулчлалын ирээдүйг хамтдаа бүтээцгээе.", phone: "Сангийн Оффис", email: "Түншлэл", location: "Төв Оффис", hours: "Цагийн Хуваарь", weekdays: "Даваа-Баасан: 09:00 - 18:00", weekend: "Бямба-Ням: Амарна" }, retreatPage: {
        title: "Амар Амгалангийн Өргөө",
        subtitle: "Сэтгэлийн амар амгалан, оюун санааны хөгжилд зориулсан бидний ирээдүйн төсөл.",
        missionTitle: "Бясалгал & Халамж",
        missionDesc: "Орчин үеийн тав тухыг эртний уламжлалт ухаантай хослуулсан, сэтгэл зүйн эрүүл мэнд, халамжийн цогц төв.",
        back: "Сан руу буцах"
      } },
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;