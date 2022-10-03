selectedrow = null;

//read form data
function onFormSubmit(e){
     event.preventDefault();
     var formdata = readformdata();

     if(selectedrow==null)
     insertdata(formdata);
     else
     onupdatedata(formdata);
}


function readformdata(){
     var formdata = {};

     formdata["productcode"] = document.getElementById('productCode').value;
     formdata["product"] =  document.getElementById('product').value;
     formdata["quantity"] =  document.getElementById('qty').value;
     formdata["perprice"] =  document.getElementById('perPrice').value;
     return formdata;

};

function insertdata(formdata){

     var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
     var newrow = table.insertRow(table.length);
     cell1 = newrow.insertCell(0);
     cell1.innerHTML = formdata.productcode; 
     cell2 = newrow.insertCell(1);
     cell2.innerHTML = formdata.product;
     cell3 = newrow.insertCell(2);
     cell3.innerHTML = formdata.quantity;
     cell4 = newrow.insertCell(3);
     cell4.innerHTML = formdata.perprice;
     cell5 = newrow.insertCell(4);
     cell5.innerHTML = `<button onClick = "onEdit(this)">Edit</button>  
                         <button onClick = "onDelete(this)">Delete</button>  `;
}

function onresetform(){

     document.getElementById('productCode').value = '';
     document.getElementById('product').value = '';
     document.getElementById('qty').value = '';
     document.getElementById('perPrice').value = '' ;
}

function onEdit(td){
     selectedrow = td.parentElement.parentElement;
     document.getElementById('productCode').value = selectedrow.cells[0].innerHTML;
     document.getElementById('product').value =  selectedrow.cells[1].innerHTML;
     document.getElementById('qty').value =  selectedrow.cells[2].innerHTML;
     document.getElementById('perPrice').value =  selectedrow.cells[3].innerHTML;
}


function onupdatedata(formdata){
     
     // selectedrow = td.parentElement.parentElement;
     selectedrow.cells[0].innerHTML =  formdata.productcode; 
     selectedrow.cells[1].innerHTML =   formdata.product;
     selectedrow.cells[2].innerHTML =  formdata.quantity; 
     selectedrow.cells[3].innerHTML =  formdata.perprice;   

}

function onDelete(td){

     if(confirm("are you sure  to delete this record ?")){
     row = td.parentElement.parentElement;
document.getElementById('storeList').deleteRow(row.rowIndex);
     onresetform();
}


}