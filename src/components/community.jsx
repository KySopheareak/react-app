import "../components/platform.css";
import { Button } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CommunityComponent = () => {
  return (
    <div className="m-container bg-dark p-5">
      <div className="interface-container">
        <h1>Join a community</h1>
        <h1 className="mb-5">of millions</h1>
        <p className="detail-interface">
          You’re not alone. Two million developers from all over the world visit
          the React docs
        </p>
        <p className="detail-interface">
          every month. React is something that people and teams can agree on.
        </p>
      </div>

      <div className="content-container">
        <img src="/src/assets/platform.png" alt="interface" />
      </div>

      <div className="interface-container">
        <p className="detail-interface">
          This is why React is more than a library, an architecture, or even an
          ecosystem. React
        </p>
        <p className="detail-interface">
          is a community. It’s a place where you can ask for help, find
          opportunities, and meet{" "}
        </p>
        <p className="detail-interface">
          new friends. You will meet both developers and designers, beginners
          and experts,
        </p>
        <p className="detail-interface">
          researchers and artists, teachers and students. Our backgrounds may be
          very
        </p>
        <p className="detail-interface">
          different, but React lets us all create user interfaces together.
        </p>
      </div>
      <div className="main-detail">
        <img className="img" src="/src/assets/react.svg" alt="react_logo" />
        <h1 className="title">Welcome to the</h1>
        <h1 className="title">React community</h1>
        <div className="btn-container">
          <Button variant="contained" className="btn-docs">
            <strong>Get Started</strong>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityComponent;
