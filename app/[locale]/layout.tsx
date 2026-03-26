import WhatsAppButton from "../../components/WhatsAppButton";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white">
      {children}
      <WhatsAppButton locale={locale} />
    </div>
  );
}