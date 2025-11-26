import { Link, Outlet } from "react-router-dom";
import { ManagerProvider} from "../contexts/ManagerContext";
import ManageNav from '../components/manage/ManageNav';


function ManageLayout() {

  

  return (
    <ManagerProvider>
      <ManageNav/>
      <div className="flex w-full flex-1 px-12 py-4 border-l-green-500 border-orange-900">
        <Outlet />
      </div>
    </ManagerProvider>
  );
}
export default ManageLayout;
