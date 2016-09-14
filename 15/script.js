var elems=document.getElementsByClassName("cat");


for(i=0;i<elems.length;i++){
    
    elems[i].addEventListener('click',(function(elem,t){
        return function(){
            var cName=elem.getAttribute("class");
            var imgId=cName+t+"img";
            var imgData=document.getElementById(imgId);
            var textId=cName+t+"text";
            var textData=document.getElementById(textId);
            imgData.style.display="block";
//            imgData.classList.toggle("forH");
            imgData.addEventListener('click',function(){
               textData.setAttribute("value",parseInt(textData.getAttribute("value"))+1);
            });
        };
})(elems[i],i));
}