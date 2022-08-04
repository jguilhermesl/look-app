import React from "react";
import { Box, Cover, Text, Title, Touchable } from "../..";
import { useNavigation } from "@react-navigation/native";

interface CategoryProps {
	banner: string,
	quantity: number,
	type: string,
}

interface DataProps {
	data: CategoryProps
}

export function Category({ data }: DataProps) {
	const navigation = useNavigation();

	return (
		<Touchable
			justify="center" align="center" background="black" height="190px" fluid radius="10px" 
			style={{ position: 'relative', marginTop: 10 }}
			onPress={() => navigation.navigate("Category", { paramKey: 'Women'}) }>
			<Cover
				align="center"
				justify="center"
				width="100%" height="100%"
				image={data.banner}
				radius="10px"
				style={{ opacity: 0.5, position: 'absolute' }}>
			</Cover>
			<Title color="light" fontWeight="bold" variant="normal">{data.type}</Title>
			<Text color="light">{data.quantity} ITEMS</Text>
		</Touchable>
	)
}