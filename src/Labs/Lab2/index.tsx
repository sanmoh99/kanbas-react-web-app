import "./index.css";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (optional, if you're using Bootstrap components like modals, tooltips, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./BackgroundColors";
import "./Borders";
import "./ForegroundColors";
import "./Padding";
import "./Margins";
import "./Corners"
import "./Dimensions"
import "./Positions"
import "./Absoluteposition"
import "./Fixedposition"
import "./Zindex"
import "./Float"
import "./GridLayout"
import "./Flex"
import "./ReactIcons"
import "./BootstrapGrids"
import "./ScreenSizeLabel"
import "./BootstrapTables"
import "./BootstrapLists"
import "./BootstrapForms"
import "./BootstrapNavigation"
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders"
import Paddings from "./Padding";
import Margins from "./Margins";
import RoundedCorners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./Positions"
import AbsolutePosition from "./Absoluteposition";
import FixedPosition from "./Fixedposition";
import ZIndex from './Zindex';
import FloatDivs from "./Float";
import GridLayout from './GridLayout';
import FlexLayout from "./Flex"
import ReactIconsSampler from "./ReactIcons"
import BootstrapGrid from "./BootstrapGrids"
import ScreenSizeLabel from "./ScreenSizeLabel"
import StyledTable from "./BootstrapTables"
import FavoriteLists from "./BootstrapLists"
import StyledForm from "./BootstrapForms"
import TabsComponent from "./BootstrapNavigation";
export default function Lab2() {
  return (
    
    <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer to elements in particular
          places in the document
          <p className="wd-selector-3">
            This paragraph's red background is referenced as
            <br />
            .selector-2 .selector3<br />
            meaning the descendant of some ancestor.<br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span><br />
              You can combine these relationships to create specific 
              styles depending on the document structure
          </p>
        </div>
      </div>
      

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Paddings/>
      <Margins/>
      <RoundedCorners/>
      <Dimensions/>
      <RelativePosition/>
      <AbsolutePosition/>
      <FixedPosition/>
      <ZIndex/>
      <FloatDivs/>
      <GridLayout/>
      <FlexLayout/>
      <ReactIconsSampler/>
      <BootstrapGrid/>
      <ScreenSizeLabel/>
      <StyledTable/>
      <FavoriteLists/>
      <StyledForm/>
      <TabsComponent/>
    </div>
    
  );
}