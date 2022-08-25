const cleanText = (string: string): string =>
  string.replace(/<\/?[^>]+(>|$)/g, "");

export default cleanText;
