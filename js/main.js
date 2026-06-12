document.getElementById('agroForm').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 

    // Captura o valor digitado pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    
    // Regra de negócio fictícia: 150kg de adubo por hectare para o milho
    const aduboPorHectare = 150; 
    const totalAdubo = area * aduboPorHectare;

    // Exibe o resultado na tela
    const resultadoDiv = document.getElementById('resultado');
    const recomendacaoP = document.getElementById('recomendacao');

    recomendacaoP.innerHTML = `Para uma área de <strong>${area} ha</strong>, você precisará de aproximadamente <strong>${totalAdubo} kg</strong> de adubo NPK para o plantio de milho.`;
    
    // Remove a classe que esconde a div de resultado
    resultadoDiv.classList.remove('hidden');
});
