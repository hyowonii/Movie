import {Route, Routes} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Review from "./Review";
import ReviewCreate from "./ReviewCreate";
import ReviewDetail from "./ReviewDetail";
import ReviewUpdate from "./ReviewUpdate";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="review">
          <Route path="list" element={<Review/>}/>
          <Route path="create" element={<ReviewCreate />}/>
          <Route path=":id">
            <Route path="detail" element={<ReviewDetail />} />
            <Route path="update" element={<ReviewUpdate />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
