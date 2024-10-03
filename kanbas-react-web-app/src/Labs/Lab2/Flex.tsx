const FlexLayout = () => {
    return (
      <div>
        {/* First Flex Section */}
        <div id="wd-css-flex">
          <h2>Flex</h2>
          <div className="wd-flex-row-container">
            <div className="wd-bg-color-yellow">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
            <div className="wd-bg-color-red">Column 3</div>
          </div>
        </div>
  
        {/* Second Flex Section */}
        <div id="wd-css-flex">
          <h2>Flex</h2>
          <div className="wd-flex-row-container">
            <div className="wd-bg-color-yellow">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
            <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
          </div>
        </div>
  
        {/* Third Flex Section */}
        <div id="wd-css-flex">
          <h2>Flex</h2>
          <div className="wd-flex-row-container">
            <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
            <div className="wd-bg-color-blue">Column 2</div>
            <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FlexLayout;
  
  // Add this line to prevent the TS1208 error:
  export {};
  