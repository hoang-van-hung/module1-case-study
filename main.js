
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

    let total = 0;

    for (let j = 0; j < list.length; j++) {
        total += +list[j].amount;
        // wallet.spendMoney(parseInt(list[j].amount));
    }

    // console.log(wallet.spent);



    /*for (let j = 0; j < list.length; j++) {
        spent +=list[j][3];
        console.log(spent);
    }*/
    document.getElementById('list').innerHTML =str;
    document.getElementById('total').innerHTML=wallet.total;
    document.getElementById('rest').innerHTML=wallet.current;
    document.getElementById('spent').innerHTML = total + '';
    saveData();
}
displayList();

/*function wallet() {
    for (i=0;i<list.length;i++){
        let a=wallet.total;
        let b=
    }
}*/

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
            console.log(item)
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



