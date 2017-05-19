export const elapsed = ( milliseconds ) => {
  let seconds = Math.floor(milliseconds/1000);
  let minutes = 0
  let hours = 0
  let days = 0
  if ( seconds === 0) { return ""; }
  if ( seconds < 60) { return `${seconds} seconds ago`; }
  if ( seconds > 60 ) {
    minutes = Math.floor(seconds/60);
    seconds = minutes%60;
    if ( minutes < 60 ) {
      return `${minutes} minutes and ${seconds} seconds ago`;
    }
  }
  if ( minutes > 60 ) {
    hours = Math.floor(minutes/60);
    minutes = hours%60;
    if ( hours <= 24 ) {
      return `${hours} hours ${minutes} minutes and ${seconds} seconds ago`;
    }
  }
  if ( hours > 24 ) {
    days = Math.floor(hours/24);
    hours = days%24;
  }
  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
