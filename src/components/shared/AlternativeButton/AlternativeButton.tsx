import React from 'react'
import cn from "classnames"
import s from "./AlternativeButton.module.scss"

interface IAlternativeButtonProps {
	onClick: () => void
	disabled?: boolean
	loading?: boolean
	styles?: {}
}

const AlternativeButton: React.FC<IAlternativeButtonProps> = ({onClick, disabled, loading, styles}) => {
	return (
		<div
			onClick={onClick}
			style={styles}
			className={
				cn(
					s.button,
					{
						[s.disabled]: disabled || loading,
					}
				)
			}
		>
			<div className={s.content}>
				➞
			</div>
		</div>
	)
}

export default AlternativeButton