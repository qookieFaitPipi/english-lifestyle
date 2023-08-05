export type SliderItemType = {
  id: number,
  image_url: string,
  content: string,
}

export type PriceItemType = {
  id: number;
  value: string;
  old_value: string;
  points: string[];
}

export type ReviewItemType = {
  id: number;
  content: string;
  author: string; 
}