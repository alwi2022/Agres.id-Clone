"use client";

import { handleLogout } from "@/action";

export default function LogoutButton() {
  return (
    <div onClick={handleLogout}>
      <a className="text-red-600">Logout</a>
    </div>
  );
}
