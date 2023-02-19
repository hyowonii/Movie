import React from "react";
import {useNavigate} from "react-router-dom";
import reviewData from "./data/review.json";

const Review = () => {

  const navigate = useNavigate();

  return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요.
              <br />
              또한 삭제, 수정이 가능합니다.
            </p>
            <p>
              <button onClick={() => navigate("/review/create")}
                  className="btn btn-primary my-2 m-1">Create Review</button>
            </p>
          </div>
        </section>
        <div className="album py-5">
          <div className="container">
            <div className="row">
              {
                reviewData.map((it, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="card mb-4 box-shadow">
                        <div className="card-img-top" style={{textAlign: "center"}}>
                          <img
                               data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                               src={it.img}
                               alt="Thumbnail [100%x225]"
                               data-holder-rendered="true" style={{height: "225px", width: "50%"}}/>
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            {it.content.substring(0,((it.content).length / 2))}
                            <a style={{color: "blue"}}>&nbsp;&nbsp;&nbsp;...상세보기</a>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                ))
              }

            </div>
          </div>
        </div>
      </main>
  )
}

export default Review;