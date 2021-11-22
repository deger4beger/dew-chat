import React from 'react'
import s from "./PrivateMenu.module.scss"
import { logout } from "redux/slices/userSlice"
import { useAppDispatch } from 'hooks/redux';

const PrivateMenu = () => {

	const dispatch = useAppDispatch()

	const onLogoutClick = () => {
		dispatch(logout())
	}

	return (
		<div className={s.wrapper} onClick={onLogoutClick}>
			Logout
		</div>
	)
}

export default PrivateMenu