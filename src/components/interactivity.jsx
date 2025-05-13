import "../components/interactivity.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CodeIcon from '@mui/icons-material/Code';

const InteractivityComponent = () => {
  return (
    <div className="m-container bg-dark p-5">
      <div className="interface-container">
        <h1>Add interactivity</h1>
        <h1 className="mb-5">wherever you need it</h1>
        <p className="detail-interface">
          React components receive data and return what should appear on the screen. You can
        </p>
        <p className="detail-interface">
          pass them new data in response to an interaction, like when the user types into an
        </p>
        <p className="detail-interface">
          input. React will then update the screen to match the new data.
        </p>
      </div>

      <div className="content-container">
        <img src="/src/assets/interactivity.png" alt="interface" />
      </div>
      <div className="interface-container">
        <p className="detail-interface">You don’t have to build your whole page in React. Add React to your existing HTML</p>
        <p className="detail-interface">page, and render interactive React components anywhere on it.</p>
      </div>
      <div className="btn-container">
        <Button variant="outlined" className="btn-interactivity" startIcon={<CodeIcon />} endIcon={<ArrowForwardIosIcon />}>
          <strong>Add React to your page </strong>
        </Button>
      </div>
    </div>
  );
};

export default InteractivityComponent;
