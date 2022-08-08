import React from "react";
import { OrderContainer } from "../styles";
import { Box, Text, Title } from "../../../components";
import Icon from "react-native-vector-icons/Ionicons";

export function Order() {
	return (
		<OrderContainer>
			<Box row align="center" justify>
				<Box row align="center">
					<Icon name="checkmark-circle-outline" size={24} color="#6AB04C" />
					<Text style={{ marginLeft: 3 }}  color="secondary">DELIVERED</Text>
				</Box>
				<Text>May 13, 2016 5:08 PM</Text>
			</Box>
			<Title mt="20px" mb="5px">Order Nº 19476123</Title>
			<Text color="dark" fontWeight="light" variant="normal" mb="20px">Tracking number: 
				<Text color="dark" fontWeight="bold" variant="normal"> IW321455512</Text>
			</Text>
			<Box row align="center">
				<Box>
					<Text color="dark" fontWeight="light" variant="normal">VALUE OF ITEMS</Text>
					<Text color="dark" fontWeight="normal" variant="normal">$90.23</Text>
				</Box>
				<Box>
					<Text color="dark" fontWeight="light" variant="normal">QUANTITY</Text>
					<Text color="dark" fontWeight="normal" variant="normal">20 pairs</Text>
				</Box>
			</Box>
		</OrderContainer>
	)
}