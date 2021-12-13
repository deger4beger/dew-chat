import React, { useEffect, useRef, useState } from 'react'
import io from "socket.io-client";
import s from "./Main.module.scss"

interface IMainProps {
	selectedUser: string | null
}

const Main: React.FC<IMainProps> = React.memo(({selectedUser}) => {

	const [messages, setMessages] = useState<any>(null)
	console.log(selectedUser)
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
		<div className={s.wrapper}>
			xzzzzzzzяяя
		</div>
	)
})

export default Main