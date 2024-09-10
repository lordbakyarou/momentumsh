import Logo from "../Logo";
import SidebarIcons from "./SidebarIcons";

//Icons
import hamburger from "../../assets/Hamburger.png";
import frame from "../../assets/Frame.png";
// import git from "../../assets/Git.png";
import stack from "../../assets/Stack.png";

//User Profile
import userProfile from "../../assets/userProfile.png";

const Sidebar = () => {
  return (
    <div className="fixed z-50 left-0 top-0 pt-4 flex flex-col items-center min-h-screen w-14 bg-primary-gray">
      <Logo />

      <div className="flex flex-col gap-10 text-2xl pt-10">
        <SidebarIcons icon={hamburger} />
        <SidebarIcons icon={frame} />
        <SidebarIcons icon={stack} />
        {/* <SidebarIcons icon={git} /> */}
      </div>

      <div className="mt-auto flex justify-center pb-4">
        <img src={userProfile} className="w-10" />
      </div>
    </div>
  );
};

export default Sidebar;
