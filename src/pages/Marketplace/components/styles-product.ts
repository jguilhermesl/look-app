import styled from "styled-components/native";
import { colors, fonts } from "../../../styles/theme.json";

interface PropsButtonSize {
	isActive?: boolean
}

export const SelectSize = styled.View`
	padding: 20px;
	display: flex;
	width: 100%;
`

export const ButtonSize = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	border: ${ (props: PropsButtonSize) => props.isActive === true ? colors["primary"] : `2px solid ${colors["gray50"]}`};
	background: ${ (props: PropsButtonSize) => props.isActive === true ? colors["primary"] : "transparent"};
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
`