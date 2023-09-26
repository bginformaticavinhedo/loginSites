const btnLogin = document.getElementById("btnLogin");
const cnpjForm = document.getElementById("cnpj");

btnLogin.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  var cnpj = cnpjForm.value;

  console.log("tamanho do texto " + cnpj.length);

  if (cnpj.length < 5) {
    alert("Digite os 5 números para continuar");
    document.getElementById("cnpj").value = "";
    return;
  }
  if (cnpj == 12345) {
    console.log("SQ QUIMICA");
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    /* location.replace("https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica/SitePages/ITHelpdeskHome.aspx") */
    window.open(
      "https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica/SitePages/ITHelpdeskHome.aspx"
    );
    document.getElementById("cnpj").value = "";
  }
  if (cnpj == 09181) {
    console.log("BG INFORMATICA");
    alert("Bem vindo! Voce será redirecionado ao seu painel de cliente.");
    window.open("https://bginformaticavinhedo.sharepoint.com/sites/ti");
    document.getElementById("cnpj").value = "";
  }
});
