import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Login.jsx";
import Register from "./components/pages/Register/Register.jsx";
import Settings from "./components/pages/Settings/Settings.jsx";
// import Single from "./components/pages/Single/Single.jsx";
import Write from "./components/pages/Write/Write.jsx";
import SinglePost from "./components/SinglePost/SinglePost.jsx";
import TopBar from "./components/TobBar/TopBar";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/write">
        {user ? <Write/> : <Register/>}
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <SinglePost/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
