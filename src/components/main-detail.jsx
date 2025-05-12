import "./main-detail.css";
import { Button } from "@mui/material";

const MainDetail = () => {
    return (
        <div className="m-container bg-light">
            <div className="main-detail">
                <img className="img" src="/src/assets/react.svg" alt="react_logo" />
                <h1 className="title">React</h1>
                <p className="detail">The library for web and native user interfaces</p>
                <div className="btn-container">
                    <Button variant="contained" className="btn-docs">
                        <strong>Learn React</strong>
                    </Button>
                    <Button variant="outlined" className="btn-api">
                        <strong>API Reference</strong>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MainDetail;