import React from 'react'
import s from "./LeftMenu.module.scss"
import MenuItem from './MenuItem/MenuItem';
import { IDialog } from '../../../types/Dialog';

interface ILeftMenuProps {
	data: IDialog[] | undefined
}

const LeftMenu: React.FC<ILeftMenuProps> = ({data}) => {

	return (
		<div className={s.wrapper}>
			{
				data ? data.map(el => <MenuItem name={el.name} key={el._id} />) : "Loading..."
			}
		</div>
	)
}

export default LeftMenu