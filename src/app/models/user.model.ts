

export interface AppUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay: string | null;
  profilePicture?: string;
  verificationCode?: string;
  bio?: string;
  enabled?: boolean;
  RefreshTokenId?: string;
  gender: "MALE"|"FEMALE";
  address?: Address;
  phoneNumber?: PhoneNumber;

  profileCompleted: boolean;

  socialMedia?: SocialMedia;
  roles?: UserRole[];

}

export interface UserPatch {
  firstName?: string;
  lastName?: string;
  birthDay?: string|null;
  bio?: string;
  gender?: "MALE"|"FEMALE";
  address?: Address;
  phoneNumber?: PhoneNumber;

  socialMedia?: SocialMedia;


}

export interface Address {
  country: string;
  city: string;
  postalCode?: string;
}

export interface PhoneNumber {
  region: string;
  phoneNumber: string;
}

interface UserRole {
  name: string;
}

export interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;

}
