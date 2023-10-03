import "../styles/global.css";
import { gowunDodum } from "../styles/font";
import { Head } from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body className={gowunDodum.className}>
        {children}
        <footer>CopyrightⓒPowered by 쪼에(@zoehaee) All Right Reserved</footer>
      </body>
    </html>
  );
}
