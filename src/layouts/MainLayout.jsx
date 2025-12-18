import Navbar from "../components/navbar";
import SectionBackground from "../components/SectionBackground";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {/* All non-hero content gets SAME background */}
      <SectionBackground>
        <div className="text-neutral-300 antialiased">  {children} </div>
        
      </SectionBackground>
    </>
  );
};

export default MainLayout;
