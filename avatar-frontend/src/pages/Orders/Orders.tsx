// Orders.tsx
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

type Execution = {
  id: string;
  jobId: string;
  jobName: string;
  project: string;
  status: string;
  startTime: string;
  endTime: string;
  user: string;
  logs: string[];
};

const Orders: FunctionComponent = () => {
  const [orders, setOrders] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Execution | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setOrders([
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "1",
            jobId: "1",
            jobName: "db-add111111111123132",
            project: "try1",
            status: "running",
            startTime: "09:00",
            endTime: "23:00",
            user: "noa1",
            logs: ["12123", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
          {
            id: "0",
            jobId: "0",
            jobName: "db-add",
            project: "try",
            status: "running",
            startTime: "07:00",
            endTime: "09:00",
            user: "noa",
            logs: ["1212", "343"],
          },
        ]);
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
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {showDetails && <Details order={selectedOrder} onClose={() => setShowDetails(false)} />}
      <Grid2 container spacing={3}>
        {orders.map((order) => (
          <Grid2 size ={{ xs:12, sm:6, md:4 }} justifyContent="center" key={order.id}>
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
              <CardContent sx={{ flexGrow: 1, textAlign: "center"}}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                  Order #{order.id}
                </Typography>
                <Typography variant="h6" sx={{color: "white" }}>
                  Job Name: {order.jobName}
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