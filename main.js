console.log('Review 77')
console.log("dosssssne")

const getText =function(){console.log("done")}
const cellClick =function(id){
   //console.log("cell Clicked")
  // console.log( document.querySelector("#"+id).innerText)
  console.log(id)
  id.style.background = 'red'
 //document.querySelector("'#"+id+"'").style.background = 'red' 
 //document.querySelector('#c17').style.background = 'red'

}


const createCalender =function () {
    let x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
  //document.body.appendChild(x);
//   var y = document.createElement("TR");
   // y.setAttribute("id", "myTr");
  // document.getElementById("myTable").appendChild(y);

  //  var z = document.createElement("TD");
  // var t = document.createTextNode("cell");
    // z.appendChild(t);
   //document.getElementById("myTr").appendChild(z);
   let table = document.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
for(x=0;i=x<=7;x++){
let row = table.insertRow(-1); // -1 mean insert befor
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
let l=9;
for(i=0;i<=9;i++){
    let cell = row.insertCell(i);
    cell.innerHTML = l++ +":00 "//+x+""+i;
    cell.setAttribute("id","c"+x+""+i);
    cell.setAttribute("onClick", "cellClick(c"+x+""+i+")") 

    //cell.setAttribute("onclick",cellClick(cell.id))
}}

// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);


// // Add some text to the new cells:
// cell1.innerHTML = "NEW CELL1";
// cell2.innerHTML = "NEW CELL2";
}
createCalender();
// 1. when click on #add do S2

// 2. get the text inside the #task

// 3. save what I got in S2 in a variable

// 4. how to render this variable


// Break 7:09 - 7:25