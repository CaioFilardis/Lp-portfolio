var whats = {};
var celularEmpresa = '5521995291891';

whats.eventos = {

    init: () => {
        whats.menssagem.carregarBotaoWhatsapp();
    }
}

whats.menssagem = {
    carregarBotaoWhatsapp: () => {

        let url = `https://wa.me/${celularEmpresa}`;

        $("#enviar").attr('href', url);
       
    }
}