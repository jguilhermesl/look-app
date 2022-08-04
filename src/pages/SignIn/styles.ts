import styled from "styled-components/native";
import { colors, fonts } from "../../styles/theme.json";

export const Header = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0px 3px;
	gap: 0.3px;
	color: ${colors['light']};
	margin: 0px 0 2px 0;
`

export const Form = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 64px;
`