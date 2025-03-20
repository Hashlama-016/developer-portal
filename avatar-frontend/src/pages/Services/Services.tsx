import { FunctionComponent, useEffect, useState } from "react";
import { serviceApi } from "@/api";
import type { Service } from "@/api";
import "./Services.css";
import { Container } from "@mui/material";

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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <h1>Premium Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.data.name}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
