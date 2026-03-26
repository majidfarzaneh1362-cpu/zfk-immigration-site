export type LocaleText = {
  en: string;
  fa: string;
  fr: string;
};

export type PathwayStatus = "active" | "ended";

export type ProvincePathway = {
  title: string;
  summary: LocaleText;
  officialSourceLabel: string;
  officialSourceUrl: string;
  status: PathwayStatus;
};

export type ProvinceRecord = {
  slug: string;
  name: string;
  shortIntro: LocaleText;
  locationInCanada: LocaleText;
  locationVisualLabel: LocaleText;
  regionSlot: 1 | 2 | 3 | 4 | 5;
  pathwayModel: "pnp" | "quebec" | "non-pnp";
  pathways: ProvincePathway[];
};

export const provinces: ProvinceRecord[] = [
  {
    slug: "ontario",
    name: "Ontario",
    shortIntro: {
      en: "Ontario is in central-eastern Canada and remains a key destination for students and skilled workers.\nIt benefits from a large labor market, broad education options, and active provincial streams.\nFor immigration planning, candidates often compare OINP routes with federal pathways in parallel.\nA profile-based strategy is recommended before selecting the most suitable stream.",
      fa: "انتاریو در مرکز-شرق کانادا قرار دارد و همچنان یکی از مقصدهای اصلی برای دانشجویان و نیروی متخصص است.\nاین استان از بازار کار گسترده، گزینه های آموزشی متنوع و مسیرهای فعال استانی بهره می برد.\nاز نظر مهاجرتی، متقاضیان معمولا مسیرهای OINP را در کنار گزینه های فدرال ارزیابی می کنند.\nپیشنهاد می شود پیش از انتخاب نهایی، یک استراتژی مبتنی بر پروفایل تدوین شود.",
      fr: "L'Ontario se situe au centre-est du Canada et demeure une destination importante pour etudiants et travailleurs qualifies.\nLa province dispose d'un grand marche du travail, d'une offre educative large et de volets provinciaux actifs.\nPour l'immigration, il est frequent de comparer les voies OINP avec les options federales.\nUne strategie basee sur le profil est conseillee avant de choisir un volet final.",
    },
    locationInCanada: {
      en: "Central-Eastern Canada",
      fa: "مرکز-شرق کانادا",
      fr: "Centre-est du Canada",
    },
    locationVisualLabel: {
      en: "Central Region",
      fa: "منطقه مرکزی",
      fr: "Region centrale",
    },
    regionSlot: 3,
    pathwayModel: "pnp",
    pathways: [
      {
        title: "OINP Human Capital Streams",
        summary: {
          en: "Targets candidates with strong education, language ability, and work profile through Expression of Interest and federal-linked pathways.",
          fa: "برای متقاضیان دارای تحصیلات، زبان و سابقه کاری مناسب از طریق سیستم های EOI و مسیرهای مرتبط فدرال طراحی شده است.",
          fr: "Cible les candidats avec un bon profil education-langue-experience via des volets EOI et lies au federal.",
        },
        officialSourceLabel: "Ontario OINP Official",
        officialSourceUrl:
          "https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp",
        status: "active",
      },
      {
        title: "OINP Employer Job Offer Streams",
        summary: {
          en: "Supports nomination based on eligible job offers in Ontario for foreign workers and international students.",
          fa: "برای متقاضیانی که پیشنهاد شغلی واجد شرایط در انتاریو دارند، مسیر نامینیشن ارائه می کند.",
          fr: "Permet des nominations basees sur une offre d'emploi admissible en Ontario.",
        },
        officialSourceLabel: "Ontario OINP Official",
        officialSourceUrl:
          "https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp",
        status: "active",
      },
    ],
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    shortIntro: {
      en: "British Columbia is located on Canada's west coast and is known for a dynamic, innovation-driven economy.\nThe province offers pathways for workers, graduates, and entrepreneurs across multiple sectors.\nFrom an immigration perspective, BC options are often evaluated with employment readiness and location goals.\nChoosing the right stream early can reduce processing uncertainty and improve planning quality.",
      fa: "بریتیش کلمبیا در ساحل غربی کانادا قرار دارد و به اقتصاد پویا و نوآور شناخته می شود.\nاین استان مسیرهایی برای نیروی کار، فارغ التحصیلان و کارآفرینان در بخش های مختلف ارائه می دهد.\nدر برنامه مهاجرتی، مسیرهای BC معمولا همراه با آمادگی شغلی و هدف مکانی بررسی می شوند.\nانتخاب زودهنگام مسیر مناسب می تواند ریسک تصمیم گیری را کاهش دهد.",
      fr: "La Colombie-Britannique est situee sur la cote ouest du Canada et se distingue par une economie innovante.\nElle propose des parcours pour travailleurs, diplomes et entrepreneurs dans plusieurs secteurs.\nEn immigration, les options de la C.-B. sont souvent analysees avec la preparation a l'emploi et le projet d'installation.\nUn choix de volet anticipe peut aider a mieux gerer l'incertitude du processus.",
    },
    locationInCanada: {
      en: "West Coast Canada",
      fa: "ساحل غربی کانادا",
      fr: "Cote ouest du Canada",
    },
    locationVisualLabel: {
      en: "West Region",
      fa: "منطقه غرب",
      fr: "Region ouest",
    },
    regionSlot: 1,
    pathwayModel: "pnp",
    pathways: [
      {
        title: "BC PNP Skills Immigration",
        summary: {
          en: "For workers and international graduates with eligible BC employment pathways.",
          fa: "برای نیروهای کار و فارغ التحصیلان بین المللی با مسیرهای شغلی واجد شرایط در بریتیش کلمبیا.",
          fr: "Pour travailleurs et diplomes internationaux ayant des voies d'emploi admissibles en C.-B.",
        },
        officialSourceLabel: "WelcomeBC Official",
        officialSourceUrl: "https://www.welcomebc.ca/immigrate-to-b-c",
        status: "active",
      },
      {
        title: "BC PNP Entrepreneur Immigration",
        summary: {
          en: "Business-focused nomination pathways for qualified entrepreneurs planning to establish or purchase a business in BC.",
          fa: "مسیرهای کارآفرینی برای متقاضیان واجد شرایط که قصد راه اندازی یا خرید کسب وکار در BC را دارند.",
          fr: "Volets d'immigration d'affaires pour entrepreneurs qualifies souhaitant etablir ou reprendre une entreprise en C.-B.",
        },
        officialSourceLabel: "WelcomeBC Official",
        officialSourceUrl: "https://www.welcomebc.ca/immigrate-to-b-c",
        status: "active",
      },
    ],
  },
  {
    slug: "alberta",
    name: "Alberta",
    shortIntro: {
      en: "Alberta is in western Canada and is recognized for practical employment demand in key industries.\nIts nomination options include worker-focused and Express Entry-linked pathways.\nFor immigration strategy, Alberta streams can be relevant for candidates with aligned occupation profiles.\nA careful review of eligibility details is important before relying on a specific stream.",
      fa: "آلبرتا در غرب کانادا قرار دارد و برای تقاضای شغلی کاربردی در صنایع کلیدی شناخته می شود.\nمسیرهای نامینیشن آن شامل گزینه های نیروی کار و مسیرهای مرتبط با اکسپرس اینتری است.\nاز نظر مهاجرتی، این مسیرها برای متقاضیانی با پروفایل شغلی هم راستا می توانند مناسب باشند.\nقبل از تکیه بر یک مسیر مشخص، بررسی دقیق شرایط واجد بودن ضروری است.",
      fr: "L'Alberta se situe dans l'ouest canadien et est reconnue pour des besoins d'emploi concrets dans des secteurs cles.\nSes options de nomination incluent des volets travailleurs et des parcours lies a Entree express.\nEn strategie migratoire, ces voies peuvent convenir aux candidats avec un profil professionnel aligne.\nUne verification detaillee de l'admissibilite reste essentielle avant de cibler un volet.",
    },
    locationInCanada: {
      en: "Western Prairies",
      fa: "دشت های غربی",
      fr: "Prairies de l'ouest",
    },
    locationVisualLabel: {
      en: "Prairie-West Region",
      fa: "منطقه دشت-غرب",
      fr: "Region prairies-ouest",
    },
    regionSlot: 2,
    pathwayModel: "pnp",
    pathways: [
      {
        title: "Alberta Opportunity Stream",
        summary: {
          en: "Supports workers already employed in Alberta who meet language, occupation, and employer conditions.",
          fa: "برای متقاضیانی که در آلبرتا مشغول به کار هستند و شرایط زبان، شغل و کارفرما را دارند.",
          fr: "Pour les travailleurs deja en emploi en Alberta repondant aux conditions de langue, profession et employeur.",
        },
        officialSourceLabel: "Alberta AAIP Official",
        officialSourceUrl: "https://www.alberta.ca/aaip",
        status: "active",
      },
      {
        title: "Alberta Express Entry Stream",
        summary: {
          en: "Invites selected federal Express Entry candidates based on Alberta priorities and profile factors.",
          fa: "متقاضیان منتخب اکسپرس اینتری فدرال را بر اساس اولویت های آلبرتا دعوت می کند.",
          fr: "Invite certains candidats Entree express federale selon les priorites de l'Alberta.",
        },
        officialSourceLabel: "Alberta AAIP Official",
        officialSourceUrl: "https://www.alberta.ca/aaip",
        status: "active",
      },
    ],
  },
  {
    slug: "manitoba",
    name: "Manitoba",
    shortIntro: {
      en: "Manitoba is in the central prairie region and emphasizes practical settlement and workforce integration.\nIts pathways prioritize local employment ties, regional retention, and graduate transitions.\nFor immigration relevance, candidates with province-specific connections can be better positioned in selection rounds.\nBuilding a realistic local plan before application often improves decision quality.",
      fa: "مانیتوبا در منطقه دشت مرکزی قرار دارد و بر استقرار عملی و ادغام در بازار کار تمرکز می کند.\nمسیرهای این استان بر ارتباط شغلی محلی، ماندگاری منطقه ای و انتقال فارغ التحصیلان تاکید دارند.\nاز نظر مهاجرتی، متقاضیانی که پیوند مشخص با استان دارند معمولا موقعیت بهتری در انتخاب خواهند داشت.\nتهیه برنامه محلی واقع بینانه پیش از اقدام می تواند کیفیت تصمیم را افزایش دهد.",
      fr: "Le Manitoba se trouve dans la region des prairies centrales et met l'accent sur l'etablissement concret.\nSes parcours privilegient les liens d'emploi locaux, la retention regionale et la transition des diplomes.\nPour l'immigration, les candidats ayant des connexions provinciales peuvent etre mieux positionnes.\nElaborer un plan local realiste avant la demande aide generalement a mieux orienter la decision.",
    },
    locationInCanada: {
      en: "Central Prairies",
      fa: "دشت های مرکزی",
      fr: "Prairies centrales",
    },
    locationVisualLabel: {
      en: "Central-Prairie Region",
      fa: "منطقه دشت مرکزی",
      fr: "Region prairie-centrale",
    },
    regionSlot: 3,
    pathwayModel: "pnp",
    pathways: [
      {
        title: "Skilled Worker in Manitoba",
        summary: {
          en: "For workers with Manitoba employment ties and demonstrated ability to settle long-term.",
          fa: "برای متقاضیانی با ارتباط شغلی در مانیتوبا و توانایی استقرار بلندمدت.",
          fr: "Pour les travailleurs ayant des liens d'emploi au Manitoba et un potentiel d'etablissement durable.",
        },
        officialSourceLabel: "Manitoba MPNP Official",
        officialSourceUrl: "https://immigratemanitoba.com/",
        status: "active",
      },
      {
        title: "International Education Stream",
        summary: {
          en: "Supports eligible Manitoba graduates through employment, internship, and entrepreneurship options.",
          fa: "برای فارغ التحصیلان واجد شرایط مانیتوبا از طریق مسیرهای شغلی، کارآموزی و کارآفرینی.",
          fr: "Soutient les diplomes admissibles du Manitoba via des options emploi, stage et entrepreneuriat.",
        },
        officialSourceLabel: "Manitoba MPNP Official",
        officialSourceUrl: "https://immigratemanitoba.com/",
        status: "active",
      },
    ],
  },
  {
    slug: "nova-scotia",
    name: "Nova Scotia",
    shortIntro: {
      en: "Nova Scotia is in Atlantic Canada and offers pathways tied to regional workforce and settlement priorities.\nThe province combines nomination options with Atlantic-focused immigration mechanisms.\nFrom an immigration angle, profile fit and employer alignment are central to pathway selection.\nCandidates should confirm whether a stream is active or historical before planning around it.",
      fa: "نوا اسکوشیا در منطقه آتلانتیک کانادا قرار دارد و مسیرهایی متناسب با اولویت های بازار کار و استقرار منطقه ای ارائه می دهد.\nاین استان گزینه های نامینیشن را با سازوکارهای مهاجرتی آتلانتیک ترکیب می کند.\nدر برنامه مهاجرتی، تناسب پروفایل و هم راستایی با کارفرما نقش کلیدی در انتخاب مسیر دارد.\nپیش از برنامه ریزی، فعال یا تاریخی بودن هر مسیر باید به دقت بررسی شود.",
      fr: "La Nouvelle-Ecosse est situee dans le Canada atlantique et propose des parcours lies aux besoins regionaux.\nLa province combine des volets de nomination et des mecanismes d'immigration atlantiques.\nEn immigration, l'adaptation du profil et l'alignement employeur sont determinants dans le choix d'une voie.\nIl est important de verifier si le volet vise est actif ou historique avant de structurer le dossier.",
    },
    locationInCanada: {
      en: "Atlantic Canada",
      fa: "کانادای آتلانتیک",
      fr: "Canada atlantique",
    },
    locationVisualLabel: {
      en: "Atlantic Region",
      fa: "منطقه آتلانتیک",
      fr: "Region atlantique",
    },
    regionSlot: 5,
    pathwayModel: "pnp",
    pathways: [
      {
        title: "Nova Scotia Experience: Express Entry",
        summary: {
          en: "Targets candidates with eligible skilled work experience in Nova Scotia under Express Entry alignment.",
          fa: "برای متقاضیان دارای سابقه کار مهارتی واجد شرایط در نوا اسکوشیا با هم راستایی اکسپرس اینتری.",
          fr: "Cible les candidats ayant une experience de travail qualifiee admissible en Nouvelle-Ecosse via Entree express.",
        },
        officialSourceLabel: "Nova Scotia Immigration Official",
        officialSourceUrl: "https://novascotiaimmigration.com/",
        status: "active",
      },
      {
        title: "Atlantic Immigration Pilot (Historical)",
        summary: {
          en: "Historical pilot pathway. This pilot has ended and was replaced by the Atlantic Immigration Program.",
          fa: "مسیر پایلوت تاریخی که پایان یافته و با برنامه مهاجرت آتلانتیک جایگزین شده است.",
          fr: "Volet pilote historique termine, remplace par le Programme d'immigration au Canada atlantique.",
        },
        officialSourceLabel: "Government of Canada Atlantic Program",
        officialSourceUrl:
          "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html",
        status: "ended",
      },
    ],
  },
  {
    slug: "quebec",
    name: "Quebec",
    shortIntro: {
      en: "Quebec is in eastern-central Canada and operates a distinct immigration system separate from provincial nominee models.\nIts selection framework follows Quebec-specific rules, processes, and language considerations.\nFor immigration planning, Quebec pathways should be assessed independently from PNP assumptions.\nA dedicated Quebec strategy is advisable before submitting applications.",
      fa: "کبک در شرق-مرکز کانادا قرار دارد و سیستم مهاجرتی مستقل از مدل نامینیشن استانی اداره می کند.\nچارچوب انتخاب در کبک بر قوانین، فرآیندها و ملاحظات زبانی اختصاصی استوار است.\nاز نظر مهاجرتی، مسیرهای کبک باید مستقل از فرض های PNP ارزیابی شوند.\nپیش از اقدام، داشتن یک استراتژی اختصاصی کبک توصیه می شود.",
      fr: "Le Quebec se situe au centre-est du Canada et applique un systeme d'immigration distinct des modeles PNP.\nSon cadre de selection repose sur des regles, processus et exigences linguistiques propres au Quebec.\nPour l'immigration, les voies du Quebec doivent etre evaluees sans les hypotheses liees aux provinces PNP.\nUne strategie dediee au Quebec est recommandee avant le depot d'une demande.",
    },
    locationInCanada: {
      en: "Eastern-Central Canada",
      fa: "شرق-مرکز کانادا",
      fr: "Centre-est du Canada",
    },
    locationVisualLabel: {
      en: "Quebec-Specific System",
      fa: "سیستم اختصاصی کبک",
      fr: "Systeme propre au Quebec",
    },
    regionSlot: 4,
    pathwayModel: "quebec",
    pathways: [
      {
        title: "Regular Skilled Worker Program (Arrima)",
        summary: {
          en: "Quebec selection pathway using Arrima for economic immigration profiles.",
          fa: "مسیر انتخاب نیروی متخصص کبک از طریق سامانه آریما برای پروفایل های اقتصادی.",
          fr: "Volet de selection des travailleurs qualifies via Arrima pour l'immigration economique.",
        },
        officialSourceLabel: "Quebec Immigration Official",
        officialSourceUrl:
          "https://www.quebec.ca/immigration/travailler-quebec/travailleurs-qualifies",
        status: "active",
      },
      {
        title: "Quebec Experience Program (PEQ)",
        summary: {
          en: "For selected graduates and workers meeting Quebec eligibility and language requirements.",
          fa: "برای گروهی از فارغ التحصیلان و نیروی کار واجد شرایط زبان و معیارهای کبک.",
          fr: "Pour certains diplomes et travailleurs repondant aux exigences d'admissibilite et de langue du Quebec.",
        },
        officialSourceLabel: "Quebec Immigration Official",
        officialSourceUrl:
          "https://www.quebec.ca/immigration/programmes-immigration/programme-experience-quebecoise",
        status: "active",
      },
    ],
  },
  {
    slug: "nunavut",
    name: "Nunavut",
    shortIntro: {
      en: "Nunavut is in northern Canada and is not part of the Provincial Nominee Program framework.\nIts immigration options are primarily federal or employer-supported where eligibility permits.\nFor immigration relevance, candidates should focus on federal pathways rather than expecting territorial nomination streams.\nVerifying current federal criteria early is important for realistic planning.",
      fa: "نوناووت در شمال کانادا قرار دارد و در چارچوب برنامه نامینیشن استانی قرار نمی گیرد.\nگزینه های مهاجرتی آن عمدتا فدرال یا مبتنی بر حمایت کارفرما در صورت احراز شرایط است.\nاز نظر مهاجرتی، متقاضیان باید بر مسیرهای فدرال تمرکز کنند و انتظار مسیر نامینیشن استانی نداشته باشند.\nبرای برنامه ریزی واقع بینانه، بررسی زودهنگام معیارهای فدرال ضروری است.",
      fr: "Le Nunavut se trouve dans le nord du Canada et ne fait pas partie du cadre des programmes de nomination provinciale.\nLes options d'immigration y sont surtout federales ou appuyees par l'employeur selon l'admissibilite.\nPour la planification migratoire, il faut privilegier les voies federales plutot qu'attendre un volet de nomination territoriale.\nLa verification precoce des criteres federaux reste essentielle pour un plan realiste.",
    },
    locationInCanada: {
      en: "Northern Canada",
      fa: "شمال کانادا",
      fr: "Nord du Canada",
    },
    locationVisualLabel: {
      en: "Northern Region",
      fa: "منطقه شمالی",
      fr: "Region nordique",
    },
    regionSlot: 5,
    pathwayModel: "non-pnp",
    pathways: [
      {
        title: "No Provincial Nominee Program in Nunavut",
        summary: {
          en: "Nunavut does not operate a provincial nomination stream at this time.",
          fa: "در حال حاضر نوناووت مسیر نامینیشن استانی فعال ندارد.",
          fr: "Le Nunavut ne dispose pas actuellement d'un volet de nomination provinciale.",
        },
        officialSourceLabel: "IRCC Provincial Nominees Overview",
        officialSourceUrl:
          "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html",
        status: "active",
      },
      {
        title: "Federal Economic Pathways",
        summary: {
          en: "Candidates may use federal pathways, including Express Entry and employer-supported options where eligible.",
          fa: "متقاضیان می توانند در صورت احراز شرایط از مسیرهای فدرال مانند اکسپرس اینتری و گزینه های مبتنی بر کارفرما استفاده کنند.",
          fr: "Les candidats peuvent utiliser des voies federales, notamment Entree express et des options avec employeur admissibles.",
        },
        officialSourceLabel: "IRCC Express Entry Official",
        officialSourceUrl:
          "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
        status: "active",
      },
    ],
  },
];

export function getProvinceBySlug(slug: string) {
  return provinces.find((item) => item.slug === slug);
}
