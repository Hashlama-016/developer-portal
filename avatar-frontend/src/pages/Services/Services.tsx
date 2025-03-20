import React from "react";
import { serviceApi } from "@/api";
import type { Service } from "@/api";
import "./Services.css";

const Services: React.FC = () => {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await serviceApi.getAll();
        setServices(response.data);
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
    <div className="services-page">
      <h1>Premium Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <div className="service-price">Starting from ${service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
