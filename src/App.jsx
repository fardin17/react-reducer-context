import "./App.css";
import {BrowserRouter,Route,RouterProvider,Routes, createBrowserRouter} from 'react-router-dom'
import Homepage from "./page/Homepage";
import Contact from "./page/Contact";
import Skill from "./page/Skill";
import About from "./page/About";
import SkillDetails from "./page/SkillDetails";
import ErrorPage from "./page/ErrorPage";
import AppLayout from "./Layout/AppLayout";

const routeList=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[{
      path:'/',
      element:<Homepage/>
    },{
      path:'/about',
      element:<About/>
    },{
      path:'/skill',
      element:<Skill/>,
      children:[{path:':skill',element:<SkillDetails/>}]
    },{
      path:'/contact',
      element:<Contact/>
    },{
      path:'/*',
      element:<ErrorPage/>
    }]
  }
  
])

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
       
      <RouterProvider router={routeList}/>
    </div>
   
  );
}

export default App;
