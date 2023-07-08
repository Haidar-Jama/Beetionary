
const LearnBoxes = document.querySelector(".boxes");


const getWordFromLocalStorage =  () =>{
     let arraywords = JSON.parse(localStorage.getItem("words")) 
        
      return arraywords  ? JSON.parse(localStorage.getItem("words"))
       : [];
     }  





const displayData =()=>{
     const data =getWordFromLocalStorage();

     data.forEach(result => {
          LearnBoxes.innerHTML += `   
           <div class="box">
          <h3 >${result.word}</h3>
     <div class="definition">
          <h2>definition</h2>
          <p>${result.definition}</p>
     </div>

     <div class="examples">
          <h2>examples</h2>
          <p>${result.examples[0]}</p>
          <p>${result.examples[1]}</p>
          
     </div>
     <div class="synonyms">
          <h2>synonyms</h2>
          <p>${result.synonyms}</p>
          
     </div>
     <div class="antonyms">
          <h2>antonyms</h2>
          <p>${result.antonyms}</p>
     </div>

   
</div> `
// const deleteData = () =>{
//      let dData = this.data.indexof(data)
//      console.log(dData);

// } 
         
removeBtn = document.querySelector("#removeBtn") 
   
removeBtn.addEventListener('click',(e)=>{
     deleteData()

 })

          
     });
} ;

displayData()