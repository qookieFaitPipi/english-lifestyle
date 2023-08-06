// types
export type SliderItemType = {
  id: number,
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

// SliderSlice
export interface TopSliderSliceState {
  topSliderList: SliderItemType[];
  bottomSliderList: SliderItemType[];
}

// StudyStepsSlice
export interface VideoSliceState {
  url: string | undefined;
}

// ReviewListSlice
export interface ReviewSliceState {
  reviewList: ReviewItemType[];
}

// PriceListSlice
export interface PriceSliceState {
  state1: PriceItemType[];
  state2: PriceItemType[];
  state3: PriceItemType[];
}

// AdminSlice
export interface UserSliceState {
  userLogin: string | undefined;
  isEntered: boolean;
  selectedSlice: number;
  accessToken: string | undefined
}