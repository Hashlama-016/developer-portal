export type Order = {
  id: string;
  readonly serviceId: string;
  metadata: OrderMetadata;
  userId?: string;
  createdAt?: string;
};

export type OrderMetadata = {
    [key: string]: unknown;
}