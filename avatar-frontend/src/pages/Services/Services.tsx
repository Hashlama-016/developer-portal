import { FunctionComponent, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid2,
  Typography,
  Button,
} from "@mui/material";
import { rundeckApi, ProjectJob } from "@/api";
import ServiceRunner from "./ServiceRunner";

const Services: FunctionComponent = () => {
  const [services, setServices] = useState<ProjectJob[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await rundeckApi.getJobs();
        setServices(data);
      } catch (err) {
        setError("Failed to fetch services");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {selectedService && (
        <ServiceRunner serviceId={selectedService} onCancel={() => setSelectedService(undefined)} />
      )}
      <Grid2 container spacing={4}>
        {services.map((service) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            justifyContent="center"
            key={service.id}
          >
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
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {service.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  project: {service.project}
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  {service.description}
                </Typography>
              </CardContent>
              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: "auto" }}
                onClick={() => setSelectedService(service.id)}
              >
                Open
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Services;
