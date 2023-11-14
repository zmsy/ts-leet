/**
 * In a special ranking system, each voter gives a rank from highest to lowest
 * to all teams participating in the competition.
 *
 * The ordering of teams is decided by who received the most position-one votes.
 * If two or more teams tie in the first position, we consider the second
 * position to resolve the conflict, if they tie again, we continue this process
 * until the ties are resolved. If two or more teams are still tied after
 * considering all positions, we rank them alphabetically based on their team
 * letter.
 *
 * You are given an array of strings votes which is the votes of all voters in
 * the ranking systems. Sort all teams according to the ranking system described
 * above.
 *
 * Return a string of all teams sorted by the ranking system.
 */
export function rankTeams(votes: string[]): string {
  if (votes.length === 1) {
    return votes[0];
  }

  const teamCount = votes[0].length;
  const counts: Record<string, number[]> = {};
  for (const team of votes[0]) {
    // add empty array for each team
    counts[team] = new Array(teamCount).fill(0);
  }

  for (const vote of votes) {
    [...vote].forEach((vote, idx) => {
      counts[vote] ??= [];
      counts[vote][idx] ??= 0;
      counts[vote][idx] += 1;
    });
  }

  const sortTeams = (a: string, b: string): number => {
    for (let i = 0; i < teamCount; i++) {
      const aCount = counts[a][i];
      const bCount = counts[b][i];
      if (aCount > bCount) {
        return -1; // sort the better versions earlier
      } else if (aCount < bCount) {
        return 1;
      }
      // if they're even, iterate to the next one.
    }

    return a.localeCompare(b);
  };

  return Object.keys(counts).sort(sortTeams).join("");
}
