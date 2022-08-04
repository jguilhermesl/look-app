import styled from "styled-components/native";
import { colors, fonts } from "../../styles/theme.json";

interface ButtonSelectTabProps {
	isActive?: boolean
}

export const ButtonSelectTab = styled.TouchableOpacity`
	padding: 20px;
	height: 60px;
	border-bottom-width: ${ (props: ButtonSelectTabProps) => props.isActive === true ? '3px' : 0};
	border-bottom-color: ${colors["primary"]};
	border-bottom-style: solid;
`