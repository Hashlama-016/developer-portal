import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

// רשימת ההזמנות
const orders = [
  {
    id: "123",
    date: "March 19, 2024",
    service: "Premium Consultation Package",
    price: "$299.00",
    status: "Pending",
  },
  {
    id: "124",
    date: "March 18, 2024",
    service: "VIP Support Package",
    price: "$799.00",
    status: "Completed",
  },
];

const Orders: React.FC = () => {
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
        Your Premium Orders
      </Typography>

      {/* רשת של הכרטיסים */}
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
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
                {/* מספר הזמנה */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "var(--white)" }}
                >
                  Order #{order.id}
                </Typography>

                {/* סטטוס עם Chip */}
                <Chip
                  label={order.status}
                  sx={{
                    mt: 1,
                    mb: 2,
                    backgroundColor:
                      order.status === "Completed" ? "#2ecc71" : "#ffcc00",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />

                {/* פרטי הזמנה */}
                <Typography
                  variant="body2"
                  sx={{ color: "var(--text-light)", mb: 1 }}
                >
                  {order.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "medium", mb: 1 }}
                >
                  {order.service}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Orders;
