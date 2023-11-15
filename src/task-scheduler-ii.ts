export function taskSchedulerII(tasks: number[], space: number): number {
  // dictionary to hold the earliest day one can complete the next task for a
  // given task type.
  const waitDays: Record<number, number> = {};
  let date = 0;
  let j = 0;
  while (j < tasks.length) {
    const task = tasks[j];
    date = Math.max((waitDays[task] ?? -Infinity) + space + 1, date + 1);
    waitDays[task] = date;
    j++;
  }

  return date;
}
