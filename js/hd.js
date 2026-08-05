// Helper function to load stylesheets
function loadStylesheet(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

// Helper function to load scripts
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script); // or document.head.appendChild(script)
}

// 1. Meta and Favicon
const viewportMeta = document.createElement('meta');
viewportMeta.name = 'viewport';
viewportMeta.content = 'width=device-width,initial-scale=1.0,minimum-scale=1.0';
document.head.appendChild(viewportMeta);

const favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.href = 'img/favicon.ico';
favicon.type = 'image/x-icon';
document.head.appendChild(favicon);

// 2. Stylesheets
loadStylesheet('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
loadStylesheet('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/8.1.0/mdb.min.css');

// 3. Scripts
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
loadScript('https://cdn.jsdelivr.net/gh/botaro/blo@main/js/ini.js');
loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js');
