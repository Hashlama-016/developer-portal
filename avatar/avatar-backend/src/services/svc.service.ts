import serviceRepository from "../repositories/svc.repository.js";

export const getServices = async () => await serviceRepository.getServices();

export default { getServices };
