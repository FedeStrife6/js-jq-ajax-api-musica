$(document).ready(function() {

  // ajax api album musicali
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      // array con dentro tutti i dati dei cd presi dall'API
      var arrayCd = data.response;
      // funzione che stampa gli elementi (cd)
      stampaCd(arrayCd)
    },
    error: function () {
      alert('Errore')
    }
  });
});

// selezione del genere
$('.genere').change(function() {

  var selezioneGenere = $(this).val();
  console.log(selezioneGenere);

  $('.cd').each(function() {

    var genereMusicale = $(this).data('genre');
    console.log(genereMusicale);

    if ((selezioneGenere === 'All') || (genereMusicale === selezioneGenere)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

});

// FUNZIONI

// funzione che stampa tutti i cd dell'array
// array --- array da dividere
function stampaCd(array) {

  // handlebars, template cd
  var source = $('#cd-template').html();
  var templateCd = Handlebars.compile(source);

  // stampo tutti i cd presenti nell'array
  for (var i = 0; i < array.length; i++) {
    var singoloCd = array[i];
    var htmlCd = templateCd(singoloCd);
    var containerCd = $('.cds-container');
    containerCd.append(htmlCd);
  }
};
