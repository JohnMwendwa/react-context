import { createContext, useContext, useState } from "react";

export const BookmarkContext = createContext({
  bookmarkedArticles: [],
  bookmarkArticle: () => {},
  unbookmarkArticle: () => {},
});

export const BookmarkContextProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const addArticle = (article) =>
    setSavedArticles((prev) => [...prev, article]);

  const removeArticle = (articleId) => {
    return setSavedArticles((prev) =>
      prev.filter((article) => article.id !== articleId)
    );
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedArticles: savedArticles,
        bookmarkArticle: addArticle,
        unbookmarkArticle: removeArticle,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => {
  return useContext(BookmarkContext);
};
