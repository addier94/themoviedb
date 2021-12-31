export const getYear = (date:string) => new Date(date).getFullYear();

export const convertToHours = (hour:number | null) => {
  if (hour) {
    const hours = Math.floor(hour / 60);
    const minute = Math.floor(hour % 60);
    return `${hours}h ${minute}m`;
  }
  return '';
};
