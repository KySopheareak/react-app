import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "@mui/icons-material/Search";
import SunnyIcon from '@mui/icons-material/Sunny';
import TranslateIcon from '@mui/icons-material/Translate';
import GitHubIcon from '@mui/icons-material/GitHub';
import MainDetail from "./components/main-detail";
import InterfaceDetail from "./components/detail-interface";

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar bg-light p-3">
          <div className="logo">
            <img src="/src/assets/react.svg" alt="logo" />
            <h5 className="pt-2">React</h5>
            <small className="pt-1">v19.1</small>
          </div>
          <div className="btn-search">
            <div className="main-search">
              <div className="search-icon">
                <Search />
                <h5>Search</h5>
              </div>
              <div className="search-ctrl">
                <div className="ctrl_k">
                  <h6>Ctrl</h6>
                </div>
                <div className="ctrl_k">
                  <h6>K</h6>
                </div>
              </div>
            </div>
            <div className="nav-menu">
              <div className="nav-item">
                <a>Learn</a>
              </div>
              <div className="nav-item">
                <a>Reference</a>
              </div>
              <div className="nav-item">
                <a>Community</a>
              </div>
              <div className="nav-item">
                <a>Blog</a>
              </div>
              <div className="nav-item">
                <div className="icon-btn">
                  <SunnyIcon />
                </div>
              </div>
              <div className="nav-item">
                <div className="icon-btn">
                  <TranslateIcon />
                </div>
              </div>
              <div className="nav-item">
                <div className="icon-btn">
                  <GitHubIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainDetail />
        <InterfaceDetail />
      </div>
    </>
  );
}

export default App;
