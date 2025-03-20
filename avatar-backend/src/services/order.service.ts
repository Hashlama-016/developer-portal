import { CreateOrderDto } from "../models/order.model.js";
import orderRepository from "../repositories/order.repository.js";

export const getOrders = () => orderRepository.getOrders();
export const getOrder = (id: string) => orderRepository.getOrder(id);
export const addOrder = (order: CreateOrderDto) =>
  orderRepository.insertOrder(order);

export default { getOrders, getOrder, addOrder };
