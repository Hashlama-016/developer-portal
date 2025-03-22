import { FunctionComponent, useEffect, useState } from "react";
import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { rundeckApi } from "@/api";
import type { Execution } from "@/api";
import "./Orders.css";

const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await rundeckApi.getAllExecutions();
        console.log("API Response:", response); // Debugging

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

  if (loading)
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" className="page-title">
        Orders (Executions)
      </Typography>
      <Grid2 container spacing={3}>
        {orders.map((order) => (
          <Grid2 key={order.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card className="order-card">
              <CardContent>
                <Typography variant="h6" className="order-title">
                  Order #{order.id}
                </Typography>
                <Typography variant="body2" className="order-info">
                  Job Name: {order.jobName} <br />
                  Project: {order.project} <br />
                  Status: <strong>{order.status}</strong>
                </Typography>
                <Typography variant="body2" className="order-time">
                  Started: {order.startTime} <br />
                  Ended: {order.endTime}
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
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Orders;
