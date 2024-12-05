import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHotels } from "../context/HotelsProvaider";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, currentHotel, isLoadingCurrent } = useHotels();
  useEffect(() => {
    getHotel(id);
  }, [id]);
  console.log(currentHotel);

  // const {isLoading,data}=useFetch(`http://localhost:5000/hotels/${id}`)
  if (isLoadingCurrent) return <>Loading ...</>;
  return (
    // <div>single hotel</div>
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} &bull; {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture} alt={currentHotel.name} />
      </div>
    </div>
  );
}

export default SingleHotel;
