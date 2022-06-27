const myinput = document.getElementById('myinput').value.toUpperCase()
let mytable = document.getElementById('mytable')
let tr = mytable.getElementsByTagName('tr')

for(i=0;i<tr.length;i++){
    let td = tr[i].getElementsByTagName('td')[0]
    if(td){
        let textvalue = td.textContent || td.innerHTML

        if(textvalue.toUpperCase().indexOf(myinput)>-1){

            tr[i].style.display = "";
        }
        else{

            tr[i].style.display = none;

        }
    }
    
}