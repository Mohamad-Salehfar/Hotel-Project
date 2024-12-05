import { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookMarkListProvaider({ children }) {
  const [currentBookMark, setCurrentBookMark] = useState(null);
  const [isLoadingCurrentBookMark, setIsLoadingCurrentBookMark] =
    useState(false);
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookMark(id) {
    setIsLoadingCurrentBookMark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookMark(data);
      setIsLoadingCurrentBookMark(false);
    } catch (err) {
      toast.error(err.message);
      setIsLoadingCurrentBookMark(false);
    }
  }

  return (
    <BookMarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookMark,
        isLoadingCurrentBookMark,
        currentBookMark,
      }}
    >
      {children}
    </BookMarkContext.Provider>
  );
}

export function useBookMark() {
  return useContext(BookMarkContext);
}

export default BookMarkListProvaider;
