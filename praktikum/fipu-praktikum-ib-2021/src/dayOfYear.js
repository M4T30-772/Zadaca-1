function dayOfYear(year, month, day) {
  let md = 0;
  if (month == 2) md = 31;
  if (month == 3) md = 60;
  if (month == 4) md = 91;
  if (month == 5) md = 120;
  if (month == 6) md = 150;
  if (month == 7) md = 181;
  if (month == 8) md = 212;
  if (month == 9) md = 243;
  if (month == 10) md = 274;
  if (month == 11) md = 304;
  if (month == 12) md = 335;
  return md + day;
}
module.exports = dayOfYear;
