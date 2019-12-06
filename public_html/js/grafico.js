(function() {
                var indiceAPI = "http://startup.bolsadesantiago.com/api/consulta/TickerOnDemand/getIndices?access_token=" + token;
               
                fecha= new Date();
                var anio=fecha.getFullYear();
                var mes= fecha.getMonth()+1;
                var dia= fecha.getDay();
                
                $.post( indiceAPI, {
                  })
                  .done(function( data ) {

                    $.each( data.listaResult, function( idx, item ) {
                        var datos=[{x:new Date(anio,mes,dia),y:[item.Valor, item.Mayor, item.Menor, item.Valor]}];
                        var indice= item.Nombre;
                        plot("#graf"+idx, datos, indice);
                        console.log("#graf"+idx, datos, indice);
                    });
                  });
              
               })();
         


