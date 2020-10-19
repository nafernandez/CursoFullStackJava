
    var tabla, numero;
 
    for (tabla=11; tabla>8; tabla--)
    {
        document.write("<h2>Tabla de multiplicar del "+ tabla +"</h2>");

        for (numero=1; numero<=9; numero++)
           document.write( "<br> "  + tabla + "x " +numero +" = " + (tabla*numero));
           document.write("<br>");
    }
 
