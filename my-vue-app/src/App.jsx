import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Heroic_section } from "./Components/Components";
import { Heroic_section_1 } from "./Components/Heroic-section-1";
import { Heroic_section_2 } from "./Components/Heroic_section_2";
import { Heroic_section_3 } from "./Components/Heroic_section_3";
import { Heroic_section_4 } from "./Components/Heroic_section_4";
import { Heroic_section_5} from "./Components/Heroic-section-5";
import { Heroic_section_6} from "./Components/Heroic_section_6";
import { Heroic_section_7} from "./Components/Heroic_section_7";
import { Heroic_section_8 } from "./Components/Heroic_section_8";

const App = ()=>{
return(
<>
<div className="nav">
<div className="container-fluid ">
  <div className="row">
    <div className="col-md-6 d-flex justify-content-center">
  <h1>logo</h1>
</div>

<div className="col-md-6 d-flex justify-content-center">
  <button className="bg-primary button">Sign Up</button>
</div>
</div>
</div>
</div>
<Heroic_section_1/>
<Heroic_section_2/>
<Heroic_section_3/>
<Heroic_section_4/>
<Heroic_section_5/>
<Heroic_section_6/>
<Heroic_section_7/>
<Heroic_section_8/>

</>


)
  

}
export default App
