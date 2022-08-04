import React from "react";
import { Header } from "../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";

export default function Cart() {
	return (
		<>
			<Header
				title="Cart"
				actionLeft="goBack"
				iconLeft={<Icon name="chevron-back" size={30} color="#000" />} />
		</>
	)
}