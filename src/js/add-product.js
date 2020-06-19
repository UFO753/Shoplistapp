import $ from "jquery";
function add_product_show_form(){
    var form_box=$("#input_form")[0];
    form_box.style.display="block";
    form_box.style.opacity="1";
};

function close_form_window(){
    var form_box=$("#input_form")[0];
    form_box.style.display="none";
    form_box.style.opacity="0";
};

function check_radio(){
    if($('#kg')[0].checked){
        return $('#kg')[0].value;
    }
    else if($('#liter')[0].checked){
        return $('#liter')[0].value;
    }
    else if($('#pieces')[0].checked){
        return $('#pieces')[0].value;
    }
    else{
        console.log("Error happend, in radio check");
    }
}

function display_localstorage(){
    for(var i in localStorage) {
        var catid;
        try{
            catid = localStorage[i].split(",");
        }catch(err){
            console.log(err.message);
            break;
        }
        var catid_l= catid[0];
        var render_element = $("#"+catid_l)[0];
        var product_elem = document.createElement("li");
        product_elem.innerHTML = i;
        product_elem.id=catid[1];
        try{
            render_element.appendChild(product_elem);
        }catch(err){
            console.log(err.message);
        }
    };
}


function add_product(product,amount,unit,category){
    product = product.charAt(0).toUpperCase() + product.slice(1);
    var edit_button=`<button style="float:right;" onclick="edit_product(this)">E</button>`;
    var remove_button=`<button style="float:right;" onclick="remove_product(this)">X</button>`;
    var elem = $("#"+category)[0];
    let elem_id = Math.random().toString(36).substring(7);
    var product_elem = document.createElement("li");
    product_elem.id=elem_id;
    var product_id= elem_id+"_product";
    var amount_id= elem_id+"_amount";
    var unit_id= elem_id+"_unit";
    var buttonsXE_id= elem_id+"_buttonsXE"; //Delete, edit
    var buttonsS_id= elem_id+"_buttonsS"; //save button
    product_elem.draggable="true";
    product_elem.setAttribute("ondragstart", "drag_elementStart(event)");
    var full= `<p id="${product_id}">${product}</p> amount: <p id="${amount_id}">${amount}</p><p id="${unit_id}">${unit}</p><p style="position:absolute; right:0; z-index:2;" id="${buttonsXE_id}">${edit_button}${remove_button}</p><p style="display:none; position:absolute; right:0; z-index:1; border:none;" id="${buttonsS_id}"><button onclick="save_edited_product(this)">S</button></p>`;
    product_elem.innerHTML =  full;
    var catid= category+","+elem_id;
    localStorage.setItem(
        full, catid
    );
    elem.appendChild(product_elem);
    $('#Product_name')[0].value = '';
    $('#Product_amount')[0].value = '';  
}

window.display_localstorage=display_localstorage;
window.check_radio=check_radio;
window.add_product=add_product;
window.add_product_show_form=add_product_show_form;
window.close_form_window=close_form_window;
