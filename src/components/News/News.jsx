import Articles from "../Articles/Articles";
import InfoSidebar from "../InfoSidebar/InfoSidebar";
import { BookmarkContextProvider } from "../../context/bookmark-context";

function News() {
  return (
    <BookmarkContextProvider>
      <Articles />
      <InfoSidebar />
    </BookmarkContextProvider>
  );
}

export default News;
