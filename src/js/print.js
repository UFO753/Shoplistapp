function print_lists(){
    document.getElementById("add_button").style.display="none";
    document.getElementById("clear_button").style.display="none";
    document.getElementById("print_button").style.display="none";
    window.print();
    document.getElementById("add_button").style.display="block";
    document.getElementById("clear_button").style.display="block";
    document.getElementById("print_button").style.display="block";
};

window.print_lists=print_lists;