import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import $ from "jquery";
import axios from "axios";
import {preURL} from "../../preURL/preURL";


const SignInForm = ({signInData, onChangeSignInData}) => {

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);  // cookies는 객체임

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onClickLoginButton = async () => {

    if(signInData.email === "") {
      alert("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }
    if(signInData.password === "") {
      alert("비밀번호를 입력해주세요.");
      $("#password").focus();
      return;
    }

    return await axios
        .post(preURL + '/user/login', {signInData})
        .then((res) => {
          console.log("로그인 성공", res.data);
          setCookie("userData", res.data, {path: "/"});
          alert("로그인이 완료되었습니다.");
          navigate("/review/list");
        })
        .catch((err) => {
          console.log("로그인 실패", err);
          setErrorMessage(err.response.data.fail);
        })
        .finally(() => {
          console.log(cookies.userData);
        })

  }

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={signInData.email}
              onChange={onChangeSignInData}
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={signInData.password}
              onChange={onChangeSignInData}
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <p className="text-danger">{errorMessage}</p>
          </div>
          <button type="button"
                  onClick={onClickLoginButton}
                  className="btn btn-primary">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
