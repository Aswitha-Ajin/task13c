var div=document.createElement("div");
div.style.textAlign="left";
div.style.fontFamily="Tahoma, Verdana, sans-serif ";
div.style.color="purple";


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","rest");
input.setAttribute("placeholder","Enter id number");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-outline info");
button.innerHTML="Search";
button.addEventListener("click",foo);

let nameid=document.createElement("div");
nameid.setAttribute("id","nameid");

div.append(input,button,nameid);
document.body.append(div);

async function foo(){
let res=document.getElementById("rest").value;
var url=`https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=${res}`;
let result=await fetch(url);
let result1=await result.json();
for(var i in result1)
console.log( result1[i].name);
nameid.innerHTML=`<div class="card border-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${result1[i].name}</div>
<div class="card-body text-dark">
  
  <h5 class="card-title">Gender:${result1[i].gender}</h5>
  <h5 class="card-title">HairColor:${result1[i].hairColor}</h5>
  <h5 class="card-title">Occupation:${result1[i].occupation}</h5>
  <h5 class="card-title">FirstEpisode:${result1[i].firstEpisode}</h5>
  <h5 class="card-title">VoicedBy:${result1[i].voicedBy}</h5>
  <h5 class="card-title">Link:${result1[i].url}</h5>
  <p class="card-text"></p>
</div>
</div>`;

}
{/* <div class="container">
<div class="row">
  <div class="col-md-4">voicedBy
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${result1[i].name}</h5>
        
        
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${result1[i].gender}</h5>
        
        
      </div>
    </div>
  </div>

 <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${result1[i].occupation}</h5>
        
       
      </div>
    </div>
  </div>
 </div>
 </div>
</div> */}
