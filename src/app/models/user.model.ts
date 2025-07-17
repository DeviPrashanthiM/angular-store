export const UserActionTypes = {
  ADD: '[USER] Add New User',
  DELETE:  '[USER] Delete User',
  GET: '[USER] Get Users',
  GET_SUCCESS:'[USER] Get Users Success',
  GET_FAILURE:'[USER] Get Users Failure'
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


export interface UserState {
  userList: User[],
  selectedUser: User |null,
  loading: boolean,
  error:string | null
}

// export interface Address {
//   address1: string;
//   address2?: string;
//   street: string;
//   city: string;
// }

// export interface User {
//   name: string;
//   email: string;
//   phone: string;
//   country: string;
//   topping: string[];     // Multi-selection (e.g. checkboxes)
//   topping1?: string;     // Single selection
//   startDate: string;     // Consider using Date if parsed: Date | string
//   endDate: string;
//   status: 'Active' | 'Inactive'; // Enum-like restriction (optional)
//   addresses: Address[];
// }