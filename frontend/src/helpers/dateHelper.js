export const formatDate = d => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
};

export const getTodayDate = () => {
  const today = new Date();
  return formatDate(today);
};

export const getDatePlusNumberOfDays = numberOfDays => {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + numberOfDays);
  return formatDate(nextDay);
};

export const getDayName = d => {
  const date = d.split("/");
  const daysName = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ];
  const myDate = new Date(date[2], date[1] - 1, date[0]);
  const dayNum = myDate.getDay();
  return daysName[dayNum];
};
