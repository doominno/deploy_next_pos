# 🛒 POS Frontend - Sistema de Punto de Venta

Un sistema moderno de punto de venta desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Incluye gestión de productos, categorías, ventas y un panel de administración completo.

## ✨ Características

- 🛍️ **Tienda Virtual** - Interfaz de usuario moderna para la venta
- 📦 **Gestión de Productos** - CRUD completo de productos con imágenes
- 🏷️ **Categorías** - Organización de productos por categorías
- 🛒 **Carrito de Compras** - Sistema de carrito con cupones de descuento
- 📊 **Panel de Administración** - Gestión completa del inventario
- 📈 **Reportes de Ventas** - Filtrado por fechas con calendario
- 🖼️ **Gestión de Imágenes** - Integración con Cloudinary
- 📱 **Responsive Design** - Optimizado para móviles y desktop

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand
- **Validación**: Zod
- **Imágenes**: Next.js Image + Cloudinary
- **Calendario**: React Calendar
- **UI**: Componentes personalizados

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/doominno/deploy_next_pos.git
   cd deploy_next_pos
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus configuraciones:
   ```env
   NEXT_PUBLIC_DOMAIN=http://localhost:3000
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
frontend/
├── app/                    # App Router de Next.js
│   ├── (store)/           # Rutas de la tienda
│   ├── admin/             # Panel de administración
│   └── coupons/           # API de cupones
├── components/            # Componentes reutilizables
│   ├── cart/             # Componentes del carrito
│   ├── products/         # Componentes de productos
│   ├── transactions/     # Componentes de transacciones
│   └── ui/               # Componentes base
├── src/
│   ├── api.ts            # Funciones de API
│   ├── schemas.ts        # Esquemas de validación
│   ├── store.ts          # Estado global
│   └── utils.ts          # Utilidades
└── public/               # Archivos estáticos
```

## 🎯 Funcionalidades Principales

### 🛍️ Tienda
- Navegación por categorías
- Búsqueda de productos
- Carrito de compras interactivo
- Aplicación de cupones de descuento
- Proceso de checkout

### 📊 Administración
- Gestión de productos (CRUD)
- Gestión de categorías
- Subida de imágenes a Cloudinary
- Reportes de ventas por fecha
- Control de inventario

### 🛒 Carrito de Compras
- Agregar/eliminar productos
- Modificar cantidades
- Aplicar cupones de descuento
- Cálculo automático de totales
- Persistencia del estado

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras plataformas
- **Netlify**: Compatible con Next.js
- **Railway**: Fácil despliegue con base de datos
- **Render**: Alternativa gratuita

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Alejandro Domínguez**
- GitHub: [@doominno](https://github.com/doominno)

---

⭐ **¡Dale una estrella si te gusta este proyecto!** ⭐
