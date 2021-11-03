const form = document.getElementById("form-cadastro");
const phone = document.getElementById("phone");
const senha = document.getElementById("senha");
const confirmacaoSenha = document.getElementById("confirmacao-senha");

function mask(value, pattern) {
  let i = 0;
  const v = value.toString();

  return pattern.replace(/#/g, () => v[i++] || "");
}

function formataTelefone(event) {
  event.target.value = mask(event.target.value, "(##) #####-####");
}

function realizaCadastro(event) {
  event.preventDefault();

  if (senha.value !== confirmacaoSenha.value) {
    return alert("As senhas devem ser iguais!");
  }
  alert("Cadastro realizado com sucesso!");
  window.location.replace("levin.html");
}
form.addEventListener("submit", realizaCadastro);
phone.addEventListener("blur", formataTelefone);
