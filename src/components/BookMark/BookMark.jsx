import ReactCountryFlag from "react-country-flag";
import { useBookMark } from "../context/BookMarkContextProvaider";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
function Bookmark() {
  const { isLoading, bookmarks, currentBookMark, deleteBookmark } =
    useBookMark();
  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };
  if (isLoading) return <>Loading ...</>;
  return (
    <div>
      <h2>BookMark List</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
                className={`bookmarkItem ${
                  item.id === currentBookMark?.id ? "current-bookmark" : ""
                }`}
              >
                <div>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  &nbsp;<strong>{item.cityName}</strong> &nbsp;
                  <span>{item.country}</span>
                </div>
                <button onClick={(e) => handleDelete(e, item.id)}>
                  <HiTrash className="trash" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
