import React from 'react'
import s from "./LeftMenu.module.scss"
import MenuItem from './MenuItem/MenuItem';

const LeftMenu = () => {

	const testData = [
		{
			title: "Vlad Shokorov",
			date: "2021-11-28, 7:20",
			lastMessage: "wtf man, what the fuck is going on ?",
			unreadCount: 1
		},
		{
			title: "Dmitry Sas",
			date: "2021-11-28, 7:22",
			lastMessage: "wtf man, what the fuck is going on ?",
			unreadCount: 5
		},
		{
			title: "Kochinov Danila",
			date: "2021-11-28, 6:20",
			lastMessage: "wtf man, what the fuck is going on ?",
		}
	]

	return (
		<div className={s.wrapper}>
			{
				testData.map(el => <MenuItem {...el} />)
			}
		</div>
	)
}

export default LeftMenu