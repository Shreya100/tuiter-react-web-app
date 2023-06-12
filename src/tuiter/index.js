import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
// import TuitSummaryList from "./tuit-summary-list";
import ExploreScreen from "./explore-screen/index";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./users/profile-screen";
import LoginScreen from "./users/login-screen";
import RegisterScreen from "./users/register-screen";
import authReducer from "./reducers/auth-reducer";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const { currentUser } = useSelector((state) => state.user);
const store = configureStore(
  {reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    user:  authReducer
  }});
  


function Tuiter() {
 return (
  <Provider store={store}>
    <div>
      <Nav />
      <div className="row">
        <div className="col-2">
          <NavigationSidebar />
        </div>
        <div className="col-7">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<ExploreScreen />} />
          <Route path="/bookmarks" element={<BookmarksScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login"    element={<LoginScreen    />} />
          <Route path="/register" element={<RegisterScreen />} />


        </Routes>

        </div>
        <div className="col-3">
          <WhoToFollowList/>
        </div>
      </div>
    </div>
   </Provider>
 );
}
export default Tuiter;

