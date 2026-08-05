document.addEventListener('DOMContentLoaded', () => {
let navContainer = document.getElementById('nav');

let navbarHTML = `
<div class=container-fluid>
<ul class="bg-info navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">

<li class="nav-item">
<a class="navbar-brand d-flex align-items-center me-auto" href="index.html">
<img src="img/g2.png" alt="Blue Beard" class="d-inline-block align-text-top me-2" style="max-height: 40px;">
<span class="fw-bold">bash</span>
</a>
</li>

<li class="bg-primary nav-item">
<a class="nav-link text-white fw-medium" href="bash.htm">bash</a>
</li>
<li class="bg-secondary nav-item">
<a class="nav-link text-white fw-medium" href="cmd.htm">cmd</a>
</li>
<li class="bg-warning nav-item">
<a class="nav-link text-white fw-medium" href="db.htm">db</a>
</li>
<li class="bg-danger nav-item">
<a class="nav-link text-white fw-medium" href="htm.htm">htm</a>
</li>
<li class="bg-success nav-item">
<a class="nav-link text-white fw-medium" href="js.htm">js</a>
</li>

</ul>
</div>
`;

if (navContainer) {navContainer.innerHTML = navbarHTML;}
});
