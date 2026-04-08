type Props = {
  locale: string;
};

const ADDRESS = "500 Place d'Armes Suite 1800, Montreal, Quebec";
const MAP_URL =
  "https://www.google.com/maps/place/ZFK+Immigration/@45.5044461,-73.5576923,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91be67f9707cb:0x2c8cc7cb52a50b7e!8m2!3d45.5044461!4d-73.5576923!16s%2Fg%2F11ldszg4h0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=500%20Place%20d%27Armes%20Suite%201800%2C%20Montreal%2C%20Quebec&output=embed";

export default function OfficeMapSection({ locale }: Props) {
  const isRTL = locale === "fa";

  const t =
    locale === "fa"
      ? {
          title: "موقعیت دفتر روی نقشه",
          subtitle:
            "برای مسیریابی سریع، روی نقشه یا دکمه‌ها کلیک کنید و موقعیت دفتر را مستقیم در Google Maps باز کنید.",
          openMap: "باز کردن در Google Maps",
          openReviews: "مشاهده Google Reviews",
          reviewsNote:
            "نمایش خودکار محتوای کامل Reviewها نیازمند اتصال رسمی API گوگل است؛ در حال حاضر با کلیک روی دکمه، صفحه Review باز می‌شود.",
        }
      : locale === "fr"
      ? {
          title: "Emplacement du bureau",
          subtitle:
            "Cliquez sur la carte ou les boutons pour ouvrir directement l'adresse du bureau dans Google Maps.",
          openMap: "Ouvrir dans Google Maps",
          openReviews: "Voir les avis Google",
          reviewsNote:
            "La lecture automatique complète des avis nécessite une intégration API Google.",
        }
      : {
          title: "Office Location",
          subtitle:
            "Click the map or buttons to open our office location directly in Google Maps.",
          openMap: "Open in Google Maps",
          openReviews: "View Google Reviews",
          reviewsNote:
            "Automatic full review ingestion requires official Google API integration.",
        };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-2xl font-bold text-slate-900">{t.title}</h2>
          <p className="mt-3 text-slate-600">{t.subtitle}</p>
          <p className="mt-2 text-sm font-medium text-slate-700">{ADDRESS}</p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block overflow-hidden rounded-xl ring-1 ring-slate-300"
          >
            <iframe
              title="Office location map"
              src={MAP_EMBED_URL}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>

          <div className={`mt-5 flex flex-wrap gap-3 ${isRTL ? "justify-end" : "justify-start"}`}>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.openMap}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100"
            >
              {t.openReviews}
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">{t.reviewsNote}</p>
        </div>
      </div>
    </section>
  );
}

