import React from "react";
import { SafeAreaView } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Box, Text, Title } from "../index";
import { HeaderComponent, Touchable } from "./styles"

import { useNavigation } from "@react-navigation/native"

interface HeaderProps {
	title: string,
	iconRight?: any | null,
	iconLeft?: any,
	actionRight?: string,
	actionLeft?: string
}



export function Header({ title, actionRight, actionLeft, iconRight = null, iconLeft = <Icon name="menu" size={30} color="#000" /> }: HeaderProps) {
	const navigation = useNavigation()

	function handleTouchableLeft() {
		if(actionLeft === "goBack") {
			navigation.goBack();
		} else {
			navigation.openDrawer();
		}
	}

	function handleTouchableRight() {
		if(actionRight === "goBack") {
			navigation.goBack()
		} else {
			navigation.navigate("Cart")
		}
	}

	return (
		<SafeAreaView>
			<HeaderComponent>
				<Touchable style={{ position: 'absolute', left: 20, top: 12 }} onPress={handleTouchableLeft}>
					{iconLeft}
				</Touchable>
				<Title color="dark" variant="small" fontWeight="normal">{title}</Title>
				{iconRight ? (
					<Touchable style={{ position: 'absolute', right: 20, top: 12 }} onPress={handleTouchableRight}>
						{iconRight}
					</Touchable>
				) : (
					<></>
				)}
			</HeaderComponent>
		</SafeAreaView>
	)
}