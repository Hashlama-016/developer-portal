import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Grid2,
} from "@mui/material";
import { Job, rundeckApi } from "@/api";

interface Props {
  serviceId: string;
  onCancel: () => void;
}

const ServiceRunner: FunctionComponent<Props> = ({ serviceId, onCancel }) => {
  const [service, setService] = useState<Job>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await rundeckApi.getJobById(serviceId);
        setService(data);
      } catch (err) {
        setError("Failed to fetch service details");
        console.error(err);
      }
    };

    fetchService();
  }, [serviceId]);

  if (!service)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

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
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {service.name}
          </Typography>
          {service.description && (
            <Typography>description: {service.description}</Typography>
          )}
          <Typography>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" type="" />
            </FormControl>
          </Typography>
          <Grid2 container spacing={1} justifyContent="center">
              <Button variant="contained" onClick={onCancel} sx={{ mt: 2 }}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ mt: 2 }}>
                Start
              </Button>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ServiceRunner;
