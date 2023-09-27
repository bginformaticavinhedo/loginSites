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
const PERFILIX = "14658";
const POLYTECH = "";
const TELINFOR = "56762";
const TUNGALOY = "10780";
const UNIARTIMPORT = "68168";
const VINHEFERPERFILADOS = "25189";

btnLogin.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  var cnpj = cnpjForm.value;

  if (cnpj.length < 5) {
    alert("Digite os 5 números para continuar");
    document.getElementById("cnpj").value = "";
    return;
  }
  if (cnpj == BGINFORMATICA) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("https://bginformaticavinhedo.sharepoint.com/sites/ti");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == SQQUIMICA) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace(
      "https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica/SitePages/ITHelpdeskHome.aspx"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == AKGPOLIMEROS) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == CORREADEOLIVEIRAREALESADVOGADOS) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == DAMAMATERIAISDELIMPEZA) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == DIASPLAST) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == ECOCONNECT) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == INTERALLOY) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == JRBRINDES) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == LASURE) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == MADEIREIRAARUANA) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == PERFILIX) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == POLYTECH) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == TELINFOR) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == TUNGALOY) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == UNIARTIMPORT) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == VINHEFERPERFILADOS) {
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    location.replace("");
    document.getElementById("cnpj").value = "";
  }
});
