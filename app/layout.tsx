import "./globals.css";

export const metadata = {
  title: "Cook Delicious Meals Easily and Quickly With the Tasty ",
  description:
    "Are you looking for a simple way to make amazing meals in minutes? The Recipe App makes cooking delicious dishes an effortless task. Find great recipes and ingredients, set timers for precise cooking times, and get help with conversions between different units of measurement. Enjoy amazing flavors without the stress by using the Tasty",
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
