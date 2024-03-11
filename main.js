function redirecionarParaPublique() {
    window.location.href = "./publique.html";
}

function carregarModelos() {
    var marcaSelecionada = document.getElementById("marca").value;
    var modelos = [];

    // Defina os modelos com base na marca selecionada
    switch (marcaSelecionada) {
        case "Chevrolet":
            modelos = ["Cruze", "Onix", "Onix Plus", "Tracker", "S10 HIGH COUNTRY", "S10 Z71", "S10 CABINA SIMPLE", "S10 CABINA DOBLE", "sILVERADO", "Corsa", "Agile", "Classic", "Aveo", "Sonic", "Cruze", "Cruze rs", "Cruze 5", "Prisma", "Spin", "Spin activ", "JOY", "jOY PLUS", "TrailBlazer", "Montana", "Equinox", "Camaro", "", ];
            break;
        case "Fiat":
            modelos = ["Uno", "Palio", "Toro", "Strada", "Siena", "Punto", "Linea", "Mobi", "500", "500x","Argo", "Cronos", "PULSE", "PULSE ABARTH","Ducato", "Fiorino", "QUBO", "Idea", "Doblo", "WEEKEND", "147", "BRAVA", "Bravo", "Coupe", "Elba", "Tempra", "Freemont", "Marea", "Oggi", "Panorama", "Premio", "",];
            break;
        case "Honda":
            modelos = ["Civic", "HR-V", "Fit", "CR-V", "Pilot", "Accord", "City", "Prelude", "Brio", "CRX", "WADE", "NSX", ];
            break;
            case "Hyundai":
                modelos = [ "HB20S", "HB20", "CRETA", "I10", "I30", "I40", "Tucson", "Veloster", "Santa fe", "Sonata", "Elantra", "Azera", "IX35", "Genesis", "Veloster N", "IONIQ HYBRID", "KONA", "EXCEL", "ACCENT", "GALLOPER", "ATOS", "H1", "",];
                break;
                case "Mitsubishi":
            modelos = [ "L200", "MONTERO SPORT", "MONTERO", "OUTLANDER", "ASX", "ECLIPSE", "ECLIPSE CROSS", "MIRAGE", "LANCER", "EVO", "ASX", "NATIVA", "SKYLINE", "GTR", "GT300", "COLT", "GALANT", ""];
            break;
            case "Nissan":
            modelos = [ "MARCH", "VERSA", "SENTRA", "TIIDA", "NOTE", "KICKS", "QASHQAI", "X-TRAIL", "FRONTIER", "MURANO", "LEAF", "350Z", "370Z", "240", "SILVIA", "PATHFINDER", "TEKNA",];
            break;
            case "Peugeot":
                modelos = ["106", "206", "207", "306", "307", "308", "rcz","208", "2008", "3008", "5008"];
                break;
            case "Renault":
                modelos = ["Kwid", "Sandero", "Duster", "Captur"];
                break;
            case "Toyota":
                modelos = ["Corolla", "Yaris", "Hilux", "Rav4"];
                break;
            case "Volkswagen":
                modelos = ["Gol", "Fox", "Virtus", "T-Cross"];
                break;
            case "Volvo":
                modelos = ["XC60", "XC40", "S60", "S90"];
                break;
            case "BMW":
                modelos = ["Série 3", "X1", "X3", "X5"];
                break;
            case "AUDI":
                modelos = ["A3", "A4", "Q3", "Q5"];
                break;
            case "Alfa":
                modelos = ["Giulia", "Stelvio"];
                break;
            case "Citroen":
                modelos = ["C3", "C4", "Cactus", "Aircross"];
                break;
            case "Mercedes":
                modelos = ["Classe C", "Classe A", "GLA", "GLE"];
                break;
            case "KIA":
                modelos = ["Cerato", "Sportage", "Seltos", "Telluride"];
                break;
            case "Subaru":
                modelos = ["Forester", "Outback", "Impreza", "Legacy"];
                break;
            case "Suzuki":
                modelos = ["Swift", "Vitara", "S-Cross"];
                break;
            case "jeep":
                modelos = ["Renegade", "Compass", "Wrangler", "Grand Cherokee"];
                break;
            case "Land":
                modelos = ["Discovery", "Range Rover Evoque", "Range Rover Sport", "Defender"];
                break;
            case "Dodge":
                modelos = ["Challenger", "Charger", "Durango"];
                break;
            case "RAM":
                modelos = ["1500", "2500", "3500"];
                break;
        default:
            modelos = [];
    }

    var selectModelo = document.getElementById("modelo");
    selectModelo.innerHTML = '';

    
    modelos.forEach(function(modelo) {
        var option = document.createElement("option");
        option.text = modelo;
        option.value = modelo;
        selectModelo.appendChild(option);
    });

    // Exibe o campo de seleção de modelo se houver modelos disponíveis
    if (modelos.length > 0) {
        document.getElementById("divModelo").style.display = "block";
    } else {
        document.getElementById("divModelo").style.display = "none";
    }

    carregarAnos();
}

function carregarAnos() {
    var selectAno = document.getElementById("ano");
    selectAno.innerHTML = '';
    for (var ano = 1960; ano <= 2025; ano++) {
        var option = document.createElement("option");
        option.text = ano;
        option.value = ano;
        selectAno.appendChild(option);
    }

    document.getElementById("divAno").style.display = "block";

    carregarMotor();
}
document.getElementById("kilometragem").addEventListener("input", formatarQuilometragem);

function formatarQuilometragem() {
    var inputKilometragem = document.getElementById("kilometragem");
    var valor = inputKilometragem.value.replace(/[^\d]/g, ''); 
    var valorFormatado = '';
    
    if (valor.length > 3) {
        valorFormatado = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } else {
        valorFormatado = valor;
    }

    inputKilometragem.value = valorFormatado;
}





function carregarMotor(){
    var selectMotor = document.getElementById("motor")
    selectMotor.innerHTML = '';
    for (var motor = 10; motor < 60; motor++){
        var valorMotor = (motor / 10).toFixed(1);
        var option = document.createElement("option");
        option.text = valorMotor;
        option.value = valorMotor;
        selectMotor.appendChild(option);
    }

    document.getElementById("divMotor").style.display = "block";
    document.getElementById("divKilometragem").style.display = "block";
}


/* fotos */
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNovaImg = $('#end-img-new').val();
        const novoItem = $('<li></li>');
        $(`<img src="${endNovaImg}" />`).appendTo(novoItem);
        $(novoItem).appendTo('#fotos'); // Aqui foi alterado para adicionar à lista com ID 'fotos'
        $(novoItem).fadein(10000);
        $('#end-img-new').val('');
    });
});

$(document).ready(function() {
    $('#uploadInput').on('change', function(e) {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgData = event.target.result;
                const novoItem = $('<li></li>');
                const imagem = $(`<img src="${imgData}" />`).appendTo(novoItem);
                const btnExcluir = $('<button>Excluir</button>').appendTo(novoItem);
                btnExcluir.on('click', function() {
                    $(novoItem).remove();
                });
                $(novoItem).appendTo('#fotos');
                $(novoItem).fadeIn(1000);
            };
            reader.readAsDataURL(file);
        }
    });

    $('#uploadForm').on('submit', function(e) {
        e.preventDefault();
    });
});
