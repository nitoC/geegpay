export interface ICard {
  type: string;
  value: string;
  profit: string;
  heading: string;
  icon: string;
}

export interface IRange {
  title: string;
  value: number;
  total: number;
  expenses?: string;
  profit?: string;
}
