$(document).ready(function(){
	$('.btncode').on('click',function(){
        document.getElementById('div_buscar').style.display = 'none';
        var codigo = $('#codigo').val();
        console.log(codigo);
        req = $.ajax({
            url : '/confirmacion/buscar',
            type : 'POST',
            data : { codigo : codigo}
        });
        req.done(function(data) {
            console.log(data);
            console.log('fam', data.familia);
            document.getElementById('div_confirmacion').style.display = '';
            fs = data.familia
            let numb = "Fam. "+fs;
            document.getElementById("familia").innerHTML = numb;
            var inv = data.invitados
            console.log('array_invitados', inv)
            var countadult = 0
            var countnin = 0
            var arr = inv
            var filteredAdul = arr.filter ( function ( d ) {
                countadult++;
                return d.type_person === 'Adulto';
            });
            console.log ( "filtrocount", filteredAdul.length );
            console.log ( "fil", filteredAdul );
            
            var filteredNin = arr.filter ( function ( d ) {
                countnin++;
                return d.type_person === 'Niño';
            });
            console.log ( "filtrocount", filteredNin.length );
            console.log ( "fil", filteredNin );

            let counpers ="<div  class='col-md-12 col-sm-12'>";
            counpers+="<div style='text-align: -webkit-center; color: lightgoldenrodyellow;'> Pases </div><hr style='1px solid rgb(255 255 255 / 10%) !important'>"
            counpers+="<div class='col-md-6 col-sm-6' style='text-align: -webkit-center; color: lightgoldenrodyellow;'><div>"+ filteredAdul.length +" Adultos</div></div>"
            if(filteredNin.length > 0){
                counpers+="<div class='col-md-6 col-sm-6' style='text-align: -webkit-center; color: lightgoldenrodyellow;'><div>"+ filteredNin.length +" Niños</div></div>"
            }
            counpers+="</div>"
            document.getElementById('countpersonas').innerHTML = counpers

            
            $('.btn_continuar').on('click',function(){
                document.getElementById('div_confi_listInvitados').style.display = '';
                document.getElementById('div_confirmacion').style.display = 'none';
                console.log( "continuar", filteredAdul.length)
                let myTableA= "<div id='form_invitados'> <p style='color: lightgoldenrodyellow;'>Adultos</p>";

                for (let i = 0; i <  filteredAdul.length; i++) {
                    console.log('for',  filteredAdul[i].nombre)
                    myTableA+="<div class='row ng-scope adultos' ng-repeat='invitado in adultos' style=''>"
                    myTableA+="<div class='col-md-1 col-sm-1' id='select_check'>"
                    myTableA+="<input type='checkbox' id='asistencia_check' name='"+filteredAdul[i].nombre+"' value='"+ filteredAdul[i].id +"' class='asistencia_check'>"
                    myTableA+="</div>"
                    myTableA+="<div class='col-md-11 col-sm-11' >"
                    myTableA+="<p class='' style='color: white; margin: auto;'>" + filteredAdul[i].nombre + "</p>"
                    myTableA+="</div>"
                    myTableA+="</div>"
                }
                myTableA+="</div>";

                let myTableN= "<div id='form_invitados'> <p style='color: lightgoldenrodyellow;'>Niños</p>";
                for (let i = 0; i <  filteredNin.length; i++) {
                    console.log('for',  filteredNin[i].nombre)
                    myTableN+="<div class='row ng-scope niños' ng-repeat='invitado in niños' style=''>"
                    myTableN+="<div class='col-md-1 col-sm-1' id='select_check'>"
                    myTableN+="<input type='checkbox' id='asistencia_check_nino' name='"+filteredNin[i].nombre+"' value='"+ filteredNin[i].id +"' class='asistencia_check'>"
                    myTableN+="</div>"
                    myTableN+="<div class='col-md-11 col-sm-11'>"
                    myTableN+="<p class='' style='color: white; margin: auto;'>" + filteredNin[i].nombre + "</p>"
                    myTableN+="</div>"
                    myTableN+="</div>"
                }
                myTableN+="</div>";
                
                document.getElementById('tablePrintAdultos').innerHTML = myTableA;
                document.getElementById('tablePrintNiños').innerHTML = myTableN;
            });   
            
            
        }); 
	});

   
    
    
        
        
        
});


