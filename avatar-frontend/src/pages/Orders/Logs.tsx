import { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import type { ExecutionLogEntry } from "@/api";
import { rundeckApi } from "@/api";

interface LogsProps {
  orderId: string;
  onCloseLog: () => void;
}

export const Logs: React.FC<LogsProps> = ({ orderId, onCloseLog }) => {
  const [selectedLogs, setSelectedLogs] = useState<ExecutionLogEntry[]>();

  useEffect(() => {
    const openLogs = async () => {
      const response = await rundeckApi.getExecutionLogs(orderId);
      setSelectedLogs(response);
    };
    openLogs();
  }, [selectedLogs]);

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
          maxWidth: 900,
          width: "90%",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          bgcolor: "background.paper",
          border: "2px solid rgba(88, 101, 242, 0.4)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Logs Details
          </Typography>
          <Typography>Logs: {selectedLogs?.join(", ")}</Typography>
          <Button variant="contained" onClick={() => onCloseLog} sx={{ mt: 2 }}>
            Close Logs
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Logs;
