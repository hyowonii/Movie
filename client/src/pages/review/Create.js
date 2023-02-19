const Create = () => {
  return (
      <div className="album">
        <div className="container">
          <div className="card mb-3">
            <div className="card-img-top" style={{textAlign: "center"}}>
              <img src="https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220720_283%2F1658284839003UzxoT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2"
                   alt="..."/>
            </div>
              <div className="card-body">
                <h5 className="card-title">Movie Image</h5>
                <p className="card-text">
                  Image Example
                </p>
                <input type="text" className="form-control" name="img" id="img" placeholder="사진 URL을 입력해주세요."/>
                <p className="card-text"><small className="text-muted">url...</small></p>
              </div>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">제목</label>
            <input type="text" className="form-control" name="title" id="title" placeholder="제목을 입력해주세요."/>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">내용</label>
            <textarea className="form-control" name="content" id="content" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-outline-primary me-1">생성</button>
          <button type="button" className="btn btn-outline-danger">뒤로가기</button>
        </div>
      </div>
  )
}

export default Create;