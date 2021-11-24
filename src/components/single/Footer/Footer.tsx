import React from 'react'
import s from "./Footer.module.scss"


const Footer: React.FC = () => {

	return (
		<div className={s.wrapper}>
			<div className={s.left}>
				<span>Online</span>
			</div>
			<div className={s.right}>
				<span className={s.clickable}>Switch theme</span>
			</div>
		</div>
	)
}

export default Footer