import api from "../axios";
import {
  Order,
  CreateOrderDto,
  UpdateOrderStatusDto,
  OrderResponse,
  OrdersResponse,
} from "./types";

const ORDER_BASE_URL = "/orders";

export const orderApi = {
  // Get all orders
  getAll: async (): Promise<OrdersResponse> => {
    const response = await api.get<OrdersResponse>(ORDER_BASE_URL);
    return response.data;
  },

  // Get order by ID
  getById: async (id: string): Promise<OrderResponse> => {
    const response = await api.get<OrderResponse>(`${ORDER_BASE_URL}/${id}`);
    return response.data;
  },

  // Get user's orders
  getUserOrders: async (userId: string): Promise<OrdersResponse> => {
    const response = await api.get<OrdersResponse>(
      `${ORDER_BASE_URL}/user/${userId}`
    );
    return response.data;
  },

  // Create new order
  create: async (data: CreateOrderDto): Promise<OrderResponse> => {
    const response = await api.post<OrderResponse>(ORDER_BASE_URL, data);
    return response.data;
  },

  // Update order status
  updateStatus: async (data: UpdateOrderStatusDto): Promise<OrderResponse> => {
    const response = await api.patch<OrderResponse>(
      `${ORDER_BASE_URL}/${data.id}/status`,
      {
        status: data.status,
      }
    );
    return response.data;
  },

  // Cancel order
  cancel: async (id: string): Promise<OrderResponse> => {
    const response = await api.post<OrderResponse>(
      `${ORDER_BASE_URL}/${id}/cancel`
    );
    return response.data;
  },
};
