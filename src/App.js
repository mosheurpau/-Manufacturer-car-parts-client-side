import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddPart from "./Pages/Dashboard/AddPart";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageParts from "./Pages/Dashboard/ManageParts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Profile from "./Pages/Dashboard/Profile";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Reset from "./Pages/Login/Reset";
import SignUp from "./Pages/Login/SignUp";
import PartDetail from "./Pages/PartDetail/PartDetail";
import Parts from "./Pages/Parts/Parts";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="part" element={<Parts />} />
        <Route
          path="/part/:partId"
          element={
            <RequireAuth>
              <PartDetail></PartDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route
            path="addReview"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addPart"
            element={
              <RequireAdmin>
                <AddPart></AddPart>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageParts"
            element={
              <RequireAdmin>
                <ManageParts></ManageParts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile></Profile>
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset" element={<Reset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
