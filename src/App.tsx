import { Routes, Route } from "react-router-dom";
import Health from "@/pages/Health";
import Signup from "./pages/Signup";
import { Toaster } from "sonner";
import VerifyOtp from "./pages/VerifyOtp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard.tsx";
import ProfileForm from "./pages/ProfileForm";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { Home } from "@/pages/Home.tsx";
import ProtectedRoute from "@/components/ProtectedRoute";
import RootRedirect from "@/components/RootRedirect";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile-update" element={<ProfileForm />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;