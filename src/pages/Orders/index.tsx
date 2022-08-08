import { Box, ScrollView } from "../../components";
import { Header } from "../../components/Header";
import { Order } from "./Order";
import { BoxOrders } from "./styles";

export function Orders() {
	return (
		<>
		<Header title="Your Orders" />
		<BoxOrders>
			<Order />
			<Order />
			<Order />
			<Order />
		</BoxOrders>
		</>
	)
}