import "../styles/global.css";
import { gowunDodum } from "../styles/font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={gowunDodum.className}>{children}</body>
    </html>
  );
}
