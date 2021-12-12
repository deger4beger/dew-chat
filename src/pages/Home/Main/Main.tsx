import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import s from "./Main.module.scss"
import { baseSocketURL } from '../../../api/api';

const Main = () => {

	const [messages, setMessages] = useState<any>(null)

	useEffect(() => {

		// const socket = io(baseSocketURL)

		// socket.on("connect", () => {
		// 	console.log("socket connected")
		// })

		// socket.on("message", (message) => {
		// 	console.log(message)
		// })

		// return () => socket.disconnect()

	}, [])

	return (
		<div className={s.wrapper}>
			xzzzzzzzяяя
		</div>
	)
}

export default Main