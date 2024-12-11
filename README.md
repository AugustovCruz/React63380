# Proyecto React 

Actualice el repo usando **React Router** para la navegacion de la pagina a traves del Nav y al seleccionar los items de las distintas categorias.
Actualice el proyecto usuando **Firebase** para almacenar los datos del ecommerce con sus respectivo READ/WRITE usando el servicio **Firestore**.
Se creo nuevos componentes `Checkout` `Cart`´y `CartContext` 
Se agrego el uso del **useContext** para evitar el prop drilling y usarlo en `CartContext`
Se agregaron nuevas dependencias de **Firebase** y **react-hook-form** este ultimo para el manejo de formulario para el `Checkout`

## Rutas Configuradas

1. **`/`**: Esta ruta carga el componente `<ItemListContainer />`, que muestra todos los productos disponibles
2. **`/category/:category`**: Esta ruta muestra los productos que pertenecen a una categoría específica. Para filtrar los productos de la categoria seleccionada
3. **`/item/:id`**: Esta ruta carga el componente `<ItemDetailContainer />`, que muestra los detalles de un producto específico 
4. **`/Cart`**: Esta ruta carga el componente `<CartView/>`, cuando agregan productos o no
5.**`/Checkout `**: Esta ruta carga el componente `<Checkout/>`, para completar el formulario y terminar la compra

## Enlaces Configurados

- **Hacer clic en el logo**: Redirige a la página de inicio (`/`)
- **Hacer clic en un producto**: Redirige a la página de detalles del producto (`/item/:id`), donde `:id` es el identificador único del producto
- **Hacer clic en una categoría en el navbar**: Redirige a la página de la categoría seleccionada (`/category/:category`)

## Reactividad con Parámetros y Estado

- El proyecto utiliza **`useEffect`** , **`useParams`** y **`useNavigate`** de React Router para reaccionar a los cambios en los parámetros de las rutas, como `:id` y `:category`. Esto permite cargar los productos correspondientes a la categoría seleccionada o los detalles del producto de manera eficiente. Tambien permite volver en la opcion de cada usuario
  
- Además, se utiliza **`useState`** para almacenar:
  - El contador de cada producto al realizar una compra (en el componente `ItemCount`)
  - Los productos que se muestran en la lista de productos (en el componente `ItemListContainer`)
  - El producto específico que se muestra en el detalle del producto (en el componente `ItemDetailContainer`)
  - El id de cada orden que se muestra al user al finalizar la compra( en el componente`Checkout`)
  - Para el manejo de estado cuando espera una respuesta( **`el loanding`** )
  
  Esto permite actualizar el contenido mostrado en las secciones a medida que se navega entre diferentes rutas

## useContext
  
  - Implemente el hook **useContext** para administrar el estado global del carrito de compras, evitando el prop drilling. Esto facilita el acceso y manipulacion de los datos del carrito desde cualquier componente de la aplicación.

  - Además `<CartContext/>` se encarga de almacenar la información del carrito, incluyendo los productos añadidos y sus cantidades. Utilizo localStorage para mantener la persistencia de los datos, de modo que el estado del carrito se conserve incluso si se refresca la página. Al cargar la aplicación, el carrito se inicializa con los datos almacenados en localStorage.

## Dependecias
  - Se agregaron dependencias como **react-spinners** para la carga de productos
  - **react-toastify** para las notificaciones del manejor del usuario
  - **firebase** para el manejo de datos con el servicios de firestore
  - **react-hook-form** para el formulario al momento de hacer el checkout
## EshopReact

-Bienvenido a Eshoop React, una tienda en línea construida con **React**. Este proyecto utiliza **React Router** para la navegación y **Firebase** para almacenar los datos del ecommerce.

- Puedes acceder a la página de Eshoop React a través del siguiente enlace:
    [Eshoop React](https://eshoop-react.netlify.app/)