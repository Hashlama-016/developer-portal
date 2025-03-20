import api from "../axios";
import { Order, CreateOrderDto } from "./types";

const ORDER_BASE_URL = "/orders";

export const orderApi = {
  getAll: async (): Promise<Order> => {
    const response = await api.get<Order>(ORDER_BASE_URL);
    return response.data;
  },
  getById: async (id: string): Promise<Order> => {
    const response = await api.get<Order>(`${ORDER_BASE_URL}/${id}`);
    return response.data;
  },
  // getByUserId: async (userId: string): Promise<Order> => {
  //   const response = await api.get<Order>(`${ORDER_BASE_URL}/user/${userId}`);
  //   return response.data;
  // },
  add: async (data: CreateOrderDto): Promise<Order> => {
    const response = await api.post<Order>(ORDER_BASE_URL, data);
    return response.data;
  },
};
