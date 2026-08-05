async function rd(searchTerm) {
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
    stmt.bind([searchTerm]);

    const res = [];
    while (stmt.step()) {
        const row = stmt.getAsObject();
        res.push(row);
    }

    stmt.free();
    db.close();

    console.log('result:', res);

    // Return the result to element with id 'Qbash'
    const targetElement = document.getElementById('Qjs');
    if (targetElement) {
        targetElement.textContent = JSON.stringify(res, null, 2);
    }

    //return res;
const tbody = document.getElementById('tab');

    data.forEach(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><strong>${item.tit}</strong></td>
            <td><span class="badge bg-secondary">${item.term}</span></td>
            <td><pre class="mb-0"><code>${item.body}</code></pre></td>
            <td><small class="text-muted">${item.tim}</small></td>
        `;

        tbody.appendChild(tr);
    });

}

window.addEventListener('load', () => {
rd("js");
});
