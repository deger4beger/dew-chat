import React from 'react'
import s from "./LeftMenu.module.scss"
import MenuItem from './MenuItem/MenuItem';
import { IDialog } from '../../../types/Dialog';

interface ILeftMenuProps {
	data: IDialog[] | undefined
	isLoading?: boolean
	error?: any
	selectedUser: string | null
	setSelectedUser: (id: string) => void
}

const LeftMenu: React.FC<ILeftMenuProps> = ({data, isLoading, error, selectedUser, setSelectedUser}) => {

	return (
		<div className={s.wrapper}>
			{
				data?.map(el => {
					return <MenuItem
						name={el.name}
						key={el._id}
						isSelected={el._id === selectedUser}
						onClick={() => setSelectedUser(el._id)}
					/>
				})
			}
			{
				isLoading && "Loading..."
			}
			{
				error && "Some error occured, wait or try to refresh page"
			}
		</div>
	)
}

export default LeftMenu