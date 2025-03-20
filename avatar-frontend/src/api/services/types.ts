export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateServiceDto {
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface UpdateServiceDto extends Partial<CreateServiceDto> {
  id: string;
}

export interface ServiceResponse {
  success: boolean;
  data: Service;
  message?: string;
}

export interface ServicesResponse {
  success: boolean;
  data: Service[];
  message?: string;
}
