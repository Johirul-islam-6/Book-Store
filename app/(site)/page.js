

// import { Authenticatior } from "@/Components/Authenticator/Authenticatior";

import { Banner } from "@/Components/Home/Banner/Banner";
import { Diploma } from "@/Components/Home/Products/Diploma/Diploma";


export default function Home() {
  return (
    <div className="  bg-[#0A0A0A] overflow-hidden xl:overflow-visible  relative ">
      <Banner/>
      <div className="max-w-screen-xl mx-auto ">
       <Diploma/>
      </div>

    </div>
  );
}
