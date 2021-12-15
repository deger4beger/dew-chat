import React from 'react'
import s from "./Main.module.scss"
import NotDialog from './NotDialog/NotDialog';
import Dialog from './Dialog/Dialog';

interface IMainProps {
	selectedUser: string | null
}

const Main: React.FC<IMainProps> = React.memo(({selectedUser}) => {

	return (
		<div className={s.wrapper}>
			{
				selectedUser
				? <Dialog selectedUser={selectedUser} />
				: <NotDialog />
			}
		</div>
	)
})

export default Main