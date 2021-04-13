name_array=[];
function sorting(){
    s1=document.getElementById("name_of_the_student_1").value;
    s2=document.getElementById("name_of_the_student_2").value;
    s3=document.getElementById("name_of_the_student_3").value;
    s4=document.getElementById("name_of_the_student_4").value;
    name_array.push(s1);
    name_array.push(s2);
    name_array.push(s3);
    name_array.push(s4);
    console.log(name_array);
    document.getElementById("display_name_with_commas").innerHTML=name_array;
}