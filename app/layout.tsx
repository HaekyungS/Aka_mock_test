import "../styles/global.css";
import { gowunDodum } from "../styles/font";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={gowunDodum.className}>
        {children}
        <footer>CopyrightⓒPowered by 쪼에(@dailyy_zoe) All Right Reserved</footer>
      </body>
    </html>
  );
}
