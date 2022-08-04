import React from "react";
import { Box, ScrollView, Title } from "..";

import { Category } from "./Category";

const array = [
	{
		type: "Women", 
		quantity: 3211,
		banner: "https://img.freepik.com/fotos-gratis/tres-jovens-lindas-meninas-sorridentes-no-verao-na-moda-esporte-roupas-mulheres-sexy-despreocupadas-posando-modelos-positivos-em-oculos-de-sol-redondos-se-divertindo-abracando_158538-5198.jpg?w=2000" 
	},
	{
		type: "Mens", 
		quantity: 3231,
		banner: "https://homensquesecuidam.com/wp-content/uploads/2018/08/dicas-moda-masculina-homens-que-se-cuidam-por-juan-alves-a-a.jpg"
	},
	{
		type: "Kids", 
		quantity: 1211,
		banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUVO-8byg8hw_5ej0avU5Qd0izAaJ0_EU05KP-nkAWu0ML-g_gHr3BNW17atpyv7Sblo&usqp=CAU" 
	},
	{
		type: "Beach", 
		quantity: 4256,
		banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07jhOLzu9O0t7bYTJ2TgmRFbQLm-wyDuEzRABCLskx_8Wl8bpYvDP3oL1mjBtf_mwLYI&usqp=CAU" 
	},
]

export function Categories() {
	return (
		<ScrollView hasPadding>
			{array?.map( (item, index) => (
				<Category key={index} data={item} />
			))}
		</ScrollView>
	)
}