import { googleFormsToJson } from "react-google-forms-hooks";
import fs from "fs";
import path from "path";

const saveJsonToFile = (filename, json) => {
  const filePath = path.resolve("src/data", filename);
  fs.writeFile(filePath, JSON.stringify(json), "utf8", function (err) {
    if (err) throw err;
  });
};

const run = async () => {
  const result = await googleFormsToJson(
    "https://docs.google.com/forms/d/e/1FAIpQLScjBAB1skbyCB-IaXWzFvIbAFRNnijzn1M7XVIeh9pYan9-uQ/viewform"
  );
  saveJsonToFile("form.json", result);
};

run();
