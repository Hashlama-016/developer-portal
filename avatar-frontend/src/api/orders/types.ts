export type Order = {
  id: string;
  serviceId: string;
  userId: string;
  createdAt: string;
  metadata: {
    [key: string]: unknown;
  };
};

export type CreateOrderDto = Omit<Order, "id" | "createdAt">;