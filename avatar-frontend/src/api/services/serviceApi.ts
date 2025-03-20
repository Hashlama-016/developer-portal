import api from "../axios";
import {
  Service,
  CreateServiceDto,
  UpdateServiceDto,
  ServiceResponse,
  ServicesResponse,
} from "./types";

const SERVICE_BASE_URL = "/services";

export const serviceApi = {
  // Get all services
  getAll: async (): Promise<ServicesResponse> => {
    const response = await api.get<ServicesResponse>(SERVICE_BASE_URL);
    return response.data;
  },

  // Get service by ID
  getById: async (id: string): Promise<ServiceResponse> => {
    const response = await api.get<ServiceResponse>(
      `${SERVICE_BASE_URL}/${id}`
    );
    return response.data;
  },

  // Create new service
  create: async (data: CreateServiceDto): Promise<ServiceResponse> => {
    const response = await api.post<ServiceResponse>(SERVICE_BASE_URL, data);
    return response.data;
  },

  // Update service
  update: async (data: UpdateServiceDto): Promise<ServiceResponse> => {
    const response = await api.put<ServiceResponse>(
      `${SERVICE_BASE_URL}/${data.id}`,
      data
    );
    return response.data;
  },

  // Delete service
  delete: async (id: string): Promise<ServiceResponse> => {
    const response = await api.delete<ServiceResponse>(
      `${SERVICE_BASE_URL}/${id}`
    );
    return response.data;
  },
};
