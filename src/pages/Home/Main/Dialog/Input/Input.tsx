import React, { useRef, useState } from 'react'
import s from "./Input.module.scss"
import AlternativeButton from '../../../../../components/shared/AlternativeButton/AlternativeButton';

interface IInputProps {
	onSubmit: (message: string) => void
}

const Input: React.FC<IInputProps> = ({onSubmit}) => {

	const [value, setValue] = useState<string>("")
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value)
		if (textareaRef?.current) {
			textareaRef.current.style.height = "auto"
			textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
		}
	}

	const onSendMessage = () => {
		console.log(value)
	}

	return (
		<div className={s.wrapper}>
			<textarea
				rows={1}
				className={s.input}
				value={value}
				onChange={onChange}
				ref={textareaRef}
				placeholder="Write a message..."
			/>
			<div className={s.button}>
				<AlternativeButton
					onClick={onSendMessage}
				/>
			</div>
		</div>
	)
}

export default Input