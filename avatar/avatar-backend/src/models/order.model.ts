export type Order = {
  id: string;
  readonly serviceId: string;
  metadata: object;
  userId?: string;
  createdAt?: string;
}
