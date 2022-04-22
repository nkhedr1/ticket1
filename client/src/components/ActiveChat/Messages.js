import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
	const { messages, otherUser, userId } = props;
	let message1 = [...messages];
	message1.sort(function (a, b) {
		return a.id - b.id;
	});
	console.log(message1);

	return (
		<Box>
			{message1.map((message) => {
				const time = moment(message.createdAt).format('h:mm');
				return message.senderId === userId ? (
					<SenderBubble key={message.id} text={message.text} time={time} />
				) : (
					<OtherUserBubble
						key={message.id}
						text={message.text}
						time={time}
						otherUser={otherUser}
					/>
				);
			})}
		</Box>
	);
};

export default Messages;
