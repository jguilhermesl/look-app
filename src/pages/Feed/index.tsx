import React from 'react';
import { StatusBar } from 'react-native';

import { Box, ScrollView, Title } from '../../components';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { Stories } from '../../components/Stories';

export default function Feed() {
	return (
		<>
			<StatusBar backgroundColor="black" />
			<Header title="Explore" />
			<ScrollView vertical>
				<Stories />
				<Posts />
			</ScrollView>
		</>
	)
}