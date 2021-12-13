import React from 'react'
import cn from "classnames"
import s from "./MenuItem.module.scss"

interface IMenuItemProps {
	name: string
	lastMessage?: string
	isSelected: boolean
	onClick: () => void
	// date: string
	// unreadCount?: number
}

const MenuItem: React.FC<IMenuItemProps> = ({name, lastMessage, onClick, isSelected}) => {
	return (
		<div className={cn(s.wrapper, {[s.selected]: isSelected})} onClick={onClick}>
			<div className={s.upper}>
				<div className={s.title}>
					{name}
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