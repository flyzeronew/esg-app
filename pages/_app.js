import '@/styles/globals.css';
import { Noto_Sans_TC, Lexend, Roboto } from 'next/font/google';

// Update the font once new design is completed
const noto = Noto_Sans_TC({
  weight: ["400", "500" ,"600" ,"700" ,"800"],
  subsets: ['latin'],
  display: 'swap',
});
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: ["400","500","700"],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main >
      <style jsx global>{`
        :root {
          --font-family-noto: ${noto.style.fontFamily};
          --font-family-lexend: ${lexend.style.fontFamily};
          --font-family-roboto: ${roboto.style.fontFamily};
        }
        header {
          font-family: var(--font-family-noto);
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}
