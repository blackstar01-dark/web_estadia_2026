# 📘 Sistema Digital de Bitácoras (Frontend)

Proyecto **Frontend** desarrollado con **Next.js 16** y **Node.js 20**, orientado a la digitalización y gestión de bitácoras operativas de estaciones de servicio, cumpliendo con la **NOM-005-ASEA-2016**.

---

## 🚀 Tecnologías utilizadas

* **Next.js 16** (App Router)
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide Icons**
* **Node.js 20**

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

* Node.js **v20.x**
* npm / pnpm / yarn
* Backend en NestJS funcionando

Verifica tu versión de Node:

```bash
node -v
```

---

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

Instala las dependencias:

```bash
npm install
# o
pnpm install
# o
yarn install
```

---

## ▶️ Ejecución en desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en:

```
http://localhost:3000
```

---

## 🔐 Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

En producción (Vercel):

```env
NEXT_PUBLIC_API_URL=https://tu-backend-nestjs.com
```

---

## 🔗 Backend

Este frontend consume una API desarrollada en **NestJS**. El backend debe:

* Estar desplegado públicamente
* Tener CORS habilitado para el dominio de Vercel

Ejemplo en `main.ts`:

```ts
app.enableCors({
  origin: ['http://localhost:3000', 'https://tu-front.vercel.app'],
});
```

---

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── estaciones/
│   ├── bitacoras/
│   ├── dashboard/
│   └── page.tsx
├── components/
├── service/
└── styles/
```

---

## ☁️ Despliegue

### Frontend

* Plataforma: **Vercel**
* Node Version: **20**
* Framework: **Next.js**

Configura las variables de entorno desde el panel de Vercel.

---

## 📄 Licencia

Proyecto de uso privado. Todos los derechos reservados © 2026.

---

## 👨‍💻 Autor

**Figueroa González y Asociados, S. C.**
Desarrollo de soluciones tecnológicas para cumplimiento normativo.
