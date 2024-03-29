import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Groups from "../containers/Groups/Groups";
import Talks from "../containers/Talks/Talks";
import Layout from "../components/commons/Layout/Layout";
import Admin from "../containers/Admin/Admin";
import Dashboard from "../containers/Dashboard/Dashboard";
import Calendar from "../containers/Calendar/Calendar";
import LessonVideo from "../components/lessons/LessonVideo";
import Course from "../containers/Course/Course";
import JoinUsStudent from "../containers/JoinUs/JoinUsStudent";
import JoinUsMentor from "../containers/JoinUs/JoinUsMentor";
import NotFound from "../containers/NotFound/NotFound";
import Lessons from "../containers/Lessons/Lessons";
import LessonQuestion from "../containers/Lessons/LessonsQuestion";

import { PrivateRoute } from "./PrivateRoutes";
import "../styles.scss";
import Login from "../containers/Login/Login";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth";
import Loader from "../components/commons/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, checking, isLoggedIn]);

  if (checking) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin/recursos" component={Admin} />
          <Route exact path="/cursos/desarrollo-web" component={Course} />
          <Route exact path="/grupos" component={Groups} />
          {/* <PrivateRoute isAuthenticated={isLoggedIn} path="/clases/:type">
            <Lessons />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={isLoggedIn} path="/clases">
            <Lessons />
          </PrivateRoute>
          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path="/clases/:group/:link"
          >
            <LessonVideo />
          </PrivateRoute> */}
          <Route exact path="/clases/:type" component={Lessons} />
          <Route exact path="/clases" component={Lessons} />
          <Route
            exact
            path="/clases/:group/:link/:lessonId"
            component={LessonVideo}
          />
          <Route
            exact
            path="/question/:questionId"
            component={LessonQuestion}
          />

          <Route
            exact
            path="/talks"
            component={() => <Talks isDashboard="true" />}
          />
          <Route exact path="/calendario" component={Calendar} />
          <Route exact path="/estudiante" component={JoinUsStudent} />
          <Route exact path="/mentor" component={JoinUsMentor} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
