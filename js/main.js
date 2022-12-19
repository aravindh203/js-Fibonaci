let length=parseInt(prompt("enter the length"));
let a=0;
let b=1;
document.write(a+"<br>");
document.write(b+"<br>");
for(i=1;i<length;i++){
    c=a+b;
    document.write(c+"<br>");
    a=b;
    b=c;
}
