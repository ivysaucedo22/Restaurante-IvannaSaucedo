// DATOS DEL MENÚ
const menuItems = [
    { 
    id: 1, 
    name: "Cafe Americano", 
    category: "cafe", 
    price: "$12", 
    image: "https://images.unsplash.com/photo-1630338606772-392095666116?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Un hechizo clásico que despierta tu magia con cada sorbo."
 
},
 { 
    id: 1.1, 
    name: "Latte", 
    category: "cafe", 
    price: "$18", 
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Leche y espresso mezclados con un encantamiento de suavidad."
},
 { 
    id: 1.2, 
    name: "Capuccino", 
    category: "cafe", 
    price: "$22", 
    image: "https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Espuma y cacao, una poción de energía y dulzura."
},
 { 
    id: 1.3, 
    name: "Cafe Moca", 
    category: "cafe", 
    price: "$25", 
    image: "https://images.unsplash.com/photo-1601390501377-34e129291cdb?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Chocolate y café unidos por un encantamiento irresistible."
},
 { 
    id: 1.4, 
    name: "Cafe Frio", 
    category: "cafe", 
    price: "$20", 
    image: "https://images.unsplash.com/photo-1634937652668-ac1ae7b01e4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    description:"Refrescante como un hechizo de verano en Hogwarts."

},
    { 
    id: 2, 
    name: "Malteada de vainilla", 
    category: "bebidas", 
    price: "$30", 
    image: "https://plus.unsplash.com/premium_photo-1695868328526-0a36982f9cdb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Suave y encantadora, un hechizo dulce que te transporta a Hogwarts."
},
     { 
    id: 2.1, 
    name: "Malteada de chocolate", 
    category: "bebidas", 
    price: "$30", 
    image: "https://images.unsplash.com/photo-1591864384134-8a21ffb51cb5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Un hechizo cremoso que encanta a todos los magos."
 
},
 { 
    id: 2.2, 
    name: "Jugo de Naranja", 
    category: "bebidas", 
    price: "$25", 
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Dorado y brillante, como la snitch dorada"
 
},
 { 
    id: 2.3, 
    name: "Jugo Verde", 
    category: "bebidas", 
    price: "$20", 
    image: "https://images.unsplash.com/photo-1601091581856-07d8bd49e47c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Refrescante y revitalizante, un brebaje digno de Herbología en Hogwarts."
 
},
 { 
    id: 2.4, 
    name: "Te de temporada", 
    category: "bebidas", 
    price: "$20", 
    image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Infusión mágica que cambia con las estaciones, como un hechizo del Bosque Prohibido."
 
},
{ 
    id: 2.4, 
    name: "Coca Cola", 
    category: "bebidas", 
    price: "$20", 
    image: "https://images.unsplash.com/photo-1561935992-d4b2a39ca79a?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Burbujeante y chispeante, un conjuro muggle que nunca deja de sorprender."
 
},
 { id: 3, name: "Crepas",
    category: "postre",
    price: "$45", 
    image: "https://images.unsplash.com/photo-1625624548901-1da0c5223322?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyZXBhc3xlbnwwfDB8MHx8fDA%3D",
    description:"Delicadas y flexibles, como un hechizo de sabor irresistible."
 },
{ 
    id: 3.1, 
    name: "Cupcake", 
    category: "postre", 
    price: "$12", 
    image: "https://images.unsplash.com/photo-1599785209615-a35f883d93c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1cGNha2V8ZW58MHwwfDB8fHww",
    description:"Pequeño hechizo de dulzura que encanta con cada bocado"
},
{ 
    id: 3.2, 
    name: "Galleta de chocolate", 
    category: "postre", 
    price: "$25", 
    image: "https://media.istockphoto.com/id/1939196650/es/foto/galletas-dulces-de-chocolate-en-plato-en-servilleta-a-cuadros.webp?a=1&b=1&s=612x612&w=0&k=20&c=K1MKwiN45wPeiTPUG1xBqimNDM4FbMcGdAXzejmfs3E=",
    description:"Crujiente y tentadora, un encantamiento de cacao puro."
},
{ 
    id: 3.3, 
    name: "Flan Napolitano", 
    category: "postre", 
    price: "$30", 
    image: "https://images.unsplash.com/photo-1532556660262-1c45d5fae825?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Cremoso y dulce, como una poción que se derrite en la boca."
},
{ 
    id: 3.4, 
    name: "Helado de chocolate", 
    category: "postre", 
    price: "$30", 
    image: "https://images.unsplash.com/photo-1663904460269-2d470e0ee4ba?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Intenso y cremoso, un hechizo irresistible para los amantes del cacao."
},
{ 
    id: 3.5, 
    name: "Helado de fresa", 
    category: "postre", 
    price: "$30", 
    image: "https://media.istockphoto.com/id/170940477/es/foto/helado.webp?a=1&b=1&s=612x612&w=0&k=20&c=u7-a_ETFTAPM3e06_YG5l372j5jFt_vNF08KzdnYstQ=",
    description:"Refrescante y frutal, un hechizo fresco para días mágicos."
},
{ 
    id: 3.6, 
    name: "Helado de vainilla", 
    category: "postre", 
    price: "$30", 
    image: "https://media.istockphoto.com/id/1326143969/es/foto/bol-con-bolas-de-helado-de-vainilla.webp?a=1&b=1&s=612x612&w=0&k=20&c=2ZMpYj6OsuEEMb0nJUjclMXuHk0S5DZ-lxEuX9y_3s8=",
    description:"Suave y clásico, un encantamiento dulce que nunca falla."
},
{ 
    id: 4, 
    name: "Chilaquiles", 
    category: "Comidas", 
    price: "$45", 
    image: "https://media.istockphoto.com/id/1649336065/es/foto/mexican-breakfast-chilaquiles-divorciados.webp?a=1&b=1&s=612x612&w=0&k=20&c=A_H4f_AsvloMSWnbuq6pwpnaO_gvAOlnHhj2zWUbuxg=",
    description:"Crujientes y encantados, como un hechizo de desayuno que despierta tu magia interior."
},
{ 
    id: 4.1, 
    name: "Hamburguesas", 
    category: "Comidas", 
    price: "$120", 
    image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ3Vlc2FzfGVufDB8MHwwfHx8MA%3D%3D",
    description:"Carnosa y deliciosa, digna de un banquete en el Gran Comedor de Hogwarts"
},
{ 
    id: 4.2, 
    name: "Alitas", 
    category: "Comidas", 
    price: "$80", 
    image: "https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxpdGFzJTIwY29taWRhfGVufDB8MHwwfHx8MA%3D%3D",
    description:"Jugosas y picantes, un conjuro de sabor que vuela directo a tu paladar."
},
        
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'Todo') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'Todo'
    ? menuItems
    : menuItems.filter(item => item.category === category);

    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});