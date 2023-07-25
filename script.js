let lock = 0
const sideNav = document.getElementById('sideNav')
function openNav(){
    if(lock == 0){
        sideNav.style.display = "block";
        lock = 1;
    }
   else{
    sideNav.style.display = "none";
    lock = 0;
   }
}