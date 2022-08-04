import React from 'react';

import { Box } from "..";
import { Post } from './Post';

const array = [
	{
		banner: "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/x9smzea5bxwmvttawony",
		description: "Vamos ganhar essa copaaaa, rapaziada!",
		user_picture: "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg",
		user: "@neymarjr",
		name_user: "Neymar Junior da Silva",
		time: "20 Minutes ago",
	},
	{
		banner: "https://a.espncdn.com/photo/2022/0801/r1042879_1296x518_5-2.jpg",
		description: "Eu e meus parceirossss!",
		user_picture: "https://i.pinimg.com/736x/5d/73/a4/5d73a4c9f2df89ba5dd36daa7ceac550.jpg",
		user: "@neymarjr",
		name_user: "Neymar Junior da Silva",
		time: "20 Minutes ago",
	}
]

export function Posts() {
	return (
		<Box width="100%" style={{ marginTop: -30, marginBottom: 30}}>
			<Box width="100%" vertical style={{ paddingLeft: 20, paddingRight: 20 }}>
				{array?.map((item, index) => (
					<Post data={item} key={index} />
				))}
			</Box>
		</Box>
	)
}