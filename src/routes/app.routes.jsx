import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { Annotations } from "../pages/Annotations";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Details />} />
      <Route path="/annotations" element={<Annotations />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
