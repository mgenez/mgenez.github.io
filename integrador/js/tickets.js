const formElement = document.getElementById("elForm");
const totalElement = document.getElementById("totalSuma");

function sumaTotal(cantidad, categoria) {
  let result;
  let precioTicket = 200;
  switch (categoria) {
    case 1:
      let descuentoEstudiante = (precioTicket * cantidad * 80) / 100;
      result = precioTicket * cantidad - descuentoEstudiante;
      break;
    case 2:
      let descuentoTrainee = (precioTicket * cantidad * 50) / 100;
      result = precioTicket * cantidad - descuentoTrainee;
    case 3:
      let descuentoJunior = (precioTicket * cantidad * 30) / 100;
      result = precioTicket * cantidad - descuentoJunior;
  }
  return result;
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(formElement);

  let cantidad = data.get("cantidad");
  let categoria = data.get("categoria");
  let suma = sumaTotal(parseInt(cantidad), parseInt(categoria));

  document.getElementById("totalSuma").innerText = suma.toString();

  console.log(data.get("cantidad"));
  console.log(data.get("categoria"));
});
