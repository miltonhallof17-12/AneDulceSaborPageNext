# Ane Dulce Sabor

Una aplicación web Next.js para la pastelería "Ane Dulce Sabor" con carruseles interactivos y diseño moderno.

## Características

- **Carrusel Hero**: Presentación de productos principales con auto-scroll
- **Destacados**: Carruseles infinitos de productos destacados
- **Catálogo de Productos**: Grid de productos con búsqueda
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Server-Side Rendering**: Optimizado para SEO y rendimiento con Next.js

## Tecnologías

- **React 19** con TypeScript
- **Next.js 16** para producción optimizada
- **Tailwind CSS** para estilos
- **Hooks personalizados** para carruseles y detección de visibilidad
- **App Router** de Next.js para routing moderno

## Instalación

```bash
npm install
```

## Scripts

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar linting

## Componentes

- **Hero**: Carrusel principal con productos destacados
- **Destacados**: Carrusel infinito con scroll continuo
- **ProductCard**: Tarjeta individual de producto
- **Footer**: Pie de página con información de contacto
- **Navbar**: Navegación principal
- **ProductsNavbar**: Navegación para página de catálogo
- **SearchBar**: Barra de búsqueda de productos
- **CategoryFilter**: Filtro por categorías
- **ProductsGrid**: Grid de productos con paginación

## Hooks Personalizados

- `useCarousel`: Gestión de carruseles con auto-scroll
- `useInView`: Detección de elementos visibles en pantalla
- `useIntersectionObserver`: Observador de intersecciones optimizado

## Estructura del Proyecto

```
app/
├── components/          # Componentes React
├── hooks/             # Hooks personalizados
├── services/          # Servicios de lógica de negocio
├── types/             # Definiciones TypeScript
├── data/              # Datos estáticos
├── public/            # Archivos estáticos
├── layout.tsx         # Layout principal
├── page.tsx           # Página principal
└── catalogo/
    ├── page.tsx        # Página de catálogo
    └── CatalogPageClient.tsx
```

## Arquitectura

- **Server Components**: Para páginas con metadata y SEO
- **Client Components**: Para interactividad y estado
- **App Router**: Sistema de routing moderno de Next.js
- **Metadata API**: Para optimización SEO integrada

## Migración desde Vite

Este proyecto fue migrado desde Vite a Next.js manteniendo:
- ✅ Todos los componentes originales
- ✅ Funcionalidad completa
- ✅ Estilos y animaciones
- ✅ Datos de productos
- ✅ Optimización para producción

## Despliegue

Este proyecto está desplegado en: https://ane-dulce-sabor.vercel.app/

## Desarrollo

Para desarrollo local:

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Ejecutar `npm run dev`
4. Abrir `http://localhost:3000`
