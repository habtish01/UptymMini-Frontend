
import { BaseURL } from '../config';

export const CustomersController = {
  GetAllCustomers: BaseURL + `/api/Customers/GetAllCustomers`,
  GetAllAsDrp: BaseURL + `/api/Customers/GetAllAsDrp`,
  CreateCustomer: BaseURL + `/api/Customers/CreateCustomer`,
  UpdateCustomer: BaseURL + `/api/Customers/UpdateCustomer`,
  UpdateCustomerStatus: BaseURL + `/api/Customers/UpdateCustomerStatus`,
  UpdateCustomerReminder: BaseURL + `/api/Customers/UpdateCustomerReminder`,
  Register: BaseURL + `/api/Customers/Register`,
  GetCustomerDetails: BaseURL + `/api/Customers/GetCustomerDetails`,
  GetCurrentCustomerDetails: BaseURL + `/api/Customers/GetCurrentCustomerDetails`,
  GetCustomerDetailsByUserId: BaseURL + `/api/Customers/GetCustomerDetailsByUserId`,
  GetCustomerMembershipInfo: BaseURL + `/api/Customers/GetCustomerMembershipInfo`,
  ExportCustomers: BaseURL + `/api/Customers/ExportCustomers`,

}
