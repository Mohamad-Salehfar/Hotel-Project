import { Outlet } from "react-router-dom";
import Map from "../Map";
import { useHotels } from "../context/HotelsProvaider";
function AppLayout() {
  const { hotels } = useHotels();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={hotels} />
    </div>
  );
}

export default AppLayout;