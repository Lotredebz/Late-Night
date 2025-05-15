function carouselle() {
  const commuDivs = document.querySelectorAll('.commu');
  const nextBouttons = document.querySelectorAll('.next');
  const prevBouttons = document.querySelectorAll('.prev');
  let positionActu = 0;

  function changeAffi(div, i) {
    if (i === positionActu) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  }
  function montreDiv() {
    commuDivs.forEach(changeAffi);
  }
  function clickSuivant(event) {
    event.preventDefault();
    positionActu = (positionActu + 1) % commuDivs.length;
    montreDiv(positionActu);
  }
  function clickPrecedent(event) {
    event.preventDefault();
    positionActu = (positionActu - 1 + commuDivs.length) % commuDivs.length;
    montreDiv(positionActu);
  }

  nextBouttons.forEach(function (boutton) {
    boutton.addEventListener('click', clickSuivant);
  });

  prevBouttons.forEach(function (boutton) {
    boutton.addEventListener('click', clickPrecedent);
  });
}

document.addEventListener('DOMContentLoaded', carouselle);