import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu';
import Main from './Main/Main';
import s from "./Home.module.scss"

const Home: React.FC = () => {

	return (
		<div className={s.wrapper}>
			<LeftMenu />
			<Main />
		</div>
	)
}

export default Home