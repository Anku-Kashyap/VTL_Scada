import React from "react";
import ZoneWiseNathuaWala from "../Component/ZoneWise/ZoneWiseNathuawala";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function NathuaWala() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseNathuaWala />
    </>
  ) : (
    <Login />
  );
}

export default NathuaWala;
