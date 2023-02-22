let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let greyscale = document.getElementById("greyscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");

let img = document.getElementById("img");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let reset = document.querySelector("span");
let imgbox = document.getElementsByClassName(".img-box");
let canvas=document.getElementById("canvas")
let ctx = canvas.getContext("2d")

window.onload = function () {
  imgbox.style.display = "none";
};

upload.onchange = function () {
  resetvalue()
  let f = new FileReader();
  f.readAsDataURL(upload.files[0]);
  f.onload = function () {
    img.src=f.result
  };

  img.onload=function(){
    canvas.width=img.width
    canvas.height=img.height
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    img.style.display='none'
  }

  download.style.display = "block";
  reset.style.display = "block";
  imgbox.style.display = "block";
};


let AllFilters = document.querySelectorAll("ul li input")
AllFilters.forEach(f=>{
  f.addEventListener("input",function(){
   ctx.filter= `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${greyscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)

    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
  })
})

function resetvalue (){
  ctx.filter='none'
  saturate.value='100'
  contrast.value='100'
  brightness.value='100'
  sepia.value='0'
  greyscale.value='0'
  blur.value='0'
  huerotate.value='0'
  ctx.drawImage(img,0,0,canvas.width,canvas.height)
}



download.onclick=function(){
  download.href=canvas.toDataURL()
}





