import {AppUser} from "./user.model";


export interface ProgramDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  level: string;
  price: number;
  category: string;
  description: string;
  createdBy?: AppUser;
  motivationDescription?: string;
  durationPerDay: number;
  options: string[];
  equipments: string[];
  sections: ProgramSectionDto[];
  picture?: string;
}

export interface ProgramSectionDto {

  id?: number;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  description: string;
  level: string;
  video?: SectionVideoDto;
}

export interface SectionVideoDto {
  videoUrl?: string;

  previewImageUrl?: string;

  id?: number;
  createdAt?: string;
  updatedAt?: string;
}
