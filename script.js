const loginButton = document.getElementById("login-form-submit");
const form = document.getElementById("form");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cnpj = form.cnpj.value;

  console.log(cnpj);

  switch (parseInt(cnpj)) {
    case 1:
      console.log("passou no 1");
      alert("Bem vindo");
      location.replace(
        "https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica/SitePages/ITHelpdeskHome.aspx"
      );
      /* window.open(
        "https://bginformaticavinhedo.sharepoint.com/sites/SQQuimica/SitePages/ITHelpdeskHome.aspx"
      ); */
      break;
    case 2:
      console.log("passou no 2");
      break;

    default:
      console.log("DEFAULT");
      break;
  }
});
