export interface Service {
  id: string;
  data: {
    name: string;
    apiPath: string;
    params: {
      [key: string]: unknown;
    };
  };
}

export type CreateServiceDto = Omit<Service, "id">;