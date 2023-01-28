let data;
document.addEventListener('DOMContentLoaded', () => {

  const
    legalNameFild = document.querySelector('#inputNameLegal'),
    nameFild = document.querySelector('#inputName'),
    cityFild = document.querySelector('#inputCity'),
    regionFild = document.querySelector('#inputRegion'),
    adressFild = document.querySelector('#inputAddress'),
    areaFild = document.querySelector('#inputArea'),
    typeFild = document.querySelector('#inputType'),
    catFild = document.querySelector('#inputCategory'),
    costFild = document.querySelector('#inputCost'),
    contactInfoFild = document.querySelector('#contactInfo'),
    addInfoFild = document.querySelector('#moreInfo');

  // get data from table  
  // google.script.run.withSuccessHandler(setData).getAllData();

  data = [
    ["Адонис", "Раисы Окипной", "Клиника", "категория-1", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Добробут", "Бажана", "Клиника", "категория-2", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Акипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Дила", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"],
    ["Синево", "Окипной", "Лаборатория", "Без категории", "abc", "adkfalkdf", "wirwi", "rutuiorewuiotw", "kajdfklajdklfj", "adjfakdjf", "ajdfkadjfjda"]
  ];

  setData(data);

  function setData(arr) {
    data = arr;

    const table = document.querySelector('table'),
      tbody = table.querySelector('tbody');

    class createRows {
      constructor(name, city, region, adr, area, type, category, index) {
        this.name = name;
        this.city = city;
        this.region = region;
        this.adr = adr;
        this.area = area;
        this.type = type;
        this.category = category;
        this.index = index;
      }

      render() {
        const row = document.createElement('tr');
        row.setAttribute('data-index', this.index);
        row.innerHTML = `
  <td scope="col">${this.name}</td>
  <td scope="col">${this.city}</td>
  <td scope="col">${this.region}</td>
  <td scope="col">${this.adr}</td>
  <td scope="col">${this.area}</td>
  <td scope="col">${this.type}</td>
  <td scope="col">${this.category}</td>`;
        tbody.append(row);
      }
    }

    data.forEach((element, i) => {
      new createRows(element[1], element[2], element[3], element[4], element[5], element[6], element[7], i).render();
    });

    // click on the row
    $('.results tr').click(function (e) {
      let index = $(e.target.parentNode).attr('data-index');

      legalNameFild.value = data[index][0];
      nameFild.value = data[index][1];
      cityFild.value = data[index][2];
      regionFild.value = data[index][3];
      adressFild.value = data[index][4];
      areaFild.value = data[index][5];
      typeFild.value = data[index][6];
      catFild.value = data[index][7];
      costFild.value = data[index][8];
      contactInfoFild.value = data[index][9];
      addInfoFild.value = data[index][10];

      // console.log(index);
      // console.log(data[index][0]);

    });
  }

  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    $.extend($.expr[':'], {
      'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });

    $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'false');
    });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
      $(this).attr('visible', 'true');
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

    if (jobCount == '0') { $('.no-result').show(); }
    else { $('.no-result').hide(); }
  });


});

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.querySelector('table');
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    if (rows.length > 100) {
      console.log('too many rows');
      return 'too many rows';
    }
    console.log('sorted');
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
  set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



