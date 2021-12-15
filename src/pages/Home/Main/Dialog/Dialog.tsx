import React, { useEffect, useState } from 'react'
import s from "./Dialog.module.scss"

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

	return (
		<div>
			Some dialog
		</div>
	)
}

export default Dialog