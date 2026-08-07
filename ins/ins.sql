INSERT INTO bash (tit, term, body, tim) VALUES (
'loadCSS',
'js',
'function loadCSS(href) {
    const link = document.createElement("link")<br>;
    link.rel = "stylesheet"<br>;
    link.href = href<br>;
    document.head.appendChild(link)<br>;
}',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
