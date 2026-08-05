INSERT INTO bash (tit, term, body, tim) VALUES (
'loadJs',
'js',
'function loadJs(href) {
    const link = document.createElement("script");
    link.rel = "stylesheet";
    link.href = href;
    document.body.appendChild(link);
}',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
