export default interface customerData {
  firstname: string;
  secondname: string;
  extraname?: string | undefined;
  lastname: string;
  secondlastname: string;
  surname?: string | undefined;
  age: number;
  profession: string;
  address: string;
  dpi: string;
  citizenship: string;
  civilStatus: string;
  nit: string;
  email: string;
  phone: string;
  workaddress: string;
  workphone: string;
  birthdate: Date; // You might want to specify the correct date format if it's a string
}
