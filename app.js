function search() {
    // Declaring multiple variables

    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("todoList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Delete Todo


function deleteTodo(item) {
    item.parentNode.removeChild(item);
}

// Edit Todo

function editTodo(item) {
    let textNode = item.firstChild;
    let text = textNode.nodeValue;
    let input = document.createElement("input");
    input.type = "text";
    input.value = text;
    item.replaceChild(input, textNode);

    let saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.id = "saveBtn";
    
    saveButton.onclick = function() {
        let newText = input.value;
        let newTextNode = document.createTextNode(newText);
        item.replaceChild(newTextNode, input);
                  
        item.removeChild(item.lastChild);
        
    };
    item.appendChild(saveButton);
    
}

// document.getElementById("inputCheck").addEventListener = ("click", function inputToggle(event) {
//     let tagList = document.getElementsByClassName("list");
//     let checkTodo = document.getElementById("inputCheck");
    
//         if (event.target.checkTodo.checked){
//             tagList.style.textDecoration = "line-through";
//             tagList.style.color = "gray";
//         } else {
//             tagList.style.textDecoration = "none";
//             tagList.style.color = "black";
//         }
    
// });

function toggleCompleted(item, checkbox) {

    if (checkbox.checked) {
        item.style.textDecoration = "line-through";
        item.style.color = "gray";
        
    } else {
        item.style.textDecoration = "none";
        item.style.color = "black";
    }
}


function addTodo() {
    let text = prompt("Enter new todo:");
    if (text) {
        let list = document.getElementById("todoList");
        let item = document.createElement("li");
        let textNode = document.createTextNode(text);
        item.appendChild(textNode);

        let checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.onchange = function() {
					toggleCompleted(item, checkbox);
				};
				item.appendChild(checkbox);

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function() {
            editTodo(item);
        };
        item.appendChild(editButton);
        

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.onclick = function() {
            deleteTodo(item);
        };
        item.appendChild(deleteButton);
        list.appendChild(item);
        
    }

}
