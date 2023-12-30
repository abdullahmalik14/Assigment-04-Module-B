//heroic_section_02
import icon_1 from '../assets/heroic-section-icon-1.png'; 
import icon_2 from '../assets/heroic-section-icon-2.png'; 
import icon_3 from '../assets/heroic-section-icon-3.png'; 

const Heroic_section_2 = ()=>{
    return(
        <>
        
        <div className="container-fluid heroic-section-2">

            <div className="row">
                <div className="col-md-4">
                    <img  src={icon_1} alt="" />
                    <h4>Fully Responsive</h4>
                    <p>This theme will look great on any <br />device,no matter the size</p>

                </div>

                <div className="col-md-4">
                <img  src={icon_2} alt="" />
                    <h4>Bootstrap 5 Ready</h4>
                    <p>Featuring the latest build of the new <br />bootstrap 5 framework!</p>
                </div>

                <div className="col-md-4">
                <img  src={icon_3} alt="" />
                    <h4>Easy To Use</h4>
                    <p>Ready to use with your own content <br />or customize the source file</p>
                </div>

            </div>
        </div>
        
        
        </>
    )
}

export {Heroic_section_2}