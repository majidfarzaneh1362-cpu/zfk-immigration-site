export type LocaleText = {
  en: string;
  fa: string;
  fr: string;
};

export type Institution = {
  name: string;
  city: string;
  province: string;
  description: LocaleText;
  officialUrl: string;
  rankLabel?: string;
  rankSource?: string;
};

export const universities: Institution[] = [
  {
    name: "University of Toronto",
    city: "Toronto",
    province: "Ontario",
    officialUrl: "https://www.utoronto.ca/",
    description: {
      en: "University of Toronto is located in Toronto, Ontario, in one of Canada's most active academic and economic regions.\nIt offers deep research capacity and broad program strength across engineering, health, business, and technology.\nFor immigration planning, its program diversity can support multiple study and post-graduation pathway options.\nChoose your faculty and campus carefully based on your long-term profile, budget, and licensing goals.",
      fa: "دانشگاه تورنتو در شهر تورنتو استان انتاریو قرار دارد و در یکی از قطب های اصلی آموزشی و اقتصادی کانادا واقع شده است.\nاین دانشگاه در پژوهش و تنوع برنامه ها، به ویژه در مهندسی، سلامت، مدیریت و فناوری، جایگاه قدرتمندی دارد.\nاز نظر مهاجرتی، گستردگی رشته ها می تواند گزینه های متنوعی برای مسیر تحصیل تا اقامت پس از فارغ التحصیلی ایجاد کند.\nبهتر است دانشکده و پردیس را بر اساس هدف بلندمدت، بودجه و نیازهای حرفه ای خود دقیق انتخاب کنید.",
      fr: "L'Universite de Toronto est situee a Toronto, en Ontario, au coeur d'une des regions academiques et economiques les plus actives du Canada.\nElle se distingue par une forte capacite de recherche et une offre etendue en genie, sante, gestion et technologie.\nSur le plan migratoire, cette diversite de programmes peut ouvrir plusieurs options etudes vers l'apres-diplome.\nIl est conseille de choisir la faculte et le campus selon votre projet a long terme, votre budget et vos objectifs professionnels.",
    },
    rankLabel: "Global Rank",
    rankSource: "QS 2026",
  },
  {
    name: "McGill University",
    city: "Montreal",
    province: "Quebec",
    officialUrl: "https://www.mcgill.ca/",
    description: {
      en: "McGill University is based in Montreal, Quebec, in a bilingual and internationally connected urban environment.\nIt is known for strong academic standards in medicine, law, and research-oriented graduate studies.\nFrom an immigration perspective, studying in Quebec requires careful alignment with Quebec-specific selection frameworks.\nPlan early for language profile, credential strategy, and the transition from studies to eligible immigration pathways.",
      fa: "دانشگاه مک گیل در مونترال کبک قرار دارد و در محیطی دو زبانه و بین المللی فعالیت می کند.\nاین دانشگاه به استاندارد آموزشی بالا در پزشکی، حقوق و دوره های پژوهش محور تحصیلات تکمیلی شناخته می شود.\nاز منظر مهاجرتی، تحصیل در کبک نیازمند هماهنگی دقیق با چارچوب های انتخابی اختصاصی کبک است.\nپیشنهاد می شود از ابتدا برای زبان، مسیر مدرک و انتقال از تحصیل به برنامه مهاجرتی مناسب برنامه ریزی کنید.",
      fr: "L'Universite McGill se trouve a Montreal, au Quebec, dans un environnement bilingue et fortement international.\nElle est reconnue pour ses standards academiques en medecine, droit et cycles superieurs axes sur la recherche.\nPour l'immigration, des etudes au Quebec exigent une bonne coherence avec les mecanismes de selection propres au Quebec.\nIl est prudent de preparer tot votre strategie linguistique, academique et de transition vers un parcours admissible.",
    },
    rankLabel: "Global Rank",
    rankSource: "THE 2026",
  },
  {
    name: "University of British Columbia",
    city: "Vancouver",
    province: "British Columbia",
    officialUrl: "https://www.ubc.ca/",
    description: {
      en: "The University of British Columbia is located in Vancouver, British Columbia, on Canada's west coast.\nIt offers comprehensive training with notable strengths in science, sustainability, and business disciplines.\nIts academic ecosystem can be relevant for candidates seeking study pathways linked to innovation-driven labor markets.\nCompare campus options and post-study settlement plans before finalizing your application route.",
      fa: "دانشگاه بریتیش کلمبیا در ونکوور استان بریتیش کلمبیا و در ساحل غربی کانادا قرار دارد.\nاین دانشگاه آموزش جامع با نقاط قوت مهم در علوم، پایداری و رشته های مدیریتی ارائه می دهد.\nاکوسیستم آموزشی آن می تواند برای متقاضیانی که به مسیرهای تحصیلی مرتبط با بازارهای نوآور علاقه دارند، مناسب باشد.\nپیش از اقدام نهایی، گزینه های پردیس و برنامه استقرار پس از تحصیل را مقایسه کنید.",
      fr: "L'Universite de la Colombie-Britannique est situee a Vancouver, en Colombie-Britannique, sur la cote ouest du Canada.\nElle propose une offre complete avec des forces reconnues en sciences, durabilite et gestion.\nCet environnement academique peut etre pertinent pour les candidats visant des parcours lies a des marches innovants.\nAvant de deposer votre demande, comparez les options de campus et votre plan d'etablissement apres les etudes.",
    },
    rankLabel: "Global Rank",
    rankSource: "QS 2026",
  },
  {
    name: "University of Alberta",
    city: "Edmonton",
    province: "Alberta",
    officialUrl: "https://www.ualberta.ca/",
    description: {
      en: "The University of Alberta is in Edmonton, Alberta, with a strong connection to applied sectors and regional industry.\nIt is well regarded for engineering, energy-related studies, and applied research opportunities.\nFor immigration planning, employer-linked ecosystems can support practical transitions after graduation.\nSelect programs with clear co-op, internship, or licensing pathways aligned with your target occupation.",
      fa: "دانشگاه آلبرتا در شهر ادمونتون قرار دارد و ارتباط نزدیکی با بخش های کاربردی و صنعت منطقه ای دارد.\nاین دانشگاه در مهندسی، حوزه های مرتبط با انرژی و پژوهش های کاربردی اعتبار مناسبی دارد.\nاز نظر مهاجرتی، پیوند با محیط کار می تواند مسیر انتقال عملی پس از فارغ التحصیلی را تقویت کند.\nبهتر است رشته ای را انتخاب کنید که مسیر روشن کارآموزی، کوآپ یا مجوز حرفه ای داشته باشد.",
      fr: "L'Universite de l'Alberta est situee a Edmonton, avec des liens forts vers l'industrie et les secteurs appliques.\nElle est appreciee en genie, etudes liees a l'energie et recherche appliquee.\nDans une strategie migratoire, cet ancrage professionnel peut faciliter la transition apres le diplome.\nChoisissez un programme offrant des voies claires de stage, coop ou reconnaissance professionnelle.",
    },
    rankLabel: "Global Rank",
    rankSource: "THE 2026",
  },
  {
    name: "University of Waterloo",
    city: "Waterloo",
    province: "Ontario",
    officialUrl: "https://uwaterloo.ca/",
    description: {
      en: "The University of Waterloo is in Waterloo, Ontario, within a major technology and startup corridor.\nIt is recognized for co-op education and strong integration between academic training and industry exposure.\nFor immigration-focused planning, structured work-integrated learning may improve practical profile building.\nReview co-op requirements and field-specific outcomes early to align studies with realistic pathway goals.",
      fa: "دانشگاه واترلو در شهر واترلو انتاریو و در یکی از مهم ترین کریدورهای فناوری و استارتاپ قرار دارد.\nاین دانشگاه برای آموزش کوآپ و پیوند منظم میان تحصیل و تجربه صنعتی شناخته می شود.\nبرای برنامه مهاجرتی، یادگیری همراه با تجربه کاری می تواند به تقویت پروفایل عملی کمک کند.\nشرایط کوآپ و خروجی واقعی هر رشته را از ابتدا بررسی کنید تا انتخاب دقیق تری داشته باشید.",
      fr: "L'Universite de Waterloo est situee a Waterloo, en Ontario, dans un corridor technologique important.\nElle est reconnue pour son systeme coop et son lien etroit entre formation academique et experience industrielle.\nDans un projet d'immigration, cette integration etudes-travail peut renforcer la construction d'un profil concret.\nExaminez tot les exigences coop et les resultats par domaine pour faire un choix bien cible.",
    },
    rankLabel: "Program Reputation",
    rankSource: "QS 2026",
  },
  {
    name: "Universite de Montreal",
    city: "Montreal",
    province: "Quebec",
    officialUrl: "https://www.umontreal.ca/",
    description: {
      en: "Universite de Montreal is located in Montreal, Quebec, and operates primarily in a French-speaking academic context.\nIt provides broad research and professional pathways across sciences, social fields, and health-related disciplines.\nFor immigration strategy, a French-language study profile can be relevant within Quebec-focused selection routes.\nConfirm admission language expectations and your post-study pathway plan before submitting applications.",
      fa: "دانشگاه مونترال در شهر مونترال کبک قرار دارد و عمدتا در محیط آکادمیک فرانسوی زبان فعالیت می کند.\nاین دانشگاه در حوزه های علمی، اجتماعی و سلامت مسیرهای پژوهشی و حرفه ای متنوعی ارائه می دهد.\nاز نظر مهاجرتی، پروفایل تحصیلی فرانسوی زبان می تواند در مسیرهای انتخابی مرتبط با کبک مزیت ایجاد کند.\nپیش از ارسال درخواست، الزامات زبانی پذیرش و برنامه پس از تحصیل خود را دقیق بررسی کنید.",
      fr: "L'Universite de Montreal se trouve a Montreal, au Quebec, dans un contexte academique principalement francophone.\nElle offre des parcours de recherche et professionnels etendus en sciences, domaines sociaux et sante.\nPour l'immigration, un profil d'etudes francophone peut etre pertinent dans les voies de selection reliees au Quebec.\nValidez les exigences linguistiques d'admission et votre plan apres etudes avant de deposer votre dossier.",
    },
    rankLabel: "Global Rank",
    rankSource: "THE 2026",
  },
];

