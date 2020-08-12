import React from 'react';

function Searchbox({searchchange}){
	return(
		<div className='pa4'>
			<input 
			style={{padding:'10px 7px 10px 10px'}}
			className='searchbox br2 ba' 
			type='search' 
			placeholder='search robots' 
			onChange={searchchange}
			/>
		</div>
		);
}

export default Searchbox;