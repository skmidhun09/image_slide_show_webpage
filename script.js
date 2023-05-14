var images = 6;
var imageInFrame = 4;
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
var imageWidth = '100px';
var imageHeight = '100px';
var widthVar = 100;
var heightVar = 100;
if(pageWidth > pageHeight){
	widthVar = Math.floor(pageWidth/4);
}else{
	widthVar = pageWidth;
	imageInFrame = 1;
}
heightVar = Math.floor(widthVar * 3/4);
imageWidth = String(widthVar) + 'px';
imageHeight = String(heightVar) + 'px';
var pos = 0;
for(let j = 0; j<imageInFrame; j++){
	const newDiv = document.createElement('div');
	newDiv.id = "myDiv" + j;
	newDiv.classList.add('image-container');
	newDiv.style.height = imageHeight;
	newDiv.style.width = imageWidth;
	newDiv.style.left = String(pos) + 'px';
	document.body.appendChild(newDiv);
	pos = pos + widthVar;
}
// Get the stylesheet object
const stylesheet = document.styleSheets[0];

// Create the @keyframes rule

let keyframes1 = `@keyframes slideshow1 {`;
let keyframes2 = `@keyframes slideshow2 {`;
let keyframes3 = `@keyframes slideshow3 {`;
let keyframes4 = `@keyframes slideshow4 {`;
var inc = 0;
var incf1 = 0;
var incf2 = 0;
var incf3 = 0;
for (let i = 1; i < images + 1; i++) {
  keyframes1 += `
    ${inc}% { background-image: url("images/image${i}.jpg"); }
  `;
  inc = inc + 100/images;
  if(i > 1){
  keyframes2 += `
    ${incf1}% { background-image: url("images/image${i}.jpg"); }
  `;
   incf1 = incf1 + 100/images;
	}
  if(i > 2){
  keyframes3 += `
    ${incf2}% { background-image: url("images/image${i}.jpg"); }
  `;
   incf2 = incf2 + 100/images;  
	}
  if(i > 3){
  keyframes4 += `
    ${incf3}% { background-image: url("images/image${i}.jpg"); }
  `;
   incf3 = incf3 + 100/images; 
	}
}
for (let j = 1; j < images + 1; j++) {
   if(j <= 1){
  keyframes2 += `
    ${incf1}% { background-image: url("images/image${j}.jpg"); }
  `;
   incf1 = incf1 + 100/images;
	}
  if(j <= 2){
  keyframes3 += `
    ${incf2}% { background-image: url("images/image${j}.jpg"); }
  `;
   incf2 = incf2 + 100/images;  
	}
  if(j <= 3){
  keyframes4 += `
    ${incf3}% { background-image: url("images/image${j}.jpg"); }
  `;
   incf3 = incf3 + 100/images; 
	}
}
keyframes1 += `}`;
keyframes2 += `}`;
keyframes3 += `}`;
keyframes4 += `}`;
// Add the @keyframes rule to the stylesheet
stylesheet.insertRule(keyframes1, stylesheet.cssRules.length);
stylesheet.insertRule(keyframes2, stylesheet.cssRules.length);
stylesheet.insertRule(keyframes3, stylesheet.cssRules.length);
stylesheet.insertRule(keyframes4, stylesheet.cssRules.length);