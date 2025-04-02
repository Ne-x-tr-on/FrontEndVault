document.addEventListener('DOMContentLoaded',()=>{
  const menu = document.getElementById("navMenu");
  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener('click',()=>{
    menu.classList.toggle('active');
  });

  document.addEventListener('click',(e)=>{
    if(!menu.contains(e.target) && !menuToggle.contains(e.target)){
      menu.classList.remove('active');
    }
  });
  
});
