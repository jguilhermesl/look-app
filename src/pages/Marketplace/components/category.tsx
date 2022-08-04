import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import { Box } from "../../../components";

import { Header } from "../../../components/Header";
import { Products } from "../../../components/Products";

export function Category() {
	return (
		<>
			<Header 
				title="Women" 
				actionLeft="goBack" 
				iconLeft={<Icon name="chevron-back" size={30} color="#000" />}
				iconRight={<Icon name="cart-outline" size={30} color="#000" />} />
			<Products />
		</>
	)
}