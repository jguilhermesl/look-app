import React from "react";
import { Box, Button, Cover, Text, Title } from "../../components";
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";

export default function Congratulations() {
	const navigation = useNavigation();

	return (
		<Box hasPadding justify="center" align="center" fluid>
			<Icon name="checkmark-circle-outline" size={150} />
			<Title mt="30px" mb="10px" variant="big" fontWeight="light">Congratulations!</Title>
			<Text width="50%" align="center">Your items are on the way and should arrive shortly.</Text>
			<Button block background="primary" mt="40px" onPress={() => navigation.navigate("Orders")} >
				<Text color="light">Track your order</Text>
			</Button>
		</Box>
	)
}