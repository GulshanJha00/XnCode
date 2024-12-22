import Button from "@/components/Button";

const Homepage = () => {
  return (
    <div className="px-[100px] space-y-96 w-full pt-[50px] h-screen bg-gradient-to-b from-[#0F0420] to-[#3F1186]">
      <div
        className="h-full text-9xl"
        style={{
          fontFamily: "Itim",
        }}
      >
        <h1>CODE.</h1>
        <h1>COMPETE.</h1>
        <h1>CONQUER.</h1>
        <div>
          <Button
            name="Get Started"
            link="/signup"
            style={{
              backgroundColor: "#00C4E8",
              padding: "20px 140px",
              fontSize: "30px",
              color: "#fff",
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
