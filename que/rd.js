async function rd(term,qid) {
    // Wait until initSqlJs is available on the window object
    while (typeof window.initSqlJs !== 'function') {
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    const initSqlJs = window.initSqlJs;
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    });

    const response = await fetch('/db/bash.db');
    const buffer = await response.arrayBuffer();

    const db = new SQL.Database(new Uint8Array(buffer));

    const stmt = db.prepare("SELECT * FROM bash WHERE term=?");
    stmt.bind([term]);

    const res = [];
    while (stmt.step()) {
        const row = stmt.getAsObject();
        res.push(row);
    }

    stmt.free();
    db.close();

    console.log('result:', res);

    // const targetElement = document.getElementById(qid);
    // if (targetElement) {
    //     targetElement.textContent = JSON.stringify(res, null, 2);
    // }

//return res;

const tbody = document.getElementById('tab');
res.forEach(item => {
let tit = document.createElement('tr');
let dat= document.createElement('tr');
let tr = document.createElement('tr');
tit.innerHTML = `
<td><pre class="p-2 text-white bg-warning fs-6">${item.tit}</pre></td>
`
tr.innerHTML = `
<td><textarea rows=8 cols=100 class="badge bg-primary fs-6">${item.body}</textarea></td>
`;
dat.innerHTML = `
<pre td><pre class="badge bg-secondary fs-6">${item.tim}</pre></td>
`
tbody.appendChild(tit);
tit.after(tr);
tr.after(dat);

});


}

