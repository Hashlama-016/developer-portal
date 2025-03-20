export type Order = {
  id: string;
  serviceId: string;
  metadata: OrderMetadata;
  userId?: string;
  createdAt: string;
};

export type OrderMetadata = {
  [key: string]: unknown;
};

export type CreateOrderDto = Omit<Order, "id" | "createdAt">;
