

let table = document.getElementById('myTable');

 for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'yellow';
 }
