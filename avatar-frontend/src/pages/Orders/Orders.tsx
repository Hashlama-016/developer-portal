import { FunctionComponent, useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Order, orderApi } from "@/api";
import "./Orders.css";

const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderApi.getAll();
        setOrders(response);
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
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" className="page-title">
        Orders
      </Typography>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card className="order-card">
              <CardContent>
                <Typography variant="h6" className="order-title">
                  Order #{order.id}
                </Typography>
                <Typography variant="body2" className="order-date">
                  {order.createdAt}
                </Typography>
                <Button
                  variant="contained"
                  color={selectedOrder === order.id ? "success" : "primary"}
                  fullWidth
                  onClick={() => setSelectedOrder(order.id)}
                >
                  {selectedOrder === order.id ? "Selected" : "Select Order"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Orders;
