var state = 'playerX';

// add click event to cells
var cell = document.getElementsByClassName('cell');
for(var i=0; i<cell.length; i++){
  var current = cell[i];
  // console.log(current);
  current.addEventListener("click", test);
}

function test(e){
  // variable for selected/clicked cell
  var selectedCell = e.target;
  // console.log('test!', selectedCell.id);

  var mark = document.getElementById(selectedCell.id).innerHTML;
  // if it has a mark already
  if (mark === 'X' || mark === 'O') {
    // just return without doing anything
    return;
  } else {
    if(state === 'playerX'){
      // get change the text for the selectedCell
      document.getElementById(selectedCell.id).innerHTML = 'X';
      // change color by adding class 'selected'
      selectedCell.classList.add('x');
    } else {
      document.getElementById(selectedCell.id).innerHTML = 'O';
      selectedCell.classList.add('o');
    }
  }
  // change the players' turn
  state === 'playerX' ? state = 'playerO' : state = 'playerX';

}

// function for reset the game
var reset = function () {
  // console.log('reset');
  for(var i=0; i<cell.length; i++){
    // remove all the mark from cell
    var current = cell[i];
    current.innerHTML = '';
    // remove color from cell
    if (state === 'playerX' || state === 'playerO') {
      current.classList.remove('x');
      current.classList.remove('o');
    }
    // reset the state back to playerX
    state = 'playerX';
  }

}



