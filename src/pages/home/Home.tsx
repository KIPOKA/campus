import {
  Hero,
  TrustStrip,
  HowItWorks,
  Modes,
  CampusVoices,
  Footer,
} from "../../components";
import Navbar from "../navigation/NavBar";

export default function CampusLandingPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#f4fbec",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(26,26,46,0.06) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <Navbar />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Modes />
      <CampusVoices />
      {/* <JoinCTA /> */}
      <Footer />
    </div>
  );
}
