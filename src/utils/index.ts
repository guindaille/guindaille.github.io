const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

export const toTitleCase = (str: string) => str.replace(
  /\w\S*/g,
  function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  }
);

export const getMonthName = (date: Date) => MONTHS[new Date(date).getMonth()];
