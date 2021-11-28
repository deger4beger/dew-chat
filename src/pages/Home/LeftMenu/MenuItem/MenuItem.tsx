import React from 'react'
import s from "./MenuItem.module.scss"

interface IMenuItemProps {
	title: string
	lastMessage: string
	date: string
	unreadCount?: number
}

const MenuItem: React.FC<IMenuItemProps> = ({title, lastMessage, date, unreadCount}) => {
	return (
		<div>
			<div className={s.upper}>
				<div className={s.title}>
					{title}
				</div>
				{unreadCount && <div className={s.date}>
					{date}
				</div>}
			</div>
			<div className={s.lower}>
				<div className={s.lastMessage}>
					{lastMessage}
				</div>
				<div className={s.unreadCount}>
					{unreadCount}
				</div>
			</div>
		</div>
	)
}

export default MenuItem