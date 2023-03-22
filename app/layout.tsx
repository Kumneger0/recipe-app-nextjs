import "./globals.css";

export const metadata = {
  title: "Tasty food recipe",
  description: "Get instruction detail for delicios recipes",
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
