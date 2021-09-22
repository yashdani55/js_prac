 let name1=document.getElementById('n');
 let age=document.getElementById('a');
 let email=document.getElementById('e');
 let form=document.querySelector('form');
 let names;
 let ages;
 let emails;
 let records=document.querySelector('#disp-records');
 let stored_names=JSON.parse(localStorage.getItem('Name'));
 let stored_ages=JSON.parse(localStorage.getItem('Age'));
 let stored_emails=JSON.parse(localStorage.getItem('Email'));
 records.style.display='';
 
     if (stored_names){
         records.innerHTML="<tr><th>Name</th><th>Age</th><th>Email</th><th>Delete</th></tr>"
         let delete_button=document.createElement('button');
      
         let limit=stored_names.length;
         for(let i=0;i<limit;i++){
                let tr=document.createElement('tr');
                 tr.innerHTML=`<td>${stored_names[i]}</td><td>${stored_ages[i]}</td><td>${stored_emails[i]}</td><td><button class="delete-item" onclick="delete_rec()">Delete</button>`;
                 records.appendChild(tr);
         }    
         let delete_all=document.createElement('div');
         delete_all.innerHTML='<button onclick="delete_all()">DELETE ALL RECORDS</button>'
         records.appendChild(delete_all);
    }
     else{
         records.innerHTML='<h3>NO RECORDS PRESENT</h3>';
    }
     

     form.addEventListener('submit',function(e){
         e.preventDefault();
         if (localStorage.getItem('Name')===null){
             names=[];
         }
         else{
             names=JSON.parse(localStorage.getItem('Name'));
         }
         if(localStorage.getItem('Age')===null){
             ages=[]
         }
         else{
             ages=JSON.parse(localStorage.getItem('Age'));
         }
         if(localStorage.getItem('Email')===null){
             emails=[]
         }
         else{
             emails=JSON.parse(localStorage.getItem('Email'));
         }
         names.push(name1.value);
         ages.push(age.value);
         emails.push(email.value);
         localStorage.setItem('Name',JSON.stringify(names));
         localStorage.setItem('Age',JSON.stringify(ages));
        localStorage.setItem('Email',JSON.stringify(emails));
         records.style.display='';
     records.innerHTML="<tr><th>Name</th><th>Age</th><th>Email</th></tr>"
     delete_button=document.createElement('button');
     stored_names=JSON.parse(localStorage.getItem('Name'));
     stored_ages=JSON.parse(localStorage.getItem('Age'));
     stored_emails=JSON.parse(localStorage.getItem('Email'));
     limit=stored_names.length;
     for(let i=0;i<limit;i++){
             let tr=document.createElement('tr');
             tr.innerHTML=`<td>${stored_names[i]}</td><td>${stored_ages[i]}</td><td>${stored_emails[i]}</td><td><button class="delete-item" onclick='delete_rec'>Delete</button>`;
             records.appendChild(tr);
     }
     let delete_all=document.createElement('div');
         delete_all.innerHTML='<button onclick="delete_all()">DELETE ALL RECORDS</button>'
         records.appendChild(delete_all);
     }
    
    

     )
    //  records.addEventListener('click',delete_rec);

 function delete_all()
 {
     localStorage.removeItem('Name');
     localStorage.removeItem('Age');
     localStorage.removeItem('Email');
     records.innerHTML='<h3>NO RECORDS PRESENT</h3>';   
 }
function delete_rec(e){
    let item=document.querySelectorAll('delete-item');
    console.log(item);  
    item.map(function(i){  
        i.addEventListener('click',del);})
    function del(e){
        console.log(e.target.value)
    }
    // console.log(e.target);
    // if (e.target.classList.contains('delete-item')){
    //     console.log(e.target.classList.contains('delete-item'));
    // }
    
    // e.target.parentElement.style.display='none';

}