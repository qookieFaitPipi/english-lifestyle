// types
export type SliderItemType = {
  id: number;
  image_url: string | undefined;
  content: string;
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

// sliderSlice
export interface TopSliderSliceState {
  topSliderList: SliderItemType[];
  bottomSliderList: SliderItemType[];
}

// studyStepsSlice
export interface VideoSliceState {
  url: string | undefined;
}

// reviewListSlice
export interface ReviewSliceState {
  reviewList: ReviewItemType[];
}

// priceListSlice
export interface PriceSliceState {
  state1: PriceItemType[];
  state2: PriceItemType[];
  state3: PriceItemType[];
}

// adminSlice
export interface UserSliceState {
  userLogin: string | undefined;
  isEntered: boolean;
  selectedSlice: number;
  accessToken: string | undefined
}