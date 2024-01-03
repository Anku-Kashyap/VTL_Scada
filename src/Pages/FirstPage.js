import React from "react";
import ZoneWiseKahrakmaf from "../Component/ZoneWise/ZoneWiseKahrakmaf";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function FirstPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseKahrakmaf />
    </>
  ) : (
    <Login />
  );
}

export default FirstPage;
