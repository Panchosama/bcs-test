(function() {
            var indiceAPI = "http://startup.bolsadesantiago.com/api/consulta/ClienteMD/getIndicesRV?access_token=" + token;
            var datos;
            $.post( indiceAPI, {
              })
              .done(function( data ) {
               
                $.each( data.listaResult, function( idx, item ) {
                    var campo='';
                    campo = '<tr><td><a href="#" data-nemo="' + idx + '" data-target="#det" data-toggle="modal">'  + item.nemo + '</a></td>';
                    campo += '<td>' + item.indice + '</td>';
                    if( Math.sign(item.variation)=== -1){
                       campo += '<td style="color:red"><strong>' + item.variation + '</strong></td>';            
                    }else{
                        if( Math.sign(item.variation)=== 1){
                            campo += '<td style="color:green"><strong>' + item.variation + '</strong></td>';
                        }else{
                            campo += '<td style="color:black"><strong>' + item.variation + '</strong></td>';
                        }
                    }
                    campo += '<td> $' + item.price + '</td>';
                    campo += '<td> $' + item.volume + '</td></tr>';
                    
                    $( "#detalle" ).append(campo);
                    
                                    
                });
                
                 $('#det').on('show.bs.modal', function (event) {
                        var button = $(event.relatedTarget);
                        var ind = button.data('nemo');
                        var dt = data.listaResult;


                        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                        var modal = $(this);
                        modal.find('#nemot').text(dt[ind].nemo);
                        modal.find('#indic').text(dt[ind].indice);
                        modal.find('#val').text('$'+dt[ind].price);
                        if( Math.sign(dt[ind].variation)=== -1){
                            modal.find('#var').css("color","red").text(dt[ind].variation);           
                        }else{
                            if( Math.sign(dt[ind].variation)=== 1){
                                modal.find('#var').css("color","green").text(dt[ind].variation);
                            }else{
                                modal.find('#var').css("color","#000000").text(dt[ind].variation);
                            }
                        }
                        var anio=dt[ind].timesTrade.substring(0,4);
                        var mes=dt[ind].timesTrade.substring(4,6);
                        var dia=dt[ind].timesTrade.substring(6,8);
                        var hora=dt[ind].timesTrade.substring(8,10);
                        var minu=dt[ind].timesTrade.substring(10,12);
                        modal.find('#timeT').text(anio + '/' + mes + '/' + dia + ' ' + hora + ':' + minu);
                        modal.find('#vol').text('$'+dt[ind].volume);
                        
                   
                  });
                $('#det').modal('show');
                
              });
              
              
               
            })(); 
            
            


