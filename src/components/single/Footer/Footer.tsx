import React, { useContext } from 'react'
import s from "./Footer.module.scss"
import { ThemeContext } from '../../../providers/ThemeProvider';

const Footer: React.FC = () => {

	const { toggleTheme } = useContext(ThemeContext)

	return (
		<div className={s.wrapper}>
			<div className={s.left}>
				<span>Online</span>
			</div>
			<div className={s.right}>
				<span
					className={s.clickable}
					onClick={toggleTheme}>
					Switch theme
				</span>
			</div>
		</div>
	)
}

export default Footer