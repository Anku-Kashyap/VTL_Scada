import React from "react";
import ZoneWiseMatranchal from "../Component/ZoneWise/ZoneWiseMatranchal";
import Header from "../Component/Header/Header";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function Matranchal() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseMatranchal />
    </>
  ) : (
    <Login />
  );
}

export default Matranchal;
