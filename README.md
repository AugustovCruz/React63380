# Proyecto React 

Actualice el repo usando **React Router** para la navegacion de la pagina a traves del Nav y al seleccionar los items de las distintas categorias

## Rutas Configuradas

1. **`/`**: Esta ruta carga el componente `<ItemListContainer />`, que muestra todos los productos disponibles
2. **`/category/:category`**: Esta ruta muestra los productos que pertenecen a una categoría específica. Para filtrar los productos de la categoria seleccionada
3. **`/item/:id`**: Esta ruta carga el componente `<ItemDetailContainer />`, que muestra los detalles de un producto específico 

## Enlaces Configurados

- **Hacer clic en el logo**: Redirige a la página de inicio (`/`)
- **Hacer clic en un producto**: Redirige a la página de detalles del producto (`/item/:id`), donde `:id` es el identificador único del producto
- **Hacer clic en una categoría en el navbar**: Redirige a la página de la categoría seleccionada (`/category/:category`)

## Reactividad con Parámetros y Estado

- El proyecto utiliza **`useEffect`** y **`useParams`** de React Router para reaccionar a los cambios en los parámetros de las rutas, como `:id` y `:category`. Esto permite cargar los productos correspondientes a la categoría seleccionada o los detalles del producto de manera eficiente
  
- Además, se utiliza **`useState`** para almacenar:
  - El contador de cada producto al realizar una compra (en el componente `ItemCount`)
  - Los productos que se muestran en la lista de productos (en el componente `ItemListContainer`)
  - El producto específico que se muestra en el detalle del producto (en el componente `ItemDetailContainer`)
  
  Esto permite actualizar el contenido mostrado en las secciones a medida que se navega entre diferentes rutas
