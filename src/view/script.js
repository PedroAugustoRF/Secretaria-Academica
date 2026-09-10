const API = "http://localhost:3000/aluno";

const form = document.getElementById("aluno-form");
const tbody = document.getElementById("tbody");
const empty = document.getElementById("empty");
const countEl = document.getElementById("count");
const search = document.getElementById("search");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const formTitle = document.getElementById("form-title");
const toast = document.getElementById("toast");

let alunos = [];

function showToast(msg, isError = false) {
  toast.textContent = msg;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function readForm() {
  return {
    nome: document.getElementById("nome").value.trim(),
    curso: document.getElementById("curso").value.trim(),
    sexo: document.getElementById("sexo").value,
    idade: document.getElementById("idade").value ? Number(document.getElementById("idade").value) : null,
    nacionalidade: document.getElementById("nacionalidade").value.trim(),
    periodo: document.getElementById("periodo").value.trim(),
  };
}

function resetForm() {
  form.reset();
  document.getElementById("aluno-id").value = "";
  formTitle.textContent = "Novo aluno";
  submitBtn.textContent = "Cadastrar aluno";
  cancelBtn.hidden = true;
}

async function carregar() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Falha ao carregar alunos");
    alunos = await res.json();
    render();
  } catch (e) {
    showToast("Não foi possível conectar ao servidor.", true);
  }
}

function render() {
  const termo = search.value.toLowerCase();
  const lista = alunos.filter(
    (a) =>
      (a.nome || "").toLowerCase().includes(termo) ||
      (a.curso || "").toLowerCase().includes(termo)
  );

  countEl.textContent = lista.length;
  tbody.innerHTML = "";
  empty.style.display = lista.length ? "none" : "block";

  for (const a of lista) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="name"></td>
      <td class="curso"></td>
      <td class="periodo"></td>
      <td class="sexo"></td>
      <td class="idade"></td>
      <td class="nac"></td>
      <td style="text-align:right;white-space:nowrap"></td>`;
    tr.querySelector(".name").textContent = a.nome ?? "-";
    tr.querySelector(".curso").textContent = a.curso ?? "-";
    tr.querySelector(".periodo").textContent = a.periodo ?? "-";
    tr.querySelector(".sexo").textContent = a.sexo ?? "-";
    tr.querySelector(".idade").textContent = a.idade ?? "-";
    tr.querySelector(".nac").textContent = a.nacionalidade ?? "-";

    const acoes = tr.lastElementChild;
    const editar = document.createElement("button");
    editar.className = "icon-btn";
    editar.textContent = "Editar";
    editar.onclick = () => preencher(a);
    const excluir = document.createElement("button");
    excluir.className = "icon-btn del";
    excluir.textContent = "Excluir";
    excluir.onclick = () => remover(a.id, a.nome);
    acoes.append(editar, excluir);

    tbody.appendChild(tr);
  }
}

function preencher(a) {
  document.getElementById("aluno-id").value = a.id;
  document.getElementById("nome").value = a.nome ?? "";
  document.getElementById("curso").value = a.curso ?? "";
  document.getElementById("sexo").value = a.sexo ?? "";
  document.getElementById("idade").value = a.idade ?? "";
  document.getElementById("nacionalidade").value = a.nacionalidade ?? "";
  document.getElementById("periodo").value = a.periodo ?? "";
  formTitle.textContent = "Editar aluno";
  submitBtn.textContent = "Salvar alterações";
  cancelBtn.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function remover(id, nome) {
  if (!confirm(`Excluir o aluno "${nome}"?`)) return;
  try {
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error();
    showToast("Aluno excluído.");
    carregar();
  } catch {
    showToast("Erro ao excluir aluno.", true);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("aluno-id").value;
  const dados = readForm();
  try {
    const res = await fetch(id ? `${API}/${id}` : API, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error();
    showToast(id ? "Aluno atualizado com sucesso." : "Aluno cadastrado com sucesso.");
    resetForm();
    carregar();
  } catch {
    showToast("Erro ao salvar o aluno.", true);
  }
});

cancelBtn.addEventListener("click", resetForm);
search.addEventListener("input", render);

carregar();
