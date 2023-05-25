import fs from 'fs';
import csvParser from 'csv-parser';
import path from 'path';

const csvFilePath = 'C:/Users/Admin/Downloads/content - Sheet1.csv';
const outputFilePath = 'C:/Users/Admin/Downloads/content - Sheet1.csv';

const transformedData = [];

fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on('data', (row) => {
    const steps = [];
    for (let i = 1; i <= 4; i++) {
      const step = row[`step${i}`];
      if (step) {
        steps.push(step);
      }
    }
    row.steps_array = JSON.stringify(steps);
    delete row.step1;
    delete row.step2;
    delete row.step3;
    delete row.step4;
    transformedData.push(row);
  })
  .on('end', () => {
    const header = Object.keys(transformedData[0]).join(',');
    const rows = transformedData.map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`)
        .join(',')
    );
    const csvContent = [header, ...rows].join('\n');

    fs.writeFileSync(outputFilePath, csvContent);
    console.log('Transformation complete!');
  });