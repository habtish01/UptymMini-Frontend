import { BaseURL } from '../config';

export const CustomerTypesController = {
  GetAllCustomerTypes: BaseURL + `/api/CustomerTypes/GetAllCustomerTypes`,
  GetAllCustomerTypesAsDrp: BaseURL + `/api/CustomerTypes/GetAllCustomerTypesAsDrp`,
  CreateCustomerType: BaseURL + `/api/CustomerTypes/CreateCustomerType`,
  UpdateCustomerType: BaseURL + `/api/CustomerTypes/UpdateCustomerType`,
  DeleteCustomerType: BaseURL + `/api/CustomerTypes/DeleteCustomerType`,
}