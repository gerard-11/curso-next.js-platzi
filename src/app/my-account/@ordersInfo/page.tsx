import { getCustomerOrders } from "app/services/shopify/graphql/customer";
import styles from './ordersInfo.module.sass'


type OrderType = {
    name: string;
    orderNumber: number;
    statusUrl: string
    lineItems: {
        edges: Array<{
            node: {
                currentQuantity: number;
                title: string
            }
        }>
    }
}


export default async function MyAccountPage() {
    const ordersInfo = await getCustomerOrders();
    // console.log(ordersInfo);
    return (
        <div>
            <h2>Your orders</h2>
            <section>
                {ordersInfo?.orders?.map((order: OrderType) => (
                    <a href={order.statusUrl} key={order.orderNumber} className={styles.OrderInfo}>
                        <div className={styles.OrderInfo__header}>
                            <h3>Order {order.name}</h3>
                            <span className={styles.OrderInfo__status}>Sent</span>
                        </div>
                        <div className={styles.OrderInfo__items}>
                            {
                                order.lineItems.edges.map(({ node }) => (
                                    <div key={node.title} className={styles.OrderInfo__item}>
                                        <span>{node.title}</span>
                                        <span className={styles.OrderInfo__quantity}>x{node.currentQuantity}</span>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </a>
                ))}
            </section>
        </div>
    );
}