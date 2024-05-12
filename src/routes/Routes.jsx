import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Queries from "../pages/Queries/Queries";
import RecommendForMe from "../pages/RecommendForMe/RecommendForMe";
import MyQueries from "../pages/MyQueries/MyQueries";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import PrivateRoute from "../routes/PrivateRoute"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/queries",
          element: <Queries></Queries>
        },
        {
          path: "/recommend-for-me",
          element: <PrivateRoute><RecommendForMe></RecommendForMe></PrivateRoute> 
        },
        {
          path: "/my-queries",
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute> 
        },
        {
          path: "/my-recommendations",
          element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute> 
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
      ]
    },
]);


export default router