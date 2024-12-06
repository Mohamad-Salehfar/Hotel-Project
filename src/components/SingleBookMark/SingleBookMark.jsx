import { useEffect } from "react";
import { useBookMark } from "../context/BookMarkContextProvaider";
import { useNavigate, useParams } from "react-router-dom";

function SingleBookMark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookMark, currentBookMark, isLoading } = useBookMark();
  useEffect(() => {
    getBookMark(id);
  }, [id]);
  if (isLoading || !currentBookMark) return <>Loading ...</>;
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
