async function rd() {
  const initSqlJs = window.initSqlJs;
  const SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
  });

  const response = await fetch('/db/bash.db');
  const buffer = await response.arrayBuffer();

  const db = new SQL.Database(new Uint8Array(buffer));

  const stmt = db.prepare("SELECT * FROM bash WHERE term=?");
  // Note: stmt.get("bash") executes the query for the first row,
  // but to loop through all results with stmt.step(), use bind instead:
  stmt.bind(["js"]);

  const res = [];
  while (stmt.step()) {
    const row = stmt.getAsObject();
    res.push(row);
  }

  stmt.free();
  db.close();

  console.log('result:', res);

  // Return the result to element with id 'Bdb'
  const targetElement = document.getElementById('Qjs');
  if (targetElement) {
    targetElement.textContent = JSON.stringify(res, null, 2);
  }

  return res;
}

rd();
