// // Part one
// const csvString = `name,age,city
// John,25,New York
// Jane,30,Los Angeles
// Doe,22,Chicago`;

// // Splitting the CSV string into rows
// const rows = csvString.split('\n');


// const headers = rows[0].split(',');

// // Initializing an empty array to store the parsed data
// const result = [];

// // Looping through the remaining rows
// for (let i = 1; i < rows.length; i++) {
//     // Splitting the current row into values
//     const values = rows[i].split(',');

//     // Initialize an empty object to store the row data
//     const obj = {};

//     // Loop through the headers and assigning the corresponding values
//     for (let j = 0; j < headers.length; j++) {
//         obj[headers[j].trim()] = values[j].trim();
//     }

//     // Add the object to the result array
//     result.push(obj);
// }

// // Printing the parsed data
// console.log(result);


// Part 2
// const csvString = `ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26`;
// // Part 2
// const rows = csvString.split('\n');
// const headers = rows[0].split(',');
// const numOfColumns = headers.length;
// const result = [];

// result.push(headers.map(header => header.trim()));

// for (let i = 1; i < rows.length; i++) {
//     const values = rows[i].split(',');
//     const rowArray = [];

//     for (let j = 0; j < numOfColumns; j++) {
//         rowArray.push(values[j].trim());
//     }
//     result.push(rowArray);
// }

// const cachedResult = result;

// // Printing the parsed data
// console.log(cachedResult);



const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
// Part 3: Parse the CSV string
const rows = csvString.split('\n');
const headers = rows[0].split(',');
const numOfColumns = headers.length;
const result = [];
result.push(headers.map(header => header.trim()));
for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const rowArray = [];
    for (let j = 0; j < numOfColumns; j++) {
        rowArray.push(values[j].trim());
    }
    result.push(rowArray);
}
console.log("Parsed CSV Data:", result);
// Transforming data into an array of objects
const objectHeaders = result[0].map(header => header.trim().toLowerCase());
const transformedData = [];
for (let i = 1; i < result.length; i++) {
    const obj = {};
    for (let j = 0; j < objectHeaders.length; j++) {
        obj[objectHeaders[j]] = result[i][j].trim();
    }
    transformedData.push(obj);
}
console.log("Transformed Data:", transformedData);
// Part 4: Sorting and manipulating data
// Remove the last element from the sorted array
transformedData.pop();
// Insert the object at index 1
transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
// Add the object to the end of the array
transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("Manipulated Data:", transformedData);
// Calculate the average age of the group
let totalAge = 0;
for (let i = 0; i < transformedData.length; i++) {
    totalAge += parseInt(transformedData[i].age);
}
const averageAge = totalAge / transformedData.length;
console.log("Average Age:", averageAge);
// Part 5: Transform the final set of data back into CSV format
// Create headers from the keys of the first object
const csvHeaders = Object.keys(transformedData[0]).join(',');
// Create rows for each object
const csvRows = transformedData.map(obj => {
    return Object.values(obj).join(',');
});
// Combine headers and rows into a CSV string
const finalCsvString = [csvHeaders, ...csvRows].join('\n');
console.log("Final CSV Data:\n", finalCsvString);