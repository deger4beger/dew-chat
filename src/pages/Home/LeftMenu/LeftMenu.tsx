import React from 'react'
import s from "./LeftMenu.module.scss"
import MenuItem from './MenuItem/MenuItem';
import { IDialog } from '../../../types/Dialog';

interface ILeftMenuProps {
	data: IDialog[] | undefined
	isLoading?: boolean
	error?: any
}

const LeftMenu: React.FC<ILeftMenuProps> = ({data, isLoading, error}) => {

	return (
		<div className={s.wrapper}>
			{
				data?.map(el => <MenuItem name={el.name} key={el._id} />)
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