// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const size = document.querySelectorAll("sizePicker");

// When size is submitted by the user, call makeGrid()


function makeGrid() {

  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let table = document.getElementById('pixelCanvas');

  console.log(height, width)
// clear table
table.innerHTML = '';
color.value = '#000000'
  for (var i=0; i<height; i++)
  {
    var tr=document.createElement('tr');
    for (var j=0; j<width; j++)
    {
      // create column; table data
      var td = document.createElement('td');

      // td.onclick = function() {
      //   this.style.backgroundColor = color.value;
      // }
      td.addEventListener('click', function() {
        this.style.backgroundColor = color.value;
      }, false);

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }


}


document.getElementById('submit').addEventListener('click',function(e){
  console.log('click submit');
  makeGrid();
},false);
