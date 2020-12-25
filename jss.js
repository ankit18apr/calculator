
var text="";
var y=0;
var op="";
var s="";
var res=0;
function f(t){
var x=document.getElementById(t).value;
s=s+x;
document.getElementById("history").innerHTML=s;



if(x!="+"&&x!="-"&&x!="*"&&x!="/"&&x!="="&&x!="ce")
{text=text+x;}
else{
    if(res==0)
   { y=parseInt(text);}
    else{
        y=res;
    }
if(x=="+"||x=="-")
    {text="0";}
if(x=="*"||x=="/")
{text="";
}
    op=x;  
}
if(op!="")
{
    switch(op)
    {
case("+"):res=y+parseInt(text);
fun(res);break;
case("-"):res=y-parseInt(text);
fun(res);break;
case("*"):
if(text==""){text="1";res=y*parseInt(text);text="";}
else{res=y*parseInt(text);}
fun(res);break;
case("/"):
if(text==""){text="1";res=y/parseInt(text);text="";}
else{res=y/parseInt(text);}
fun(res);break;
case("="):document.getElementById("history").innerHTML=res;
s=res.toString();break;
case("ce"):s="";res=0;op="";text="";y=0;
document.getElementById("ans").innerHTML=0;
document.getElementById("history").innerHTML="";
    }
}
 
}
function fun(r){
    document.getElementById("ans").innerHTML=r;
}

