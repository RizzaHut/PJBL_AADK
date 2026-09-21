import "./globals.css";

export const metadata = {
  title: "AADK - Ada Apa Dengan Konsol",
  description: "Platform tutorial perbaikan konsol game dan forum seputar konsol game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
