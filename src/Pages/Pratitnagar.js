import React from "react";
import ZoneWisePratitnagar from "../Component/ZoneWise/ZoneWisePratitnagar";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function Pratitnagar() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWisePratitnagar />
    </>
  ) : (
    <Login />
  );
}

export default Pratitnagar;
