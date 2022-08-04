import React from "react";
import { Box, Title, Text, ScrollView, Cover, Button } from "../../../../components"
import { Item, ListItems, PaymentInfo } from "./styles";

const array = [
	{ id: 0, product: "Stripess Shirt", quantity: 3, size: "XL", price: 33, url: "https://cf.shopee.com.br/file/cefbb53e44854737519d52cebab7f17f" },
	{ id: 1, product: "Tuxedo Short", quantity: 1, size: "XL", price: 14, url: "https://images-americanas.b2w.io/produtos/4705474071/imagens/conjunto-plus-size-com-cinto-moda-plus-size-roupas-femininas/4782542330_1_large.jpg" },
	{ id: 2, product: "Dress Viol", quantity: 3, size: "P", price: 12, url: "https://blog.keydesign.com.br/wp-content/uploads/2018/12/estilo-basico-masculino.jpg" },
]

export function CartComponent() {
	return (
		<Box hasPadding mt="15px" height="auto">
			<Title variant="small" color="dark">Order number is 3139189</Title>
			<ListItems>
				{array?.map((item) => (
					<Item key={item.id}>
						<Cover image={item.url} width="100px" height="100px" radius="5px" />
						<Box style={{ marginLeft: 20}}>
							<Box row width="100%" justify="space-between" align="center">
								<Text color="dark" variant="big">{item.product}</Text>
								<Text color="dark" fontWeight="light">${item.price}</Text>
							</Box>
							<Box>
								<Text color="dark">Size: <Text>{item.size}</Text></Text>
								<Text color="dark">Quantity: <Text>{item.quantity}</Text></Text>
							</Box>
						</Box>
					</Item>
				))}
			</ListItems>
			<PaymentInfo width="100%">
					<Box row width="100%" justify="space-between" height="auto" mt="5px">
							<Text variant="big" color="dark">Order:</Text>
							<Text variant="big" color="dark">$455.00</Text>
					</Box>
					<Box row width="100%" justify="space-between" height="auto" mt="5px">
							<Text variant="big" color="dark">Discount:</Text>
							<Text variant="big" color="dark">-$44.50</Text>
					</Box>
					<Box row width="100%" justify="space-between" height="auto" mt="5px">
							<Text variant="big" color="dark">Delivery:</Text>
							<Text variant="big" color="dark">$10.00</Text>
					</Box>
					<Box row width="100%" justify="space-between" height="auto" mt="5px" >
							<Text variant="big" color="black">Total order:</Text>
							<Text variant="big" color="dark">$410.50</Text>
					</Box>
					<Button background="primary" width="100%" mt="40px"><Text color="light">Place order</Text></Button>
			</PaymentInfo>
		</Box>
	)
}