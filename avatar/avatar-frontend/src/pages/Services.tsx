import React from "react";

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">✨</div>
          <h2>Premium Consultation</h2>
          <p>
            Expert guidance tailored to your unique needs. Our premium
            consultation service provides in-depth analysis and personalized
            recommendations.
          </p>
          <div className="service-price">Starting from $299</div>
        </div>
        <div className="service-card">
          <div className="service-icon">🎯</div>
          <h2>Strategic Planning</h2>
          <p>
            Comprehensive strategic planning service that helps you achieve your
            long-term goals with precision and efficiency.
          </p>
          <div className="service-price">Starting from $499</div>
        </div>
        <div className="service-card">
          <div className="service-icon">💎</div>
          <h2>VIP Support</h2>
          <p>
            24/7 dedicated support with priority response times and exclusive
            access to our premium support team.
          </p>
          <div className="service-price">Starting from $799</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
