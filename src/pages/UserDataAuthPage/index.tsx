import React from "react";
import UserDataAuth from "../../components/IsUserDataAuth";
import Header from "./../../components/IsHeader/index";

export default function UserDataAuthPage() {
  return (
    <div className="bg-lightgrey relative">
      <Header />
      <UserDataAuth />
    </div>
  );
}
