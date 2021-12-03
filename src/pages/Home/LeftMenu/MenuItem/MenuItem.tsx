import React from 'react'
import s from "./MenuItem.module.scss"

interface IMenuItemProps {
	title: string
	lastMessage?: string
	// date: string
	// unreadCount?: number
}

const MenuItem: React.FC<IMenuItemProps> = ({title, lastMessage}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.upper}>
				<div className={s.title}>
					{title}
				</div>
				{/*<div className={s.date}>
					{date}
				</div>*/}
			</div>
			<div className={s.lower}>
				<div className={s.lastMessage}>
					{lastMessage ? lastMessage : "..."}
				</div>
				{/*{ unreadCount && <div className={s.unreadCount}>
					{unreadCount}
				</div> }*/}
			</div>
		</div>
	)
}

export default MenuItem