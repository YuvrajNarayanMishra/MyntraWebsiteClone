function checkcredentials() {

  let form = document.getElementById("login");
  let mobileno = form.mobileno.value;
  let password = form.password.value;


  const JSON_obj =[
   {
    "name":"Yuvraj",
    "age":30,
    "Mobileno":"6388207798",
    "Password":"rain"
   },
   {
    "name":"Muskan",
    "age":30,
    "Mobileno":"6388207799",
    "Password":"sun"
   }
];

let flag=0;
for(let i=0; i<JSON_obj.length;i++)
{
  if (JSON_obj[i].Mobileno === mobileno && JSON_obj[i].Password === password) {
    window.location.href = "bag.html"
    flag=1;
    return;
  }
}
if(flag==0)
{
  let div = document.createElement("div");
  div.innerHTML = "Invalid Mobile Number or Password"
  let alert = document.getElementById("alert");
  alert.innerHTML = null;
  alert.append(div);

}

  }
function signinpage() {
  window.location.href = "signin.html";
}