export const colleges: Institution[] = [
  {
    name: "Seneca Polytechnic",
    city: "Toronto",
    province: "Ontario",
    officialUrl: "https://www.senecapolytechnic.ca/",
    description: {
      en: "Seneca Polytechnic is based in Toronto, Ontario, and serves students seeking practical, career-oriented education.\nIts diploma and applied degree options are structured around hands-on training and employer expectations.\nFor immigration planning, job-focused learning can support clearer transitions from study to eligible work pathways.\nMatch your program choice with labor demand, credential level, and licensing requirements in your target field.",
      fa: "سِنِکا پلی تکنیک در تورنتو انتاریو قرار دارد و برای متقاضیان آموزش عملی و شغل محور گزینه مهمی است.\nبرنامه های دیپلم و مدرک کاربردی آن بر مهارت عملی و نیاز کارفرما طراحی شده اند.\nاز دید مهاجرتی، این نوع آموزش می تواند مسیر انتقال از تحصیل به گزینه های کاری واجد شرایط را روشن تر کند.\nرشته را بر اساس تقاضای بازار، سطح مدرک و الزامات مجوز حرفه ای انتخاب کنید.",
      fr: "Seneca Polytechnic est situe a Toronto, en Ontario, pour les candidats visant une formation pratique et orientee emploi.\nSes diplomes et grades appliques sont construits autour des competences concretes et des besoins des employeurs.\nSur le plan migratoire, cette approche peut faciliter la transition etudes vers des options de travail admissibles.\nAlignez votre choix de programme avec la demande du marche, le niveau de diplome et les exigences professionnelles.",
    },
    rankLabel: "Source Label",
    rankSource: "Official College Profile",
  },
  {
    name: "George Brown College",
    city: "Toronto",
    province: "Ontario",
    officialUrl: "https://www.georgebrown.ca/",
    description: {
      en: "George Brown College is in downtown Toronto, Ontario, close to employers in service and innovation sectors.\nIt is known for applied learning in hospitality, design, health, and business-related programs.\nFrom an immigration standpoint, practical program structures may support better employability positioning after graduation.\nReview placement components and local industry alignment before selecting your final academic track.",
      fa: "کالج جورج براون در مرکز شهر تورنتو انتاریو قرار دارد و به شبکه کارفرمایی گسترده دسترسی دارد.\nاین کالج در آموزش کاربردی حوزه های مهمانداری، طراحی، سلامت و مدیریت شناخته شده است.\nاز منظر مهاجرتی، ساختار عملی برنامه ها می تواند جایگاه اشتغال پس از فارغ التحصیلی را تقویت کند.\nپیش از انتخاب نهایی، بخش های کارورزی و ارتباط برنامه با صنعت محلی را بررسی کنید.",
      fr: "Le George Brown College est situe au centre-ville de Toronto, en Ontario, pres d'un large reseau d'employeurs.\nIl est reconnu pour son apprentissage applique en hotellerie, design, sante et gestion.\nPour un projet migratoire, cette structure pratique peut renforcer le positionnement employabilite apres le diplome.\nAvant de finaliser votre choix, verifiez les stages et l'alignement avec les secteurs locaux.",
    },
    rankLabel: "Source Label",
    rankSource: "Official College Profile",
  },
  {
    name: "Centennial College",
    city: "Toronto",
    province: "Ontario",
    officialUrl: "https://www.centennialcollege.ca/",
    description: {
      en: "Centennial College is located in Toronto, Ontario, and offers a polytechnic-style applied education environment.\nIts programs emphasize industry collaboration, practical labs, and employment-focused skill development.\nIn immigration planning, this model can be relevant for candidates prioritizing direct workforce integration.\nChoose a stream with realistic placement outcomes and clear progression toward your medium-term residence goals.",
      fa: "کالج سنترنیال در تورنتو انتاریو قرار دارد و محیط آموزشی کاربردی با رویکرد پلی تکنیک ارائه می دهد.\nبرنامه های آن بر همکاری با صنعت، کار عملی و توسعه مهارت های شغلی تمرکز دارند.\nدر برنامه مهاجرتی، این مدل برای متقاضیانی که به ادغام سریع تر در بازار کار فکر می کنند می تواند مناسب باشد.\nمسیر تحصیلی را بر اساس خروجی واقعی اشتغال و همسویی با هدف اقامتی میان مدت انتخاب کنید.",
      fr: "Centennial College est situe a Toronto, en Ontario, et propose un environnement applique de type polytechnique.\nSes programmes mettent l'accent sur la collaboration industrielle, les laboratoires pratiques et les competences emploi.\nDans une strategie migratoire, ce format peut convenir aux candidats visant une integration professionnelle plus directe.\nSelectionnez une filiere avec des resultats de placement credibles et une progression coherente vers vos objectifs.",
    },
    rankLabel: "Source Label",
    rankSource: "Official College Profile",
  },
  {
    name: "BCIT",
    city: "Burnaby",
    province: "British Columbia",
    officialUrl: "https://www.bcit.ca/",
    description: {
      en: "BCIT is in Burnaby, British Columbia, and is widely focused on technical and applied career training.\nIts strengths include trades, engineering technologies, and industry-connected delivery models.\nFor immigration relevance, technically oriented credentials may align well with targeted labor-market pathways.\nAssess credential duration, occupation demand, and regulatory requirements before choosing a specific program.",
      fa: "موسسه BCIT در برنبی بریتیش کلمبیا قرار دارد و تمرکز اصلی آن بر آموزش فنی و کاربردی است.\nنقاط قوت آن در مهارت های فنی، فناوری های مهندسی و مدل آموزشی نزدیک به صنعت دیده می شود.\nاز نظر مهاجرتی، مدارک فنی می توانند با مسیرهای هدفمند بازار کار هم راستایی خوبی داشته باشند.\nپیش از انتخاب رشته، مدت دوره، تقاضای شغلی و الزامات قانونی حرفه را بررسی کنید.",
      fr: "Le BCIT est situe a Burnaby, en Colombie-Britannique, avec un fort positionnement en formation technique appliquee.\nSes points forts couvrent les metiers, les technologies du genie et des modeles lies a l'industrie.\nPour l'immigration, ces qualifications techniques peuvent bien s'aligner avec des besoins cibles du marche du travail.\nAvant de choisir un programme, verifiez la duree du diplome, la demande metier et les exigences reglementaires.",
    },
    rankLabel: "Source Label",
    rankSource: "Official Institute Profile",
  },
  {
    name: "NAIT",
    city: "Edmonton",
    province: "Alberta",
    officialUrl: "https://www.nait.ca/",
    description: {
      en: "NAIT is located in Edmonton, Alberta, and serves students looking for applied technical and professional pathways.\nIt offers practical training across technical fields, business, and health-related programs.\nFrom an immigration lens, employment-oriented study tracks can support stronger post-study profile development.\nPrioritize programs with clear employer demand and realistic outcomes in your intended occupation.",
      fa: "موسسه NAIT در ادمونتون آلبرتا قرار دارد و برای متقاضیان مسیرهای فنی و حرفه ای کاربردی گزینه مهمی است.\nاین موسسه در رشته های فنی، مدیریت و حوزه های مرتبط با سلامت آموزش عملی ارائه می دهد.\nاز منظر مهاجرتی، مسیرهای تحصیلی شغل محور می توانند به تقویت پروفایل پس از تحصیل کمک کنند.\nبهتر است برنامه ای را انتخاب کنید که تقاضای کارفرمایی و خروجی واقعی در شغل هدف داشته باشد.",
      fr: "Le NAIT est situe a Edmonton, en Alberta, et s'adresse aux candidats visant des parcours techniques et professionnels appliques.\nIl propose une formation pratique en domaines techniques, gestion et secteurs lies a la sante.\nDans une perspective d'immigration, ces parcours axes emploi peuvent renforcer le profil apres les etudes.\nPrivilegiez les programmes avec une demande employeur claire et des resultats realistes dans votre metier vise.",
    },
    rankLabel: "Source Label",
    rankSource: "Official Institute Profile",
  },
  {
    name: "Dawson College",
    city: "Montreal",
    province: "Quebec",
    officialUrl: "https://www.dawsoncollege.qc.ca/",
    description: {
      en: "Dawson College is in Montreal, Quebec, and provides public CEGEP-level education in a diverse urban setting.\nIt offers pre-university and technical options designed for academic progression or direct workforce entry.\nFor immigration planning, Quebec study pathways should be evaluated within Quebec's specific immigration framework.\nConfirm language environment, progression options, and your longer-term plan before finalizing admission choices.",
      fa: "کالج داوسون در مونترال کبک قرار دارد و در بستر CEGEP آموزش دولتی ارائه می کند.\nاین کالج برنامه های پیش دانشگاهی و فنی را برای ادامه تحصیل یا ورود به بازار کار فراهم می کند.\nبرای برنامه مهاجرتی، مسیر تحصیل در کبک باید در چارچوب اختصاصی مهاجرتی کبک ارزیابی شود.\nپیش از اقدام نهایی، محیط زبانی، مسیر ادامه تحصیل و هدف بلندمدت خود را دقیق بررسی کنید.",
      fr: "Le Dawson College est situe a Montreal, au Quebec, et offre une formation publique de niveau CEGEP.\nIl propose des parcours preuniversitaires et techniques pour la poursuite d'etudes ou l'entree en emploi.\nPour l'immigration, les etudes au Quebec doivent etre analysees selon les mecanismes propres au Quebec.\nAvant de confirmer votre admission, verifiez l'environnement linguistique, les options de progression et votre plan a long terme.",
    },
    rankLabel: "Source Label",
    rankSource: "Official College Profile",
  },
];
