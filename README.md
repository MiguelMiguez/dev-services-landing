# Landing Page - React + Vite + TailwindCSS

Este proyecto es una landing page desarrollada con las siguientes tecnologías:

- React
- Vite
- TailwindCSS
- Framer Motion (animaciones)
- React Typing Effect (efecto de texto mecanografiado)
- PostCSS
- Autoprefixer

## Requisitos

- Node.js v18.x o superior
- npm v9.x o superior

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instalar dependencias

```bash
npm install
```

3. Iniciar el proyecto en modo desarrollo

```bash
npm run dev
```

El proyecto se iniciará en:

```
http://localhost:5173
```

## Dependencias principales

| Paquete             | Versión recomendada |
| ------------------- | ------------------- |
| react               | ^18.x               |
| react-dom           | ^18.x               |
| vite                | ^4.x                |
| tailwindcss         | ^3.x                |
| framer-motion       | ^11.x               |
| react-typing-effect | ^3.x                |
| postcss             | ^8.x                |
| autoprefixer        | ^10.x               |

## Estructura del proyecto

```
/src
  /components
    /Navbar
    /Footer
  /pages
    home.jsx
  /sections
    /Hero
      Hero.jsx
      Hero.css
/App.css
/main.jsx
/App.jsx
/tailwind.config.js
```

## Personalización

- Los estilos globales se encuentran en `App.css`.
- Configuración de TailwindCSS en `tailwind.config.js`.
- Las animaciones se encuentran en los componentes específicos, principalmente en `Hero.jsx`.

## Scripts disponibles

- `npm run dev`: Levanta el servidor de desarrollo.
- `npm run build`: Genera la versión de producción.
- `npm run preview`: Previsualiza el build de producción localmente.
