import api from "../axios";
import { CreateServiceDto, Service } from "./types";

const SERVICE_BASE_URL = "/services";

export const serviceApi = {
  getAll: async (): Promise<Service[]> => {
    const response = await api.get<Service[]>(SERVICE_BASE_URL);
    return response.data;
  },
  getById: async (id: string): Promise<Service> => {
    const response = await api.get<Service>(`${SERVICE_BASE_URL}/${id}`);
    return response.data;
  },
  add: async (data: CreateServiceDto): Promise<string> => {
    const response = await api.post<string>(SERVICE_BASE_URL, data);
    return response.data;
  },
};
