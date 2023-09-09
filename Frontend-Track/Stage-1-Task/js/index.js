const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();

const currentDay = weekDays[date.getDay()];

const setCurrentUTCTime = () => {
  const currentUTCElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCElement.textContent = date.getTime();
};

const main = () => {
  currentDayElement.textContent = currentDay;
  setCurrentUTCTime();
  setInterval(setCurrentUTCTime, 1000);
};

main();
