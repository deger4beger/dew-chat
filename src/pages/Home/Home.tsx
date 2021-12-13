import React, { useState } from 'react'
import LeftMenu from './LeftMenu/LeftMenu';
import Main from './Main/Main';
import s from "./Home.module.scss"
import { dialogApi } from '../../api/api';

const Home: React.FC = () => {

	const [ selectedUser, setSelectedUser ] = useState<string | null>(null)
	const { data, isLoading, error } = dialogApi.useGetAllDialogsQuery()

	const setUser = (id: string) => {
		setSelectedUser(id)
	}

	return (
		<div className={s.wrapper}>
			<LeftMenu
				data={data}
				isLoading={isLoading}
				error={error}
				selectedUser={selectedUser}
				setSelectedUser={setUser}
			/>
			<Main selectedUser={selectedUser} />
		</div>
	)
}

export default Home