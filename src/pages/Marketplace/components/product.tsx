import React from "react";
import { Box, Cover, Title } from "../../../components";

import { Header } from "../../../components/Header";

export function Product() {
	const url = "https://tntsports.com.br/__export/1620999484517/sites/esporteinterativo/img/2021/05/14/camisa-psg.png_561488073.png"
	return (
		<>
			<Header title="Camisa Sport Recife" />
			<Box background="black" width="100%" height="440px" style={{ position: "relative"}}>
				<Cover image={url} width="100%" height="100%" style={{ opacity: 0.7 }} />
				<Title color="light" fontWeight="bold" variant="big" style={{ position: "absolute", bottom: 20, left: 20 }}>$1080</Title>
			</Box>
		</>
	)
}