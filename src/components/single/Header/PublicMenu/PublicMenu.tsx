import React from 'react'
import { useLocation, Link } from "react-router-dom"
import cn from "classnames"
import s from "./PublicMenu.module.scss"

const PublicMenu = () => {
	const { pathname } = useLocation()

	return (
		<div className={s.wrapper}>
			<Link className={cn(s.item, {[s.active]: pathname === "/login"})} to="/login">
				Login
			</Link>
			<div className={s.separator}>
				|
			</div>
			<Link className={cn(s.item, {[s.active]: pathname === "/signup"})} to="/signup">
				Sign up
			</Link>
		</div>
	)
}

export default PublicMenu