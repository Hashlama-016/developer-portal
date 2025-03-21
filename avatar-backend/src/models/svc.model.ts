export type Service = {
  id: string;
  data: ServiceData;
};

export type ServiceData = {
  name: string;
  apiPath: string;
  params: {
    [paramName: string]: unknown;
  };
};

export type CreateServiceDto = Omit<Service, "id">;
