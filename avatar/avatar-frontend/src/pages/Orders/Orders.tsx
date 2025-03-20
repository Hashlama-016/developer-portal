import React from "react";
import { orderApi } from "@/api";
import type { Order } from "@/api";
import "./Orders.css";

const Orders: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with actual user ID from auth context
        const userId = "current-user-id";
        const response = await orderApi.getUserOrders(userId);
        setOrders(response.data);
      } catch (err) {
        setError("Failed to fetch orders");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="orders-page">
      <h1>Your Premium Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h2>Order #{order.id}</h2>
              <span className={`order-status status-${order.status}`}>
                {order.status}
              </span>
            </div>
            <div className="order-details">
              <p className="order-date">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <p className="order-service">{order.service?.name}</p>
              <p className="order-price">${order.totalAmount}</p>
            </div>
            <div className="order-progress">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width:
                      order.status === "completed"
                        ? "100%"
                        : order.status === "processing"
                        ? "60%"
                        : "30%",
                  }}
                ></div>
              </div>
              <p className="progress-text">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
