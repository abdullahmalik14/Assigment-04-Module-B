
import showcase_1 from '../assets/bg-showcase-1.jpg'



const Heroic_section_3 =()=>{
    return (
        <>
      <div className="container-fluid heroic-section-3">
        <div className="row">

            <div className="col-md-6">
                <div className='showcase-text1'>
                <h3>Fully Responsive Design</h3>
                <p>When you use a theme created by start bootstrap,you know that the theme will <br />
                look great on any device,Whether it's a phone,tablet or desktop the page <br /> will behave responsively
                </p>
                </div>
            </div>

            <div className="col-md-6">
            <img className='showcase-img' src={showcase_1} alt="" />

            </div>      

        </div>
        
        </div>  
      
        </>
    )
}

export {Heroic_section_3}