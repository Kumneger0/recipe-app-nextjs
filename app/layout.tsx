import "./globals.css";

export const metadata = {
  title: "Tasty The Place of delicious Recipes",
  description: "Get Instruction Detail For delicious Recipes",
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
