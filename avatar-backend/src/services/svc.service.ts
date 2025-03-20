import { Service } from "../models/svc.model.js";
import serviceRepository from "../repositories/svc.repository.js";

export const getServices = () => serviceRepository.getServices();
export const getService = (id: string) => serviceRepository.getService(id);
export const addService = (service: Service) => serviceRepository.insertService(service);

export default { getServices, getService, addService };
