// Details.tsx
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

interface DetailsProps {
  order: {
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
  onClose: () => void;
}

export const Details: React.FC<DetailsProps> = ({ order, onClose }) => {
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
          <Typography>ID: {order.id}</Typography>
          <Typography>Job Name: {order.jobName}</Typography>
          <Typography>Project: {order.project}</Typography>
          <Typography>Status: {order.status}</Typography>
          <Typography>User: {order.user}</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            Start Time: {order.startTime}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            End Time: {order.endTime}
          </Typography>
          <Typography>Logs: {order.logs.join(", ")}</Typography>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;