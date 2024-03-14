
import Navbar from "./componants/navbar";
import HeaderHandle from "./componants/Header";
import Quality from "./componants/componant/Quality";
import { RecentWork } from "./componants/componant/RecentWork/Recent";
import { Exprience } from "./componants/componant/MY-Exprience/Exprience";
import { Education } from "./componants/componant/My-Education/Education";
import MySkill from "./componants/componant/My-Skill/MySkill";


function App() {

  return (
    <div className=" bg-gradient-to-r from-[#0F0715] to-[#211c28]">
      <Navbar />
      <HeaderHandle />
      <Quality />
     <RecentWork></RecentWork>
     <div className="my-10 w-4/5  mx-auto flex items-center justify-around gap-4">
      <Exprience></Exprience>
      <Education></Education>
     </div>
      <MySkill></MySkill>


    </div>
  );
}

export default App;
