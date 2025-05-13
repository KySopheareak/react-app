import "../components/platform.css";
import { Button } from "@mui/material";
import DevicesIcon from '@mui/icons-material/Devices';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ComponentPlatForm = () => {
  return (
    <div className="m-container bg-dark p-5">
      <div className="interface-container">
        <h1>Use the best from every</h1>
        <h1 className="mb-5">platform</h1>
        <p className="detail-interface">
          People love web and native apps for different reasons. React lets you build both web
        </p>
        <p className="detail-interface">
          apps and native apps using the same skills. It leans upon each platform’s unique
        </p>
        <p className="detail-interface">
          strengths to let your interfaces feel just right on every platform.
        </p>
      </div>

      <div className="content-container">
        <img src="/src/assets/platform.png" alt="interface" />
      </div>
      <div className="interface-container">
        <p className="detail-interface">With React, you can be a web and a native developer. Your team can ship to many</p>
        <p className="detail-interface">platforms without sacrificing the user experience. Your organization can bridge the</p>
        <p className="detail-interface">platform silos, and form teams that own entire features end-to-end.</p>
      </div>
      <div className="btn-container">
        <Button variant="outlined" className="btn-interactivity" startIcon={<DevicesIcon />} endIcon={<ArrowForwardIosIcon />}>
          <strong>Build for native platforms</strong>
        </Button>
      </div>
    </div>
  );
};

export default ComponentPlatForm;
