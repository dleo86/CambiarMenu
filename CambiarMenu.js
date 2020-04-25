
ordItems = 1;  //¿Automaticamente ordenar items dentro de la lista? (1 o 0)

function mover(fbox,tbox) {
   for(var i=0; i<fbox.options.length; i++) {
      if(fbox.options[i].selected && fbox.options[i].value != "") {
         var no = new Option();
         no.value = fbox.options[i].value;
         no.text = fbox.options[i].text;
         tbox.options[tbox.options.length] = no;
         fbox.options[i].value = "";
         fbox.options[i].text = "";
      }
   }
   Subir(fbox);
   if (ordItems) Ordenar(tbox);
}

function Subir(box) { 
   for(var i=0; i<box.options.length; i++) {
       if(box.options[i].value == "")  {
          for(var j=i; j<box.options.length-1; j++)  {
             box.options[j].value = box.options[j+1].value;
             box.options[j].text = box.options[j+1].text;
          }
          var ln = i;
          break;
       }
   }
   if(ln < box.options.length)  {
       box.options.length -= 1;
       Subir(box);
   }
}

function Ordenar(box)  {
   var temp_opts = new Array();
   var temp = new Object();
   for(var i=0; i<box.options.length; i++) {  
       temp_opts[i] = box.options[i];
   }
   for(var x=0; x<temp_opts.length-1; x++)  {
        for(var y=(x+1); y<temp_opts.length; y++)  {
           if(temp_opts[x].text > temp_opts[y].text)  {
               temp = temp_opts[x].text;
               temp_opts[x].text = temp_opts[y].text;
               temp_opts[y].text = temp;
               temp = temp_opts[x].value;
               temp_opts[x].value = temp_opts[y].value;
               temp_opts[y].value = temp;
           }
        }
   }
   for(var i=0; i<box.options.length; i++)  {
        box.options[i].value = temp_opts[i].value;
        box.options[i].text = temp_opts[i].text;
   }
}
// Fin -->