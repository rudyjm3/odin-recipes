

// LOAD HEADER AND FOOTER TEMPLATE FOR PAGES
let siteHeader = `
<div class="header-container">
   <div class="logo-image-wrapper">
      <img src="images/pngwing.com.png" alt="logo image" srcset="">
   </div>
   <div class="logo-text-wrapper">
      <h1>Odin Recipes</h1>
   </div>
   <hr>
</div>
`;

document.getElementById("site-header_import").innerHTML = siteHeader;
console.log(siteHeader);