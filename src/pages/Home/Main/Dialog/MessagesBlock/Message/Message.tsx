import React from 'react'
import cn from "classnames"
import s from "./Message.module.scss"
import { IMessage } from '../../../../../../types/Message';

interface IMessageProps extends IMessage {}

const Message: React.FC<IMessageProps> = ({_id, text, isMine}) => {
	return (
		<div className={cn(s.wrapper, {[s.mine]: isMine})}>
			{ text }
		</div>
	)
}

export default Message