import { Box, Cover, Text, Touchable } from "../..";
import { Actions, ActionsPost, HeaderPost } from "./styles";

import Icon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/SimpleLineIcons"
import { TouchableOpacity } from "react-native";

interface PostProps {
	banner: string,
	description: string,
	user_picture: string,
	user: string,
	name_user: string,
	time: string
}

interface DataProps {
	data: PostProps
}

export function Post({ data }: DataProps) {
	return (
		<Box width="100%" style={{ marginTop: 30 }}>
			<HeaderPost>
				<Cover width="40px" height="40px" radius="100%" image={data.user_picture} />
				<Box style={{ marginLeft: 10 }}>
					<Text color="dark" fontWeight="bold">{data.name_user}</Text>
					<Text color="muted">{data.time}</Text>
				</Box>
				<Touchable row align="center" justify="flex-end" style={{ marginLeft: 'auto' }}>
					<Icon name="ios-ellipsis-horizontal-outline" size={25} />
				</Touchable>
			</HeaderPost>
			<Text color="dark" variant="big" style={{ marginTop: 15 }}>{data.description}</Text>
			<Cover width="100%" height="200px" image={data.banner} style={{ marginTop: 10, marginBottom: 13 }} radius="7px" />
			<ActionsPost>
				<Box justify="flex-start" align="center" row>
					<Cover source={require("../../../assets/marcola.jpg")} width="35px" height="35px" radius="100%" />
					<Cover source={require("../../../assets/debruyne.jpg")} width="35px" height="35px" radius="100%" style={{ marginLeft: -20}} />
					<Cover source={require("../../../assets/messi.jpg")} width="35px" height="35px" radius="100%" style={{ marginLeft: -20}} />
					<Text style={{ marginLeft: 10}}>Liked by 10,023</Text>
				</Box>
				<Actions>
					<TouchableOpacity>
						<IconFont name="heart" size={24} color="#EB001B" style={{ marginRight: 15 }} />
					</TouchableOpacity>
					<TouchableOpacity>
						<IconFont name="bubble" size={24} color="#999999" style={{ marginRight: 15 }} />
					</TouchableOpacity>
					<TouchableOpacity>
						<IconFont name="share" size={24} color="#999999" />
					</TouchableOpacity>
				</Actions>
			</ActionsPost>
		</Box>
	)
};