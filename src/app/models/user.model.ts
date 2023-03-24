

export interface AppUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay?: string;
  profilePicture?: string;
  verificationCode?: string;
  bio?: string;
  enabled?: boolean;
  RefreshTokenId?: string;
  gender: "MALE"|"FEMALE";
  address?: Address;
  phoneNumber?: PhoneNumber;
  roles?: AppUserRoleDto[];

}

interface Address {
  country: string;
  city: string;
  postalCode?: string;
}

interface PhoneNumber {
  region: string;
  phoneNumber: string;
}

interface AppUserRoleDto {
  name: string;
}
