import styled from "styled-components/native";
import { colors, fonts } from "../../styles/theme.json";

export const Header = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0px 48px;
	color: ${colors['light']};
`

export const InteractionsBox = styled.View`
	margin-top: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`