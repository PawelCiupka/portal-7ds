export const formatDate = d => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    String("0" + day).slice(-2) +
    "/" +
    String("0" + month).slice(-2) +
    "/" +
    year
  );
};

export const getFullYear = () => {
  const today = new Date();
  return today.getFullYear();
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

export const getHoursAsNumber = hourValue => {
  const hourArray = String(hourValue).split(":");
  return Number(hourArray[0]);
};

export const doDisableButtonByHour = hourValue => {
  const hour = getHoursAsNumber(hourValue);
  const d = new Date();
  const nowHour = Number(d.getHours());

  if (hour <= nowHour) {
    return true;
  }
  return false;
};

export const getReservationDateString = (day, hour) => {
  const daysName = [
    "Dzisiaj",
    "Jutro",
    getDayName(getDatePlusNumberOfDays(2)),
    getDayName(getDatePlusNumberOfDays(3)),
    getDayName(getDatePlusNumberOfDays(4)),
    getDayName(getDatePlusNumberOfDays(5)),
    getDayName(getDatePlusNumberOfDays(6))
  ];

  const result =
    "" +
    daysName[day] +
    ",\n " +
    getDatePlusNumberOfDays(Number(day)) +
    ",\n godz. " +
    hour;

  return result;
};

export const formatCreatedAt = createdAt => {
  let result = "";
  const d = new Date(createdAt);
  const date = formatDate(createdAt);
  const time =
    String("0" + d.getHours()).slice(-2) +
    ":" +
    String("0" + d.getMinutes()).slice(-2);

  result = date + " " + time;
  return result;
};
