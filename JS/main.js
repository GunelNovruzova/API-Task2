function Cook(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange =function(){
       
        if(this.readyState===4 && this.status===200){
           
             var text=JSON.parse(this.responseText)
             var a="";
          text.meals.forEach((user) => {
              a+=`
              <div ">
              
              <img src="${user.strMealThumb}" alt="">
              <h6>${user.strArea}</h6>
              <p></p>
               
               </div>`;
              
          });
        
        }
           
    
        document.querySelector('#meal').innerHTML=a
    }
    xhr.open('GET','https://www.themealdb.com/api/json/v1/1/random.php')
    xhr.send()
    
}
