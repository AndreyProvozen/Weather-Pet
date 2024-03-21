export * from './onecall';
export * from './weather';

export interface WeatherProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}
