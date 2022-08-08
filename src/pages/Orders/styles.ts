import styled from "styled-components/native";
import { colors, fonts } from "../../styles/theme.json";

export const OrderContainer = styled.TouchableOpacity`
	border-color: rgba(0,0,0,0.1);
	border-width: 1px;
	border-style: solid;
	padding: 20px;
	margin-bottom: 20px;

	&:nth-last-child() {
		margin-bottom: 200px;
	}
`

export const BoxOrders = styled.ScrollView`
	padding: 20px;
	height: calc(100% + 400px);
`