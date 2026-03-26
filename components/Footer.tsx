type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  const isRTL = locale === "fa";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className={`grid gap-10 md:grid-cols-3 ${isRTL ? "text-right" : "text-left"}`}>
          <div>
            <h3 className="text-xl font-bold">ZFK Immigration</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {locale === "fa"
                ? "مشاوره حرفه‌ای مهاجرت کانادا با رویکرد شفاف، ساختارمند و واقع‌بینانه."
                : "Professional Canadian immigration guidance with a clear, structured and realistic approach."}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {locale === "fa" ? "لینک‌های سریع" : "Quick Links"}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a href={`/${locale}`} className="hover:text-white">
                  {locale === "fa" ? "خانه" : "Home"}
                </a>
              </li>
              <li>
                <a href={`/${locale}/services`} className="hover:text-white">
                  {locale === "fa" ? "خدمات" : "Services"}
                </a>
              </li>
              <li>
                <a href={`/${locale}/contact`} className="hover:text-white">
                  {locale === "fa" ? "تماس با ما" : "Contact"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {locale === "fa" ? "اطلاعات مشاور" : "Consultant Information"}
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">
                  {locale === "fa" ? "نام:" : "Name:"}
                </span>{" "}
                Zohre Farzaneh
              </p>
              <p>
                <span className="font-semibold text-white">
                  {locale === "fa" ? "برند:" : "Firm:"}
                </span>{" "}
                ZFK Immigration
              </p>
              <p>
                <span className="font-semibold text-white">
                  {locale === "fa" ? "وضعیت:" : "Status:"}
                </span>{" "}
                {locale === "fa"
                  ? "دارای مجوز رسمی مشاوره مهاجرت"
                  : "Licensed Immigration Consultancy"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © {year} ZFK Immigration.{" "}
          {locale === "fa"
            ? "تمام حقوق محفوظ است."
            : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}