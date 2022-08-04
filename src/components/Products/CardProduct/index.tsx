import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Cover, Text, Title, Touchable } from "../..";

interface CategoryProps {
	banner: string,
	product: string,
	description: string,
	price: number,
	brand: string
}

interface DataProps {
	data: CategoryProps
}

export function CardProduct({data}: DataProps ) {
	const navigation = useNavigation()

	return (
		<Touchable row width="100%" height="120px" style={{ marginBottom: 30}} onPress={() => navigation.navigate("Product")}>
			<Cover image={data.banner} width="120px" height="120px" radius="10px" />
			<Box height="100%" width="70%" hasPadding>
				<Text variant="big" color="dark">{data.brand}</Text>
				<Title fontWeight="bold" width="100%" color="dark" style={{ fontSize: 15 }}>{data.product}</Title>
				<Box row width="100%" justify="between">
					<Text color="dark">${data.price}</Text>
					<Touchable align="flex-end">
						<Text color="primary">Add to cart</Text>
					</Touchable>
				</Box>
			</Box>
		</Touchable>
	)
}