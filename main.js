let list =loadData();
function saveData() {
    localStorage.setItem('item',JSON.stringify(list));
    // localStorage.setItem('amount',JSON.stringify(wallet));
}
function loadData() {
    if (localStorage.hasOwnProperty('item')){
        let data= JSON.parse(localStorage.getItem('item'));
        return data;
    }else {
        return [];
    }
    if (localStorage.hasOwnProperty('amount')){
        let data2 =JSON.parse(localStorage.getItem('amount'));
        return data2;
    }else {
        return [];
    }
}

let wallet = new Wallet();
wallet.addTotal(500000);

function sum() {
    let A=document.getElementById('add-money').value;
    if (A != ""){
        let B = parseInt(A)+wallet.total;
        document.getElementById('total').innerHTML=B;
        wallet.total =B;
        document.getElementById('add-money').value="";
        console.log(wallet.total);
    }else {
        alert("Please input the number");
    }
    displayList();

}

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
                <td>${list[i].date}</td>
                <td>${list[i].name}</td>
                <td>${list[i].amount}</td>
                <td>${list[i].note}</td>
                <td><button id="UpdateList" onclick="updateItem(${i})">Update</button></td>
                <td><button id="DeleteList" onclick="deleteItem(${i})">Delete</button></td>
                </tr>`;


    }



    let totalSpent = 0;
    let current=0;
    //lam sao de hien thi current <0???
    for (let j = 0; j < list.length; j++) {
        totalSpent += +list[j].amount;

        // wallet.spendMoney(parseInt(list[j].amount));
    }
    if (wallet.total >totalSpent){
        current =wallet.total-totalSpent;
    }else {
        alert('You need to save your money!!!!');
    }


    document.getElementById('list').innerHTML =str;
    document.getElementById('total').innerHTML =wallet.total;
    //lam sao de luu duoc wallet.total sau khi them tien???
    document.getElementById('rest').innerHTML=current;
    document.getElementById('spent').innerHTML = totalSpent;


    saveData();
}
displayList();



function addList() {
    let date= document.getElementById('list-date').value;
    let name =document.getElementById('list-name').value;
    let amount=document.getElementById('list-amount').value;
    let note= document.getElementById('list-note').value;

    if (date !="" &&name !=""&& amount !=""){
        //let item =[date,name,amount,note];
        let item = {
            date: date,
            name: name,
            amount: amount,
            note: note
        }
        list.push(item);
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
    let newDate= prompt("Input new date: ",list[index].date);

    let newName= prompt("Input new name: ",list[index].name);
    let newAmount= prompt("Input new amount: ",list[index].amount);
    let newNote= prompt("Input new note: ",list[index].note);
    let item={
        date:newDate,
        name:newName,
        amount: newAmount,
        note :newNote
    }
    list[index]= item;
    displayList();
}

function resetInput() {
    document.getElementById('list-date').value ="";
    document.getElementById('list-name').value ="";
    document.getElementById('list-amount').value ="";
    document.getElementById('list-note').value ="";
}