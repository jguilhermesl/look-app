import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Box, Title, Text, ScrollView, Cover, Button, Touchable, Input } from "../../../../components"
import { DeliveryDetails, PaymentDetails, ShippingAddress } from "./styles";

const array = [
	{ id: 0, product: "Stripess Shirt", quantity: 3, size: "XL", price: 33, url: "https://cf.shopee.com.br/file/cefbb53e44854737519d52cebab7f17f" },
	{ id: 1, product: "Tuxedo Short", quantity: 1, size: "XL", price: 14, url: "https://images-americanas.b2w.io/produtos/4705474071/imagens/conjunto-plus-size-com-cinto-moda-plus-size-roupas-femininas/4782542330_1_large.jpg" },
	{ id: 2, product: "Dress Viol", quantity: 3, size: "P", price: 12, url: "https://blog.keydesign.com.br/wp-content/uploads/2018/12/estilo-basico-masculino.jpg" },
]

export function PaymentComponent() {
	const navigation = useNavigation();

	return (
		<Box hasPadding mt="15px" height="auto">
			<Title variant="small" color="dark">Order number is 3139189</Title>
			<ScrollView width="100%" height="auto" style={{ marginTop: 40 }}>
				<ShippingAddress>
					<Box row align="center" justify="space-between">
						<Title variant="small" style={{ fontSize: 19 }}>Shipping address</Title>
						<Touchable align="flex-end">
							<Text color="primary">Change</Text>
						</Touchable>
					</Box>
					<Box mt="15px">
						<Text color="black" fontWeight="light" variant="normal">Tiana Rosser, 4517 Washington Ave</Text>
						<Text color="black" fontWeight="light" variant="normal">Manchester, Kentucky 39495 United States</Text>
					</Box>
				</ShippingAddress>
				<DeliveryDetails>
					<Box row align="center" justify="space-between" style={{ marginTop: 25 }}>
						<Title variant="small" style={{ fontSize: 19 }}>Delivery details</Title>
						<Touchable align="flex-end">
							<Text color="primary">Change</Text>
						</Touchable>
					</Box>
					<Box mt="15px">
						<Text color="black" fontWeight="light" variant="normal">Standard Delivery</Text>
						<Text color="black" fontWeight="light" variant="normal">Saturday 27 - Tuesday 30</Text>
						<Text color="black" fontWeight="light" variant="normal">Cost: $10</Text>
					</Box>
				</DeliveryDetails>
				<PaymentDetails>
						<Title variant="small" fontWeight="light">Select and enter your payment details</Title>
						<Text color="dark" mt="3px">By continuing you agree to our <Text color="primary">Terms</Text> </Text>
						<Box>
							<Input placeholder="Cardholder name" background="transparent" mt="20px" />
							<Input placeholder="Card number" background="transparent" mt="10px" />
							<Input placeholder="Due date" background="transparent" mt="10px" />
							<Input placeholder="Security code" background="transparent" mt="10px" />
						</Box>
						<Button mt="20px" mb="20px" background="primary" onPress={() => navigation.navigate("Congratulations")}>
							<Text color="light">Confirmation</Text>
						</Button>
				</PaymentDetails>
			</ScrollView>
		</Box>
	)
}