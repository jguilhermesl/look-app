import React from "react";
import { Header } from "../../components/Header"


import { Box } from "../../components";
import Icon from "react-native-vector-icons/Ionicons";
import { Categories } from "../../components/Categories";

export default function Marketplace() {
	return (
		<>
			<Header 
			title="Categories" 
			actionLeft="goBack"
			iconLeft={<Icon name="chevron-back" size={30} color="#000" />} 
			iconRight={<Icon name="cart-outline" size={30} color="#000" />} />
			<Categories />
		</>
	)
}