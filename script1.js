
const inputbox = document.getElementById("input-user");
const tasklist = document.getElementById("task-list");

//we are getting input box here
function addTask() {
    if (inputbox.value == '') {
        alert("please add task");
    }
    else {
        //js gives us power to create any tags using createElement.Here we are creating ul element
        let task = document.createElement("ul");

        task.innerHTML = inputbox.value; //we are adding the text which we are getting from input box to that element

        tasklist.appendChild(task);//we are adding that element as a child of tasklist which we get in line 2.you can append whatever your wish to add

        let deletebtn = document.createElement("button")// we also  want to add button also with the elemet which we are adding so we created this

        deletebtn.setAttribute("id", "delete") //we have set the id of that button element syntax var_name.setAttribute("id or class","value")

        deletebtn.innerHTML = "DEL";//giving name to the element

        task.appendChild(deletebtn);//appending that elemet with the element which we have already creted

        deletebtn.addEventListener("click", function () {

            task.remove() //we are adding task so we need to remove that thats why we use task.remove
        })




        inputbox.value = "";
    }
}