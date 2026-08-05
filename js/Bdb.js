async function rd() {
  const initSqlJs = window.initSqlJs
  const SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
  })

  const response = await fetch('/db/bash.db')
  const buffer = await response.arrayBuffer()

  const db = new SQL.Database(new Uint8Array(buffer))

  const stmt = db.prepare("SELECT * FROM bash WHERE term=?")
  stmt.get("bash")

  const res = []
  while (stmt.step()) {
    const row = stmt.getAsObject()
    res.push(row)
  }

  stmt.free()
  db.close()

  console.log('result:', res)
  return res
}

rd()
