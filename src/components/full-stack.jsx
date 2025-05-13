import "../components/full-stack.css";
import { Button } from "@mui/material";
import WorkspacesOutlineIcon from '@mui/icons-material/WorkspacesOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ComponentFullStack = () => {
  return (
    <div className="m-container bg-ligth p-5">
      <div className="interface-container">
        <h1>Go full-stack</h1>
        <h1 className="mb-5">with a framework</h1>
        <p className="detail-interface">
          React is a library. It lets you put components together, but it doesn’t prescribe how to
        </p>
        <p className="detail-interface">
          do routing and data fetching. To build an entire app with React, we recommend a full-
        </p>
        <p className="detail-interface">stack React framework like <span className="notify">Next.js</span>  or <span className="notify">Remix</span>.</p>
      </div>

      <div className="content-container">
        <img className="img-makeup" src="/src/assets/full-stack.png" alt="component_makeup" />
      </div>
      <div className="interface-container">
        <p className="detail-interface">React is also an architecture. Frameworks that implement it let you fetch data in</p>
        <p className="detail-interface">asynchronous components that run on the server or even during the build. Read data</p>
        <p className="detail-interface">from a file or a database, and pass it down to your interactive components.</p>
      </div>
      <div className="btn-container">
        <Button variant="outlined" className="btn-fullstack" startIcon={<WorkspacesOutlineIcon />} endIcon={<ArrowForwardIosIcon />}>
          <strong>Get started with a framework</strong>
        </Button>
      </div>
    </div>
  );
};

export default ComponentFullStack;
