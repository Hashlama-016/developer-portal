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
import { serviceApi } from "@/api";
import type { Service } from "@/api";
import "./Services.css";

const Services: FunctionComponent = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceApi.getAll();
        setServices(response);
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
      <div className="loading">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="error">{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid2 container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid2 key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card className="service-card">
              <CardContent>
                <Typography variant="h6" className="service-title">
                  {service.id}
                </Typography>
                <Button
                  variant="contained"
                  color={selectedService === service.id ? "success" : "primary"}
                  fullWidth
                  onClick={() => setSelectedService(service.id)}
                >
                  {selectedService === service.id
                    ? "Selected"
                    : "Select Service"}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Services;
