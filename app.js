const select = document.querySelector("select");
const inputAll = document.querySelectorAll("input");
let myImg = document.querySelector("img");
let textAra = document.querySelector("textarea");

console.log(inputAll);
let urlObj = {}

const removeHashTag = (str) => {
    return str.replace("#","")
}

const plusAdd = (str)=>{
   return str.split(' ').join('+');
}

function createImagePath() {

   urlObj.size = select.value; 
   urlObj.text = plusAdd(inputAll[0].value); 
   urlObj.bgClr = removeHashTag(inputAll[1].value); 
   urlObj.textClr = removeHashTag(inputAll[2].value); 


  let urlPath = `http://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.textClr}?text=${urlObj.text}`;
  textAra.value = urlPath;
  myImg.src = urlPath;

  textAra.focus();
  textAra.select();

  navigator.clipboard.writeText(textAra.value)
  .then(()=>{
    console.log('text copied');
  }).catch((err)=>{console.error(err);})
}

inputAll.forEach((curElm)=> curElm.addEventListener("change", createImagePath));
select.addEventListener("change", createImagePath);
