import React, { useEffect, useState } from 'react'
import s from "./Dialog.module.scss"
import Input from './Input/Input';
import MessagesBlock from './MessagesBlock/MessagesBlock';

interface IDialogProps {
	selectedUser: string
}

const Dialog: React.FC<IDialogProps> = ({selectedUser}) => {

	const [messages, setMessages] = useState<any>(null)

	useEffect(() => {

		// const socket = io(`ws://dew-chat.herokuapp.com/ws/${selectedUser}`) Дерьмище нерабочее ?????????
		// socket.on("connect", () => {
		// 	socket.send("Connected hello")
		// })
		// socket.on("message", (message) => {
		// 	console.log(message)
		// })
		// return () => socket.disconnect()

		const socket = new WebSocket(`ws://dew-chat.herokuapp.com/ws/${selectedUser}`);

		socket.onopen = () => {
		  	socket.send("Connected react")
		}

		socket.onmessage = (e: MessageEvent) => {
		  	console.log(e.data)
		}

		return () => socket.close()

	}, [selectedUser])

	const fakeData = [
		{
			_id: "iiddiqkd",
			text: "HellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooHoooooooooooooooooooooo",
			isMine: false
		},
		{
			_id: "iiddiqkd",
			text: "Hello, how are you ?",
			isMine: true
		}
	]

	const onSubmitMessage = (message: string) => {
		fakeData.unshift({
			_id: "fewfwef",
			text: message,
			isMine: true
		})
	}

	return (
		<div className={s.wrapper}>
			<MessagesBlock
				messages={fakeData}
			/>
			<Input
				onSubmit={onSubmitMessage}
			/>
		</div>
	)
}

export default Dialog