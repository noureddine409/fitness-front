import {AppUser} from "./user.model";


export interface ProgramDto {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  level: string;
  price: number;
  state?: string;
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
export interface ProgramPatchDto {
  name?: string;
  level?: string;
  price?: number;
  category?: string;
  description?: string;
  motivationDescription?: string;
  durationPerDay?: number;
  options?: string[];
  equipments?: string[];
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


export interface ProgramStateConfig {
  color: string;
  text: string;
}
