const searchElement = document.querySelector("#searchElement");
const searchBtn = document.querySelector("#searchBtn")
const boxes = document.querySelector(".boxes");
const select = document.querySelector("select");
const listCard = document.querySelector(".listCard");
const list = document.querySelector(".list");





 const getWordFromLocalStorage =  () =>{
 let arraywords = JSON.parse(localStorage.getItem("words")) 
    
  return arraywords  ? JSON.parse(localStorage.getItem("words"))
   : [];
 }  
 
 
 


const displayALL = (result) => {
      console.log(result);
               boxes.innerHTML =`
                <div class="box">
               <h3 >${result[0].word}</h3>
          <div class="definition">
               <h2>definition</h2>
               <p>${result[0].definition}</p>
          </div>
     
          <div class="examples">
               <h2>examples</h2>
               <p>${result[0].examples[0]}</p>
               <p>${result[0].examples[1]}</p>
               
          </div>
          <div class="synonyms">
               <h2>synonyms</h2>
               <p>${result[0].synonyms}</p>
               
          </div>
          <div class="antonyms">
               <h2>antonyms</h2>
               <p>${result[0].antonyms}</p>
          </div>

          <button id="learnedBtn">learned</button> 
     </div> 
     `
     

     const lastData = {
          "word" : result[0].word ,
		"definition": result[0].definition,
		"examples": [
               result[0].examples[0] ,result[0].examples[1]
          ],
	
		"synonyms":[
               result[0].synonyms[0] ,result[0].synonyms[1],result[0].synonyms[2]
          ],

		"antonyms":[
               result[0].antonyms[0] ,result[0].antonyms[1],result[0].antonyms[2]
          ]
     }      

     
    
     learnedBtn = document.querySelector("#learnedBtn") 
   
     learnedBtn.addEventListener('click',(e)=>{

          let data = getWordFromLocalStorage() ;

          if(data.some((w) => w.word == searchElement.value)){
               swal("this word is already In the learned list  !");
               searchElement.value =""
               select.value= ""
               boxes.innerHTML=""
               return ;
          } else {
               data.push(lastData)
               localStorage.setItem("words",JSON.stringify(data))
               searchElement.value =""
               select.value= ""
               boxes.innerHTML=""
               
          }
          
          

          
           }) ;   
}





const displayDif = (result) => {

     result.forEach(word => { 
               boxes.innerHTML =`
                <div class="box">
               <h3 >${word.word}</h3>
          <div class="definition">
               <h2>definition</h2>
               <p>${word.definition}</p>
          </div>
      `
          });

}

const displayEx = (result) => {

     result.forEach(word => { 
               boxes.innerHTML =`
                <div class="box">
               <h3 >${word.word}</h3>
               <div class="examples">
               <h2>examples</h2>
               <p>${result[0].examples[0]}</p>
               <p>${result[0].examples[1]}</p>
               
          </div>
      `
          });

}


const displaySyn = (result) => {

     result.forEach(word => { 
               boxes.innerHTML =`
                <div class="box">
               <h3 >${word.word}</h3>
               <div class="synonyms">
               <h2>synonyms</h2>
               <p>${result[0].synonyms}</p>
               
          </div>
      `
          });

}
const displayAnt = (result) => {

     result.forEach(word => { 
               boxes.innerHTML =`
                <div class="box">
               <h3 >${word.word}</h3>
               <div class="antonyms">
               <h2>antonyms</h2>
               <p>${result[0].antonyms}</p>
          </div>
      `
          });

}







searchBtn.addEventListener('click', (e)=>{
     const word = searchElement.value ;
      


      getData().then(data =>{
       
          let filterWord = data.filter ((item)=> item.word == word.toLowerCase());

          
           if(select.value === "All"){
               displayALL(filterWord)
           }
           if(select.value === "Definition"){
               displayDif(filterWord)
           }
           if(select.value === "Examples"){
               displayEx(filterWord)
           }
           if(select.value === "Synonyms"){
               displaySyn(filterWord)
           }
           if(select.value === "Antonyms"){
               displayAnt(filterWord)
           }
          
      })


  
     
});

async function getData (){
   
     let response = await fetch("words.json");
     let data = await response.json();
     return data ;


     
}
// searchElement.addEventListener ('keyup', (e) =>{
// //     console.log(e.target.value);

// if(e.target.value.length === 0) {
//      listCard.classList.add('d-none');
     
// }

 
// getData(e.target.value.trim().toLowerCase())
// .then(data =>{
       
// // console.log(data);
//    data.forEach(words => {
//      list.innerHTML =+`<h4 class="target-words">${words.word} </h4>`
//      ;
//      console.log(words.word);
//      listCard.classList.remove('d-none')    
//    })
  
     

// })
// })
  
     
    


    






