INSERT INTO bash (tit, term, body, tim) VALUES (
'favicon',
'js',
'
const favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.href = "img/favicon.ico";
favicon.type = "image/x-icon";
document.head.appendChild(favicon);
',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
