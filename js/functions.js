
// eslint-disable-next-line no-unused-vars
const beginningEndWorking = (start, end, startTime, durationMeeting) => {

  const convertH2M = (timeInHour) => {
    const timeParts = timeInHour.split(':');
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
  };
  const timeInMinutes = convertH2M;

  if (timeInMinutes(end) >= timeInMinutes(startTime) + durationMeeting && timeInMinutes(start) <= timeInMinutes(startTime)) {
    return true;
  } else {
    return false;
  }
};
