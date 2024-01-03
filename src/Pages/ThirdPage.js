import React from "react";
import LogWise from "../Component/logwise/LogWise";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function ThirdPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <LogWise />
    </>
  ) : (
    <Login />
  );
}

export default ThirdPage;
