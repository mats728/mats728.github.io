document.addEventListener('DOMContentLoaded', () => {
let navContainer = document.getElementById('nav');

let navbarHTML = `
<div class=container-fluid>  
<ul class="bg-info navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">

<li class="nav-item">
<a class="navbar-brand d-flex align-items-center me-auto" href="index.html">
<img src="img/fb3.png" alt="Blue Beard" class="d-inline-block align-text-top me-2" style="max-height: 40px;">
<span class="fw-bold">Blue Beard Tom</span>
</a>
</li>

<li class="nav-item">
<a class="nav-link text-white fw-medium" href="bio.htm">Bio</a>
</li>
<li class="nav-item">
<a class="nav-link text-white fw-medium" href="vid.htm">Vid</a>
</li>
<li class="nav-item">
<a class="nav-link text-white fw-medium" href="old.htm">Old</a>
</li>

</ul>
</div>
`;

if (navContainer) {navContainer.innerHTML = navbarHTML;}
});
