import React, { useState } from "react"

import { ScrollView, Touchable, Text } from "../index"
import { ButtonSelectTab } from "./styles"

interface TabProps {
	label: string,
	value: string
}

interface TabsProps {
	data: TabProps[],
	changeTab: (tab: TabProps) => void,
	tabActive: TabProps
}

export function Tabs({ data, changeTab, tabActive }: TabsProps) {
	const totalTabs = data?.length

	function handleClickOnButtonSelectTab(tab: TabProps) {
		changeTab(tab)
	}

	return (
		<ScrollView row horizontal height="60px" width="100%" justify="space-between">
			{data?.map( tab => (
				<ButtonSelectTab onPress={() => handleClickOnButtonSelectTab(tab)} style={{ 
					minWidth: `${ 100 / totalTabs}%`,
					alignItems: "center"
				}} isActive={tabActive.value === tab.value ? true : false}>
					<Text color={tabActive.value === tab.value ? "primary" : "gray50"} style={{
						borderBottomWidth: 3,
						borderBottomStyle: "solid",
						borderBottomColor: "red"
					}}>{tab.label}</Text>
				</ButtonSelectTab>
			))}
		</ScrollView>
	)
}