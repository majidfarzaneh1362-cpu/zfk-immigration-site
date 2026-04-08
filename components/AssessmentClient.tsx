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
        sectionTitle: "Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ø®ÙˆØ¯ Ø±Ø§ ØªÚ©Ù…ÛŒÙ„ Ú©Ù†ÛŒØ¯",
        sectionText:
          "Ø¨Ù‡ Ú†Ù†Ø¯ Ø³Ø¤Ø§Ù„ Ø³Ø§Ø¯Ù‡ Ù¾Ø§Ø³Ø® Ø¯Ù‡ÛŒØ¯ ØªØ§ ÛŒÚ© Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ø§ÙˆÙ„ÛŒÙ‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø³ÛŒØ± Ù…Ù†Ø§Ø³Ø¨ Ù…Ù‡Ø§Ø¬Ø±ØªÛŒ Ø¯Ø±ÛŒØ§ÙØª Ú©Ù†ÛŒØ¯.",
        age: "Ø³Ù†",
        agePlaceholder: "Ø³Ù† Ø®ÙˆØ¯ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯",
        education: "Ø³Ø·Ø­ ØªØ­ØµÛŒÙ„Ø§Øª",
        english: "Ø³Ø·Ø­ Ø²Ø¨Ø§Ù† Ø§Ù†Ú¯Ù„ÛŒØ³ÛŒ",
        goal: "Ù‡Ø¯Ù Ù…Ù‡Ø§Ø¬Ø±ØªÛŒ",
        referralLabel: "Ú©Ø¯ Ù…Ø¹Ø±Ù ÛŒØ§ ØªØ®ÙÛŒÙ (Ø§Ø®ØªÛŒØ§Ø±ÛŒ)",
        referralHelper:
          "Ø¯Ø± ØµÙˆØ±Øª Ø¯Ø§Ø´ØªÙ† Ú©Ø¯ ØªØ®ÙÛŒÙ ÛŒØ§ Ù…Ø¹Ø±ÙÛŒ Ø§Ø² Ø·Ø±Ù Ø´Ø®ØµÛŒØŒ Ø¯Ø± Ø§ÛŒÙ† Ù‚Ø³Ù…Øª ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
        referralPlaceholder: "Ú©Ø¯ Ù…Ø¹Ø±Ù ÛŒØ§ ØªØ®ÙÛŒÙ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯",
        analyze: "ØªØ­Ù„ÛŒÙ„ Ù¾Ø±ÙˆÙØ§ÛŒÙ„",
        resultTitle: "Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ø§ÙˆÙ„ÛŒÙ‡",
        whatsapp: "Ø§Ø±Ø³Ø§Ù„ Ù†ØªÛŒØ¬Ù‡ Ø¨Ù‡ ÙˆØ§ØªØ³â€ŒØ§Ù¾",
        disclaimer:
          "Ø§ÛŒÙ† Ø§Ø¨Ø²Ø§Ø± ÙÙ‚Ø· Ø¨Ø±Ø§ÛŒ Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ø§Ø³Øª Ùˆ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ù…Ø´Ø§ÙˆØ±Ù‡ Ø­Ø±ÙÙ‡â€ŒØ§ÛŒ Ù…Ù‡Ø§Ø¬Ø±Øª Ù†ÛŒØ³Øª.",
        educationOptions: {
          diploma: "Ø¯ÛŒÙ¾Ù„Ù…",
          bachelor: "Ú©Ø§Ø±Ø´Ù†Ø§Ø³ÛŒ",
          master: "Ú©Ø§Ø±Ø´Ù†Ø§Ø³ÛŒ Ø§Ø±Ø´Ø¯",
          phd: "Ø¯Ú©ØªØ±ÛŒ",
        },
        englishOptions: {
          low: "Ù¾Ø§ÛŒÙ‡",
          medium: "Ù…ØªÙˆØ³Ø·",
          high: "Ù¾ÛŒØ´Ø±ÙØªÙ‡",
        },
        goalOptions: {
          study: "Ù…Ù‡Ø§Ø¬Ø±Øª ØªØ­ØµÛŒÙ„ÛŒ",
          work: "Ù…Ù‡Ø§Ø¬Ø±Øª Ú©Ø§Ø±ÛŒ",
          pr: "Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø¦Ù…",
        },
        outputs: {
          studyTitle: "Ù…Ø³ÛŒØ± Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ÛŒ: Ø§Ø³ØªØ§Ø¯ÛŒ Ù¾Ø±Ù…ÛŒØª",
          studyText:
            "Ø¨Ø§ ØªÙˆØ¬Ù‡ Ø¨Ù‡ Ù‡Ø¯Ù ÙØ¹Ù„ÛŒ Ø´Ù…Ø§ØŒ Ù…Ø³ÛŒØ± ØªØ­ØµÛŒÙ„ÛŒ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ù†Ù‚Ø·Ù‡ Ø´Ø±ÙˆØ¹ Ù…Ù†Ø§Ø³Ø¨â€ŒØªØ±ÛŒ Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ø±Ø³ÛŒ Ø¨Ø§Ø´Ø¯.",
          workTitle: "Ù…Ø³ÛŒØ± Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ÛŒ: ÙˆØ±Ú© Ù¾Ø±Ù…ÛŒØª",
          workText:
            "Ø¨Ø§ ØªÙˆØ¬Ù‡ Ø¨Ù‡ Ù‡Ø¯Ù ÙØ¹Ù„ÛŒ Ø´Ù…Ø§ØŒ Ø¨Ø±Ø±Ø³ÛŒ Ù…Ø³ÛŒØ±Ù‡Ø§ÛŒ Ú©Ø§Ø±ÛŒ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ú¯Ø²ÛŒÙ†Ù‡ Ù…Ù†Ø§Ø³Ø¨â€ŒØªØ±ÛŒ Ø¨Ø§Ø´Ø¯.",
          prTitle: "Ù…Ø³ÛŒØ± Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ÛŒ: Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø¦Ù…",
          prText:
            "Ø¨Ø§ ØªÙˆØ¬Ù‡ Ø¨Ù‡ Ù‡Ø¯Ù ÙØ¹Ù„ÛŒ Ø´Ù…Ø§ØŒ Ù…Ø³ÛŒØ±Ù‡Ø§ÛŒ Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø¦Ù… Ø§Ø±Ø²Ø´ Ø¨Ø±Ø±Ø³ÛŒ Ø¯Ù‚ÛŒÙ‚â€ŒØªØ± Ø±Ø§ Ø¯Ø§Ø±Ù†Ø¯.",
        },
      },
      fr: {
        sectionTitle: "ComplÃ©tez votre Ã©valuation initiale",
        sectionText:
          "RÃ©pondez Ã  quelques questions simples pour obtenir une premiÃ¨re suggestion de parcours dâ€™immigration.",
        age: "Ã‚ge",
        agePlaceholder: "Entrez votre Ã¢ge",
        education: "Niveau dâ€™Ã©tudes",
        english: "Niveau dâ€™anglais",
        goal: "Objectif dâ€™immigration",
        referralLabel: "Code de rÃ©fÃ©rence ou rÃ©duction (facultatif)",
        referralHelper:
          "Si vous avez un code de recommandation ou de rÃ©duction, saisissez-le ici.",
        referralPlaceholder: "Saisissez votre code de rÃ©fÃ©rence ou de rÃ©duction",
        analyze: "Analyser mon profil",
        resultTitle: "Recommandation initiale",
        whatsapp: "Envoyer le rÃ©sultat sur WhatsApp",
        disclaimer:
          "Cet outil fournit uniquement une orientation initiale et ne remplace pas une consultation professionnelle en immigration.",
        educationOptions: {
          diploma: "DiplÃ´me",
          bachelor: "BaccalaurÃ©at",
          master: "MaÃ®trise",
          phd: "Doctorat",
        },
        englishOptions: {
          low: "DÃ©butant",
          medium: "IntermÃ©diaire",
          high: "AvancÃ©",
        },
        goalOptions: {
          study: "Permis dâ€™Ã©tudes",
          work: "Permis de travail",
          pr: "RÃ©sidence permanente",
        },
        outputs: {
          studyTitle: "Parcours recommandÃ© : Permis dâ€™Ã©tudes",
          studyText:
            "Selon votre objectif actuel, une voie acadÃ©mique pourrait constituer le meilleur point de dÃ©part.",
          workTitle: "Parcours recommandÃ© : Permis de travail",
          workText:
            "Selon votre objectif actuel, une stratÃ©gie orientÃ©e permis de travail pourrait Ãªtre plus appropriÃ©e.",
          prTitle: "Parcours recommandÃ© : RÃ©sidence permanente",
          prText:
            "Selon votre objectif actuel, les voies de rÃ©sidence permanente mÃ©ritent une Ã©valuation plus approfondie.",
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

  const whatsappNumber = "16723802464"; // Ø´Ù…Ø§Ø±Ù‡ ÙˆØ§Ù‚Ø¹ÛŒ Ø±Ø§ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ú©Ù†

  const whatsappMessage = `
${locale === "fa" ? "Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ù…Ù‡Ø§Ø¬Ø±Øª" : locale === "fr" ? "Ã‰valuation initiale" : "Initial Immigration Assessment"}

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
