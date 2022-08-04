import { Image, ImageBackground } from "react-native";
import { Box, Cover, Text, Touchable } from "../..";

interface StoryProps {
	banner: string,
	picture_profile: string,
	user: string,
	time: string
}

interface DataProps {
	data: StoryProps
}

export function Story({ data }: DataProps) {
	return (
		<Cover image={data.banner} height="100%" width="150px" radius="10px" style={{ marginRight: 10 }}>
			<Touchable justify="space-between" height="100%" hasPadding width="100%">
				<Cover border="1px solid #FFFFFF" image={data.picture_profile} background="muted" width="50px" height="50px" radius="100%"></Cover>
				<Box height="50px">
					<Text fontWeight="bold" color="light">{data.user}</Text>
					<Text fontWeight="light" color="light">{data.time}</Text>
				</Box>
			</Touchable>
		</Cover>
	)
}