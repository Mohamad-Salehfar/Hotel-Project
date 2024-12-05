import { useEffect } from "react";
import { useBookMark } from "../context/BookMarkContextProvaider";
import { useNavigate, useParams } from "react-router-dom";

function SingleBookMark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookMark, currentBookMark, isLoadingCurrentBookMark } =
    useBookMark();
  useEffect(() => {
    getBookMark(id);
  }, [id]);
  if (isLoadingCurrentBookMark || !currentBookMark) return <>Loading ...</>;
  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
      <h2>{currentBookMark.cityName}</h2>
    </div>
  );
}

export default SingleBookMark;
