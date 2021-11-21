import React from 'react'
import s from "./Header.module.scss"
import PrivateMenu from './PrivateMenu/PrivateMenu';
import PublicMenu from './PublicMenu/PublicMenu';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
	const isAuth = useAppSelector(state => state.userReducer.isAuth)
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.logo}>
					chat
				</div>
				<div className={s.menu}>
					{ isAuth ? <PrivateMenu /> : <PublicMenu /> }
				</div>
			</div>
		</div>
	)
}

export default Header