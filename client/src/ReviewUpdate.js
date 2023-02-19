import React from "react";
import Update from "./pages/review/Update";

const ReviewUpdate = () => {
  return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요.
              <br />
              Update Page
            </p>
          </div>
        </section>
        <Update />
      </main>
  )
}

export default ReviewUpdate;