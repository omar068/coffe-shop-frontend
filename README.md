# Proyecto Frontend: Prueba Técnica

Este proyecto es el **frontend** de la prueba técnica construida con **Next.js**, **TypeScript** y **Tailwind CSS**. La aplicación consume una API para la autenticación, que está implementada en **NestJS**, y una API externa que proporciona información sobre cervecerías en todo el mundo. Se filtran las cervecerías para mostrar únicamente las de **California**.

## Estructura del Proyecto

Este proyecto sigue una arquitectura basada en componentes modulares, con un enfoque en pruebas unitarias y buenas prácticas de desarrollo.

### Dependencias

- **Next.js**: Framework React para renderizado del lado del servidor (SSR) y generación de páginas estáticas.
- **TypeScript**: Superset de JavaScript que agrega tipado estático y otras características.
- **Tailwind CSS**: Framework de CSS utilitario para diseño responsivo y personalización rápida.
- **Axios**: Cliente HTTP para hacer peticiones a la API.
- **React Testing Library**: Biblioteca para pruebas de componentes React.
- **Jest**: Framework para pruebas unitarias.

### Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0 o yarn >= 1.22.0

### Instalación

Para instalar las dependencias y configurar el proyecto, sigue los siguientes pasos:

1. **Clona el repositorio**:

```bash
   git clone https://github.com/omar068/coffe-shop-frontend.git
   cd coffe-shop-frontend
```

2.** Instala las dependencias: **
```bash
npm install
```
3.** Ejecutar el proyecto en un ambiente de desarrollo: **
```bash
npm run dev
```
### Pruebas unitarias
Con el comando: 
```bash
npm test
```
Se ejecutarán todos los tests unitarios, los cuales cubren todos y cada uno de los componentes visuales utilizados en el proyecto.

###Características
Autenticación: La aplicación se conecta a una API de autenticación desarrollada en NestJS. Se utiliza JWT para el manejo de tokens y mantener al usuario autenticado.

Conexión con API Externa: El frontend consume una API externa (Open Brewery DB) que proporciona información sobre cervecerías en todo el mundo. Se hace un filtrado de los datos para mostrar solo las cervecerías ubicadas en California.

Filtros: Los usuarios podrán ver una lista completa de las cervecerías y luego una lista filtrada específicamente para California. El sistema realiza una consulta a la API externa y presenta los resultados en una vista organizada y fácil de usar.

Información: A través de un carrusel, los usuarios pueden navegar por las diferentes cervecerías, ya sea la lista general o la lista filtrada. Además, cuentan con un botón para obtener más información acerca del sitio. Al presionar ese botón, encontrarán la información que ya podían ver en el carrusel, más una serie de fotos y comentarios de cada sitio.

###Consideraciones
Cookies: Este proyecto utiliza js-cookie para manejar las cookies del navegador, especialmente para la autenticación del usuario.

Routing: Usamos el router de Next.js para navegar entre las páginas y para manejar redirecciones programáticas.

Imágenes: Se utiliza el componente Image de Next.js para optimizar el rendimiento de las imágenes y cargarlas de manera eficiente, específicamente los iconos proporcionados en el diseño de Figma.