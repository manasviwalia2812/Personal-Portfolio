import About from "../components/About";
import Contact from "../components/Contact";
import profileIcon from "../assets/icon.png";

const MyProfilePage = () => {
  return (
    <div className="pt-28 flex flex-col items-center">

      {/* Profile Icon Header */}
      <div className="mb-12 flex justify-center">
        <img
          src={profileIcon}
          alt="Manasvi Walia"
          className="
            h-32 w-32 rounded-full
            border-4 border-purple-500
            shadow-lg shadow-purple-500/30
            hover:scale-105 transition
          "
        />
      </div>

      {/* About Section */}
      <div className="w-full">
        <About />
      </div>

      {/* Contact Section */}
      <div className="w-full mt-24">
        <Contact />
      </div>

    </div>
  );
};

export default MyProfilePage;
