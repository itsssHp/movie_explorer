import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import "./globals.css";
import Providers from "./Providers";


export const metadata = {
  title: "IMDB Clone",
  description: "Created from Next.js 13.4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* body */}
      <body>
        <Providers>
          <Header />

          <Navbar />
          {/* SearchBox */}

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
