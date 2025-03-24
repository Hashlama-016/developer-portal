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
import { Details } from "./Details"

const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Execution | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // const response = await rundeckApi.getAllExecutions();
        // console.log("API Response:", response); // Debugging
        setOrders([{
          'id': '0',
          'jobId': '0',
          'jobName': 'db-add',
          'project': 'try',
          'status': 'running',
          'startTime': '07:00',
          'endTime': '09:00',
          'user': 'noa',
          'logs': ['1212', '343']
        }, {
          'id': '1',
          'jobId': '1',
          'jobName': 'db-add111111111111123132',
          'project': 'try1',
          'status': 'running',
          'startTime': '09:00',
          'endTime': '23:00',
          'user': 'noa1',
          'logs': ['12123', '343']
        }]);
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
    if (order) {
      setSelectedOrder(order); 
      setShowDetails(true);
    }
  };

  if (loading)
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 3}}>
    {showDetails && <Details order={selectedOrder} onClose={() => setShowDetails(false)} />}
      <Grid2 container spacing={3}>
        {orders.map((order) => (
          <Grid2 key={order.id} size={{ xs: 12, sm: 6, md: 6 }}>
            <Card className="order-card">
              <CardContent>
                <Typography variant="h6" className="order-title">
                  Order #{order.id}
                </Typography>
                <Typography variant="h6" className="order-title">
                  {order.jobName}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 5}}
                  onClick={() => handleButtonClick(order.id)}
                >
                  Details
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
