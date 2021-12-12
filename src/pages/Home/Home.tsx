import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu';
import Main from './Main/Main';
import s from "./Home.module.scss"
import { dialogApi } from '../../api/api';

const Home: React.FC = () => {

	const { data, isLoading, error } = dialogApi.useGetAllDialogsQuery()

	return (
		<div className={s.wrapper}>
			<LeftMenu
				data={data}
				isLoading={isLoading}
				error={error}
			/>
			<Main />
		</div>
	)
}

export default Home