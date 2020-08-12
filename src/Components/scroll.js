import React from 'react';

function Scroll (props) {
	return(
		<div style={{
			overflowY: 'scroll', 
			border: '1px', 
			height:'700px',
			margin:'0 1em 6em 1em',
			padding:'0px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;