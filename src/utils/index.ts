const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const toTitleCase = (str: string) => str.replace(
  /\w\S*/g,
  function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  }
);

export const getMonthName = (date: Date) => MONTHS[new Date(date).getMonth()];
