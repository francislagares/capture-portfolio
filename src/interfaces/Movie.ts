export interface IMovie {
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  awards: IAward[];
}

export interface IAward {
  title: string;
  description: string;
}
