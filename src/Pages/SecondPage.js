import React from "react";
import Instant from "../Component/Instantaneous/Instant";
import Header from "../../src/Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function SecondPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <Instant />
    </>
  ) : (
    <Login />
  );
}

export default SecondPage;
