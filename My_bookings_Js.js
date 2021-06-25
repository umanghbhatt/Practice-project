function update()
{
    if (localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }

// Populate the table
let tableBody = document.getElementById("tableBody");
let str = "";
  itemJsonArray.forEach((element, index) => 
  {
    str += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[2]}</td> 
    <td>${element[3]}</td>
    <td>${element[4]}</td>   
    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
    </tr>`; 
  });
    tableBody.innerHTML = str;
}

window.addEventListener('load',update())

function deleted(itemIndex)
{
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
            
function clearStorage()
{
    if (confirm("Do you areally want to Cancel all your Bookings?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}
