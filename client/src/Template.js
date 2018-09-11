import React from 'react';

import Header from './Header';
import Slider from './Sliders';
import Footer from './Footer';

export default (props) => (
	<div>
		<Header/>
		<Slider/>
		{props.children}
		<Footer/>
	</div>
);