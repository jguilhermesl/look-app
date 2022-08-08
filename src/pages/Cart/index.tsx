import React, { useState } from "react";

import { Header } from "../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { Tabs } from "../../components/Tabs";
import { Box, Text, Title } from "../../components";
import { CartComponent } from "./components/CartComponent/cart";
import { PaymentComponent } from "./components/PaymentComponent/payment";

interface TabProps {
	label: string,
	value: string
}

export default function Cart() {
	const [tabActive, setTabActive] = useState({ label: 'CART', value: 'cart' })

	function changeTab(tab: TabProps) {
		setTabActive(tab)
	}

	return (
		<>
			<Header
				title="Cart"
				actionLeft="goBack"
				iconLeft={<Icon name="chevron-back" size={30} color="#000" />} />
			<Tabs data={[
				{ label: 'CART', value: 'cart' },
				{ label: 'PAYMENT', value: 'payment' }
			]} changeTab={changeTab} tabActive={tabActive} />
			{tabActive.value === "cart" ? (
				<CartComponent changeTab={changeTab} />
			) : (
				<PaymentComponent />
			)}
		</>
	)
}