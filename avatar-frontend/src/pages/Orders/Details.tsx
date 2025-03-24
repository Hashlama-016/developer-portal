import { FunctionComponent, useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { rundeckApi } from "@/api";
import type { Execution } from "@/api";
import "./Details.css";

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
    <Box className="detail-box"
      sx={{
        position: "fixed",
      }}
    >
      <Card className="detail-card"
        sx={{
          maxWidth: 600,
          width: "90%",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order Details
          </Typography>
          <Typography>ID: {order.id}</Typography>
          <Typography>Job Name: {order.jobName}</Typography>
          <Typography>Project: {order.project}</Typography>
          <Typography>Status: {order.status}</Typography>
          <Typography>User: {order.user}</Typography>
          <Typography className="detail-date">Start Time: {order.startTime}</Typography>
          <Typography className="detail-date">End Time: {order.endTime}</Typography>
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
