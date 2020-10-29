// 转换时间 18:25:30 为当天的秒数
import {parseToNumber} from '../number';

export function timeToSeconds(time: string, mark: string = ':') {
  const timeArray = time.split(mark);
  const hoursSeconds = parseToNumber(timeArray[0]) * 60 * 60;
  const minutesSeconds = parseToNumber(timeArray[1]) * 60;
  const seconds = parseInt(timeArray[2], 10);
  return hoursSeconds + minutesSeconds + seconds;
}
