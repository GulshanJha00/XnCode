import Button from "@/components/Button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Homepage = () => {
  const words = [
    {
      text: "COMPETE.",
      className: "text-blue-500 text-9xl dark:text-blue-500",
      
    },
  ];
  return (
    <div className="px-[100px] w-screen pt-[50px] h-screen bg-gradient-to-b from-[#0F0420] to-[#3F1186]">
      <div
        className="h-full text-9xl"
        style={{
          fontFamily: "Itim",
        }}
      >
        <h1>CODE.</h1>
        <h1>CREATE.</h1>
        <h1>
          <TypewriterEffectSmooth words={words} />
        </h1>
        <div>
          <Button
            name="Get Started"
            link="/signup"
            style={{
              backgroundColor: "#00C4E8",
              padding: "20px 140px",
              fontSize: "30px",
              color: "#fff",
              position: "absolute",
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
            }}
          />
        </div>
        <h1 className="text-5xl text-center mt-36">Trusted By</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Homepage;
