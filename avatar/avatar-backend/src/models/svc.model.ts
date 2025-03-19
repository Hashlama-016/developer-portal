export type Service = {
  id: string;
  data: ServiceData;
};

export type ServiceData = {
  name: string;
  apiPath: string;
  params: {
    [key: string]: unknown;
  };
};
