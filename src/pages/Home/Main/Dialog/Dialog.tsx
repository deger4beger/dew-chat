import React, { useEffect, useState } from 'react'
import s from "./Dialog.module.scss"
import Input from './Input/Input';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import getDialogId from '../../../../helpers/getDialogId';
import { useAppSelector } from '../../../../hooks/redux';
import { IMessage } from '../../../../types/Message';

interface IDialogProps {
	selectedUser: string
}

const Dialog: React.FC<IDialogProps> = ({selectedUser}) => {

	const [socket, setSocket] = useState<WebSocket | null>(null)
	const [messages, setMessages] = useState<IMessage[]>([])

	const myId = useAppSelector(state => state.userReducer.userData._id)

	useEffect(() => {

		if (socket) {
			socket.close()
			setMessages([])
		}

		const ws: WebSocket = new WebSocket(
			`ws://dew-chat.herokuapp.com/ws/${getDialogId(myId as string, selectedUser)}`
		)

		ws.onopen = () => {
		  	ws.send(JSON.stringify({
		  		current: myId,
		  		interlocutor: selectedUser
		  	}))
		}

		ws.onmessage = (e: MessageEvent) => {
		  	setMessages(prev => [...prev, ...JSON.parse(e.data)])
		}

		setSocket(ws)

		return () => ws?.close()

	}, [selectedUser])

	const onSubmitMessage = (message: string) => {
		if (message.length > 0) {
			socket?.send(message)
		}
	}

	return (
		<div className={s.wrapper}>
			<MessagesBlock
				messages={messages}
			/>
			<Input
				onSubmit={onSubmitMessage}
			/>
		</div>
	)
}

export default Dialog