function toggleMenu() {

    var menu = document.getElementById('grafico-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
function fecharMenu() {
    var menu = document.getElementById('grafico-menu');
    menu.style.display = 'none';
}

function esconderGrafico() {

    const co2Info = document.getElementById('co2-info');
    const vendasInfo = document.getElementById('vendas-informacoes');
    
    co2Info.style.display = 'none';
    vendasInfo.style.display = 'none'; 

    fecharMenu();

    esconderMiniaturas();
    var graficoCanvas = document.getElementById('grafico');
    graficoCanvas.style.display = 'none';
    document.getElementById('miniatura1').innerHTML = 'none';
    document.getElementById('miniatura2').innerHTML = 'none';
}

function mostrarGrafico(tipoGrafico) {

    const co2Info = document.getElementById('co2-info');
    const vendasInfo = document.getElementById('vendas-informacoes');
    
    co2Info.style.display = 'none';
    vendasInfo.style.display = 'none'; 

    esconderMiniaturas();
    document.getElementById('grafico').remove();

    var canvas = document.createElement('canvas');
    canvas.id = 'grafico';
    document.querySelector('.grafico-container').appendChild(canvas);

    var dados, config;

    switch(tipoGrafico) {
        case 'Eletric':
            dados = {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Venda de Veículos Elétricos (EUA)',
            backgroundColor: 'rgba(143,188,143)',
            borderColor: 'rgba(143,188,143)',
            data: [5105.414, 39967.161, 129399.455, 269820.792, 409440.918, 516800.901, 736631.264, 964601.649, 1495602.809, 1793702.759, 2052303.113, 2876105.719],
        }]
            };
            config = {
                type: 'bar',
                data: dados,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            }; 
            
            break;
        case 'GasEmission':
            dados = {
                labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                datasets: [{
            label: 'Emissão de CO2 (EUA)',
            backgroundColor: 'rgba(54,54,54)',
            borderColor: 'rgba(54,54,54)',
            data: [5679715.249, 5546116.067, 5344085.980, 5480156.537, 5528681.067, 5376473.125, 5252932.175, 5212162.345, 5377797.353, 5262145.074, 4714628.032, 5032212.819],
        }]
            };
            config = {
                type: 'bar',
                data: dados,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
    }

    var ctx = document.getElementById('grafico').getContext('2d');

    var myChart = new Chart(ctx, {
        type: config.type,
        data: dados,
        options: config.options
    });  
}

function esconderMiniaturas() {
    var miniaturas = document.querySelectorAll('.miniatura-container');
    miniaturas.forEach(function(miniatura) {
        miniatura.classList.add('escondido');
    });
}


var dadosGrafico2 = {labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
datasets: [{
    label: 'Venda de Veículos Elétricos (EUA)',
    backgroundColor: 'rgba(135, 235, 34)',
    borderColor: 'rgba(135, 235, 34)',
    borderWidth: 1,
    data: [5105.414, 39967.161, 129399.455, 269820.792, 409440.918, 516800.901, 736631.264, 964601.649, 1495602.809, 1793702.759, 2052303.113, 2876105.719] 
}]};
var dadosGrafico1 = {labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
datasets: [{
    label: 'Emissão de CO2 (EUA)',
    backgroundColor: 'rgba(34, 135, 235)',
    borderColor: 'rgba(34, 135, 235)',
    borderWidth: 1,
    data: [5679715.249, 5546116.067, 5344085.980, 5480156.537, 5528681.067, 5376473.125, 5252932.175, 5212162.345, 5377797.353, 5262145.074, 4714628.032, 5032212.819]
}]};

function mostrarMiniatura(id, dados) {
    var miniaturaContainer = document.getElementById(id);
    miniaturaContainer.innerHTML = ''; 
    
    var canvas = document.createElement('canvas');
    canvas.width = 30;
    canvas.height = 30;
    miniaturaContainer.appendChild(canvas);

    new Chart(canvas, {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            aspectRatio: 2 
        }
    });

    var miniaturas = document.querySelectorAll('.miniatura-container');
    miniaturas.forEach(function(miniatura) {
        miniatura.classList.remove('escondido');
    });

}



var graficos = {
    grafico1: document.getElementById('grafico1').getContext('2d'),
    grafico2: document.getElementById('grafico2').getContext('2d'),
};

function mostrarGraficos2() {

    const co2Info = document.getElementById('co2-info');
    const vendasInfo = document.getElementById('vendas-informacoes');
    
    co2Info.style.display = 'block';
    vendasInfo.style.display = 'block'; 

    var graficoCanvas = document.getElementById('grafico');
    graficoCanvas.style.display = 'none';

    document.getElementById('miniatura1').innerHTML = '';
    document.getElementById('miniatura2').innerHTML = '';
    
    mostrarMiniatura('miniatura1', dadosGrafico1);
    mostrarMiniatura('miniatura2', dadosGrafico2);
}

function exibirInfoBox() {
    var infoBox = document.querySelector('.info-box');

    infoBox.style.display = (infoBox.style.display === 'none' || infoBox.style.display === '') ? 'block' : 'none';
}
