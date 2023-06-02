const GSheetReader = require("g-sheets-api");

const options = {
  apiKey: "AIzaSyCxluIM-oBEWGHYjPf7VZlJP1TQq0bcxRE",
  sheetId: "1IN_jB1HaHKOEce3oCwZvfh7fase0FDwdv_QHSMfpE6U",
  sheetNumber: 1,
  //sheetName: "List1",  // if sheetName is supplied, this will take precedence over sheetNumber
  returnAllResults: false,
};

GSheetReader(options, (results) => {
  // do something with the results here
  console.log("ResultS", results);
}).catch((err) => {
  // do something with the error message here
  console.log("ErroR", err);
});

/*async function getData({ sheetId, apiKey, sheetName, index = 0 }) {
  const sheetNameStr = index;
  //const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNameStr}?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=${apiKey}`;
  const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/?&key=${apiKey}`;
  const resultArray = [];

  const { values } = await fetch(sheetsUrl).then((res) =>
    res.ok ? res.json() : Promise.reject("Error in fetch")
  );
  const titles = values[0];
  for (let i = 1; i < values.length; i++) {
    resultArray.push(
      values[i].reduce((acc, item, i) => {
        acc[titles[i]] = item;
        return acc;
      }, {})
    );
  }
  return resultArray;
}

function doFilter(values, filter) {
  // В настоящее время в фильтре может быть только один ключ - значение строка или массив
  // Если массив, то к его элементам применяется условие ИЛИ
  const fieldName = Object.keys(filter)[0];
  //    console.log('filter', typeof filter[fieldName], fieldName);
  if (typeof filter[fieldName] === "object") {
    return values.filter((item) =>
      filter[fieldName].some((filterItem) => filterItem === item[fieldName])
    );
  } else {
    return values.filter((item) => item[fieldName] === filter[fieldName]);
  }
}

export async function gsheets({ filter, ...options }) {
  const values = await getData(options);
  //console.log(values, filter);
  return filter ? doFilter(values, filter) : values;
}*/
