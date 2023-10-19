fetch('members data.json')
 .then(response => response.json())
 .then(data => {

  addmember = ()=> {
    const num = document.getElementById("num").value;
    const name = document.getElementById("name").value;
    const arrears = document.getElementById("arrears").value;
    const status = document.getElementById("status").value;
    const id = document.getElementById("id").value;

    const newdata = {
      "id": `${id.value}`,
      "reg": `${num.value}`,
      "name": `${name.value}`,
      "arrears": `${arrears.value}`,
      "status": `${status.value}`
    }
   data.push(newdata);

   }

 const valu = data[0].name;
 
 console.log(valu);

   const select = document.getElementById('members');

   data.forEach(members => {
     const option = document.createElement('option');
     option.text = members.name;
     select.appendChild(option);
   });

   


  data.forEach(show =>{
    const table = document.getElementById("all-members-data-table");
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    
    cell1.innerHTML = show.id;
    cell2.innerHTML = show.reg;
    cell3.innerHTML = show.name;
    cell4.innerHTML = show.arrears;
    cell5.innerHTML = show.status;

  })

   var selected_member = document.getElementById("members");

   showdata = ()=> {
    var selected_member = document.getElementById("members");
    
    if(selected_member.value == "Sindh GTC"){
        document.getElementById("show_reg_num").innerHTML = data[0].reg;
        document.getElementById("show_trans_name").innerHTML = data[0].name;
        document.getElementById("show_arrears").innerHTML = data[0].arrears;
        document.getElementById("show_status").innerHTML = data[0].status;
    }
    else{
        document.getElementById("show_reg_num").innerHTML = "";
        document.getElementById("show_reg_num").innerHTML = "";
        document.getElementById("show_reg_num").innerHTML = "";
        document.getElementById("show_reg_num").innerHTML = "";    
    }
 }


 })
 .catch(error => console.error('Error fetching data:', error));

 function show_dashboard (){
  document.getElementById("dashboard").style.display ="block";
  document.getElementById("members-data").style.display ="none";
  document.getElementById("letter-indexing").style.display ="none";
  document.getElementById("event-reminder").style.display = "none";
  document.getElementById("setting").style.display ="none";
  document.getElementById("reports").style.display = "none";
}

function show_reports (){
  document.getElementById("reports").style.display = "block";
  document.getElementById("dashboard").style.display ="none";
  document.getElementById("members-data").style.display ="none";
  document.getElementById("letter-indexing").style.display ="none";
  document.getElementById("event-reminder").style.display = "none";
  document.getElementById("setting").style.display ="none";
}

 function show_members_data (){
    document.getElementById("members-data").style.display ="block";
    document.getElementById("letter-indexing").style.display ="none";
    document.getElementById("event-reminder").style.display = "none";
    document.getElementById("dashboard").style.display ="none";
    document.getElementById("setting").style.display ="none";
    document.getElementById("reports").style.display = "none";
 }


 function show_event_reminder (){
  document.getElementById("members-data").style.display ="none";
  document.getElementById("letter-indexing").style.display ="none";
  document.getElementById("event-reminder").style.display = "block";
  document.getElementById("dashboard").style.display ="none";
  document.getElementById("setting").style.display ="none";
  document.getElementById("reports").style.display = "none";
}

 function show_letter_indexing (){
  document.getElementById("members-data").style.display ="none";
  document.getElementById("letter-indexing").style.display ="block";
  document.getElementById("event-reminder").style.display = "none";
  document.getElementById("dashboard").style.display ="none";
  document.getElementById("setting").style.display ="none";
  document.getElementById("reports").style.display = "none";
 }

 function show_setting (){
  document.getElementById("setting").style.display ="block";
  document.getElementById("members-data").style.display ="none";
  document.getElementById("letter-indexing").style.display ="none";
  document.getElementById("event-reminder").style.display = "none";
  document.getElementById("dashboard").style.display ="none";
  document.getElementById("reports").style.display = "none";
}

 function show_all_members_data (){
  const show = document.getElementById("all-members-data-table");
  const btn = document.getElementById("show-hide-btn");
  if(show.style.display == "block"){
    show.style.display = "none";
    btn.innerText = "Hide";
  }
  else{
    show.style.display = "block";
    btn.innerText = "Show";
  }
}
 


function findIndexByValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i; // Return the index if the value is found
    }
  }
  return -1; // Return -1 if the value is not found
}

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const valueToFind = 'Bob'; // Value to search for
const keyToSearch = 'name'; // Key to search within the objects

const index = findIndexByValue(data, keyToSearch, valueToFind);

if (index !== -1) {
  console.log(`The index of ${valueToFind} is: ${index}`);
} else {
  console.log(`${valueToFind} is not found in the array.`);
}

const login_btn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const logout_btn = document.getElementById("logout-btn");

login_btn.addEventListener("click", () => {
  if (username.value == password.value) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("body").style.display = "block";
  }
})

logout_btn.addEventListener("click",() =>{
  // document.getElementById("login-page").style.display = "block";
  // document.getElementById("body").style.display = "none";
  window.location.reload();
})

function show_user_profle (){
  const show = document.getElementById("profile-setting");
  if(show.style.display == "block"){
    show.style.display = "none";
  }
  else{
    show.style.display = "block";
  }

  
}


function dark_light_mode (){
  const btn = document.getElementById("switch");
  document.body.classList.toggle("body-mode");
}

// document.body.addEventListener("click", function(){
//   document.getElementById("profile-setting").style.display = "none";
// })

// charts

function chat_bar_counter (count_till,interval){

let count = 0;
const contain = document.getElementById("cont");

const timer = setInterval(() => {
  if (count <= count_till) {
    // console.log(count);
    contain.innerHTML = count;
    count += 1;
  } else {
    clearInterval(timer); // Stop the timer when count exceeds 100
  }
}, interval);

}
// charts end


