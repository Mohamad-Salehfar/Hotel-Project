import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookMarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookMarkListProvaider({ children }) {
  const [currentBookMark, setCurrentBookMark] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBookmarkList() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}/bookmarks`);
        setBookmarks(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBookmarkList();
  }, []);

  async function getBookMark(id) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookMark(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function createBookMark(newBookMark) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`${BASE_URL}/bookmarks/`, newBookMark);
      setCurrentBookMark(data);
      setBookmarks((prev) => [...prev, data]);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BookMarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookMark,
        currentBookMark,
        createBookMark,
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
