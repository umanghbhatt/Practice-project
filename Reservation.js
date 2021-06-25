function getAndUpdate()
{
    console.log("Updating List...");
    Trainno = document.getElementById('trainno').value;
    coach = document.getElementById('coach_type').value;
    pname = document.getElementById('Passanger_name').value;
    uid= document.getElementById('UID').value;
    Dot=document.getElementById('Travel_Date').value;
    

    if (localStorage.getItem('itemsJson')==null)
    {
        itemJsonArray = [];
        itemJsonArray.push([Trainno,coach,pname,uid,Dot]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else
    {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([Trainno,coach,pname,uid,Dot]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
}

var element = document.getElementById('submitvalue');
element.addEventListener("click", getAndUpdate);

