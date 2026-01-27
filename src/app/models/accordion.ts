import { FillLevel } from '../types/fillLevel.js';

export interface AccordionTechnologyItem {
  id: string;
  title: string;
  subitems: AccordionTechnologySubItem[];
}

export interface AccordionTechnologySubItem {
  name: string;
  fillLevel: FillLevel;
  logoSource?: string;
  description?: string;
}
