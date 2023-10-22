/**
 * Script to pull data from the leetcode patterns github repo.
 */
import { stringify } from "csv-stringify/sync";
import { writeFile } from "fs/promises";

type Company = {
  name: string;
  slug: string;
  frequency: number;
};

type Data = {
  id: number;
  title: string;
  slug: string;
  pattern: string[];
  difficulty: string;
  premium: boolean;
  companies: Company[];
};

type JSONData = {
  updated: string;
  data: Data[];
};

const main = async () => {
  const raw = await fetch(
    "https://raw.githubusercontent.com/seanprashad/leetcode-patterns/main/src/data/questions.json"
  );
  const json: JSONData = await raw.json();

  // format into csv-like data
  const rows = json["data"]
    .filter((row) => row.premium === false)
    .map((row) => {
      const { difficulty, title, companies, pattern, slug } = row;
      const numCompanies = companies.length;
      const totalFrequency = companies.reduce((acc, curr) => {
        return acc + curr.frequency;
      }, 0);
      const url = `https://leetcode.com/problems/${slug}`;
      return [
        title,
        slug,
        url,
        difficulty,
        pattern[0],
        numCompanies,
        totalFrequency,
      ];
    });

  const outputString = stringify(rows, {
    columns: [
      "title",
      "slug",
      "url",
      "difficulty",
      "pattern",
      "numCompanies",
      "totalFrequency",
    ],
    header: true,
    delimiter: ",",
  });

  await writeFile("./leetcode-patterns.csv", outputString);
};

main();
