import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Save from "@mui/icons-material/Save";
import FormatClear from "@mui/icons-material/FormatClear";
import Cancel from "@mui/icons-material/Cancel";
import "./Instant.css";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useCheckWorkingURL } from "../../Utils/useCheckWorkingURL";

function Instant() {
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

    tag14: "",
    tag15: "",
    tag16: "",
    tag17: "",
    tag18: "",

    tag19: "",
    tag20: "",
    tag21: "",
    tag22: "",
    tag23: "",
    tag24: "",

    tag25: "",
    tag26: "",
    tag27: "",
    tag28: "",

    tag29: "",
    tag30: "",
    tag31: "",

    tag32: "",
  });

  const DisplayData = (props) => {
    console.log("Test");
    console.log(props[0].tag0);
    setAllValues({
      tag0: props[0].tag0,
      tag1: props[0].tag1,
      tag2: props[0].tag2,
      tag3: props[0].tag3,
      tag4: props[0].tag4,
      tag5: props[0].tag5,
      tag6: props[0].tag6,
      tag7: props[0].tag7,
      tag8: props[0].tag8,
      tag9: props[0].tag9,
      tag10: props[0].tag10,
      tag11: props[0].tag11,
      tag12: props[0].tag12,
      tag13: props[0].tag13,
      tag14: props[0].tag14,
      tag15: props[0].tag15,
      tag16: props[0].tag16,
      tag17: props[0].tag17,
      tag18: props[0].tag18,
      tag19: props[0].tag19,
      tag20: props[0].tag20,
      tag21: props[0].tag21,
      tag22: props[0].tag22,
      tag23: props[0].tag23,
      tag24: props[0].tag24,
      tag25: props[0].tag25,
      tag26: props[0].tag26,
      tag27: props[0].tag27,
      tag28: props[0].tag28,
      tag29: props[0].tag29,
      tag30: props[0].tag30,
      tag31: props[0].tag31,
      tag32: props[0].tag32,
    });
  };

  const DisplayData1 = (props) => {
    console.log("Test");
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
      tag19: props.tag19,
      tag20: props.tag20,
      tag21: props.tag21,
      tag22: props.tag22,
      tag23: props.tag23,
      tag24: props.tag24,
      tag25: props.tag25,
      tag26: props.tag26,
      tag27: props.tag27,
      tag28: props.tag28,
      tag29: props.tag29,
      tag30: props.tag30,
      tag31: props.tag31,
      tag32: props.tag32,
      tag33: props.tag33,
      tag34: props.tag34,
      tag35: props.tag35,
      tag36: props.tag36,
    });
  };
  const [division, setDivision] = useState("");
  const [station, setStation] = useState("");

  const stationsByDivision = {
    ZONE1: ["ZONE1_GDHAI VALI GALI", "ZONE1_MATRANCHAL"],
    ZONE2: [
      "ZONE2_SIDHESWAR",
      "ZONE2_GURUKUL_KANGRI_CAMPUS",
      "ZONE2_GATE_NO_6",
      "ZONE2_GURUKUL_CAMPUS",
    ],
    ZONE3: ["ZONE3_SLAGE_FARM", "ZONE3_JAL_NIGAM"],
    ZONE4: ["ZONE4_DR_AMBEDKAR_PARK", "ZONE4_ACHIVER_HOMES", "ZONE4_RAMLEELA"],
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
    setStation("");
  };

  const promise_res = useCheckWorkingURL();
  const [Base_Url, setBase_Url] = useState("");
  promise_res.then((promiseResult) => {
    setBase_Url(promiseResult);
  });
  // const Base_Url = "http://59.99.154.95:5984/";
  const divisionOptions = ["ZONE1", "ZONE2", "ZONE3", "ZONE4"];
  const stationOptions = division ? stationsByDivision[division] : [];
  const ZONE1_S1 = useAPi(Base_Url + "vtlzone1/101");
  const ZONE1_S2 = useAPi(Base_Url + "vtlzone1/102");
  const ZONE2_S1 = useAPi(Base_Url + "vtlzone2/101");
  const ZONE2_S2 = useAPi(Base_Url + "vtlzone2/102");
  const ZONE2_S3 = useAPi(Base_Url + "vtlzone2/103");
  const ZONE2_S4 = useAPi(Base_Url + "vtlzone2/104");
  const ZONE3_S1 = useAPi(Base_Url + "vtlzone3/101");
  const ZONE3_S2 = useAPi(Base_Url + "vtlzone3/102");
  const ZONE4_S1 = useAPi(Base_Url + "vtlzone4/101");
  const ZONE4_S2 = useAPi(Base_Url + "vtlzone4/102");
  const ZONE4_S3 = useAPi(Base_Url + "vtlzone4/103");

  var [date, setDate] = useState(new Date());

  const [CurrentPump, Set_Pump] = useState(0);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [PutModalOpen, SetPutModalOpen] = useState(false);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
      console.log(date);
    };
  });

  useEffect(() => {
    CheckChange();
  }, [date, division, station]);

  const CheckChange = () => {
    switch (true) {
      case division === "ZONE1" && station === "ZONE1_GDHAI VALI GALI":
        console.log("ZONE1_GDHAI VALI GALI");
        ZONE1_S1.getReq();
        DisplayData1(ZONE1_S1.APIdata);

        Set_Pump(1);
        break;

      //KAHRAKMAFF
      case division === "ZONE1" && station === "ZONE1_MATRANCHAL":
        ZONE1_S2.getReq();
        DisplayData1(ZONE1_S2.APIdata);
        Set_Pump(2);

        break;
      case division === "ZONE2" && station === "ZONE2_SIDHESWAR":
        ZONE2_S1.getReq();
        DisplayData1(ZONE2_S1.APIdata);
        Set_Pump(3);
        break;
      case division === "ZONE2" && station === "ZONE2_GURUKUL_KANGRI_CAMPUS":
        ZONE2_S2.getReq();
        DisplayData1(ZONE2_S2.APIdata);
        Set_Pump(4);
        break;

      case division === "ZONE2" && station === "ZONE2_GATE_NO_6":
        ZONE2_S3.getReq();
        DisplayData1(ZONE2_S3.APIdata);
        Set_Pump(5);
        break;

      case division === "ZONE2" && station === "ZONE2_GURUKUL_CAMPUS":
        ZONE2_S4.getReq();
        DisplayData1(ZONE2_S4.APIdata);
        Set_Pump(6);
        break;

      case division === "ZONE3" && station === "ZONE3_SLAGE_FARM":
        ZONE3_S1.getReq();
        DisplayData1(ZONE3_S1.APIdata);
        Set_Pump(7);
        break;

      case division === "ZONE3" && station === "ZONE3_JAL_NIGAM":
        ZONE3_S2.getReq();
        DisplayData1(ZONE3_S2.APIdata);
        Set_Pump(8);
        break;

      case division === "ZONE4" && station === "ZONE4_DR_AMBEDKAR_PARK":
        ZONE4_S1.getReq();
        DisplayData1(ZONE4_S1.APIdata);
        Set_Pump(9);
        break;
      case division === "ZONE4" && station === "ZONE4_ACHIVER_HOMES":
        ZONE4_S2.getReq();
        DisplayData1(ZONE4_S2.APIdata);
        Set_Pump(10);
        break;

      case division === "ZONE4" && station === "ZONE4_RAMLEELA":
        ZONE4_S3.getReq();
        DisplayData1(ZONE4_S3.APIdata);
        Set_Pump(11);
        break;
    }
  };
  const handleClick = () => {
    window.open("http://59.99.154.95:3050/Reports/browse/JAL_SANSTHAN_REPORTS");
  };

  // DisplayData(JsonData1);

  return (
    <>
      <div className="">
        <div className="">
          <div className="Instant-dropdown-area">
            <div className="Instant-division">
              <label for="division">Division :-</label>
              <select value={division} onChange={handleDivisionChange}>
                <option value="">Select Division</option>
                {divisionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="instant-station">
              <label for="station">Station Name :-</label>
              <select
                value={station}
                onChange={(event) => setStation(event.target.value)}
              >
                <option value="">Select Station</option>
                {stationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="last-update">
              <span>Last Updated :-{allValues.tag34}</span>
              <span>Date :- {allValues.tag33}</span>
            </div>
          </div>
          <div className="instant-area">
            <div className="electrical-data">
              <table id="electrical">
                <caption>Electrical Data</caption>
                <tr>
                  <td>Voltage (R-Y)</td>
                  <td>{allValues.tag0}</td>
                </tr>
                <tr>
                  <td>Voltage (Y-B)</td>
                  <td>{allValues.tag1}</td>
                </tr>
                <tr>
                  <td>Voltage (B-R)</td>
                  <td>{allValues.tag2}</td>
                </tr>
                <tr>
                  <td>Current (R-Phase)</td>
                  <td>{allValues.tag3}</td>
                </tr>
                <tr>
                  <td>Current (Y-Phase)</td>
                  <td>{allValues.tag4}</td>
                </tr>
                <tr>
                  <td>Current (B-Phase)</td>
                  <td>{allValues.tag5}</td>
                </tr>
                <tr>
                  <td>Frequency</td>
                  <td>{allValues.tag6}</td>
                </tr>
                <tr>
                  <td>Power Factor</td>
                  <td>{allValues.tag7}</td>
                </tr>
                <tr>
                  <td>Power (K.W.)</td>
                  <td>{allValues.tag8}</td>
                </tr>
                <tr>
                  <td>Energy (Kwh)</td>
                  <td>{allValues.tag9}</td>
                </tr>
              </table>
            </div>
            <div className="Tubewell-status">
              <table id="electrical">
                <caption>TubeWell Status</caption>
                <tr>
                  <td>Operating Mode</td>
                  <td>{allValues.tag10}</td>
                </tr>
                <tr>
                  <td>Power on Hours</td>
                  <td>{allValues.tag11}</td>
                </tr>
                <tr>
                  <td>Pump Status</td>
                  <td>{allValues.tag12}</td>
                </tr>
                <tr>
                  <td>Pump Run Hours</td>
                  <td>{allValues.tag13}</td>
                </tr>
              </table>
            </div>
            <div className="TW">
              <table id="electrical">
                <caption>TW Operating Parameter's</caption>
                <tr>
                  <td>Maximum voltage</td>
                  <td>{allValues.tag14}</td>
                </tr>
                <tr>
                  <td>Minimum voltage</td>
                  <td>{allValues.tag15}</td>
                </tr>
                <tr>
                  <td>Maximum current</td>
                  <td>{allValues.tag16}</td>
                </tr>
                <tr>
                  <td>Minimum current</td>
                  <td>{allValues.tag17}</td>
                </tr>
                <tr>
                  <td>Unbalance in currenT</td>
                  <td>{allValues.tag18}</td>
                </tr>
              </table>
            </div>
            <div className="Schedule">
              <table id="Schedule">
                <caption>Tubewell Operating Schedule</caption>
                <tr>
                  <td>1st On Time</td>
                  <td>{allValues.tag19}</td>
                  <td>1st Off Time</td>
                  <td>{allValues.tag20}</td>
                </tr>
                <tr>
                  <td>2nd On Time</td>
                  <td>{allValues.tag21}</td>
                  <td>2nd Off Time</td>
                  <td>{allValues.tag22}</td>
                </tr>
                <tr>
                  <td>3rd On Time</td>
                  <td>{allValues.tag23}</td>
                  <td>3rd Off Time</td>
                  <td>{allValues.tag24}</td>
                </tr>
              </table>
            </div>
            <div className="Process">
              <table id="Process">
                <caption>Process Data</caption>
                <tr>
                  <td>Pump Discharge (m3/h)</td>
                  <td>{allValues.tag32}</td>
                  <td>Pump Total Discharge Today (m3)</td>
                  <td>{allValues.tag26}</td>
                </tr>
                <tr>
                  <td>{division} Tank Discharge (m3/h)</td>
                  <td>{allValues.tag30}</td>
                  <td>{division} Tank Total Discharge Today (m3)</td>
                  <td>{allValues.tag28}</td>
                </tr>
              </table>
            </div>

            <span className="instant-data-point1">
              {" "}
              {allValues.tag27} kg/cm2
            </span>
            <span className="instant-data-point2"> {allValues.tag32} m3/h</span>
            <span className="instant-data-point3">{allValues.tag31} m</span>
            <span className="instant-data-point4"> {allValues.tag35} m</span>
            <span className="instant-data-point5"> {allValues.tag30} m3/h</span>
            <span className="instant-data-point6"> CLOSE</span>
            <span className="instant-data-point7"> OPEN </span>
          </div>
          <div className="instant-btn-group">
            <Link to="/first">
              <button>Zone wise pressure</button>
            </Link>
          </div>
          <CreateNewAccountModal
            cpump={CurrentPump}
            open={createModalOpen}
            onClose={() => setCreateModalOpen(false)}
          />
        </div>
        <div></div>
        <FormModal
          open={PutModalOpen}
          onClose={() => SetPutModalOpen(false)}
          initialvalues={initVal}
          division={division}
          station={station}
          pump_id={CurrentPump}
          title="TW PARAMETER"
          btnSubmitTxt={"SAVE"}
          Base_Url={Base_Url}
        />
              <div className="instant-Footer">
        <p className="instant-Footer-text">
          Design And Devlop By - Shetal Enterprises 18 Cross 2B Tapovan Enclave
          Raipur Road, Dehradun.
        </p>
      </div>
      </div>

    </>
  );
}

const CreateNewAccountModal = ({ open, columns, onClose, cpump }) => {
  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center"> Divison {cpump}</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            <TextField key={1} label={"Max Current"} name={"Max Current"} />
            <TextField key={2} label={"Max Voltage"} name={"Max Voltage"} />
            <TextField key={3} label={"1st ON Time"} name={"Time"} />
            <TextField key={3} label={"1st Off Time"} name={"Time"} />
            <TextField key={3} label={"2nd ON Time"} name={"Time"} />
            <TextField key={3} label={"2nd Off Time"} name={"Time"} />
            <TextField key={3} label={"3rd ON Time"} name={"Time"} />
            <TextField key={3} label={"3rd Off Time"} name={"Time"} />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

function useAPi(url) {
  const [APIdata, setData] = useState({});

  useEffect(() => {
    getReq();
  }, []);

  const getReq = async () => {
    const response = await axios.get(url, {
      auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      },
    });
    setData(response.data);
    console.log("Get APIdata activated1");
    console.log(response.data);
  };

  const putReq = (id, put_data) => {
    //axios.put(`${URL}${id}/`,put_data)
    axios.put(`${URL}${id}/`, put_data);
    getReq();
    console.log("Put Function activated");
    console.log(`${URL}${id}/`);
    console.log(put_data);
  };

  return { APIdata, getReq, putReq };
}
function Update_Tw_Data(url, dbName, pump_id) {
  const data = {
    B_Max_CURRENT: "3",
    B_Max_VOLTAGE: "403",
    FIRST_OFF_TIME: "12",
    FIRST_ON_TIME: "11",
    R_Max_CURRENT: "1",
    R_Max_VOLTAGE: "401",
    SECOND_OFF_TIME: "14",
    SECOND_ON_TIME: "13",
    THIRD_OFF_TIME: "16",
    THIRD_ON_TIME: "15",
    Y_Max_CURRENT: "2",
    Y_Max_VOLTAGE: "402",
  };
  axios
    .put(
      `${url}${dbName}/${pump_id}`,
      {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
      },
      data
    )
    .then((response) => {
      console.log("Document updated successfully");
    })
    .catch((error) => {
      console.error("Error updating document:", error);
    });
}

/******************** PUMP SEETING ****************/

const validationSchema = Yup.object({
  // form Validation for Form Fields.
  R_Max_CURRENT: Yup.number().min(0).max(120).required("R PHASE MAX CURRENT"),
  Y_Max_CURRENT: Yup.number().min(0).max(120).required("Y PHASE MAX CURRENT"),
  B_Max_CURRENT: Yup.number().min(0).max(120).required("B PHASE MAX CURRENT"),
  R_Max_VOLTAGE: Yup.number().min(400).max(450).required("R PHASE MAX VOLTAGE"),
  Y_Max_VOLTAGE: Yup.number().min(400).max(450).required("Y PHASE MAX VOLTAGE"),
  B_Max_VOLTAGE: Yup.number().min(400).max(450).required("B PHASE MAX VOLTAGE"),
  FIRST_ON_TIME: Yup.number().min(0).max(23).required("FIRST ON TIME"),
  FIRST_OFF_TIME: Yup.number().min(0).max(23).required("FIRST OFF TIME"),
  SECOND_ON_TIME: Yup.number().min(0).max(23).required("SECOND ON TIME"),
  SECOND_OFF_TIME: Yup.number().min(0).max(23).required("SECOND OFF TIME"),
  THIRD_ON_TIME: Yup.number().min(0).max(23).required("THIRD ON TIME"),
  THIRD_OFF_TIME: Yup.number().min(0).max(23).required("THIRD OFF TIME"),
});

const initVal = {
  R_Max_CURRENT: "", // R Phase MAX Current
  Y_Max_CURRENT: "", //Y Phase MAX Current
  B_Max_CURRENT: "", // B Phase MAX Current
  R_Max_VOLTAGE: "", //R Phase MAX VOLTAGE
  Y_Max_VOLTAGE: "", //Y Phase MAX VOLTAGE
  B_Max_VOLTAGE: "", //B Phase MAX VOLTAGE
  FIRST_ON_TIME: "", //FIRST_ON_TIME
  FIRST_OFF_TIME: "", //FIRST_OFF_TIME
  SECOND_ON_TIME: "", //SECOND_ON_TIME
  SECOND_OFF_TIME: "", //SECOND_OFF_TIME
  THIRD_ON_TIME: "", //THIRD_ON_TIME
  THIRD_OFF_TIME: "", //THIRD_OFF_TIME
};

//TemplateTable of creating a mui dialog modal for Adding Data in Database
const FormModal = ({
  open,
  onClose,
  initialvalues,
  title,
  division,
  station,
  btnSubmitTxt,
  Base_Url,
  pump_id,
}) => {
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      Update_Tw_Data(Base_Url, "tw_config", pump_id);
      alert(JSON.stringify(values, null, 2));
      //dataSubmit(values);
      onClose();
      //UpperCaseSubmit(values)
    },
  });

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">
        {title} {division} ({station})
      </DialogTitle>
      <DialogContent>
        <form>
          <Stack
            sx={{
              m: 1,
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "0.5rem",
            }}
          >
            <TextField
              fullWidth
              id="R_Max_CURRENT"
              name="R_Max_CURRENT"
              label={
                (formik.touched.R_Max_CURRENT && formik.errors.R_Max_CURRENT) ||
                "R_Max_CURRENT"
              }
              size="small"
              value={formik.values.R_Max_CURRENT}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.R_Max_CURRENT &&
                Boolean(formik.errors.R_Max_CURRENT)
              }
              //helperText={formik.touched.Name && formik.errors.Name}
              //sx={{mt:1}}
            />
            <TextField
              fullWidth
              id="Y_Max_CURRENT"
              name="Y_Max_CURRENT"
              label={
                (formik.touched.Y_Max_CURRENT && formik.errors.Y_Max_CURRENT) ||
                "Y_Max_CURRENT"
              }
              size="small"
              value={formik.values.Y_Max_CURRENT}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.Y_Max_CURRENT &&
                Boolean(formik.errors.Y_Max_CURRENT)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="B_Max_CURRENT"
              name="B_Max_CURRENT"
              label={
                (formik.touched.B_Max_CURRENT && formik.errors.B_Max_CURRENT) ||
                "B_Max_CURRENT"
              }
              size="small"
              value={formik.values.B_Max_CURRENT}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.B_Max_CURRENT &&
                Boolean(formik.errors.B_Max_CURRENT)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="R_Max_VOLTAGE"
              name="R_Max_VOLTAGE"
              label={
                (formik.touched.R_Max_VOLTAGE && formik.errors.R_Max_VOLTAGE) ||
                "R_Max_VOLTAGE"
              }
              size="small"
              value={formik.values.R_Max_VOLTAGE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.R_Max_VOLTAGE &&
                Boolean(formik.errors.R_Max_VOLTAGE)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />

            <TextField
              fullWidth
              id="Y_Max_VOLTAGE"
              name="Y_Max_VOLTAGE"
              label={
                (formik.touched.Y_Max_VOLTAGE && formik.errors.Y_Max_VOLTAGE) ||
                "Y_Max_VOLTAGE"
              }
              size="small"
              value={formik.values.Y_Max_VOLTAGE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.Y_Max_VOLTAGE &&
                Boolean(formik.errors.Y_Max_VOLTAGE)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />

            <TextField
              fullWidth
              id="B_Max_VOLTAGE"
              name="B_Max_VOLTAGE"
              label={
                (formik.touched.B_Max_VOLTAGE && formik.errors.B_Max_VOLTAGE) ||
                "B_Max_VOLTAGE"
              }
              size="small"
              value={formik.values.B_Max_VOLTAGE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.B_Max_VOLTAGE &&
                Boolean(formik.errors.B_Max_VOLTAGE)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="FIRST_ON_TIME"
              name="FIRST_ON_TIME"
              label={
                (formik.touched.FIRST_ON_TIME && formik.errors.FIRST_ON_TIME) ||
                "FIRST_ON_TIME"
              }
              size="small"
              value={formik.values.FIRST_ON_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.FIRST_ON_TIME &&
                Boolean(formik.errors.FIRST_ON_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="FIRST_OFF_TIME"
              name="FIRST_OFF_TIME"
              label={
                (formik.touched.FIRST_OFF_TIME &&
                  formik.errors.FIRST_OFF_TIME) ||
                "FIRST_OFF_TIME"
              }
              size="small"
              value={formik.values.FIRST_OFF_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.FIRST_OFF_TIME &&
                Boolean(formik.errors.FIRST_OFF_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="SECOND_ON_TIME"
              name="SECOND_ON_TIME"
              label={
                (formik.touched.SECOND_ON_TIME &&
                  formik.errors.SECOND_ON_TIME) ||
                "SECOND_ON_TIME"
              }
              size="small"
              value={formik.values.SECOND_ON_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.SECOND_ON_TIME &&
                Boolean(formik.errors.SECOND_ON_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="SECOND_OFF_TIME"
              name="SECOND_OFF_TIME"
              label={
                (formik.touched.SECOND_OFF_TIME &&
                  formik.errors.SECOND_OFF_TIME) ||
                "SECOND_OFF_TIME"
              }
              size="small"
              value={formik.values.SECOND_OFF_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.SECOND_OFF_TIME &&
                Boolean(formik.errors.SECOND_OFF_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="THIRD_ON_TIME"
              name="THIRD_ON_TIME"
              label={
                (formik.touched.THIRD_ON_TIME && formik.errors.THIRD_ON_TIME) ||
                "THIRD_ON_TIME"
              }
              size="small"
              value={formik.values.THIRD_ON_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.THIRD_ON_TIME &&
                Boolean(formik.errors.THIRD_ON_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
            <TextField
              fullWidth
              id="THIRD_OFF_TIME"
              name="THIRD_OFF_TIME"
              label={
                (formik.touched.THIRD_OFF_TIME &&
                  formik.errors.THIRD_OFF_TIME) ||
                "THIRD_OFF_TIME"
              }
              size="small"
              value={formik.values.THIRD_OFF_TIME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.THIRD_OFF_TIME &&
                Boolean(formik.errors.THIRD_OFF_TIME)
              }
              //helperText={formik.touched.Code && formik.errors.Code}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem", justifyContent: "center" }}>
        <Button
          variant="contained"
          type="submit"
          onClick={formik.handleSubmit}
          endIcon={<Save />}
          sx={{ width: "150px" }}
        >
          {btnSubmitTxt}
        </Button>
        <Button
          onClick={formik.handleReset}
          variant="contained"
          endIcon={<FormatClear />}
          sx={{ width: "150px" }}
        >
          Reset
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          endIcon={<Cancel />}
          sx={{ width: "150px" }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Instant;
