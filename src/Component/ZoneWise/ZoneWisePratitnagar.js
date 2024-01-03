import "./ZoneWise_Par.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ZoneWisePratitnagar() {
  const Base_Url="http://59.99.154.95:5984/"
  const ZONE_3=useAPi(Base_Url+"vtlzone3/200")
  var [date,setDate] = useState(new Date());
  
  const [allValues, setAllValues] = useState({
    tag0: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    tag7: "",
    tag8: "",
    tag9: "",
    tag10: "",
    tag11: "",
    tag12: "",
    tag13: "",
  });
  const DisplayData1 =  (props) => {
    console.log('Test')
    console.log(props.tag0);
    setAllValues({
      tag0: props.tag0,
      tag1: props.tag1,
      tag2: props.tag2,
      tag3: props.tag3,
      tag4: props.tag4,
      tag5: props.tag5,
      tag6: props.tag6,
      tag7: props.tag7,
      tag8: props.tag8,
      tag9: props.tag9,
      tag10: props.tag10,
      tag11: props.tag11,
      tag12: props.tag12,
      tag13: props.tag13,
      tag14: props.tag14,
      tag15: props.tag15,
      tag16: props.tag16,
      tag17: props.tag17,
      tag18: props.tag18,
      tag19: props.tag19

    });
    };
  // const DisplayData = () =>
  //   JsonData.map((info) => {
  //     return (
  //       <>
  //         {info.Name === "tag0" ? (allValues.tag0 = info.Value) : null}
  //         {info.Name === "tag1" ? (allValues.tag1 = info.Value) : null}
  //         {info.Name === "tag2" ? (allValues.tag2 = info.Value) : null}
  //         {info.Name === "tag3" ? (allValues.tag3 = info.Value) : null}
  //         {info.Name === "tag4" ? (allValues.tag4 = info.Value) : null}
  //         {info.Name === "tag5" ? (allValues.tag5 = info.Value) : null}
  //         {info.Name === "tag6" ? (allValues.tag6 = info.Value) : null}
  //         {info.Name === "tag7" ? (allValues.tag7 = info.Value) : null}
  //         {info.Name === "tag8" ? (allValues.tag8 = info.Value) : null}
  //         {info.Name === "tag9" ? (allValues.tag9 = info.Value) : null}
  //         {info.Name === "tag10" ? (allValues.tag10 = info.Value) : null}
  //         {info.Name === "tag11" ? (allValues.tag11 = info.Value) : null}
  //         {info.Name === "tag12" ? (allValues.tag12 = info.Value) : null}
  //         {info.Name === "tag13" ? (allValues.tag13 = info.Value) : null}
  //       </>
  //     );
  //   });

  // DisplayData();

  
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
        console.log(date)
    }
    

});

  useEffect(() => {
    ZONE_3.getReq()
    DisplayData1(ZONE_3.APIdata);
    
  },[date]);
  const handleClick = () => {
    window.open("http://59.99.154.95:3050/Reports/browse/JAL_SANSTHAN_REPORTS");
  };

  return (
    <div className="zone-wise-area-Pratitnagar">
      <span className="data-point101">{allValues.tag0} m</span>
      <span className="data-point102">{allValues.tag1} kg/cm2</span>
      <span className="data-point103">{allValues.tag2} m3/h</span>
      <span className="data-point104">{allValues.tag3} kg/cm2</span>
      <span className="data-point105">{allValues.tag4} kg/Cm2</span>
      <span className="data-point106">{allValues.tag5} kg/cm2</span>

      <div className="zonewise-btn-group">
        <Link to="/second">
          <button>Instantaneous</button>
        </Link>
        <Link >
        <button  onClick={handleClick}>
        Logbook
        </button>
        </Link>
        <Link to="/first">
          <button>Pressure of Jal Nigam</button>
        </Link>
        <Link to="/Matranchal">
         <button>Pressure of Matranchal</button>
        </Link>
        <Link to="/nathuawala">
          <button>Pressure of Achivier Homes</button>
        </Link>
      </div>
      <div className="Zone_Pra-Footer">
        <p className="Zone_Pra-Footer-text">Design And Devlop By - Shetal Enterprises 18 Cross 2B Tapovan Enclave Raipur Road, Dehradun.</p>
      </div>
    </div>
  );
}

function useAPi(url) {
  const [APIdata, setData] = useState({})  

  useEffect(() => {
    getReq()
  }, [])

  
  

    const getReq=async()=>{
        const response = await axios.get(url,{
          auth: {
          username: 'Admin',
          password: 'War_ship_84'
        }
      })
        setData(response.data)
        console.log('Get APIdata activated1')
        console.log(response.data)
    }

  return { APIdata,getReq}
}

export default ZoneWisePratitnagar;
