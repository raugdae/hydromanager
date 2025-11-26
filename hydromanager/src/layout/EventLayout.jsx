import { Outlet } from "react-router";
import {Link} from 'react-router-dom';

function EventLayout() {
return (
    <div className="flex flex-col justify-center bg-emerald-200">
        <Outlet />
    </div>
)

}
export default EventLayout;