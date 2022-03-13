/** @format */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from './Components/Card/Card';
import './MonsterDetail.scss';

function MonsterDetail() {
	const [monster, setMonster] = useState({});
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterId}`)
			.then((res) => res.json())
			.then((res) => setMonster(res));
	}, [params.monsterId]);

	const goToMain = () => {
		navigate('/monsters');
	};

	const movePreviousMonster = () => {
		navigate(`/monsters/detail/${Number(params.monsterId) - 1}`);
	};
	const moveNextMonster = () => {
		navigate(`/monsters/detail/${Number(params.monsterId) + 1}`);
	};
	console.log(`${params.monsterId}`);
	return (
		<div className='urlParameters'>
			{monster.name && (
				<>
					<div className='btnWrapper'>
						<button onClick={goToMain}>Back to Monsters List</button>
					</div>
					<Card name={monster.name} id={monster.id} email={monster.email} />
					<div className='btnWrapper'>
						<button onClick={movePreviousMonster}>Previous</button>
						<button onClick={moveNextMonster}>Next</button>
					</div>
				</>
			)}
		</div>
	);
}

export default MonsterDetail;
