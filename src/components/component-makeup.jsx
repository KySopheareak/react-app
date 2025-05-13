import "../components/component-makeup.css";

const ComponentMakeUp = () => {
  return (
    <div className="m-container bg-ligth p-5">
      <div className="interface-container">
        <h1>Write components with</h1>
        <h1 className="mb-5">code and markup</h1>
        <p className="detail-interface">
          React components are JavaScript functions. Want to show some content
        </p>
        <p className="detail-interface">
          conditionally? Use an
          <span className="span_text">if</span>,{" "}
          statement. Displaying a list? Try array
          <span className="span_text"> map()</span>. Learning
        </p>
        <p className="detail-interface">React is learning programming.</p>
      </div>

      <div className="content-container">
        <img className="img-makeup" src="/src/assets/component-makeup.png" alt="component_makeup" />
      </div>
      <div className="interface-container">
        <p className="detail-interface">This markup syntax is called JSX. It is a JavaScript syntax extension popularized by</p>
        <p className="detail-interface">React. Putting JSX markup close to related rendering logic makes React components</p>
        <p className="detail-interface">easy to create, maintain, and delete.</p>
      </div>
    </div>
  );
};

export default ComponentMakeUp;
