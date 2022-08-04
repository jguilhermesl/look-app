import styled from "styled-components/native";
import {
	colors,
	fonts
} from "../styles/theme.json";

export const Box = styled.View `
  display: flex;
  overflow: hidden;
  flex: ${(props) => (props.height ? "none" : 1)};
  width: ${(props) => (props.fluid ? "100%" : props.width || "auto")};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.spacing || 0};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => (props.hasPadding ? "20px 20px" : "0px")};
  border-radius: ${(props) => props.radius || "0px"};
  background-color: ${(props) => 
			props.background ? colors[props.background] || props.background
      : "transparent"};
	gap: ${(props) => props.gap || "10px"};
	border-bottom: ${(props) => props.borderBottom || 0};
	position: ${ (props) => (props.position || "relative")};
`;

export const Touchable = styled.TouchableOpacity `
  display: flex;
  overflow: hidden;
  flex: ${(props) => (props.height ? "none" : 1)};
  width: ${(props) => (props.fluid ? "100%" : props.width || "auto")};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.spacing || 0};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  border-radius: ${(props) => props.radius || "0px"};
  background-color: ${(props) => 
			props.background ? colors[props.background] || props.background
      : "transparent"};
	gap: ${(props) => props.gap || "10px"};
	border-bottom: ${(props) => props.borderBottom || 0};
	position: ${ (props) => (props.position || "relative")};
`;

export const Title = styled.Text `
  color: ${(props) => colors[props.color || "dark"]};
  font-size: ${(props) => fonts.title.sizes[props.variant || "normal"]};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
	width: ${(props) => (props.fluid ? "100%" : props.width || "auto")};
  letter-spacing: -0.8px;
  line-height: ${(props) => fonts.title.sizes[props.variant || "normal"]};
  text-align: ${(props) => props.align || "left"};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  font-weight: ${(props) => fonts.weight[props.fontWeight] || 500};
	position: ${ (props) => (props.position || "relative")};
	text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Button = styled.TouchableOpacity `
  margin: ${(props) => props.spacing || 0};
  border-radius: 5px;
  padding: 15px 30px;
  background: ${(props) => colors[props.background] || "transparent"};
  width: ${(props) => (props.block ? "100%" : "auto")};
  align-items: center;
	color: ${(props) => colors[props.color || "dark"] || "#000"};
	font-size: 13px;
	font-weight: ${(props) => fonts.weight[props.fontWeight] || 500};
	border: ${ (props) => props.border ? `1px solid ${colors.light}` : "none"};
	margin-top: ${(props) => props.mt || 0};
	margin-bottom: ${(props) => props.mb || 0};
	position: ${ (props) => (props.position || "relative")};
`;

export const Spacer = styled.View `
  width: 100%;
  height: ${(props) => props.size || "10px"};
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: colors.muted
})
`
	display: flex;
	width: 100%;
	padding: 15px 15px;
	font-size: 14px;
	border-radius: 5px;
	background: ${colors.light};
	border: 1px solid ${colors.muted};
	color: ${colors.dark};
	margin-top: ${(props) => props.mt || 0};
	margin-bottom: ${(props) => props.mb || 0};
	position: ${ (props) => (props.position || "relative")};
`

export const Text = styled.Text.attrs((props) => ({
	onPress: props.onPress,
}))
`
  color: ${(props) => colors[props.color || "muted"]};
  letter-spacing: -0.6px;
  font-size: ${(props) => fonts.text.sizes[props.variant || "normal"]};
  font-weight: ${(props) => fonts.weight[props.fontWeight] || 500};
  margin: ${(props) => props.spacing || 0};
  text-align: ${(props) => props.align || "left"};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  text-decoration-color: ${(props) =>
    props.underline ? colors[props.color || "muted"] : "transparent"};
  padding: ${(props) =>
    props.hasPadding
      ? !props.removePaddingBottom
        ? "20px"
        : "20px 20px 0 20px"
      : "0px"};
	position: ${ (props) => (props.position || "relative")};
	word-wrap: break-word;
`

export const ScrollView = styled.ScrollView.attrs({
	showsHorizontalScrollIndicator: false,
	showVerticalScrollIndicator: false
})
`
	padding: ${props =>  (props.hasPadding ? '20px' : '0')};
	flex: ${( props => (props.height ? 'none' : 1))};
	width: ${(props) => (props.fluid ? "100%" : props.width || "auto")};
	height: ${(props) => props.height || "auto"};
	background-color: ${(props) => 
			props.background ? colors[props.background] || props.background
      : "transparent"};
	position: ${ (props) => (props.position || "relative")};
`

export const Cover = styled.ImageBackground.attrs(props => ({
	source: props.image ? {
		uri: props.image
	} : props.source,
	resizeMode: 'cover'
}))
`
	width: ${ props => props.width || '60px'};
	height: ${ props => props.height || '60px'}; 
	margin: ${ props => props.spacing || '0px'}; 
	border-radius: ${ props => props.radius || (props.circle ? props.width || '60px' : '3px')}; 
	border: ${ props => props.border || 'none'}; 
	background-color: ${colors.muted}; 
	flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
	padding: ${props =>  (props.hasPadding ? '20px' : '0')};
	overflow: hidden;
	position: ${ (props) => (props.position || "")};
`