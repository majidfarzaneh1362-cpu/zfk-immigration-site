import type { Institution } from "../data/education";

type Props = {
  locale: string;
  badge: string;
  title: string;
  intro: string;
  marketingParagraphs?: string[];
  sourceNote: string;
  cardKind: "university" | "college";
  ctaLabel: string;
  officialCtaLabel: string;
  institutions: Institution[];
};

export default function EducationCardsSection({
  locale,
  badge,
  title,
  intro,
  marketingParagraphs,
  sourceNote,
  cardKind,
  ctaLabel,
  officialCtaLabel,
  institutions,
}: Props) {
  const isRTL = locale === "fa";
  const icon = cardKind === "university" ? "🎓" : "🏫";

  const labels = {
    en: {
      city: "City",
      province: "Province",
      rank: "Ranking Label",
      source: "Source",
    },
    fa: {
      city: "شهر",
      province: "استان",
      rank: "برچسب رتبه",
      source: "منبع",
    },
    fr: {
      city: "Ville",
      province: "Province",
      rank: "Etiquette de classement",
      source: "Source",
    },
  }[locale as "en" | "fa" | "fr"];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            {badge}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{intro}</p>
          {marketingParagraphs && marketingParagraphs.length > 0 && (
            <div className="mt-6 rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-200 sm:px-6">
              <div className="space-y-4 text-base leading-8 text-slate-700">
                {marketingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
          <p className="mt-3 rounded-lg bg-white px-4 py-3 text-sm text-slate-500 ring-1 ring-slate-200">
            {sourceNote}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {institutions.map((item) => (
            <article
              key={item.name}
              className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <div className="-mx-2 -mt-2 mb-4 rounded-xl bg-gradient-to-r from-slate-50 to-white px-2 py-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base ring-1 ring-slate-200">
                    {icon}
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900">{item.name}</h2>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-500">{labels.city}</p>
                  <p className="font-medium text-slate-800">{item.city}</p>
                </div>
                <div>
                  <p className="text-slate-500">{labels.province}</p>
                  <p className="font-medium text-slate-800">{item.province}</p>
                </div>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description[locale as "en" | "fa" | "fr"]}
              </p>

              {(item.rankLabel || item.rankSource) && (
                <div className="mt-4 rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  {item.rankLabel && (
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      {labels.rank}: {item.rankLabel}
                    </p>
                  )}
                  {item.rankSource && (
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {labels.source}: {item.rankSource}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`/${locale}/contact`}
                  className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  {ctaLabel}
                </a>
                <a
                  href={item.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {officialCtaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
