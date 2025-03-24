import { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent, CircularProgress} from "@mui/material";
import type { Execution } from "@/api";
import type { ExecutionLogEntry } from "@/api";
import { Logs } from "./Logs";
import { rundeckApi } from "@/api";


interface DetailsProps {
  order: Execution;
  onClose: () => void;
}

export const Details: React.FC<DetailsProps> = ({ order, onClose }) => {
  const [currentOrder, setCurrentOrder] = useState<string>();
  const [selectedLogs, setSelectedLogs] = useState<ExecutionLogEntry>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await rundeckApi.getExecutionLogs(order.id);
        console.log(response)
        setSelectedLogs(response[response.length-1]);
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
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
      }}
    >
      {
      currentOrder &&
      <Logs orderId ={currentOrder} onCloseLog={() => setCurrentOrder(undefined)} />
    }
      <Card
        sx={{
          maxWidth: 600,
          width: "90%",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          bgcolor: "background.paper",
          border: "2px solid rgba(88, 101, 242, 0.4)",
        }}
      >
        <CardContent sx={{ textAlign: "center"}}>
          <Typography variant="h5" gutterBottom>
            Order Details
          </Typography>
          <Typography>{ selectedLogs?.log}</Typography>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{ mt: 2, mr:2}}
          >
            Close
          </Button>  
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;