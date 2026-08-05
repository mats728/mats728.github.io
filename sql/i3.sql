INSERT INTO bash (tit, term, body, tim) VALUES (
'meta',
'js',
'
const viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width,initial-scale=1.0,minimum-scale=1.0";
',
STRFTIME('%Y-%m-%d-%H-%M', 'now', '+9 hours')
);
