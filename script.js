fetch('db/skills.json')
 .then(data => data.json())
 .then(json => {   
   let a=document.createElement('dl');
   a.classList.add('skills-list');
 
   json.forEach((element) => {
       let a1=document.createElement("dt");
       let a2=document.createElement("dd");
       let a3=document.createElement("div");
      a1.classList.add(element.cssclass);
     a1.textContent = element.skillname;
      a2.classList.add("level");
      a3.style.width = element.lvl + '%';
      a2.append(a3);
      a.append(a1);
      a.append(a2);
     })
     document.getElementById('s1').append(a); 	  
})
 .catch(() => console.error("упс, что-то пошло не так"));

