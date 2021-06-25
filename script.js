fetch('db/skills.json')
 .then(data => data.json())
 .then(json => {   
   let dl=document.createElement('dl');
   dl.classList.add('skills-list');
 
   json.forEach((element) => {
       let dt=document.createElement("dt");
       let dd=document.createElement("dd");
       let div=document.createElement("div");
      dt.classList.add(element.cssclass);
     dt.textContent = element.skillname;
      dd.classList.add("level");
      div.style.width = element.lvl + '%';
      dd.append(div);
      dl.append(dt);
      dl.append(dd);
     })
     document.getElementById('skills').append(dl); 	  
})
 .catch(() => console.error("упс, что-то пошло не так"));

