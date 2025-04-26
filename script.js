function generateTable()
{
  //aweosoemvariables
  begval = parseInt(document.getElementById('begval').value);
  endval = parseInt(document.getElementById('endval').value);
  THECHEST = document.getElementById('tableContainer');


  //ALEEEEERT
  if (begval < 2 || endval > 10 || begval > endval) {
    alert("Please enter numbers between 2 and 10.");
    return false;
  }

  let tableHTML = "<table border='1'>";


// ROOOWS
  for ( rowboat = 1; rowboat <= begval; rowboat++)
  {
    tableHTML += "<tr>";
    
    //COOOLUUMNS
    for ( downstream = 1; downstream <= endval; downstream++)
    {
      tableHTML += `<td>${rowboat * downstream}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  THECHEST.innerHTML = tableHTML;
  
  THECHEST.style.display = "block";

  return false; 
}
