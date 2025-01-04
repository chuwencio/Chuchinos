// Variables para el carrito y el modal
const buttons = document.querySelectorAll(".buy-button");
const cartItems = document.getElementById("cart-items");

// Variables para el modal de imagen
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const productImages = document.querySelectorAll(".product-image");

// Crear un carrito vacío
let cart = [];

// Evento para cada botón "comprar"
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product");
        cart.push(product); // Añadir producto al carrito
        updateCart(); // Actualizar la lista en la página
    });
});

// Función para actualizar el carrito en el HTML
function updateCart() {
    cartItems.innerHTML = ""; // Limpiar el carrito
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item; // Añadir producto
        cartItems.appendChild(li);
    });
}

// Añadir evento de clic para cada imagen de producto
productImages.forEach((image) => {
    image.addEventListener("click", () => {
        showModal(image.src, image.alt); // Llamar a la función para mostrar el modal con la imagen
    });
});

// Función para mostrar el modal con la imagen ampliada
function showModal(src, alt) {
    modalImage.src = src;  // Establece la fuente de la imagen en el modal
    modalImage.alt = alt;  // Establece el texto alternativo de la imagen en el modal
    caption.textContent = alt;  // Muestra el nombre o descripción del producto en el modal
    imageModal.style.display = "block";  // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    imageModal.style.display = "none"; // Cierra el modal
}

// Cerrando el modal si se hace clic fuera de la imagen (en el fondo oscuro)
imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        closeModal();
    }
});