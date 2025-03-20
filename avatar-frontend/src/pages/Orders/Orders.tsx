import { FunctionComponent, useEffect, useState } from "react";
import { Container, Grid2, Card, CardContent, Typography } from "@mui/material";
import { Order, orderApi } from "@/api";
import "./Orders.css";

const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      {/* כותרת הדף */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          fontFamily: "'Playfair Display', serif",
          color: "var(--white)",
        }}
      >
        Orders
      </Typography>

      {/* רשת של הכרטיסים */}
      <Grid2 container spacing={3}>
        {orders.map((order) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={order.id}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: "var(--border-radius)",
                background: "var(--background-card)",
                color: "var(--text-color)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 35px rgba(155, 89, 182, 0.4)",
                },
              }}
            >
              <CardContent>
                {/* מספר הזמנה */ 1}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "var(--white)" }}
                >
                  Order #{order.id}
                </Typography>

                {/* פרטי הזמנה */}
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-light)", mb: 1 }}
                >
                  {order.createdAt}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Orders;
