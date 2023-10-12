import "./App.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Homepage from "./page/Homepage";
import Contact from "./page/Contact";
import Skill from "./page/Skill";
import About from "./page/About";
import SkillDetails from "./page/SkillDetails";
import ErrorPage from "./page/ErrorPage";
import AppLayout from "./Layout/AppLayout";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import { Provider } from "react-redux";
import {store} from './redux/store'

const routeList = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/signup", element: <SignUp /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/skill/:skill", element: <SkillDetails /> },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Homepage/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   <Route path="/skill" element={<Skill/>} >
    //     {/* <Route path=":skill" element={<SkillDetails/>}/> */}
    //     </Route>
    //   <Route path="/contact" element={<Contact/>}/>
    //   <Route path="/skill/:skill" element={<SkillDetails/>}/>
    //   <Route path="/*" element={<ErrorPage/>}/>
    // </Routes>
    // </BrowserRouter>
    <div>
      <Provider store={store}><RouterProvider router={routeList} /></Provider>
      
    </div>
  );
}

export default App;
