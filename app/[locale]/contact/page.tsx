import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";
  const referralContent = {
    en: {
      label: "Referral Code (Optional)",
      helper:
        "If you were referred by someone or have a discount code, enter it here.",
      placeholder: "Enter referral or discount code",
    },
    fa: {
      label: "کد معرف یا تخفیف (اختیاری)",
      helper:
        "در صورت داشتن کد تخفیف یا معرفی از طرف شخصی، در این قسمت وارد کنید.",
      placeholder: "کد معرف یا تخفیف را وارد کنید",
    },
    fr: {
      label: "Code de référence ou réduction (facultatif)",
      helper:
        "Si vous avez un code de recommandation ou de réduction, saisissez-le ici.",
      placeholder: "Saisissez votre code de référence ou de réduction",
    },
  }[locale as "en" | "fa" | "fr"];

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900"
    >
      <Header locale={locale} />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {locale === "fa" ? "تماس با ما" : "Contact Us"}
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              {locale === "fa"
                ? "برای مشاوره با ZFK Immigration در ارتباط باشید"
                : "Get in Touch with ZFK Immigration"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {locale === "fa"
                ? "برای بررسی اولیه پرونده، مشاوره یا طرح پرسش‌های خود، از طریق اطلاعات زیر با ما ارتباط بگیرید."
                : "Reach out to us for an initial consultation, case review, or general immigration-related inquiries."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h2 className="text-2xl font-bold text-slate-900">
              {locale === "fa" ? "اطلاعات تماس" : "Contact Information"}
            </h2>

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">
                  {locale === "fa" ? "نام شرکت:" : "Firm Name:"}
                </span>{" "}
                ZFK Immigration
              </p>

              <p>
                <span className="font-semibold text-slate-900">
                  {locale === "fa" ? "مشاور:" : "Consultant:"}
                </span>{" "}
                Zohre Farzaneh
              </p>

              <p>
                <span className="font-semibold text-slate-900">
                  {locale === "fa" ? "ایمیل:" : "Email:"}
                </span>{" "}
                info@zfkimmigration.com
              </p>

              <p>
                <span className="font-semibold text-slate-900">
                  {locale === "fa" ? "تلفن:" : "Phone:"}
                </span>{" "}
                +1 (000) 000-0000
              </p>

              <p>
                <span className="font-semibold text-slate-900">
                  {locale === "fa" ? "آدرس:" : "Address:"}
                </span>{" "}
                {locale === "fa"
                  ? "بعداً اضافه می‌شود"
                  : "To be added"}
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
              <div className="mt-6 rounded-2xl bg-green-50 p-6 shadow-sm ring-1 ring-green-200">
  <h3 className="text-lg font-semibold text-slate-900">
    {locale === "fa"
      ? "ارتباط مستقیم از طریق واتس‌اپ"
      : locale === "fr"
      ? "Contact direct via WhatsApp"
      : "Direct Contact via WhatsApp"}
  </h3>

  <p className="mt-3 leading-7 text-slate-600">
    {locale === "fa"
      ? "برای پیام مستقیم و سریع‌تر، از طریق واتس‌اپ با ما در ارتباط باشید."
      : locale === "fr"
      ? "Pour un contact plus rapide, vous pouvez nous écrire directement sur WhatsApp."
      : "For faster communication, you can message us directly on WhatsApp."}
  </p>

  <div className="mt-5">
    <a
      href="https://wa.me/15141234567?text=Hello%20I%20would%20like%20to%20book%20a%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
    >
      {locale === "fa"
        ? "پیام در واتس‌اپ"
        : locale === "fr"
        ? "Message sur WhatsApp"
        : "Message on WhatsApp"}
    </a>
  </div>
</div>
              <h3 className="text-lg font-semibold text-slate-900">
                {locale === "fa" ? "توجه" : "Important Note"}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {locale === "fa"
                  ? "اطلاعات این صفحه فعلاً نسخه اولیه است و بعداً با اطلاعات دقیق شرکت، شماره مجوز، آدرس و راه‌های ارتباطی رسمی تکمیل می‌شود."
                  : "The information on this page is currently a preliminary version and will later be updated with official firm details, license information, address and communication channels."}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2
              className={`text-2xl font-bold text-slate-900 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {locale === "fa" ? "ارسال درخواست مشاوره" : "Request a Consultation"}
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {locale === "fa" ? "نام کامل" : "Full Name"}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={locale === "fa" ? "نام خود را وارد کنید" : "Enter your full name"}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {locale === "fa" ? "ایمیل" : "Email"}
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={locale === "fa" ? "ایمیل خود را وارد کنید" : "Enter your email"}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {locale === "fa" ? "نوع خدمت مورد نیاز" : "Service Needed"}
                </label>
                <select className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">
                  <option>
                    {locale === "fa" ? "استادی پرمیت" : "Study Permit"}
                  </option>
                  <option>
                    {locale === "fa" ? "ورک پرمیت" : "Work Permit"}
                  </option>
                  <option>
                    {locale === "fa" ? "اقامت دائم" : "Permanent Residence"}
                  </option>
                  <option>
                    {locale === "fa" ? "مهاجرت تجاری" : "Business Immigration"}
                  </option>
                  <option>
                    {locale === "fa" ? "مشاوره عمومی" : "General Consultation"}
                  </option>
                </select>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {referralContent.label}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={referralContent.placeholder}
                />
                <p
                  className={`mt-2 text-sm text-slate-500 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {referralContent.helper}
                </p>
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm font-medium text-slate-700 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {locale === "fa" ? "پیام" : "Message"}
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-blue-600"
                  placeholder={
                    locale === "fa"
                      ? "توضیح کوتاهی درباره وضعیت خود بنویسید"
                      : "Briefly describe your situation"
                  }
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {locale === "fa" ? "ارسال درخواست" : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}