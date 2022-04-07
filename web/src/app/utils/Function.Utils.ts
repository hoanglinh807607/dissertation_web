import * as moment from 'moment';

export const getTimeByFormat = (dateStr: string, format: string): string => {
  return moment(dateStr).format(format);
};
