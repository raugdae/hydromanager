import Login from "./components/common/Login";

import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import EventLayout from "./layout/EventLayout";
import ManageLayout from "./layout/ManageLayout";
import RoleProtectedRoute from "./layout/RoleProtectedRoute";

import Home from "./page/Home";
import Protected from "./page/Protected";
import EventOverview from "./page/event/EventView";
import ManageEvent from "./page/manage/ManageEvent";
import ManageGroups from "./page/manage/ManageGroups";
import ManagePlayers from "./page/manage/ManagePlayers";
import EventList from "./page/manage/EventList";
import Unauthorized from "./page/Unauthorized";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/protected" element={<Protected />} />
            <Route path="/event" element={<EventLayout />}>
              <Route index element={<EventOverview />} />
            </Route>
          </Route>

          <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
            <Route element={<MainLayout />}>
              <Route path="/manage" element={<ManageLayout />}>
                <Route index element={<EventList />} />
                <Route path="eventdata" element={<ManageEvent />} />
                <Route path="eventgroups" element={<ManageGroups />} />
                <Route path="eventplayers" element={<ManagePlayers />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
