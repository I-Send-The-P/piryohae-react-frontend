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

function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route
          path={ROUTES_PATH_HOME}
          element={
            <BaseLayout title={"피료해"} isHome={true}>
              <Home />
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
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
