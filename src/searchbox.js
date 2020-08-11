import React from 'react';

function Searchbox({searchchange}){
	return(
		<div className='pa4'>
			<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='search robots' 
			onChange={searchchange}
			/>
		</div>
		);
}

export default Searchbox;