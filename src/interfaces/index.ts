export interface OtpProps {
  messageBody: string;
  phoneNumber: string;
  bvn?: string;
  expiry?: number;
}

export interface AccountResponse {
  accountNum: string;
}

export interface DataProps {
  bvn: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  phoneNumber1: string;
  gender: string;
  email: string;
  nationality: string;
  surname: string;
  nin: string;
  maritalStatus: string;
  address: string;
  residentialAddress: string;
}

export interface CsProps {
  bvn?: string;
  title?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  motherMaidenName?: string;
  dateofBirth?: string;
  gender?: string;
  placeOfBirth?: string;
  stateOfOrigin?: string;
  Lga?: string;
  nationality?: string;
  residentPermitNumber?: string;
  placeOfPermitIssue?: string;
  permitIssueDate?: Date;
  permitExpireDate?: Date;
  religion?: string;
  maritalStatus?: string;
  addressDetails?: AddressDetails;
  meansOfIdentification?: MeansOfIdentification;
  accountSpecifications?: AccountSpecifications;
  nextOfKin?: NextOfKin;
  employmentDetails?: EmploymentDetails;
}

interface AddressDetails {
  residentialAddress: string;
  lga: string;
  stateOfResidence: string;
}

interface MeansOfIdentification {
  meansOfIdentification: string;
  idNumber: string;
  dateOfIssue: Date;
  expiryDate: Date;
}

interface AccountSpecifications {
  productType: string;
  bankBranch: string;
}

interface NextOfKin {
  surname: string;
  firstname: string;
  phoneNumber: string;
  email: string;
  gender: string;
  relationship: string;
  residentialAddress: string;
  stateOfResidence: string;
}

interface EmploymentDetails {
  employmentStatus: string;
  ExpectedIncome: string;
  employerName: string;
  residentialAddress: string;
}

export type NextAndPreviousHandler = {
  handleNext: () => void;
  handlePrevious: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
