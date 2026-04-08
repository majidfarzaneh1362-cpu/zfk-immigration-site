"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: string;
};

type VideoItem = {
  id: string;
  title: string;
  src: string;
  poster?: string;
};

// Add more videos here later.
const VIDEO_ITEMS: VideoItem[] = [
  { id: "1", title: "ویدیو 1", src: "/images/video/1.mp4" },
  { id: "2", title: "ویدیو 2", src: "/images/video/2.mp4" },
  { id: "3", title: "ویدیو 3", src: "/images/video/3.mp4" },
  { id: "4", title: "ویدیو 4", src: "/images/video/4.mp4" },
];

export default function CustomerSatisfactionVideos({ locale }: Props) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const isRTL = locale === "fa";

  const t = useMemo(() => {
    if (locale === "fa") {
      return {
        title: "رضایت مشتریان",
        subtitle:
          "تجربه واقعی موکلان ما را ببینید و با اطمینان بیشتری برای مسیر مهاجرت خود تصمیم بگیرید.",
      };
    }
    if (locale === "fr") {
      return {
        title: "Satisfaction des clients",
        subtitle:
          "Decouvrez les retours de nos clients et avancez avec plus de confiance.",
      };
    }
    return {
      title: "Customer Satisfaction",
      subtitle:
        "Watch real client experiences and move forward with more confidence.",
    };
  }, [locale]);

  return (
    <>
      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
        <div className={isRTL ? "text-right" : "text-left"}>
          <h3 className="text-2xl font-semibold text-slate-900">{t.title}</h3>
          <p className="mt-3 text-slate-600">{t.subtitle}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_ITEMS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative overflow-hidden rounded-xl bg-white ring-1 ring-slate-200"
            >
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  src={video.src}
                  poster={video.poster}
                  preload="metadata"
                  muted
                  playsInline
                />

                <div className="absolute inset-0 bg-slate-900/35 transition group-hover:bg-slate-900/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl ring-4 ring-white/35">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-0.5 h-6 w-6 fill-slate-900"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="px-3 py-3 text-sm font-medium text-slate-800">{video.title}</p>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[45rem] rounded-2xl bg-black p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 rounded-md bg-black/60 px-3 py-1 text-sm font-semibold text-white"
            >
              X
            </button>
            <video
              key={activeVideo.id}
              className="h-auto w-full rounded-xl"
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

