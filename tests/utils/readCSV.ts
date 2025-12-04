import * as fs from "fs";
import csv from "csv-parser";

export async function readCSV(path: string): Promise<any[]> {
  const rows: any[] = [];

  await new Promise<void>((resolve) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data) => rows.push(data))
      .on("end", resolve);
  });

  return rows;
}
