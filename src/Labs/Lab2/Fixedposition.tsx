const FixedPosition = () => {
    return (
      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        <p>
          Checkout the blue square that says "Fixed position" stuck all the way on
          the right and halfway down the page. It doesn't scroll with the rest of
          the page. Its position is "Fixed".
        </p>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
      </div>
    );
  };
  
  export default FixedPosition;
  
  // Add this line to prevent the TS1208 error:
  export {};
  