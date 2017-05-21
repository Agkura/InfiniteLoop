export const elapsed = ( milliseconds ) => {
  let seconds = Math.floor(milliseconds/1000);
  let minutes = undefined;
  let hours = undefined;
  let days = undefined;

  if ( seconds > 60 ) {
    minutes = Math.floor(seconds/60);
    seconds = seconds%60;
  }
  if ( minutes > 60 ) {
    hours = Math.floor(minutes/60);
    minutes = minutes%60;
  }
  if ( hours > 24 ) {
    days = Math.floor(hours/24);
    hours = hours%24;
  }

  let { second, minute, hour, day} = setPlural(seconds, minutes, hours, days);
  if ( seconds === 0) { seconds = "" };
  if ( minutes === 0) { minutes = "" };
  if ( hours === 0) { hours = "" };
  if ( seconds < 60 && minutes === undefined) { return `${seconds} ${second} ago`;}
  if ( minutes < 60 && hours === undefined) { return `${minutes} ${minute} and ${seconds} ${second} ago`;}
  if ( hours <= 24 && days === undefined) { return `${hours} ${hour} ${minutes} ${minute} and ${seconds} ${second} ago`;}
  return `${days} ${day} ${hours} ${hour} ${minutes} ${minute} ${seconds} ${second} ago`;
}

const setPlural = ( seconds, minutes, hours, days ) => {
  let second = "second";
  let minute = "minute";
  let hour = "hour";
  let day = "day";
  if ( seconds > 1) { second = "seconds"}
  if ( seconds === 0 ) { second = ""}
  if ( minutes > 1) { minute = "minutes"}
  if ( minutes === 0) { minute = ""}
  if ( hours > 1) { hour = "hours"}
  if ( hours === 0) { hour = ""}
  if ( days > 1) { day = "days"}
  return {
    second, minute, hour, day
  }
}
