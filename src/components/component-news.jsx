import "../components/component-news.css";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const ComponentNews = () => {

  const news = [
    { id: 1, title: "View Transitions and Activity", date: 'April 23, 2025' },
    { id: 2, title: "React Compiler RC", date: 'April 21, 2025' },
    { id: 2, title: "Sunsetting Create React App", date: 'February 14, 2025' },
    { id: 2, title: "React 19", date: 'December 05, 2024' },
  ];

  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-5">
      <div className="m-container bg-ligth p-5 w-50">
        <div className="news-container">
          <div className="desciption">
            <h1>Upgrade when the</h1>
            <h1 className="mb-5">future is ready</h1>
            <p className="detail-interface">
              React approaches changes with care. Every React commit is tested
              on business-critical surfaces with over a billion users. Over
              100,000 React components at Meta help validate every migration
              strategy.
            </p>
            <p className="detail-interface">
              The React team is always researching how to improve React. Some
              research takes years to pay off. React has a high bar for taking a
              research idea into production. Only proven approaches become a
              part of React.
            </p>
          </div>
          <div className="btn-container">
            <Button variant="outlined" className="btn-readmore" startIcon={<NewspaperIcon />} endIcon={<KeyboardArrowRightIcon />} size="large">
              <strong>Read more React news</strong>
            </Button>
          </div>
        </div>
      </div>
      <div className="m-container bg-ligth p-5 w-50">
          <Button variant="text" className="btn-news" startIcon={<ExpandMoreIcon />} size="large">
            <strong>latest react news</strong>
          </Button>
        <div className="right-container">
          {news.map((item) => (
            <div className="news-card">
                <div>
                  <h1 className="news-title">{item.title}</h1>
                </div>
                <div className="news-date">
                    <NewspaperIcon /> 
                  <p> 
                    {item.date}
                  </p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentNews;
