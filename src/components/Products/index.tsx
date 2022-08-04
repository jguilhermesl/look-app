import React from "react";
import { Box, ScrollView, Title } from "..";

import { CardProduct } from "./CardProduct";

const array = [
	{
		banner: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/592/products/fc3d23901-fe5de97f00c562e36715956324282409-1024-1024.jpg",
		product: "Camisa Sport Recife 2021/2022",
		description: "Camisa player do Sport Recife 2021/2022",
		price: 219.90,
		brand: "Umbro"
	},
	{
		banner: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/592/products/fc3d23901-fe5de97f00c562e36715956324282409-1024-1024.jpg",
		product: "Camisa Sport Recife 2021/2022",
		description: "Camisa player do Sport Recife 2021/2022",
		price: 219.90,
		brand: "Umbro"
	},
	{
		banner: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/592/products/fc3d23901-fe5de97f00c562e36715956324282409-1024-1024.jpg",
		product: "Camisa Sport Recife 2021/2022",
		description: "Camisa player do Sport Recife 2021/2022",
		price: 219.90,
		brand: "Umbro"
	},
	{
		banner: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/592/products/fc3d23901-fe5de97f00c562e36715956324282409-1024-1024.jpg",
		product: "Camisa Sport Recife 2021/2022",
		description: "Camisa player do Sport Recife 2021/2022",
		price: 219.90,
		brand: "Umbro"
	},
	{
		banner: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/592/products/fc3d23901-fe5de97f00c562e36715956324282409-1024-1024.jpg",
		product: "Camisa Sport Recife 2021/2022",
		description: "Camisa player do Sport Recife 2021/2022",
		price: 219.90,
		brand: "Umbro"
	},

]

export function Products() {
	return (
		<ScrollView hasPadding>
			{array?.map( (item, index) => (
				<CardProduct key={index} data={item} />
			))}
		</ScrollView>
	)
}