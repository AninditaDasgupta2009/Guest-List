var Name_of_the_Guest_Array=[];
function Submit (){
var Guest_Name= document.getElementById("Enter_Name").value;
Name_of_the_Guest_Array.push(Guest_Name);
document.getElementById("Display_Name").innerHTML=Name_of_the_Guest_Array;
console.log(Name_of_the_Guest_Array);
var length_of_the_array=Name_of_the_Guest_Array;
console.log(length_of_the_array);

}
function Show List(){
    var i=(Name_of_the_Guest_Array)
    document.getElementById("Show_Names").innerHTML=i.toString;

}
function sorting(){
    Name_of_the_Guest_Array.sort;
    var i=Name_of_the_Guest_Array.join("<br>");
    console.log(Name_of_the_Guest_Array);
    document.getElementById("Sort_Name").innerHTML = i.toString;

}
function Search(){
    var s=document.getElementById("Search_Name").value;
    var found = 0;
    for(j=0; j<Name_of_the_Guest_Array.length;j++){
        if(s==Name_of_the_Guest_Array[j]){
            found= found+1;

        }
    }
    do.getElementById("Search_Name").innerHTML="Name Found"+found+"Time/s"
    console.log("Found Name"+found+"Time/s");
}