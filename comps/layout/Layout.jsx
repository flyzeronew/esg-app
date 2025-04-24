import Header from '@/comps/Header/HeaderSample';
import Footer from "@/comps/Footer/Footer";

export default  function Layout({ children }) {
  return (
    <>
      <Header />
         <main>{children}</main>
      <Footer />
    </>
  )
}

