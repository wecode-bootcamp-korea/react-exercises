/** @format */

import React from 'react';
import './Buttons.scss';

export default function Buttons({ upDate }) {
	return (
		<div className='pageBtn'>
			<button onClick={() => upDate(0)}>1</button>
			<button onClick={() => upDate(1)}>2</button>
			<button onClick={() => upDate(2)}>3</button>
			<button onClick={() => upDate(3)}>4</button>
			<button onClick={() => upDate(4)}>5</button>
		</div>
	);
}
