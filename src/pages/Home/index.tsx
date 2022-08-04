import React from 'react';
import { View, StyleSheet, StatusBar } from "react-native"

import { Box, Title, Text, Button } from '../../components'
import { Header, InteractionsBox } from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
	const navigation = useNavigation()

	return (
		<>
			<StatusBar />
			<Box hasPadding background="dark" justify="center" fluid >
				<Header>
					<Title color="light" variant="normal" fontWeight="bold">LOOKAPP</Title>
					<Text color="light" variant="normal" align="center">Stay on top the fashion world and buy your favorite looks.</Text>
				</Header>
				<InteractionsBox fluid >
					<Button color="light" background="primary" block onPress={() => navigation.navigate("SignIn")} >
						<Text color="light" background="primary" block>Sign my acccount</Text>
					</Button>
					<Button color="light" border block mt="10px" onPress={() => navigation.navigate("SignUp")}>
						<Text>Create new account</Text>
					</Button>
				</InteractionsBox>
			</Box>
		</>
	)
};