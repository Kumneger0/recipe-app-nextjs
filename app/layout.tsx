import "./globals.css";

export const metadata = {
  title: "Food Recipes",
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
