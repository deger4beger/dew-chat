import React from 'react'
import s from "./MessagesBlock.module.scss"
import Message from './Message/Message';
import { IMessage } from '../../../../../types/Message';

interface IMessagesBlockProps {
	messages: IMessage[]
}

const MessagesBlock: React.FC<IMessagesBlockProps> = ({messages}) => {

	return (
		<div className={s.wrapper}>
			{
				messages.map((message) => {
					return (
						<Message key={message._id} {...message} />
					)
				})
			}
		</div>
	)
}

export default MessagesBlock