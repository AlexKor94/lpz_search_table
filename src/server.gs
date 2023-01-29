const url = ""; //Link on your table

function doGet(e) {
  return loadForm();
}

function loadForm() {
  // var ss = SpreadsheetApp.openByUrl(url);
  // var ws = ss.getSheetByName("Options");
  // var lists = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();

  var tmp = HtmlService.createTemplateFromFile("index");
  // tmp.lists = lists.map(function(r){ return '<option value='+ "\"" + r[0] + "\"" + '>'+ r[0]; + '</option>' }).join("");
  return tmp.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getAllData(city) {
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("main");
  let data = ws.getRange(2, 1, ws.getLastRow(), 11).getValues();

  data.forEach((item, i) => {
    item.push(i);
  });

  let newArr = data.filter(
    (item) => item[2].toUpperCase() == city.toUpperCase()
  );
  return newArr;
}

function updateData(id, obj) {
  try {
    let ss = SpreadsheetApp.openByUrl(url);
    let ws = ss.getSheetByName("main");
    ws.getRange(id, 1).setValue(obj.nameLegal);
    ws.getRange(id, 2).setValue(obj.name);
    ws.getRange(id, 3).setValue(obj.city);
    ws.getRange(id, 4).setValue(obj.region);
    ws.getRange(id, 5).setValue(obj.address);
    ws.getRange(id, 6).setValue(obj.area);
    ws.getRange(id, 7).setValue(obj.type);
    ws.getRange(id, 8).setValue(obj.category);
    ws.getRange(id, 9).setValue(obj.cost);
    ws.getRange(id, 10).setValue(obj.contactInfo);
    ws.getRange(id, 11).setValue(obj.moreInfo);
    return "Дані оновлено успішно!";
  } catch (err) {
    return `Дані не оновлено відбувся збій!, детально: ${err}`;
  }
}

function addNewRod(data) {
  try {
    let ss = SpreadsheetApp.openByUrl(url);
    let ws = ss.getSheetByName("main");
    ws.appendRow(data);
    return "Дані оновлено успішно!";
  } catch (err) {
    return `Дані не оновлено відбувся збій!, детально: ${err}`;
  }
}

function deleteRow(id) {
  try {
    let ss = SpreadsheetApp.openByUrl(url);
    let ws = ss.getSheetByName("main");
    ws.deleteRow(id);
    return "Дані оновлено успішно!";
  } catch (err) {
    return `Дані не оновлено відбувся збій!, детально: ${err}`;
  }
}

function getCityes() {
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("main");
  let arr = ws.getRange(2, 3, ws.getLastRow(), 1).getValues();
  let newArray = arr.flat();
  let cityes = removeDuplicates(newArray);
  return cityes;
}

function removeDuplicates(arr) {
  let a = [];
  arr.map((x) => (!a.includes(x.toUpperCase()) ? a.push(x.toUpperCase()) : ""));
  return a;
}
