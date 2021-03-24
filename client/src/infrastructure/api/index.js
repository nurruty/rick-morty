import { characterServices } from './characters';
import { userServices } from './user';

const apiServices = {
  ...characterServices,
  ...userServices,
};
export default apiServices;
