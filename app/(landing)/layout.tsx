import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { LayoutComponent } from "@/models";

const Layout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
