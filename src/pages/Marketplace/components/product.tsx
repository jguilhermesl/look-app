import React, { useState } from "react";

import { Box, Cover, Title, Text, ScrollView, Button } from "../../../components";
import { Header } from "../../../components/Header";
import { SelectSize, ButtonSize } from "./styles-product"
import Icon from "react-native-vector-icons/Ionicons"

const array = [
	{
		id: 0,
		size: 'XS'
	},
	{
		id: 1,
		size: 'S'
	},
	{
		id: 2,
		size: 'M'
	},
	{
		id: 3,
		size: 'L'
	},
	{
		id: 4,
		size: 'XL'
	},
	{
		id: 5,
		size: 'XXL'
	},
]

interface isActiveProps {
	id: number
}

export function Product() {
	const url = "https://tntsports.com.br/__export/1620999484517/sites/esporteinterativo/img/2021/05/14/camisa-psg.png_561488073.png"
	const [isActive, setIsActive] = useState<number>(0)

	return (
		<>
			<Header
				title="Camisa PSG"
				actionLeft="goBack"
				iconLeft={<Icon name="chevron-back" size={30} color="#000" />}
				iconRight={<Icon name="cart-outline" size={30} color="#000" />} />
			<ScrollView>
				<Box background="black" width="100%" height="440px" style={{ position: "relative" }}>
					<Cover image={url} width="100%" height="100%" style={{ opacity: 0.7 }} />
					<Title color="light" fontWeight="bold" variant="big" style={{ position: "absolute", bottom: 20, left: 20 }}>$1080</Title>
				</Box>
				<Box hasPadding height="210px">
					<Text color="dark" variant="big">Shirts</Text>
					<Title color="dark" mt="20px">Camisa PSG Jogador Spring 2020/2021</Title>
					<Text fontWeight="normal" variant="normal" mt="20px">Enjoy the beauty tournament shirt.
						This item will fit your body and warm you up all over and during spring. And over and over again, this in the text.
					</Text>
				</Box>
				<SelectSize>
					<Text color="dark" variant="big">Size</Text>
					<Box row justify="space-between" width="100%" height="auto" mt="20px">
						{array?.map( item => (
							<ButtonSize onPress={() => setIsActive(item.id)} isActive={isActive === item.id ? true : false}>
								<Text color={isActive === item.id ? "light" : "black" }>{item.size}</Text>
							</ButtonSize>
						))}
					</Box>
					<Button width="100%" background="primary" mt="20px" mb="20px">
						<Text color="light">Add to cart</Text>
					</Button>
				</SelectSize>
			</ScrollView>
		</>
	)
}