import "../components/detail-interface.css";

const InterfaceDetail = () => {
  return (
    <div className="m-container bg-dark p-5">
      <div className="interface-container">
        <h1>Create user interfaces</h1>
        <h1>from components</h1>
        <p className="detail-interface">
          React lets you build user interfaces out of individual pieces called
          components.
        </p>
        <p className="detail-interface">
          Create your own React components like{" "}
          <span className="span_text">Thumbnail</span>,{" "}
          <span className="span_text">LikeButton</span>, and
          <span className="span_text"> Video</span>. Then combine them into
          entire screens, pages, and apps.
        </p>
      </div>

      <div className="content-container">
        <img src="/src/assets/interface.png" alt="interface" />
      </div>
      <div className="interface-container">
        <p className="detail-interface">Whether you work on your own or with thousands of other developers, using React</p>
        <p className="detail-interface">feels the same. It is designed to let you seamlessly combine components written by</p>
        <p className="detail-interface">independent people, teams, and organizations.</p>
      </div>
    </div>
  );
};

export default InterfaceDetail;
