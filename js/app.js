

// LOAD HEADER AND FOOTER TEMPLATE FOR PAGES
let siteHeader = `
<div class="header-container">
   <div class="logo-image-wrapper">
      <img src="/images/pngwing.com.png" alt="logo image" srcset="">
   </div>
   <div class="logo-text-wrapper">
      <h1>Odin Recipes</h1>
   </div>
   <!-- <hr> -->
</div>
`;

let siteFooter = `
<div class="footer-container">
   <div class="project-source-wrapper">
      <img src="/images/odin-project-logo.png" alt="" srcset="">
   </div>
   <div class="my-info-wrapper">
      <p>Site coded by:<a href="http://www.rudolphmims.com"> Rudolph Mims</a></p>
   </div>
</div>
`;
document.getElementById("site-header_import").innerHTML = siteHeader;
document.getElementById("site-footer_import").innerHTML = siteFooter;
console.log(siteHeader);