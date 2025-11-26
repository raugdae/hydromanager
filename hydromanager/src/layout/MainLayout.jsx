import LinkMainMenu from "../components/common/LinkMainMenu";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col justify-around">
        <div className="flex justify-center bg-green-600 text-3xl font-bold text-white">
          HydroManager
        </div>
        <div className="flex flex-row justify-around gap-4 bg-linear-to-b from-green-600 to-green-900 h-4" />
          <div className='flex flex-row justify-around gap-4 bg-green-900'>
            <nav className="flex">
              <LinkMainMenu target="/event" name="Evènements" />
              <LinkMainMenu target="/manage" name="Manager" />
            </nav>
            <div className="flex">
              <LinkMainMenu target="/login" name="Login" />
            </div>
          
        </div>
      </header>
      <div className="flex flex-1 h-full w-full container mx-auto border-2">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
