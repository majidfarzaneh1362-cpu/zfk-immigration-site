"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: string;
};

type FormState = {
  age: string;
  education: string;
  english: string;
  goal: string;
  referralCode: string;
};

export default function AssessmentClient({ locale }: Props) {
  const isRTL = locale === "fa";

  const [form, setForm] = useState<FormState>({
    age: "",
    education: "",
    english: "",
    goal: "",
    referralCode: "",
  });

  const [result, setResult] = useState<null | {
    title: string;
    description: string;
  }>(null);

  const t = useMemo(() => {
    return {
      en: {
        sectionTitle: "Complete Your Initial Assessment",
        sectionText:
          "Answer a few simple questions to get an initial immigration pathway suggestion.",
        age: "Age",
        agePlaceholder: "Enter your age",
        education: "Education Level",
        english: "English Level",
        goal: "Immigration Goal",
        referralLabel: "Referral Code (Optional)",
        referralHelper:
          "If you were referred by someone or have a discount code, enter it here.",
        referralPlaceholder: "Enter referral or discount code",
        analyze: "Analyze My Profile",
        resultTitle: "Initial Recommendation",
        whatsapp: "Send Result to WhatsApp",
        disclaimer:
          "This is only an initial guidance tool and does not replace a professional immigration consultation.",
        educationOptions: {
          diploma: "Diploma",
          bachelor: "Bachelor",
          master: "Master",
          phd: "PhD",
        },
        englishOptions: {
          low: "Basic",
          medium: "Intermediate",
          high: "Advanced",
        },
        goalOptions: {
          study: "Study Permit",
          work: "Work Permit",
          pr: "Permanent Residence",
        },
        outputs: {
          studyTitle: "Recommended Pathway: Study Permit",
          studyText:
            "Based on your current goal, an academic pathway may be the most suitable starting point.",
          workTitle: "Recommended Pathway: Work Permit",
          workText:
            "Based on your current goal, a work permit strategy may be a more suitable option to explore.",
          prTitle: "Recommended Pathway: Permanent Residence",
          prText:
            "Based on your current goal, permanent residence pathways may be worth assessing in more detail.",
        },
      },
      fa: {
        sectionTitle: "ارزیابی اولیه خود را تکمیل کنید",
        sectionText:
          "به چند سؤال ساده پاسخ دهید تا یک پیشنهاد اولیه درباره مسیر مناسب مهاجرتی دریافت کنید.",
        age: "سن",
        agePlaceholder: "سن خود را وارد کنید",
        education: "سطح تحصیلات",
        english: "سطح زبان انگلیسی",
        goal: "هدف مهاجرتی",
        referralLabel: "کد معرف یا تخفیف (اختیاری)",
        referralHelper:
          "در صورت داشتن کد تخفیف یا معرفی از طرف شخصی، در این قسمت وارد کنید.",
        referralPlaceholder: "کد معرف یا تخفیف را وارد کنید",
        analyze: "تحلیل پروفایل",
        resultTitle: "پیشنهاد اولیه",
        whatsapp: "ارسال نتیجه به واتس‌اپ",
        disclaimer:
          "این ابزار فقط برای راهنمایی اولیه است و جایگزین مشاوره حرفه‌ای مهاجرت نیست.",
        educationOptions: {
          diploma: "دیپلم",
          bachelor: "کارشناسی",
          master: "کارشناسی ارشد",
          phd: "دکتری",
        },
        englishOptions: {
          low: "پایه",
          medium: "متوسط",
          high: "پیشرفته",
        },
        goalOptions: {
          study: "مهاجرت تحصیلی",
          work: "مهاجرت کاری",
          pr: "اقامت دائم",
        },
        outputs: {
          studyTitle: "مسیر پیشنهادی: استادی پرمیت",
          studyText:
            "با توجه به هدف فعلی شما، مسیر تحصیلی می‌تواند نقطه شروع مناسب‌تری برای بررسی باشد.",
          workTitle: "مسیر پیشنهادی: ورک پرمیت",
          workText:
            "با توجه به هدف فعلی شما، بررسی مسیرهای کاری می‌تواند گزینه مناسب‌تری باشد.",
          prTitle: "مسیر پیشنهادی: اقامت دائم",
          prText:
            "با توجه به هدف فعلی شما، مسیرهای اقامت دائم ارزش بررسی دقیق‌تر را دارند.",
        },
      },
      fr: {
        sectionTitle: "Complétez votre évaluation initiale",
        sectionText:
          "Répondez à quelques questions simples pour obtenir une première suggestion de parcours d’immigration.",
        age: "Âge",
        agePlaceholder: "Entrez votre âge",
        education: "Niveau d’études",
        english: "Niveau d’anglais",
        goal: "Objectif d’immigration",
        referralLabel: "Code de référence ou réduction (facultatif)",
        referralHelper:
          "Si vous avez un code de recommandation ou de réduction, saisissez-le ici.",
        referralPlaceholder: "Saisissez votre code de référence ou de réduction",
        analyze: "Analyser mon profil",
        resultTitle: "Recommandation initiale",
        whatsapp: "Envoyer le résultat sur WhatsApp",
        disclaimer:
          "Cet outil fournit uniquement une orientation initiale et ne remplace pas une consultation professionnelle en immigration.",
        educationOptions: {
          diploma: "Diplôme",
          bachelor: "Baccalauréat",
          master: "Maîtrise",
          phd: "Doctorat",
        },
        englishOptions: {
          low: "Débutant",
          medium: "Intermédiaire",
          high: "Avancé",
        },
        goalOptions: {
          study: "Permis d’études",
          work: "Permis de travail",
          pr: "Résidence permanente",
        },
        outputs: {
          studyTitle: "Parcours recommandé : Permis d’études",
          studyText:
            "Selon votre objectif actuel, une voie académique pourrait constituer le meilleur point de départ.",
          workTitle: "Parcours recommandé : Permis de travail",
          workText:
            "Selon votre objectif actuel, une stratégie orientée permis de travail pourrait être plus appropriée.",
          prTitle: "Parcours recommandé : Résidence permanente",
          prText:
            "Selon votre objectif actuel, les voies de résidence permanente méritent une évaluation plus approfondie.",
        },
      },
    }[locale as "en" | "fa" | "fr"] || {
      sectionTitle: "Complete Your Initial Assessment",
      sectionText:
        "Answer a few simple questions to get an initial immigration pathway suggestion.",
      age: "Age",
      agePlaceholder: "Enter your age",
      education: "Education Level",
      english: "English Level",
      goal: "Immigration Goal",
      referralLabel: "Referral Code (Optional)",
      referralHelper:
        "If you were referred by someone or have a discount code, enter it here.",
      referralPlaceholder: "Enter referral or discount code",
      analyze: "Analyze My Profile",
      resultTitle: "Initial Recommendation",
      whatsapp: "Send Result to WhatsApp",
      disclaimer:
        "This is only an initial guidance tool and does not replace a professional immigration consultation.",
      educationOptions: {
        diploma: "Diploma",
        bachelor: "Bachelor",
        master: "Master",
        phd: "PhD",
      },
      englishOptions: {
        low: "Basic",
        medium: "Intermediate",
        high: "Advanced",
      },
      goalOptions: {
        study: "Study Permit",
        work: "Work Permit",
        pr: "Permanent Residence",
      },
      outputs: {
        studyTitle: "Recommended Pathway: Study Permit",
        studyText:
          "Based on your current goal, an academic pathway may be the most suitable starting point.",
        workTitle: "Recommended Pathway: Work Permit",
        workText:
          "Based on your current goal, a work permit strategy may be a more suitable option to explore.",
        prTitle: "Recommended Pathway: Permanent Residence",
        prText:
          "Based on your current goal, permanent residence pathways may be worth assessing in more detail.",
      },
    };
  }, [locale]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleAnalyze() {
    if (!form.goal) return;

    if (form.goal === "study") {
      setResult({
        title: t.outputs.studyTitle,
        description: t.outputs.studyText,
      });
      return;
    }

    if (form.goal === "work") {
      setResult({
        title: t.outputs.workTitle,
        description: t.outputs.workText,
      });
      return;
    }

    setResult({
      title: t.outputs.prTitle,
      description: t.outputs.prText,
    });
  }

  const whatsappNumber = "15141234567"; // شماره واقعی را جایگزین کن

  const whatsappMessage = `
${locale === "fa" ? "ارزیابی اولیه مهاجرت" : locale === "fr" ? "Évaluation initiale" : "Initial Immigration Assessment"}

${t.age}: ${form.age}
${t.education}: ${form.education}
${t.english}: ${form.english}
${t.goal}: ${form.goal}
${form.referralCode.trim() ? `${t.referralLabel}: ${form.referralCode}` : ""}

${t.resultTitle}: ${result?.title ?? ""}
${result?.description ?? ""}
`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.sectionTitle}
            </h2>
            <p className="mt-4 text-slate-600">{t.sectionText}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                <option value="diploma">{t.educationOptions.diploma}</option>
                <option value="bachelor">{t.educationOptions.bachelor}</option>
                <option value="master">{t.educationOptions.master}</option>
                <option value="phd">{t.educationOptions.phd}</option>
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
                <option value="low">{t.englishOptions.low}</option>
                <option value="medium">{t.englishOptions.medium}</option>
                <option value="high">{t.englishOptions.high}</option>
              </select>
            </div>

            <div>
              <label
                className={`mb-2 block text-sm font-medium text-slate-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.goal}
              </label>
              <select
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              >
                <option value="">--</option>
                <option value="study">{t.goalOptions.study}</option>
                <option value="work">{t.goalOptions.work}</option>
                <option value="pr">{t.goalOptions.pr}</option>
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
              onClick={handleAnalyze}
              className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {t.analyze}
            </button>
          </div>

          {result && (
            <div className={`mt-8 rounded-2xl bg-green-50 p-6 ring-1 ring-green-200 ${isRTL ? "text-right" : "text-left"}`}>
              <h3 className="text-lg font-semibold text-slate-900">
                {t.resultTitle}
              </h3>
              <p className="mt-3 text-base font-semibold text-green-800">
                {result.title}
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                {result.description}
              </p>

              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  {t.whatsapp}
                </a>
              </div>
            </div>
          )}

          <p
            className={`mt-8 text-sm text-slate-500 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}