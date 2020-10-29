import {DateType} from '../types/date';

export interface DateFields {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  milliseconds: number;
  weekday: number;
}

export function breakDateTime(date: DateType = new Date()) :DateFields {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const weekday = date.getDay();
  return { year, month, day, hour, minute, second, milliseconds, weekday };
}