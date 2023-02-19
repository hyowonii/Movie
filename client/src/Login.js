import React, {useEffect, useState} from "react";
import SignInForm from "./pages/user/SignInForm";
import SignUpForm from "./pages/user/SignUpForm";

const Login = () => {

  // view를 변경하기 위한 상태
  const [view, setView] = useState({
    signIn: false,
    signUp: false
  });

  // 로그인 입력받을 데이터를 props로 넘겨줌
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  });

  // 회원가입 입력받을 데이터를 props로 넘겨줌
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: ""
  });

  const onChangeSignInData = (e) => {
    setSignInData((prevState) => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  };

  const onChangeSignUpData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    })
  };

/*
  useEffect(() => {
    console.log(signUpData);
  },[signUpData]);
*/

  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          {
            view.signIn ? (
                <>
                  <h1 className="jumbotron-heading">Login</h1>
                  <p className="lead text-muted">
                    로그인 해주세요.
                  </p>
                </>
            ) : (
                view.signUp ? (
                    <>
                      <h1 className="jumbotron-heading">SignUp</h1>
                      <p className="lead text-muted">
                        회원가입 해주세요.
                      </p>
                    </>
                ) : (
                    <>
                      <h1 className="fw-light">Movie</h1>
                      <p className="lead text-muted">리뷰하고 싶은 영화를 추가하고,
                        별점을 주세요.<br />
                        또한 삭제, 수정이 가능합니다.
                      </p>
                    </>
                )
            )
          }
          <p>
            <button onClick={() => {
              setView({
                signIn: true,
                signUp: false
              })
            }} className="btn btn-primary my-2 m-1">로그인</button>
            <button onClick={() => {
              setView({
                signIn: false,
                signUp: true
              })
            }} className="btn btn-secondary my-2 m-1">회원가입</button>
          </p>
        </div>
      </section>
      {
        view.signIn ? (<SignInForm signInData={signInData} onChangeSignInData={onChangeSignInData}/>) : (<></>)
      }
      {
        view.signUp ? (<SignUpForm signUpData={signUpData} setSignUpData={setSignUpData} onChangeSignUpData={onChangeSignUpData} />) : (<></>)
      }
    </main>
  );
};

export default Login;
