import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center  ">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
