export const elapsed = ( createdAt, boolean = true ) => {
  let creationTime = new Date(createdAt.split(" ").join("T"));
  let current = new Date();
  let milliseconds = Math.abs(current-creationTime);

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
  if ( seconds < 60 && minutes === undefined && boolean) { return `${seconds} ${second} ago`;}
  if ( seconds < 60 && minutes === undefined && !boolean) { return `a few seconds ago`;}
  if ( minutes < 60 && hours === undefined) { return `${minutes} ${minute} ago`;}
  if ( hours <= 24 && days === undefined) { return `${hours} ${hour} ago`;}
  if (days > 7) { return createdAt.split(" ").first }
  return `${days} ${day} ${hours} ${hour} ago`;
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
