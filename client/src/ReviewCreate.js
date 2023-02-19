import React from "react";
import Create from "./pages/review/Create";

const ReviewCreate = () => {
  return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요.
              <br />
              Create Page
            </p>
          </div>
        </section>
        <Create />
      </main>
  )
}

export default ReviewCreate;