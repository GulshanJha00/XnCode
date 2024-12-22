import { BackgroundLines } from "@/components/ui/background-lines.tsx";
import Homepage from "./pages/Homepage";

export default function Home() {
  return (
      <div className="">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 z-10">

        <Homepage />

        </BackgroundLines>
      </div>
  );
}
