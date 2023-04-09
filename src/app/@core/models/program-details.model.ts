import {Item} from "./Items.model";

export interface ProgramDetails {
  motivation: string | null;
  picture: string | null;
  programLevel: string | null;
  price: string | null;
  category: string | null;
  duration: string | null;
  motivationDescription: string | null;
  programDescription: string | null;
  programEquipments: string[] | null;
  programOptions: string[] | null;
  items: Item[];

}
