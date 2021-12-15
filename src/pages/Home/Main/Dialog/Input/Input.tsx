import React, { useRef, useState } from 'react'
import s from "./Input.module.scss"

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

	return (
		<textarea
			className={s.input}
			value={value}
			onChange={onChange}
			ref={textareaRef}
		/>
	)
}

export default Input