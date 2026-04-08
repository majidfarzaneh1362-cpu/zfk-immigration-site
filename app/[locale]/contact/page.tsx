import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import OfficeMapSection from "../../../components/OfficeMapSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const t = {
    en: {
      badge: "Contact Us",
      title: "Get in Touch with ZFK Immigration",
      intro:
        "Reach out to us for an initial consultation, case review, or general immigration-related inquiries.",
      contactTitle: "Contact Information",
      firmName: "Firm Name:",
      consultant: "Consultant:",
      email: "Email:",
      phone: "Phone:",
      address: "Address:",
      addressValue: "500 Place d'Armes Suite 1800, Montreal, Quebec",
      waTitle: "Direct Contact via WhatsApp",
      waText: "For faster communication, message us directly on WhatsApp.",
      waButton: "Message on WhatsApp",
      noteTitle: "Important Note",
      noteText:
        "The information on this page is currently a preliminary version and will later be updated with official firm details, license information, address and communication channels.",
      formTitle: "Request a Consultation",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      formEmailPlaceholder: "Enter your email",
      service: "Service Needed",
      referralLabel: "Referral Code (Optional)",
      referralHelper:
        "If you were referred by someone or have a discount code, enter it here.",
      referralPlaceholder: "Enter referral or discount code",
      message: "Message",
      messagePlaceholder: "Briefly describe your situation",
      submit: "Submit Request",
      services: [
        "Study Permit",
        "Work Permit",
        "Permanent Residence",
        "Business Immigration",
        "General Consultation",
      ],
    },
    fa: {
      badge: "ØªÙ…Ø§Ø³ Ø¨Ø§ Ù…Ø§",
      title: "Ø¨Ø±Ø§ÛŒ Ù…Ø´Ø§ÙˆØ±Ù‡ Ø¨Ø§ ZFK Immigration Ø¯Ø± Ø§Ø±ØªØ¨Ø§Ø· Ø¨Ø§Ø´ÛŒØ¯",
      intro:
        "Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ø±Ø³ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ù¾Ø±ÙˆÙ†Ø¯Ù‡ØŒ Ù…Ø´Ø§ÙˆØ±Ù‡ ÛŒØ§ Ø·Ø±Ø­ Ù¾Ø±Ø³Ø´â€ŒÙ‡Ø§ÛŒ Ø®ÙˆØ¯ØŒ Ø§Ø² Ø·Ø±ÛŒÙ‚ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø²ÛŒØ± Ø¨Ø§ Ù…Ø§ Ø¯Ø± Ø§Ø±ØªØ¨Ø§Ø· Ø¨Ú¯ÛŒØ±ÛŒØ¯.",
      contactTitle: "Ø§Ø·Ù„Ø§Ø¹Ø§Øª ØªÙ…Ø§Ø³",
      firmName: "Ù†Ø§Ù… Ø´Ø±Ú©Øª:",
      consultant: "Ù…Ø´Ø§ÙˆØ±:",
      email: "Ø§ÛŒÙ…ÛŒÙ„:",
      phone: "ØªÙ„ÙÙ†:",
      address: "Ø¢Ø¯Ø±Ø³:",
      addressValue: "500 Place d'Armes Suite 1800, Montreal, Quebec",
      waTitle: "Ø§Ø±ØªØ¨Ø§Ø· Ù…Ø³ØªÙ‚ÛŒÙ… Ø§Ø² Ø·Ø±ÛŒÙ‚ ÙˆØ§ØªØ³â€ŒØ§Ù¾",
      waText: "Ø¨Ø±Ø§ÛŒ Ø§Ø±ØªØ¨Ø§Ø· Ø³Ø±ÛŒØ¹â€ŒØªØ±ØŒ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ Ù…Ø³ØªÙ‚ÛŒÙ… Ø¯Ø± ÙˆØ§ØªØ³â€ŒØ§Ù¾ Ù¾ÛŒØ§Ù… Ø¨Ø¯Ù‡ÛŒØ¯.",
      waButton: "Ù¾ÛŒØ§Ù… Ø¯Ø± ÙˆØ§ØªØ³â€ŒØ§Ù¾",
      noteTitle: "ØªÙˆØ¬Ù‡",
      noteText:
        "Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø§ÛŒÙ† ØµÙØ­Ù‡ Ø¯Ø± Ø­Ø§Ù„ Ø­Ø§Ø¶Ø± Ù†Ø³Ø®Ù‡ Ø§ÙˆÙ„ÛŒÙ‡ Ø§Ø³Øª Ùˆ Ø¨Ø¹Ø¯Ø§Ù‹ Ø¨Ø§ Ø¬Ø²Ø¦ÛŒØ§Øª Ø±Ø³Ù…ÛŒ Ø´Ø±Ú©ØªØŒ Ø´Ù…Ø§Ø±Ù‡ Ù…Ø¬ÙˆØ²ØŒ Ø¢Ø¯Ø±Ø³ Ùˆ Ø±Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ø±ØªØ¨Ø§Ø·ÛŒ ØªÚ©Ù…ÛŒÙ„ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
      formTitle: "Ø§Ø±Ø³Ø§Ù„ Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ù…Ø´Ø§ÙˆØ±Ù‡",
      fullName: "Ù†Ø§Ù… Ú©Ø§Ù…Ù„",
      fullNamePlaceholder: "Ù†Ø§Ù… Ø®ÙˆØ¯ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯",
      formEmailPlaceholder: "Ø§ÛŒÙ…ÛŒÙ„ Ø®ÙˆØ¯ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯",
      service: "Ù†ÙˆØ¹ Ø®Ø¯Ù…Øª Ù…ÙˆØ±Ø¯ Ù†ÛŒØ§Ø²",
      referralLabel: "Ú©Ø¯ Ù…Ø¹Ø±Ù ÛŒØ§ ØªØ®ÙÛŒÙ (Ø§Ø®ØªÛŒØ§Ø±ÛŒ)",
      referralHelper:
        "Ø§Ú¯Ø± ØªÙˆØ³Ø· Ú©Ø³ÛŒ Ù…Ø¹Ø±ÙÛŒ Ø´Ø¯Ù‡â€ŒØ§ÛŒØ¯ ÛŒØ§ Ú©Ø¯ ØªØ®ÙÛŒÙ Ø¯Ø§Ø±ÛŒØ¯ØŒ Ø¯Ø± Ø§ÛŒÙ† Ø¨Ø®Ø´ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
      referralPlaceholder: "Ú©Ø¯ Ù…Ø¹Ø±Ù ÛŒØ§ ØªØ®ÙÛŒÙ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯",
      message: "Ù¾ÛŒØ§Ù…",
      messagePlaceholder: "ØªÙˆØ¶ÛŒØ­ Ú©ÙˆØªØ§Ù‡ÛŒ Ø¯Ø±Ø¨Ø§Ø±Ù‡ ÙˆØ¶Ø¹ÛŒØª Ø®ÙˆØ¯ Ø¨Ù†ÙˆÛŒØ³ÛŒØ¯",
      submit: "Ø§Ø±Ø³Ø§Ù„ Ø¯Ø±Ø®ÙˆØ§Ø³Øª",
      services: [
        "Ø§Ø³ØªØ§Ø¯ÛŒ Ù¾Ø±Ù…ÛŒØª",
        "ÙˆØ±Ú© Ù¾Ø±Ù…ÛŒØª",
        "Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø¦Ù…",
        "Ù…Ù‡Ø§Ø¬Ø±Øª ØªØ¬Ø§Ø±ÛŒ",
        "Ù…Ø´Ø§ÙˆØ±Ù‡ Ø¹Ù…ÙˆÙ…ÛŒ",
      ],
    },
    fr: {
      badge: "Contact",
      title: "Contactez ZFK Immigration",
      intro:
        "Contactez-nous pour une consultation initiale, une revue de dossier ou toute question gÃ©nÃ©rale en immigration.",
      contactTitle: "CoordonnÃ©es",
      firmName: "Cabinet :",
      consultant: "Consultante :",
      email: "E-mail :",
      phone: "TÃ©lÃ©phone :",
      address: "Adresse :",
      addressValue: "500 Place d'Armes Suite 1800, Montreal, Quebec",
      waTitle: "Contact direct via WhatsApp",
      waText:
        "Pour un contact plus rapide, vous pouvez nous Ã©crire directement sur WhatsApp.",
      waButton: "Message sur WhatsApp",
      noteTitle: "Note importante",
      noteText:
        "Les informations de cette page sont prÃ©liminaires et seront mises Ã  jour avec les dÃ©tails officiels du cabinet.",
      formTitle: "Demander une consultation",
      fullName: "Nom complet",
      fullNamePlaceholder: "Entrez votre nom complet",
      formEmailPlaceholder: "Entrez votre e-mail",
      service: "Service demandÃ©",
      referralLabel: "Code de rÃ©fÃ©rence (optionnel)",
      referralHelper:
        "Si vous avez un code de recommandation ou de rÃ©duction, saisissez-le ici.",
      referralPlaceholder: "Entrez votre code de rÃ©fÃ©rence ou de rÃ©duction",
      message: "Message",
      messagePlaceholder: "DÃ©crivez briÃ¨vement votre situation",
      submit: "Envoyer la demande",
      services: [
        "Permis d'Ã©tudes",
        "Permis de travail",
        "RÃ©sidence permanente",
        "Immigration d'affaires",
        "Consultation gÃ©nÃ©rale",
      ],
    },
  }[locale as "en" | "fa" | "fr"] || {
    badge: "Contact Us",
    title: "Get in Touch with ZFK Immigration",
    intro:
      "Reach out to us for an initial consultation, case review, or general immigration-related inquiries.",
    contactTitle: "Contact Information",
    firmName: "Firm Name:",
    consultant: "Consultant:",
    email: "Email:",
    phone: "Phone:",
    address: "Address:",
    addressValue: "500 Place d'Armes Suite 1800, Montreal, Quebec",
    waTitle: "Direct Contact via WhatsApp",
    waText: "For faster communication, message us directly on WhatsApp.",
    waButton: "Message on WhatsApp",
    noteTitle: "Important Note",
    noteText:
      "The information on this page is currently a preliminary version and will later be updated with official firm details.",
    formTitle: "Request a Consultation",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    formEmailPlaceholder: "Enter your email",
    service: "Service Needed",
    referralLabel: "Referral Code (Optional)",
    referralHelper:
      "If you were referred by someone or have a discount code, enter it here.",
    referralPlaceholder: "Enter referral or discount code",
    message: "Message",
    messagePlaceholder: "Briefly describe your situation",
    submit: "Submit Request",
    services: [
      "Study Permit",
      "Work Permit",
      "Permanent Residence",
      "Business Immigration",
      "General Consultation",
    ],
  };

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white text-slate-900">
      <Header locale={locale} />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {t.badge}
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-2xl font-bold text-slate-900">{t.contactTitle}</h2>

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">{t.firmName}</span>{" "}
                ZFK Immigration
              </p>
              <p>
                <span className="font-semibold text-slate-900">{t.consultant}</span>{" "}
                Zohre Farzaneh
              </p>
              <p>
                <span className="font-semibold text-slate-900">{t.email}</span>{" "}
                info@zfkimmigration.com
              </p>
              <p>
                <span className="font-semibold text-slate-900">{t.phone}</span>{" "}
                +1 (672) 380-2464
              </p>
              <p>
                <span className="font-semibold text-slate-900">{t.address}</span>{" "}
                {t.addressValue}
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
              <div className="rounded-2xl bg-green-50 p-6 ring-1 ring-green-200">
                <h3 className="text-lg font-semibold text-slate-900">{t.waTitle}</h3>
                <p className="mt-3 leading-7 text-slate-600">{t.waText}</p>
                <div className="mt-5">
                  <a
                    href="https://wa.me/16723802464?text=Hello%20I%20would%20like%20to%20book%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    {t.waButton}
                  </a>
                </div>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">{t.noteTitle}</h3>
              <p className="mt-3 leading-7 text-slate-600">{t.noteText}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className={`text-2xl font-bold text-slate-900 ${isRTL ? "text-right" : "text-left"}`}>
              {t.formTitle}
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.fullName}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={t.fullNamePlaceholder}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.email}
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={t.formEmailPlaceholder}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.service}
                </label>
                <select className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">
                  {t.services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.referralLabel}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={t.referralPlaceholder}
                />
                <p
                  className={`mt-2 text-sm text-slate-500 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.referralHelper}
                </p>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <OfficeMapSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}


