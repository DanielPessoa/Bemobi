$(document).ready(function (){

    contratarCredito();
    chamaPropagandas();

    $('#dados').click(function (){
        contratarDados();
    });

    $('#credito').click(function (){
        contratarCredito();
    });


});

const contratarCredito = () => {
    $.ajax({
        method:"get",
        url:'https://tidal-hearing.glitch.me/recarga',
        
    }).done(function(data){
        limpaCampos();
        $('#imagem-fundo').attr('src', 'assets/img/img-fundo1.svg');
        $('#valor-retangulo-1').append('R$ '+data[0].amount);
        $('#bonus-retangulo-1').append('E ganhe R$'+data[0].bonus_amount+'de bônus');

        $('#valor-retangulo-2').append('R$ '+data[1].amount);
        $('#bonus-retangulo-2').append('E ganhe R$'+data[1].bonus_amount+' de bônus');

        $('#credito').css('border-top', '4px #FFF solid');
        $('#dados').css('border-top', '1px solid rgba(242, 242, 242, 0.4)');

        
    })
}

const contratarDados = () => {
    $.ajax({
        method:"get",
        url:'https://tidal-hearing.glitch.me/dados',
        
    }).done(function(data){
        limpaCampos()
        $('#imagem-fundo').attr('src', 'assets/img/img-fundo2.svg');
        $('#valor-retangulo-1').append(data[0].gb_amount+'GB');
        $('#bonus-retangulo-1').append('Redes sociais Ilimitadas');

        $('#valor-retangulo-2').append(data[1].gb_amount+'GB');
        $('#bonus-retangulo-2').append('Redes sociais Ilimitadas');

        $('#dados').css('border-top', '4px #FFF solid');
        $('#credito').css('border-top', '1px solid rgba(242, 242, 242, 0.4)');
        
    })
}

const limpaCampos = () => {
        $('#valor-retangulo-1').empty();
        $('#bonus-retangulo-1').empty();

        $('#valor-retangulo-2').empty();
        $('#bonus-retangulo-2').empty();

}

const chamaPropagandas = () => {
    
    $.ajax({
        method:"get",
        url:'https://tidal-hearing.glitch.me/sva',
        
    }).done(function(data){
        var propagandas = '';
        data.forEach(element => {
            propagandas += `
            
            <div class="col-5 mt-5 ml-2">
                <div class="img">
                    <img class="img-fluid" src="${element.image}" width="100%" >
                    <div>
                        <input type="text" class="btn-primary btn float-right btn-assine mr-4" value="ASSINE" />
                        <div class="nome-propaganda">
                            <a>${element.name}</a>
                        </div>
                    
                    </div>
                </div>
                <div class="float-center">
                    <strong>
                        <p>
                            ${element.gain}
                        </p>
                    </strong>
                    <p>
                        ${element.description}
                    </p>
                    
                </div>
            </div>
            
            `
        });
        //$("body").find('#propagandas').html(propagandas);
        $("#propagandas").html(propagandas);

    });
}
    
