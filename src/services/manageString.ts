export const limitText = (text:string, length:number) => {
  if (text.length < length) {
    return text;
  }
  return `${text.split('', length).join('')}...`;
};
