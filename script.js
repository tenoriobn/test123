document.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('selectOptions');

  // Loop para adicionar 1000 opções
  for (var i = 1; i <= 1000; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.textContent = i + ' DIAS';
    if (i === 1) {
      option.selected = true; // Marca o primeiro item como selecionado
    }
    select.appendChild(option);
  }
});
