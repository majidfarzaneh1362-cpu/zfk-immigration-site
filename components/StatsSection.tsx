"use client";

import { useEffect, useState } from "react";

type Props = {
  locale: string;
};

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
}

export default function StatsSection({ locale }: Props) {
  const stats = [
    {
      value: 10,
      suffix: "+",
      label:
        locale === "fa"
          ? "سال تجربه"
          : locale === "fr"
          ? "Années d’expérience"
          : "Years of Experience",
    },
    {
      value: 2000,
      suffix: "+",
      label:
        locale === "fa"
          ? "پرونده موفق"
          : locale === "fr"
          ? "Dossiers accompagnés"
          : "Supported Cases",
    },
    {
      value: 3,
      suffix: "",
      label:
        locale === "fa"
          ? "زبان خدمات"
          : locale === "fr"
          ? "Langues de service"
          : "Service Languages",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <div className="text-4xl font-bold text-slate-900">
                <CountUp end={item.value} />
                {item.suffix}
              </div>
              <p className="mt-3 text-sm font-medium text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
