import Header from "./components/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvaider from "./components/context/HotelsProvaider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookMarkLayout from "./components/BookMarkLayout/BookMarkLayout";
import BookMarkListProvaider from "./components/context/BookMarkContextProvaider";
import Bookmark from "./components/BookMark/BookMark";
import SingleBookMark from "./components/SingleBookMark/SingleBookMark";
import AddNewBookMark from "./components/AddNewBookMark/AddNewBookMark";

// import "leaflet/dist/leaflet.css";

function App() {
  return (
    <BookMarkListProvaider>
      <HotelsProvaider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookMarkLayout />}>
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookMark />} />
            <Route path="add" element={<AddNewBookMark />} />
          </Route>
        </Routes>
        {/* <LocationList/> */}
      </HotelsProvaider>
    </BookMarkListProvaider>
  );
}

export default App;
