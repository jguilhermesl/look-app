import React from 'react';

import { Box, Title, Text, Button, Input, Touchable } from '../../components'
import { Form, Header } from './styles'
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
	const navigation = useNavigation()

	return (
		<>
			<Box hasPadding align="center" justify="center" background="light" gap="32px">
				<Header>
					<Title color="dark" align="center" variant="small" fontWeight="bold">LOOKAPP</Title>
					<Text color="dark" fontWeight="light">Sign my acoount</Text>
				</Header>
				<Form>
					<Input placeholder="Name" />
					<Input placeholder="Password" secureTextEntry mt="10px" />
					<Button color="light" background="primary" block mt="80px" mb="10px" onPress={() => navigation.navigate("Feed")}>
						<Text>SigIn into my account</Text>
					</Button>
					<Touchable onPress={() => navigation.navigate("Home")} align="center" justify="center" width="100%" height="35px"><Text underline color="dark">Back to home</Text></Touchable>
				</Form>
			</Box>
		</>
	)
}