
import testimonial_1 from  '../assets/testimonials-1.jpg'
import testimonial_2 from  '../assets/testimonials-2.jpg'
import testimonial_3 from  '../assets/testimonials-3.jpg'

const Heroic_section_6 =()=>
{
return(
    <>
<div className="container_fluid heroic_section_6">

<h4 className="text">What People Are Saying....</h4>

<div className="container-fluid heroic_section_txt">
    <div className="row">
<div className="col-md-4">
    <div className='testimonial'>
<img className='testi-image' src={testimonial_1 } alt="" />
<h6>Margaret E.</h6>
<p style={{fontSize:"small"}}>"This is fantastic"! Thanks So Much Guyz</p>
</div>
</div>

<div className="col-md-4">
    <div className='testimonial2'>
<img className='testi-image2' src={testimonial_2 } alt="" />
<h6>Fred S.</h6>
<p style={{fontSize:"small"}}> "Bootstrap is amazing .I've been using it to create lot's of super nice landing pages!"</p>

</div>

</div>

<div className="col-md-4">
    <div className='testimonial3'>
<img className='testi-image3' src={testimonial_3 } alt="" />
<h6>Sarah W.</h6>
<p style={{fontSize:"small"}}>" Thanks So Much for making these free resources available to us"</p>

</div>

</div>
    </div>
    
</div>

</div>
</>
)
}

export {Heroic_section_6}