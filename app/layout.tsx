import "./globals.css";

export const metadata = {
  title: "Reciepes",
  description: "food reciepes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
