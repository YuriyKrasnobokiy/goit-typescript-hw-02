/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon,
  Tue,
  Wed,
  Thr,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: Days): boolean {
  if (day === Days.Sat || day === Days.Sun) {
    return true;
  } else {
    return false;
  }
}
const today = Days.Sat;
console.log(isWeekend(today));
