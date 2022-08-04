import React from "react";
import { colors } from "./styles/theme.json"

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Feed from "./pages/Feed";
import Marketplace from "./pages/Marketplace";
import { Category } from "./pages/Marketplace/components/category";
import Cart from "./pages/Cart";
import { Product } from "./pages/Marketplace/components/product";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Title } from "./components";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerComponent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<Title fontWeight="bold" color="light" variant="normal" hasPadding>LOOKAPP</Title>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	)
}

function DrawerComponent (){
	return (
		<Drawer.Navigator 
			initialRouteName="Feed"
			drawerContent={(props) => <CustomDrawerComponent {...props} />}
			drawerContentOptions={{
				activeBackgroundColor: colors.primary,
				activeTintColor: colors.light,
				inactiveTintColor: colors.light,
				style: {
					backgroundColor: colors.black
				}
			}}
			>
			<Drawer.Screen name="Feed" component={Feed} />
			<Drawer.Screen name="Marketplace" component={Marketplace} />
			<Drawer.Screen name="Orders" component={Feed} />
		</Drawer.Navigator>
	)
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Feed"
          component={DrawerComponent}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Marketplace"
          component={Marketplace}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
