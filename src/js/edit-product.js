import $ from "jquery";
function edit_product(current_element){
    var element_toEdit = current_element.parentNode.parentNode.id;
    var full = $("#"+element_toEdit)[0].innerHTML;
    console.log(element_toEdit);
    var textareaid = element_toEdit+"_product";
    var amountareaid = element_toEdit+"_amount";
    var textareaeditfield = element_toEdit+"_producteditField";
    var amountareaeditfield = element_toEdit+"_amounteditField";
    var buttonsXE_id= element_toEdit+"_buttonsXE"; //Delete, edit
    var buttonsS_id= element_toEdit+"_buttonsS"; //save button
    var textarea= $("#"+textareaid)[0];
    var amountarea= $("#"+amountareaid)[0];
    textarea.innerHTML=`<input class="product_editField" id="${textareaeditfield}" type="text" value="${$("#"+textareaid)[0].innerHTML}">`;
    amountarea.innerHTML=`<input class="amount_editField" id="${amountareaeditfield}" type="number" value="${$("#"+amountareaid)[0].innerHTML}">`;
    $("#"+buttonsXE_id)[0].style.display="none";
    $("#"+buttonsS_id)[0].style.display="inline";
    localStorage.removeItem(
        full
    );
};

function save_edited_product(current_element){ 
    var element_toSave = current_element.parentNode.parentNode.id;
    var textareaid = element_toSave+"_product";
    var amountareaid = element_toSave+"_amount";
    var textareaeditfield = element_toSave+"_producteditField";
    var amountareaeditfield = element_toSave+"_amounteditField";
    var buttonsXE_id= element_toSave+"_buttonsXE"; //Delete, edit
    var buttonsS_id= element_toSave+"_buttonsS"; //save button
    $("#"+textareaid)[0].innerHTML=$("#"+textareaeditfield)[0].value;
    $("#"+amountareaid)[0].innerHTML=$("#"+amountareaeditfield)[0].value;
    $("#"+buttonsXE_id)[0].style.display="inline";
    $("#"+buttonsS_id)[0].style.display="none";
    var full = $("#"+element_toSave)[0].innerHTML;
    var category = $("#"+element_toSave)[0].parentNode.id;
    var catid= category+","+element_toSave;
    console.log(catid);
    localStorage.setItem(
        full, catid
    );
};

function remove_product(current_element){
    var local_remove= current_element.parentNode.parentNode.innerHTML;
    console.log(current_element.parentNode.parentNode.id);
    console.log(local_remove);
    localStorage.removeItem(
        local_remove
    );
    current_element.parentNode.parentNode.remove(current_element);
};

function drag_elementStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    console.log(event.target.id);
};

function allowDrop(event) {
    event.preventDefault();
    console.log(event.preventDefault());
};
  
function drag_elementDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
};

function clear_lists(){
    localStorage.clear();
    location.reload(true);
};

window.save_edited_product=save_edited_product;
window.clear_lists=clear_lists;
window.drag_elementStart=drag_elementStart;
window.allowDrop=allowDrop;
window.drag_elementDrop=drag_elementDrop;
window.edit_product=edit_product;
window.remove_product=remove_product;