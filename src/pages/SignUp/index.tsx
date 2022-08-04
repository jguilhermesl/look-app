import React from 'react';

import { Box, Title, Text, Button, Input, Touchable } from '../../components'
import { Form, Header } from './styles'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
	const navigation = useNavigation();

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Box hasPadding align="center" justify="center" background="light" gap="64px">
				<Header>
					<Title color="dark" align="center" variant="small">Create new account</Title>
					<Text color="dark" fontWeight="light">Enter your details below:</Text>
				</Header>
				<Form>
					<Input placeholder="Name" />
					<Input placeholder="Email" mt="10px" />
					<Input placeholder="Password" secureTextEntry mt="10px" />
					<Button color="light" background="primary" block mt="80px" mb="10px" onPress={() => navigation.navigate("Feed")}>
						<Text>Create new account</Text>
					</Button>
					<Touchable onPress={() => navigation.navigate("Home")} align="center" justify="center" width="100%" height="35px"><Text underline>Back to home</Text></Touchable>
				</Form>
			</Box>
		</>
	)
}