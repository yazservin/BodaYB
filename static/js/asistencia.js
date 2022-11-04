$(document).ready(function(){
    $('.btn_confi_asistencia').on('click',function(){
        document.getElementById('div_confi_listInvitados').style.display = 'none';
        document.getElementById('div_confi_asistencia').style.display = '';

        var arrAdul = $('[id="asistencia_check"]:checked').map(function(){
            return this.value;
        }).get(); 

        var arrNin = $('[id="asistencia_check_nino"]:checked').map(function(){
            return this.value;
        }).get();  

        let myTableA= "<p style='color: lightgoldenrodyellow; text-align:center;'>"+ arrAdul.length +" ADULTOS</p>";
            for (let i = 0; i <  arrAdul.length; i++) {
                myTableA+="<input type=hidden id=asistencia name=asistencia value="+arrAdul[i]+">"
            }
            myTableA+="<p style='color: lightgoldenrodyellow; text-align:center;'>"+ arrNin.length +" NIÑOS</p>";
            for (let i = 0; i <  arrNin.length; i++) {
                myTableA+="<input type=hidden id=asistencia name=asistencia value="+arrNin[i]+">"
            }
        document.getElementById('invitados_confirmar').innerHTML = myTableA;     
    
    });
    
    $('.btn_continuar_confi').on('click',function(){
        console.log('confirmar') 
        var adult = $('[id="asistencia"]').map(function(){
            console.log( $(this).val());
            return this.value;
        }).get(); 

        var cod = JSON.stringify(adult) 
        console.log('codigos',cod)

        req = $.ajax({
            url : '/confirmacion/update',
            type : 'POST',
            data : cod,
            dataType : 'json',
            contentType:'application/json; charset=utf-8',

        });
        req.done(function(data) {
            console.log(data);
            swal({
                title: "¡Listo!",
                  text: "Gracias por confirmar.",
                  type: "success",
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'OK',
            }).then(function(){
                location.reload();
            });
            
        });

    });
});