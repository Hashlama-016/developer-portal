import { FunctionComponent, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { serviceApi } from "@/api";
import type { Service } from "@/api";
import "./Services.css";

const Services: FunctionComponent = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        Services
      </Typography>
      {/* רשת של הכרטיסים */}
      <Grid2 container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid2 key={service.id}>
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
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "var(--white)" }}
                >
                  {service.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Services;
