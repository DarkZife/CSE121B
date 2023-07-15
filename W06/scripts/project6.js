function createScoreTable() {
  var playerNamesInput = document.getElementById('playerNames');
  var playerNames = playerNamesInput.value.split(',');
  var roundCountInput = document.getElementById('roundCount');
  var roundCount = parseInt(roundCountInput.value);

  var scoreTable = document.getElementById('scoreTable');
  var tableBody = scoreTable.getElementsByTagName('tbody')[0];

  // Clear previous table rows
  while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
  }

  // Add rows for each player
  playerNames.forEach(function (playerName) {
      var row = document.createElement('tr');
      var nameCell = document.createElement('td');
      var totalCell = document.createElement('td');

      nameCell.textContent = playerName.trim();
      totalCell.textContent = 0;

      row.appendChild(nameCell);
      row.appendChild(totalCell);
      tableBody.appendChild(row);
  });

  // Add round columns
  var roundHeaderRow = document.createElement('tr');
  var roundTotalCells = [];

  roundHeaderRow.innerHTML = '<th>Player Name</th><th>Total</th>';
  for (var i = 1; i <= roundCount; i++) {
      var th = document.createElement('th');
      th.textContent = 'Round ' + i;
      roundHeaderRow.appendChild(th);

      var totalCell = document.createElement('td');
      totalCell.textContent = 0;
      roundTotalCells.push(totalCell);
  }
  tableBody.appendChild(roundHeaderRow);

  // Update player totals for each round
  var playerRows = Array.from(tableBody.querySelectorAll('tr')).slice(0, -1);
  playerRows.forEach(function (row) {
      var roundCells = [];

      for (var i = 0; i < roundCount; i++) {
          var roundCell = document.createElement('td');
          var scoreInput = document.createElement('input');
          scoreInput.type = 'number';
          scoreInput.min = 0;
          scoreInput.value = 0;
          scoreInput.oninput = updatePlayerTotal.bind(null, row, roundTotalCells);

          roundCell.appendChild(scoreInput);
          roundCells.push(roundCell);
      }

      row.append(...roundCells);
  });

  // Clear player names input
  playerNamesInput.value = '';
}

function updatePlayerTotal(row, roundTotalCells) {
  var scoreInputs = row.querySelectorAll('input[type="number"]');
  var totalCell = row.querySelector('td:nth-child(2)');
  var totalScore = 0;

  scoreInputs.forEach(function (scoreInput, index) {
      var score = parseInt(scoreInput.value) || 0;
      totalScore += score;
      roundTotalCells[index].textContent = parseInt(roundTotalCells[index].textContent) + score;
  });

  totalCell.textContent = totalScore;
}
