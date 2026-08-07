INSERT INTO bash (tit, term, body, tim) VALUES (
'loadJs',
'js',
'function loadJs(href) {
    const link = document.createElement("script")<br>;
    link.rel = "stylesheet"<br>;
    link.href = href<br>;
    document.body.appendChild(link)<br>;
}',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
