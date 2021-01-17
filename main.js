let list =loadData();
function saveData() {
    localStorage.setItem('item',JSON.stringify(list));
}
function loadData() {
    if (localStorage.hasOwnProperty('item')){
        let data= JSON.parse(localStorage.getItem('item'));
        return data;
    }else {
        return [];
    }
}


class Wallet {
    constructor(total) {
        this.total = total;
        this.spent = spent;
        this.rest = rest;
    }
    setTotal(){
        this.total =document.getElementById('total').innerHTML;
    }

    getRest(){

        return this.rest =this.total -this.spent;
    }
    getAlert(){
        if (this.rest < 0){
            return alert("You need to save your money!!!");
        }
    }
}

class List {
    constructor(date,name,amount,note) {
        this.date = date;
        this.name= name;
        this.amount =amount;
        this.note =note;
    }
    AddItem(){
        this.date= document.getElementById('list-date').value;
        this.name= document.getElementById('list-name').value;
        this.amount= document.getElementById('list-amount').value;
        this.note= document.getElementById('list-note').value;
        if (this.date !="" &&this.name !=""&& this.amount !=""){
            let item =[this.date ,this.name,this.amount];
            list.push(item);
            displayList();
        }else {
            alert("please enter the infor !!!");
        }
    }

    UpdateItem(){
        this.date =prompt("Input the date : ",list[index],[0]);
        this.name =prompt("Input the date : ",list[index],[1]);
        this.amount =prompt("Input the date : ",list[index],[2]);
        this.note =prompt("Input the date : ",list[index],[3]);
        let newItem= [this.date,this.name,this.amount,this.note];
        list[index]= newItem;
        displayList(newItem);
    }
     setDeleteItem(index){
        list.splice(index,1);
        this.getDisplayList();

    }


}

function displayList(){
    let str ="<tr>" +
        "<th>Date</th>" +
        "<th>STT</th>" +
        "<th>Name</th>" +
        "<th>Amount</th>" +
        "<th>Note</th>" +
        "<th colspan='2'>Action</th>" +
        "</tr>";
    for (let i = 0; i < list.length; i++) {
       str += `<tr>
                <td>${list[i][0]}</td>
                <td>${list[i][1]}</td>
                <td>${list[i][2]}</td>
                <td>${list[i][3]}</td>
                <td>${list[i][4]}</td>
                <td>${list[i][5]}</td>
                <td><button id="UpdateList" onclick="UpdateList(${i})">Update</button></td>
                <td><button id="DeleteList" onclick="DeleteList(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('list').innerHTML =str;
    saveData();
}
displayList();



