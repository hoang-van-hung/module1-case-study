
let list =loadData();
function saveData() {
    localStorage.setItem('item',JSON.stringify(list));
    localStorage.setItem('amount',JSON.stringify(wallet));
}
function loadData() {
    if (localStorage.hasOwnProperty('item')){
        let data= JSON.parse(localStorage.getItem('item'));
        return data;
    }else {
        return [];
    }
}

/*function saveData() {
    localStorage.setItem('amount',JSON.stringify(wallet1));
}
function loadData() {
    if (localStorage.hasOwnProperty('amount')){
        let data= JSON.parse(localStorage.getItem('amount'));
        return data;
    }else {
        return [];
    }
}
let wallet =loadData()*/
let wallet1= new Wallet();
wallet1.addTotal(500000);

function displayList(){
    let str ="<tr>" +
        "<th>STT</th>" +
        "<th>Date</th>" +
        "<th>Name</th>" +
        "<th>Amount</th>" +
        "<th>Note</th>" +
        "<th colspan='2'>Action</th>" +
        "</tr>";
    for (let i = 0; i < list.length; i++) {
       str += `<tr>
                <td>${i+1}</td>
                <td>${list[i][1]}</td>
                <td>${list[i][2]}</td>
                <td>${list[i][3]}</td>
                <td>${list[i][4]}</td>
                <td><button id="UpdateList" onclick="updateItem(${i})">Update</button></td>
                <td><button id="DeleteList" onclick="deleteItem(${i})">Delete</button></td>
                </tr>`;
    }
    document.getElementById('list').innerHTML =str;
    document.getElementById('total').innerHTML=wallet1.total;
    document.getElementById('rest').innerHTML=wallet1.current;
    document.getElementById('spent').innerHTML = parseInt(wallet1.spent);

    saveData();
    // totalWallet();
}
displayList();

function addList() {
    let date= document.getElementById('list-date').value;
    let name =document.getElementById('list-name').value;
    let amount=document.getElementById('list-amount').value;
    let note= document.getElementById('list-note').value;

        if (date !="" &&name !=""&& amount !=""){
            let item =[ ,date,name,amount,note];
            list.push(item);
            addSpend(amount)
            displayList();
            resetInput();
        }else {
            alert("please enter the infor !!!");
        }
    }
function deleteItem(index) {
    list.splice(index,1);
    displayList();
}
function updateItem(index){
    let newDate= prompt("Input new date: ",list[index][1]);
    let newName= prompt("Input new name: ",list[index][2]);
    let newAmount= prompt("Input new amount: ",list[index][3]);
    let newNote= prompt("Input new note: ",list[index][4]);
    let item=[newDate, , newName,newAmount,newNote];
    list[index]= item;
    displayList();
}

function resetInput() {
    document.getElementById('list-date').value ="";
    document.getElementById('list-name').value ="";
    document.getElementById('list-amount').value ="";
    document.getElementById('list-note').value ="";
}
/*function totalWallet() {
    let totalSpent=0;
    let restMoney= 0;

    for (let i = 0; i < list.length; i++) {
        totalSpent += parseInt(list[i][3]);
        document.getElementById('rest').innerHTML=restMoney;
    }*/
function addSpend(money){
    parseInt(wallet1.spendMoney(money));
    saveData();
}


