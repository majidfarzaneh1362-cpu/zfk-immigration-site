export function getSiteUrl(): string {
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (publicUrl) {
    return publicUrl.startsWith("http") ? publicUrl : `https://${publicUrl}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return vercelUrl.startsWith("http") ? vercelUrl : `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

