import React from 'react'
import Slider from '../Atoms/Slider'

function AccordionSlider1({ images, switched, children }) {
	return (
		<section
			className={
				switched ? 'switchable switchable--switch' : 'switchable'
			}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 switchable__text'>
						<ul className='accordion accordion-1'>{children}</ul>
					</div>
					<div className='col-md-6 col-sm-6'>
						<Slider images={images} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccordionSlider1
