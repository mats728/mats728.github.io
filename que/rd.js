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
        const tit = document.createElement('tr');
        tit.innerHTML = `
        <td><pre class="badge bg-warning fs-4">${item.tit}</pre></td>
        `
        tbody.appendChild(tit);
res.forEach(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td><textarea class="badge bg-primary fs-4"><code>${item.body}</code></textarea></td>
        `;

        tit.after(tr);
        let dat= document.createElement('tr');
dat.innerHTML = `
        <pre td><pre class="badge bg-secondary fs-4">${item.tim}</pre></td>
        `
        tr.after(dat);
});

}

