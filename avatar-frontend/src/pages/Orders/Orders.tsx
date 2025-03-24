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
import { Details } from "./Details";
import { rundeckApi } from "@/api";
import type { Execution } from "@/api";



const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Execution>();


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await rundeckApi.getExecutions();
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

  const handleButtonClick = (orderId: string) => {
    const order = orders.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };


  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {
        selectedOrder &&
        <Details order={selectedOrder} onClose={() => setSelectedOrder(undefined)} />
      }
      <Grid2 container spacing={3}>
        {orders.map((order) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} justifyContent="center" key={order.id}>
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                bgcolor: "background.paper",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 35px rgba(88, 101, 242, 0.4)",
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h2" sx={{ color: "white" }}>
                  {order.jobName}
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  status: {order.status}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: "auto" }}
                onClick={() => handleButtonClick(order.id)}
              >
                Details
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Orders;