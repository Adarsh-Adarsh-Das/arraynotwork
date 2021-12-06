Name_array=[];
function submit()
{
    var display_student=[];
    for(var j=1; j<=4; j++)
    {
        var name1=document.getElementById("n"+j).value;

        console.log(name1);
        Name_array.push(name1);
    }
    

    console.log(Name_array);
    var length_array=Name_array.length;
    console.log(length_array);


    for (var k = 0; k < length_array; k++)
     { display_student.push("<h4>NAME-"+ Name_array[k] + "</h4>");
      console.log(display_student);
     }

     console.log(display_student);

    
document.getElementById("display_name_with_commas").innerHTML=display_student;

var removecommas=display_student.join(" ");
console.log(removecommas);

document.getElementById("display_name_without_commas").innerHTML=removecommas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting()
{
    Name_array.sort();
    console.log(Name_array);

    var display_sorting_student=[];
    var len=Name_array.length;
    console.log(len);
    for(var k=0;k<len;k++)
    {
         display_sorting_student.push("<h4>NAME-"+ Name_array[k] + "</h4>");
         console.log(display_sorting_student);
    }
    var removecommas=display_sorting_student.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
