import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_HOME,
  ROUTES_PATH_LOGIN,
  ROUTES_PATH_SIGNUP,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_NOTICE,
  ROUTES_PATH_RANK,
  ROUTES_PATH_QUESTION,
  ROUTES_PATH_QUESTION_NEW,
  ROUTES_PATH_QUESTIONS,
  ROUTES_PATH_MY_PAGE,
  ROUTES_PATH_BLOOD_REQUESTS,
  ROUTES_PATH_BLOOD_REQUEST,
  ROUTES_PATH_BLOOD_REQUEST_NEW,
  ROUTES_PATH_BLOOD_REQUEST_CAUTION,
  ROUTES_PATH_BLOOD_REQUEST_COMPLETE,
  ROUTES_PATH_INTRODUCE,
  ROUTES_PATH_ALARM,
} from "./constants/Routes";
import { BaseLayout } from "components/Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Notice from "pages/Notice";
import Rank from "pages/Rank";
import Question from "pages/Question";
import QuestionNew from "pages/Question/New";
import Questions from "pages/Questions";
import MyPage from "pages/MyPage";
import Requests from "pages/Requests";
import Request from "pages/Request";
import RequestNew from "pages/Request/New";
import RequestComplete from "pages/Request/Complete";
import RequestCaution from "pages/Request/Caution";
import Introduce from "pages/Introduce";
import Alarm from "pages/Alarm";

function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route
          path={ROUTES_PATH_HOME}
          element={
            <BaseLayout
              title={<img src="/png/logo.png" style={{ height: "100%" }}></img>}
              isHome={true}
            >
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_INTRODUCE}
          element={
            <BaseLayout title={"서비스 소개"} isHome={false}>
              <Introduce />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_LOGIN}
          element={
            <BaseLayout title={"로그인"} isLogin={false}>
              <Login />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_SIGNUP}
          element={
            <BaseLayout title={"회원가입"} isLogin={false}>
              <Signup />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_NOTICE}
          element={
            <BaseLayout title={"공지사항"} isLogin={true}>
              <Notice />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_RANK}
          element={
            <BaseLayout title={"명예의 전당"} isLogin={true}>
              <Rank />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_QUESTION}
          element={
            <BaseLayout title={"고객센터"} isLogin={true}>
              <Question />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_QUESTION_NEW}
          element={
            <BaseLayout title={"1:1 문의"} isLogin={true}>
              <QuestionNew />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_QUESTIONS}
          element={
            <BaseLayout title={"1:1 문의내역"} isLogin={true}>
              <Questions />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_MY_PAGE}
          element={
            <BaseLayout title={"MY PAGE"} isLogin={true}>
              <MyPage />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_BLOOD_REQUESTS}
          element={
            <BaseLayout title={"긴급헌혈 요청목록"} isLogin={true}>
              <Requests />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_BLOOD_REQUEST}
          element={
            <BaseLayout title={"긴급헌혈 요청서"} isLogin={true}>
              <Request />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_BLOOD_REQUEST_NEW}
          element={
            <BaseLayout title={"긴급헌혈 요청서"} isLogin={true}>
              <RequestNew />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_BLOOD_REQUEST_CAUTION}
          element={
            <BaseLayout title={"헌혈 유의 사항"} isLogin={true}>
              <RequestCaution />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_BLOOD_REQUEST_COMPLETE}
          element={
            <BaseLayout title={"긴급헌혈 요청서"} isLogin={true}>
              <RequestComplete />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_MY_PAGE}
          element={
            <BaseLayout title={"MY PAGE"} isLogin={true}>
              <MyPage />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_ALARM}
          element={
            <BaseLayout title={"알림"} isLogin={true}>
              <Alarm />
            </BaseLayout>
          }
        />
        <Route
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
