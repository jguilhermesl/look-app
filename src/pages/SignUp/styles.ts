import styled from "styled-components/native";
import { colors, fonts } from "../../styles/theme.json";

export const Header = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0 48px;
	gap: 4px;
	color: ${colors['light']};
	margin: 0 0 32px 0;
`

export const Form = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	width: 100%;
`