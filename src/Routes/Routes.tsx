import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import AboutUs from "../Pages/AboutUs"
import ContactUS from "../Pages/ContactUs"
import Layout from "../Components/Layout"
import NotFound from "../Pages/NotFound"
import Courses from "../Pages/Courses"

import SingleCourse from "../Pages/SingleCourse"

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contactus" element={<ContactUS/>}/>
            <Route path="/courses/">
              <Route path="" element={<Courses/>}/>
              <Route path=":id"  element={<SingleCourse />}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes