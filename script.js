function requestService(service){
  document.getElementById("service").value=service;
  document.getElementById("order").scrollIntoView({behavior:"smooth"});
}
document.getElementById("requestForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const details=document.getElementById("details").value.trim() || "No additional details";
  const msg=`Hello TS Cyber Corner,%0A%0AService Request%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details)}`;
  window.open(`https://wa.me/918128943758?text=${msg}`,"_blank");
});