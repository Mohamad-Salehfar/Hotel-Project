import ReactCountryFlag from "react-country-flag";
import { useBookMark } from "../context/BookMarkContextProvaider";
import { Link } from "react-router-dom";

function Bookmark() {
  const { isLoading, bookmarks, currentBookMark } = useBookMark();

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
                <ReactCountryFlag svg countryCode={item.countryCode} />
                &nbsp;<strong>{item.cityName}</strong> &nbsp;
                <span>{item.country}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
