import React from 'react'
import s from "./AuthTemplate.module.scss"

interface IAuthTemplateProps {
	title: string
	error: string | null
	children: React.ReactNode[] | React.ReactNode
	button: React.ReactNode
}

const AuthTemplate: React.FC<IAuthTemplateProps> = ({title, error, children, button}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				{title}
			</div>
			<div className={s.inputs}>
				{children}
				{error && (
					<div className={s.error}>
						{error}
					</div>
				)}
			</div>
			{button}
		</div>
	)
}

export default AuthTemplate