export interface Order {
  id: string;
  serviceId: string;
  userId: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  service?: {
    id: string;
    name: string;
    price: number;
  };
}

export interface CreateOrderDto {
  serviceId: string;
  userId: string;
}

export interface UpdateOrderStatusDto {
  id: string;
  status: Order["status"];
}

export interface OrderResponse {
  success: boolean;
  data: Order;
  message?: string;
}

export interface OrdersResponse {
  success: boolean;
  data: Order[];
  message?: string;
}
