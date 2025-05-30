const btnLogin = document.getElementById("btnLogin");
const cnpjForm = document.getElementById("cnpj");

const SQQUIMICA = "14111";
const BGINFORMATICA = "09181";
const AKGPOLIMEROS = "07866";
const CORREADEOLIVEIRAREALESADVOGADOS = "31560";
const DAMAMATERIAISDELIMPEZA = "57786";
const DIASPLAST = "04948";
const ECOCONNECT = "32205";
const INTERALLOY = "05507";
const JRBRINDES = "04568";
const LASURE = "49596";
const MADEIREIRAARUANA = "08436";
const PAROQUIASAOCRISTOVAO = "44588";
const PERFILIX = "14658";
const POLYTECH = "40358";
const TELINFOR = "56762";
const TUNGALOY = "10780";
const UNIARTIMPORT = "68168";
const VINHEFERPERFILADOS = "25189";
const REMAPE = "42467";
const MONTESALPHALASER = "22379";
const VILAJARDIM = "52837";
const NUTRALLE = "55727";
const MRSOLUCOES = "05448";
const RESIVALESANTAFE = "49597";

btnLogin.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  var cnpj = cnpjForm.value;

  if (cnpj.length < 5) {
    alert("Digite os 5 números para continuar");
    document.getElementById("cnpj").value = "";
    return;
  }
  if (cnpj == BGINFORMATICA) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/ti");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == SQQUIMICA) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == AKGPOLIMEROS) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/AKGPOLIMEROS"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == CORREADEOLIVEIRAREALESADVOGADOS) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/CORREADEOLIVEIRAREALESADVOGADOS"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == DAMAMATERIAISDELIMPEZA) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/DAMAMATERIAISDELIMPEZA"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == DIASPLAST) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/DiasPlast");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == ECOCONNECT) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/ECOCONNECT");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == INTERALLOY) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/INTERALLOY");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == JRBRINDES) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/J.R.BRINDES"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == LASURE) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/la-sure0");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == MADEIREIRAARUANA) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/MADEIREIRAARUANA0"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == PAROQUIASAOCRISTOVAO) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/PAROQUIASAOCRISTVAO"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == PERFILIX) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/PERFILIX0");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == POLYTECH) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/POLYTECH-PLASTICOSTECNICOS"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == TELINFOR) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/TELINFOR");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == TUNGALOY) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/TUNGALOY");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == UNIARTIMPORT) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/UNIARTIMPORT"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == VINHEFERPERFILADOS) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/VINHEFERPERFILADOS"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == REMAPE) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/REMAPE");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == MONTESALPHALASER) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/MONTESALPHALASER"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == VILAJARDIM) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/vilajardim");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == NUTRALLE) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/NUTRALLE");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == MRSOLUCOES) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/MRSolucoes");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == RESIVALESANTAFE) {
    alert("Bem vindo!\nVocê será redirecionado ao seu painel de cliente.");
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/ResidencialValeSantaFe"
    );
    document.getElementById("cnpj").value = "";
  }
});
