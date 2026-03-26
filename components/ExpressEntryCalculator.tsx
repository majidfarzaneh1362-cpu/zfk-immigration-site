"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: string;
};

type FormState = {
  maritalStatus: string;
  age: string;
  education: string;
  english: string;
  french: string;
  foreignExperience: string;
  canadianExperience: string;
  spouseEducation: string;
  spouseLanguage: string;
  spouseCanadianExperience: string;
  sibling: string;
  nomination: string;
  referralCode: string;
};

export default function ExpressEntryCalculator({ locale }: Props) {
  const isRTL = locale === "fa";

  const [form, setForm] = useState<FormState>({
    maritalStatus: "single",
    age: "",
    education: "",
    english: "",
    french: "",
    foreignExperience: "",
    canadianExperience: "",
    spouseEducation: "",
    spouseLanguage: "",
    spouseCanadianExperience: "",
    sibling: "",
    nomination: "",
    referralCode: "",
  });

  const [score, setScore] = useState<number | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [resultTitle, setResultTitle] = useState("");

  const t = useMemo(() => {
    return {
      en: {
        sectionTitle: "Estimated CRS / Express Entry Score",
        sectionText:
          "Complete the form below to get an estimated score and an initial interpretation of your profile.",
        maritalStatus: "Marital Status",
        age: "Age",
        education: "Education",
        english: "English Level",
        french: "French Level",
        foreignExperience: "Foreign Work Experience",
        canadianExperience: "Canadian Work Experience",
        spouseEducation: "Spouse Education",
        spouseLanguage: "Spouse Language Level",
        spouseCanadianExperience: "Spouse Canadian Work Experience",
        sibling: "Sibling in Canada",
        nomination: "Provincial Nomination",
        referralLabel: "Referral Code (Optional)",
        referralHelper:
          "If you were referred by someone or have a discount code, enter it here.",
        referralPlaceholder: "Enter referral or discount code",
        calculate: "Calculate My Score",
        scoreLabel: "Estimated Score",
        recommendation: "Initial Interpretation",
        breakdown: "Estimated Breakdown",
        spouseSectionTitle: "Spouse / Partner Factors",
        spouseSectionText:
          "Complete these fields only if your spouse or common-law partner is accompanying you.",
        coreLabel: "Core / Human Capital",
        spouseLabel: "Spouse Factors",
        transferabilityLabel: "Skill Transferability",
        additionalLabel: "Additional Points",
        whatsapp: "Send Result to WhatsApp",
        disclaimer:
          "This is an estimated CRS-style calculator for preliminary guidance only. It is NOT an official Government of Canada calculator.",
        officialNote:
          "IRCC removed CRS job-offer points effective March 25, 2025. This estimator reflects that change.",
        agePlaceholder: "Enter your age",
        options: {
          maritalStatus: {
            single: "Single / Not accompanied by spouse",
            married: "Married / Common-law (spouse accompanying)",
          },
          education: {
            diploma: "Diploma / Secondary",
            bachelor: "Bachelor",
            twoOrMore: "Two or More Credentials",
            master: "Master",
            phd: "PhD",
          },
          english: {
            clb7: "CLB 7",
            clb8: "CLB 8",
            clb9: "CLB 9",
            clb10: "CLB 10+",
          },
          french: {
            none: "None",
            basic: "Basic",
            advanced: "Advanced",
          },
          experience: {
            zero: "None",
            one: "1 year",
            two: "2 years",
            threePlus: "3+ years",
          },
          canadianExperience: {
            zero: "None",
            one: "1 year",
            two: "2 years",
            three: "3 years",
            four: "4 years",
            fivePlus: "5+ years",
          },
          yesNo: {
            yes: "Yes",
            no: "No",
          },
          spouseLanguage: {
            none: "None",
            basic: "Basic",
            advanced: "Advanced",
          },
        },
        resultBands: {
          lowTitle: "Currently a weaker profile",
          lowText:
            "Your estimated score appears relatively low for Express Entry competitiveness. You may need to improve language results, work experience, education or explore other pathways.",
          midTitle: "Moderate profile",
          midText:
            "Your profile shows some strengths, but it may still need improvement to become more competitive. Language score and Canadian-related factors may improve your chances.",
          goodTitle: "Competitive profile",
          goodText:
            "Your profile appears reasonably competitive based on this estimated score. A detailed professional review could help identify the most realistic strategy.",
          strongTitle: "Strong profile",
          strongText:
            "Your profile appears strong under this estimated model. A professional review is recommended to confirm eligibility and optimize the filing strategy.",
          nominationTitle: "Very strong profile",
          nominationText:
            "A provincial nomination can significantly strengthen an Express Entry profile. Your estimated result appears very strong under this model.",
        },
      },
      fa: {
        sectionTitle: "امتیاز تقریبی CRS / Express Entry",
        sectionText:
          "فرم زیر را تکمیل کنید تا امتیاز تقریبی و یک تحلیل اولیه از وضعیت خود دریافت کنید.",
        maritalStatus: "وضعیت تاهل",
        age: "سن",
        education: "تحصیلات",
        english: "سطح زبان انگلیسی",
        french: "سطح زبان فرانسه",
        foreignExperience: "سابقه کار خارج از کانادا",
        canadianExperience: "سابقه کار کانادایی",
        spouseEducation: "تحصیلات همسر",
        spouseLanguage: "سطح زبان همسر",
        spouseCanadianExperience: "سابقه کار کانادایی همسر",
        sibling: "خواهر / برادر در کانادا",
        nomination: "نامینیشن استانی",
        referralLabel: "کد معرف یا تخفیف (اختیاری)",
        referralHelper:
          "در صورت داشتن کد تخفیف یا معرفی از طرف شخصی، در این قسمت وارد کنید.",
        referralPlaceholder: "کد معرف یا تخفیف را وارد کنید",
        calculate: "محاسبه امتیاز",
        scoreLabel: "امتیاز تقریبی",
        recommendation: "تحلیل اولیه",
        breakdown: "جزئیات امتیاز تقریبی",
        spouseSectionTitle: "عوامل همسر / پارتنر",
        spouseSectionText:
          "این بخش را فقط در صورتی تکمیل کنید که همسر یا پارتنر شما همراه پرونده باشد.",
        coreLabel: "سرمایه انسانی / هسته",
        spouseLabel: "عوامل همسر",
        transferabilityLabel: "انتقال‌پذیری مهارت",
        additionalLabel: "امتیازهای اضافی",
        whatsapp: "ارسال نتیجه به واتس‌اپ",
        disclaimer:
          "این ابزار یک محاسبه‌گر تقریبی به سبک CRS و فقط برای راهنمایی اولیه است. این ابزار محاسبه‌گر رسمی دولت کانادا نیست.",
        officialNote:
          "IRCC از تاریخ ۲۵ مارس ۲۰۲۵ امتیاز جاب‌آفر را از CRS حذف کرده است. این محاسبه‌گر با این تغییر هماهنگ شده است.",
        agePlaceholder: "سن خود را وارد کنید",
        options: {
          maritalStatus: {
            single: "مجرد / بدون همراهی همسر",
            married: "متاهل / دارای پارتنر (همراه)",
          },
          education: {
            diploma: "دیپلم / متوسطه",
            bachelor: "کارشناسی",
            twoOrMore: "دو مدرک یا بیشتر",
            master: "کارشناسی ارشد",
            phd: "دکتری",
          },
          english: {
            clb7: "CLB 7",
            clb8: "CLB 8",
            clb9: "CLB 9",
            clb10: "CLB 10+",
          },
          french: {
            none: "ندارم",
            basic: "پایه",
            advanced: "پیشرفته",
          },
          experience: {
            zero: "ندارم",
            one: "۱ سال",
            two: "۲ سال",
            threePlus: "۳ سال یا بیشتر",
          },
          canadianExperience: {
            zero: "ندارم",
            one: "۱ سال",
            two: "۲ سال",
            three: "۳ سال",
            four: "۴ سال",
            fivePlus: "۵ سال یا بیشتر",
          },
          yesNo: {
            yes: "بله",
            no: "خیر",
          },
          spouseLanguage: {
            none: "ندارم",
            basic: "پایه",
            advanced: "پیشرفته",
          },
        },
        resultBands: {
          lowTitle: "پروفایل فعلی ضعیف‌تر است",
          lowText:
            "امتیاز تقریبی شما در حال حاضر برای رقابت در اکسپرس اینتری پایین‌تر به نظر می‌رسد. احتمالاً نیاز به تقویت زبان، سابقه کار، تحصیلات یا بررسی مسیرهای دیگر دارید.",
          midTitle: "پروفایل متوسط",
          midText:
            "پروفایل شما برخی نقاط قوت را دارد، اما برای رقابتی‌تر شدن احتمالاً به بهبود بیشتری نیاز دارد. زبان و عوامل مرتبط با کانادا می‌توانند وضعیت شما را بهتر کنند.",
          goodTitle: "پروفایل نسبتاً رقابتی",
          goodText:
            "پروفایل شما بر اساس این مدل تقریبی نسبتاً رقابتی به نظر می‌رسد. یک بررسی حرفه‌ای می‌تواند بهترین استراتژی واقعی را مشخص کند.",
          strongTitle: "پروفایل قوی",
          strongText:
            "پروفایل شما در این مدل تقریبی قوی به نظر می‌رسد. بهتر است برای تأیید شرایط و انتخاب استراتژی مناسب، بررسی حرفه‌ای انجام شود.",
          nominationTitle: "پروفایل بسیار قوی",
          nominationText:
            "نامینیشن استانی می‌تواند پروفایل اکسپرس اینتری را بسیار تقویت کند. نتیجه تقریبی شما در این مدل بسیار قوی به نظر می‌رسد.",
        },
      },
      fr: {
        sectionTitle: "Score estimatif CRS / Entrée express",
        sectionText:
          "Complétez le formulaire ci-dessous pour obtenir un score estimatif et une première interprétation de votre profil.",
        maritalStatus: "État matrimonial",
        age: "Âge",
        education: "Niveau d’études",
        english: "Niveau d’anglais",
        french: "Niveau de français",
        foreignExperience: "Expérience de travail hors Canada",
        canadianExperience: "Expérience de travail au Canada",
        spouseEducation: "Études du conjoint",
        spouseLanguage: "Niveau linguistique du conjoint",
        spouseCanadianExperience: "Expérience canadienne du conjoint",
        sibling: "Frère / sœur au Canada",
        nomination: "Nomination provinciale",
        referralLabel: "Code de référence ou réduction (facultatif)",
        referralHelper:
          "Si vous avez un code de recommandation ou de réduction, saisissez-le ici.",
        referralPlaceholder: "Saisissez votre code de référence ou de réduction",
        calculate: "Calculer mon score",
        scoreLabel: "Score estimatif",
        recommendation: "Interprétation initiale",
        breakdown: "Répartition estimative",
        spouseSectionTitle: "Facteurs du conjoint",
        spouseSectionText:
          "Remplissez cette section uniquement si votre conjoint(e) ou partenaire de fait vous accompagne.",
        coreLabel: "Capital humain / base",
        spouseLabel: "Facteurs du conjoint",
        transferabilityLabel: "Transférabilité des compétences",
        additionalLabel: "Points additionnels",
        whatsapp: "Envoyer le résultat sur WhatsApp",
        disclaimer:
          "Ce calculateur de type CRS est une estimation destinée à une orientation préliminaire uniquement. Ce n'est PAS un calculateur officiel du gouvernement du Canada.",
        officialNote:
          "IRCC a retiré les points liés aux offres d’emploi du CRS à compter du 25 mars 2025. Cet estimateur reflète ce changement.",
        agePlaceholder: "Entrez votre âge",
        options: {
          maritalStatus: {
            single: "Célibataire / conjoint non accompagnant",
            married: "Marié(e) / conjoint de fait accompagnant",
          },
          education: {
            diploma: "Diplôme / Secondaire",
            bachelor: "Baccalauréat",
            twoOrMore: "Deux diplômes ou plus",
            master: "Maîtrise",
            phd: "Doctorat",
          },
          english: {
            clb7: "CLB 7",
            clb8: "CLB 8",
            clb9: "CLB 9",
            clb10: "CLB 10+",
          },
          french: {
            none: "Aucun",
            basic: "Débutant",
            advanced: "Avancé",
          },
          experience: {
            zero: "Aucune",
            one: "1 an",
            two: "2 ans",
            threePlus: "3+ ans",
          },
          canadianExperience: {
            zero: "Aucune",
            one: "1 an",
            two: "2 ans",
            three: "3 ans",
            four: "4 ans",
            fivePlus: "5+ ans",
          },
          yesNo: {
            yes: "Oui",
            no: "Non",
          },
          spouseLanguage: {
            none: "Aucun",
            basic: "Débutant",
            advanced: "Avancé",
          },
        },
        resultBands: {
          lowTitle: "Profil actuellement plus faible",
          lowText:
            "Votre score estimatif semble actuellement faible pour être compétitif dans Entrée express. Il pourrait être nécessaire d’améliorer la langue, l’expérience, les études ou d’explorer d’autres voies.",
          midTitle: "Profil modéré",
          midText:
            "Votre profil présente certains points forts, mais il pourrait nécessiter des améliorations pour devenir plus compétitif. La langue et les facteurs liés au Canada peuvent renforcer vos chances.",
          goodTitle: "Profil compétitif",
          goodText:
            "Votre profil semble raisonnablement compétitif selon ce modèle estimatif. Une évaluation professionnelle détaillée permettrait d’identifier la stratégie la plus réaliste.",
          strongTitle: "Profil solide",
          strongText:
            "Votre profil paraît solide selon ce modèle estimatif. Une révision professionnelle est recommandée pour confirmer l’admissibilité et optimiser la stratégie.",
          nominationTitle: "Profil très solide",
          nominationText:
            "Une nomination provinciale peut fortement renforcer un profil Entrée express. Votre résultat estimatif paraît très solide selon ce modèle.",
        },
      },
    }[locale as "en" | "fa" | "fr"];
  }, [locale]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "maritalStatus" && value !== "married"
        ? {
            spouseEducation: "",
            spouseLanguage: "",
            spouseCanadianExperience: "",
          }
        : {}),
    }));
  }

  const hasSpouse = form.maritalStatus === "married";

  const toNumber = (value: string) => {
    switch (value) {
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      case "four":
        return 4;
      case "fivePlus":
        return 5;
      case "threePlus":
        return 3;
      default:
        return 0;
    }
  };

  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  function scoreAge(ageValue: number, spouse: boolean) {
    if (spouse) {
      if (ageValue >= 20 && ageValue <= 29) return 100;
      if (ageValue === 30) return 95;
      if (ageValue === 31) return 90;
      if (ageValue === 32) return 85;
      if (ageValue === 33) return 80;
      if (ageValue === 34) return 75;
      if (ageValue === 35) return 70;
      if (ageValue === 36) return 65;
      if (ageValue === 37) return 60;
      if (ageValue === 38) return 55;
      if (ageValue === 39) return 50;
      if (ageValue === 40) return 45;
      if (ageValue === 41) return 35;
      if (ageValue === 42) return 25;
      if (ageValue === 43) return 15;
      if (ageValue === 44) return 5;
      return 0;
    }

    if (ageValue >= 20 && ageValue <= 29) return 110;
    if (ageValue === 30) return 105;
    if (ageValue === 31) return 99;
    if (ageValue === 32) return 94;
    if (ageValue === 33) return 88;
    if (ageValue === 34) return 83;
    if (ageValue === 35) return 77;
    if (ageValue === 36) return 72;
    if (ageValue === 37) return 66;
    if (ageValue === 38) return 61;
    if (ageValue === 39) return 55;
    if (ageValue === 40) return 50;
    if (ageValue === 41) return 39;
    if (ageValue === 42) return 28;
    if (ageValue === 43) return 17;
    if (ageValue === 44) return 6;
    return 0;
  }

  function scoreEducation(value: string, spouse: boolean) {
    if (spouse) {
      switch (value) {
        case "diploma":
          return 28;
        case "bachelor":
          return 112;
        case "twoOrMore":
          return 119;
        case "master":
          return 126;
        case "phd":
          return 140;
        default:
          return 0;
      }
    }

    switch (value) {
      case "diploma":
        return 30;
      case "bachelor":
        return 120;
      case "twoOrMore":
        return 128;
      case "master":
        return 135;
      case "phd":
        return 150;
      default:
        return 0;
    }
  }

  function scoreEnglish(value: string, spouse: boolean) {
    if (spouse) {
      switch (value) {
        case "clb7":
          return 64;
        case "clb8":
          return 84;
        case "clb9":
          return 116;
        case "clb10":
          return 128;
        default:
          return 0;
      }
    }

    switch (value) {
      case "clb7":
        return 68;
      case "clb8":
        return 90;
      case "clb9":
        return 124;
      case "clb10":
        return 136;
      default:
        return 0;
    }
  }

  function scoreFrenchCore(value: string, spouse: boolean) {
    if (spouse) {
      switch (value) {
        case "basic":
          return 6;
        case "advanced":
          return 22;
        default:
          return 0;
      }
    }

    switch (value) {
      case "basic":
        return 8;
      case "advanced":
        return 24;
      default:
        return 0;
    }
  }

  function scoreFrenchAdditional(value: string) {
    if (value === "advanced") return 50;
    if (value === "basic") return 25;
    return 0;
  }

  function scoreCanadianExperience(value: string, spouse: boolean) {
    if (spouse) {
      switch (value) {
        case "one":
          return 35;
        case "two":
          return 46;
        case "three":
          return 56;
        case "four":
          return 63;
        case "fivePlus":
          return 70;
        default:
          return 0;
      }
    }

    switch (value) {
      case "one":
        return 40;
      case "two":
        return 53;
      case "three":
        return 64;
      case "four":
        return 72;
      case "fivePlus":
        return 80;
      default:
        return 0;
    }
  }

  function scoreSpouseEducation(value: string) {
    switch (value) {
      case "diploma":
        return 2;
      case "bachelor":
        return 6;
      case "twoOrMore":
        return 8;
      case "master":
        return 9;
      case "phd":
        return 10;
      default:
        return 0;
    }
  }

  function scoreSpouseLanguage(value: string) {
    switch (value) {
      case "basic":
        return 10;
      case "advanced":
        return 20;
      default:
        return 0;
    }
  }

  function scoreSpouseCanadianExperience(value: string) {
    switch (value) {
      case "one":
        return 5;
      case "two":
        return 7;
      case "three":
        return 8;
      case "four":
        return 9;
      case "fivePlus":
        return 10;
      default:
        return 0;
    }
  }

  function scoreSkillTransferability(
    education: string,
    english: string,
    foreignExp: string,
    canadianExp: string
  ) {
    const isPostSecondary =
      education === "bachelor" ||
      education === "twoOrMore" ||
      education === "master" ||
      education === "phd";
    const englishStrong = english === "clb9" || english === "clb10";
    const englishGood = english === "clb7" || english === "clb8";
    const foreignYears = toNumber(foreignExp);
    const canadianYears = toNumber(canadianExp);

    let total = 0;

    if (isPostSecondary && englishStrong) total += 25;
    else if (isPostSecondary && englishGood) total += 13;

    if (isPostSecondary && canadianYears >= 1) total += 25;
    else if (education === "diploma" && canadianYears >= 1) total += 13;

    if (foreignYears >= 2 && englishStrong) total += 25;
    else if (foreignYears >= 1 && englishGood) total += 13;

    if (foreignYears >= 2 && canadianYears >= 1) total += 25;
    else if (foreignYears >= 1 && canadianYears >= 1) total += 13;

    return clamp(total, 0, 100);
  }

  function handleCalculate() {
    const ageValue = Number(form.age);

    const ageScore = scoreAge(ageValue, hasSpouse);
    const educationScore = scoreEducation(form.education, hasSpouse);
    const englishScore = scoreEnglish(form.english, hasSpouse);
    const frenchCoreScore = scoreFrenchCore(form.french, hasSpouse);
    const languageCoreCapped = clamp(
      englishScore + frenchCoreScore,
      0,
      hasSpouse ? 150 : 160
    );
    const canadianScore = scoreCanadianExperience(form.canadianExperience, hasSpouse);

    const coreScore =
      ageScore + educationScore + languageCoreCapped + canadianScore;

    const spouseScore = hasSpouse
      ? clamp(
          scoreSpouseEducation(form.spouseEducation) +
            scoreSpouseLanguage(form.spouseLanguage) +
            scoreSpouseCanadianExperience(form.spouseCanadianExperience),
          0,
          40
        )
      : 0;

    const transferabilityScore = scoreSkillTransferability(
      form.education,
      form.english,
      form.foreignExperience,
      form.canadianExperience
    );

    const additionalScore =
      (form.sibling === "yes" ? 15 : 0) +
      scoreFrenchAdditional(form.french) +
      (form.nomination === "yes" ? 600 : 0);

    const total = coreScore + spouseScore + transferabilityScore + additionalScore;

    setScore(total);

    if (form.nomination === "yes") {
      setResultTitle(t.resultBands.nominationTitle);
      setAnalysis(t.resultBands.nominationText);
      return;
    }

    if (total < 350) {
      setResultTitle(t.resultBands.lowTitle);
      setAnalysis(t.resultBands.lowText);
      return;
    }

    if (total < 450) {
      setResultTitle(t.resultBands.midTitle);
      setAnalysis(t.resultBands.midText);
      return;
    }

    if (total < 500) {
      setResultTitle(t.resultBands.goodTitle);
      setAnalysis(t.resultBands.goodText);
      return;
    }

    setResultTitle(t.resultBands.strongTitle);
    setAnalysis(t.resultBands.strongText);
  }

  const whatsappNumber = "15142363018";

  const coreBreakdown =
    scoreAge(Number(form.age), hasSpouse) +
    scoreEducation(form.education, hasSpouse) +
    clamp(
      scoreEnglish(form.english, hasSpouse) +
        scoreFrenchCore(form.french, hasSpouse),
      0,
      hasSpouse ? 150 : 160
    ) +
    scoreCanadianExperience(form.canadianExperience, hasSpouse);

  const spouseBreakdown = hasSpouse
    ? clamp(
        scoreSpouseEducation(form.spouseEducation) +
          scoreSpouseLanguage(form.spouseLanguage) +
          scoreSpouseCanadianExperience(form.spouseCanadianExperience),
        0,
        40
      )
    : 0;

  const transferabilityBreakdown = scoreSkillTransferability(
    form.education,
    form.english,
    form.foreignExperience,
    form.canadianExperience
  );

  const additionalBreakdown =
    (form.sibling === "yes" ? 15 : 0) +
    scoreFrenchAdditional(form.french) +
    (form.nomination === "yes" ? 600 : 0);

  const whatsappMessage = `
${locale === "fa" ? "محاسبه امتیاز اکسپرس اینتری" : locale === "fr" ? "Calcul du score Entrée express" : "Express Entry Score Calculation"}

${t.maritalStatus}: ${form.maritalStatus}
${t.age}: ${form.age}
${t.education}: ${form.education}
${t.english}: ${form.english}
${t.french}: ${form.french}
${t.foreignExperience}: ${form.foreignExperience}
${t.canadianExperience}: ${form.canadianExperience}
${hasSpouse ? `${t.spouseEducation}: ${form.spouseEducation}` : ""}
${hasSpouse ? `${t.spouseLanguage}: ${form.spouseLanguage}` : ""}
${hasSpouse ? `${t.spouseCanadianExperience}: ${form.spouseCanadianExperience}` : ""}
${t.sibling}: ${form.sibling}
${t.nomination}: ${form.nomination}
${form.referralCode.trim() ? `${t.referralLabel}: ${form.referralCode}` : ""}

${t.scoreLabel}: ${score ?? ""}
${t.recommendation}: ${resultTitle}
${analysis}
`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600">{t.sectionText}</p>
          </div>

          <div
            className={`mt-6 rounded-2xl border-2 border-amber-400 bg-amber-50 px-4 py-4 text-sm text-amber-950 shadow-sm md:px-5 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <p className="font-semibold tracking-wide">{t.disclaimer}</p>
            <p className="mt-2">{t.officialNote}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.maritalStatus}
              </label>
              <select
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="single">{t.options.maritalStatus.single}</option>
                <option value="married">{t.options.maritalStatus.married}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.age}
              </label>
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder={t.agePlaceholder}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.education}
              </label>
              <select
                name="education"
                value={form.education}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="diploma">{t.options.education.diploma}</option>
                <option value="bachelor">{t.options.education.bachelor}</option>
                <option value="twoOrMore">{t.options.education.twoOrMore}</option>
                <option value="master">{t.options.education.master}</option>
                <option value="phd">{t.options.education.phd}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.english}
              </label>
              <select
                name="english"
                value={form.english}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="clb7">{t.options.english.clb7}</option>
                <option value="clb8">{t.options.english.clb8}</option>
                <option value="clb9">{t.options.english.clb9}</option>
                <option value="clb10">{t.options.english.clb10}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.french}
              </label>
              <select
                name="french"
                value={form.french}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="none">{t.options.french.none}</option>
                <option value="basic">{t.options.french.basic}</option>
                <option value="advanced">{t.options.french.advanced}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.foreignExperience}
              </label>
              <select
                name="foreignExperience"
                value={form.foreignExperience}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="zero">{t.options.experience.zero}</option>
                <option value="one">{t.options.experience.one}</option>
                <option value="two">{t.options.experience.two}</option>
                <option value="threePlus">{t.options.experience.threePlus}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.canadianExperience}
              </label>
              <select
                name="canadianExperience"
                value={form.canadianExperience}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="zero">{t.options.canadianExperience.zero}</option>
                <option value="one">{t.options.canadianExperience.one}</option>
                <option value="two">{t.options.canadianExperience.two}</option>
                <option value="three">{t.options.canadianExperience.three}</option>
                <option value="four">{t.options.canadianExperience.four}</option>
                <option value="fivePlus">{t.options.canadianExperience.fivePlus}</option>
              </select>
            </div>

            {hasSpouse && (
              <>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
                  <p
                    className={`text-sm font-semibold text-slate-900 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.spouseSectionTitle}
                  </p>
                  <p
                    className={`mt-1 text-sm text-slate-600 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.spouseSectionText}
                  </p>
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium text-slate-700 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.spouseEducation}
                  </label>
                  <select
                    name="spouseEducation"
                    value={form.spouseEducation}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  >
                    <option value="">--</option>
                    <option value="diploma">{t.options.education.diploma}</option>
                    <option value="bachelor">{t.options.education.bachelor}</option>
                    <option value="twoOrMore">{t.options.education.twoOrMore}</option>
                    <option value="master">{t.options.education.master}</option>
                    <option value="phd">{t.options.education.phd}</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium text-slate-700 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.spouseLanguage}
                  </label>
                  <select
                    name="spouseLanguage"
                    value={form.spouseLanguage}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  >
                    <option value="">--</option>
                    <option value="none">{t.options.spouseLanguage.none}</option>
                    <option value="basic">{t.options.spouseLanguage.basic}</option>
                    <option value="advanced">{t.options.spouseLanguage.advanced}</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`mb-2 block text-sm font-medium text-slate-700 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t.spouseCanadianExperience}
                  </label>
                  <select
                    name="spouseCanadianExperience"
                    value={form.spouseCanadianExperience}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  >
                    <option value="">--</option>
                    <option value="zero">{t.options.canadianExperience.zero}</option>
                    <option value="one">{t.options.canadianExperience.one}</option>
                    <option value="two">{t.options.canadianExperience.two}</option>
                    <option value="three">{t.options.canadianExperience.three}</option>
                    <option value="four">{t.options.canadianExperience.four}</option>
                    <option value="fivePlus">{t.options.canadianExperience.fivePlus}</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.sibling}
              </label>
              <select
                name="sibling"
                value={form.sibling}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="yes">{t.options.yesNo.yes}</option>
                <option value="no">{t.options.yesNo.no}</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.nomination}
              </label>
              <select
                name="nomination"
                value={form.nomination}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="yes">{t.options.yesNo.yes}</option>
                <option value="no">{t.options.yesNo.no}</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.referralLabel}
              </label>
              <input
                name="referralCode"
                value={form.referralCode}
                onChange={handleChange}
                placeholder={t.referralPlaceholder}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
              <p
                className={`mt-2 text-sm text-slate-500 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.referralHelper}
              </p>
            </div>
          </div>

          <div className={`mt-8 ${isRTL ? "text-right" : "text-left"}`}>
            <button
              onClick={handleCalculate}
              className="inline-flex rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.calculate}
            </button>
          </div>

          {score !== null && (
            <div
              className={`mt-8 rounded-2xl bg-green-50 p-6 ring-1 ring-green-200 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
                {t.scoreLabel}
              </p>
              <h3 className="mt-3 text-4xl font-bold text-slate-900">
                {score}
              </h3>

              <div className="mt-6 rounded-xl bg-white/80 p-4 ring-1 ring-green-200">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {t.breakdown}
                </p>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                    <p className="text-sm text-slate-700">{t.coreLabel}</p>
                    <p className="text-lg font-semibold text-slate-900">{coreBreakdown}</p>
                  </div>

                  {hasSpouse && (
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                      <p className="text-sm text-slate-700">{t.spouseLabel}</p>
                      <p className="text-lg font-semibold text-slate-900">{spouseBreakdown}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                    <p className="text-sm text-slate-700">{t.transferabilityLabel}</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {transferabilityBreakdown}
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                    <p className="text-sm text-slate-700">{t.additionalLabel}</p>
                    <p className="text-lg font-semibold text-slate-900">{additionalBreakdown}</p>
                  </div>
              </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                  {t.recommendation}
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  {resultTitle}
                </p>
                <p className="mt-3 leading-7 text-slate-700">{analysis}</p>
              </div>

              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {t.whatsapp}
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}