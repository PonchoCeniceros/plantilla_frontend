# Plantilla de Proyecto: React + TypeScript + Tailwind CSS + Yarn
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge)
Este documento proporciona una guía básica para configurar un proyecto de React con TypeScript y Tailwind CSS utilizando Yarn como gestor de paquetes.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu entorno de desarrollo:

- **Node.js** (https://nodejs.org)
- **Yarn** (https://yarnpkg.com)

Puedes verificar las versiones instaladas con los siguientes comandos:
```bash
node -v
yarn -v
```

## Pasos para la configuración
### 1. Instalar las dependencias necesarias
Ejecuta el siguiente comando para crear realizar la instalación:

```bash
yarn
```

### 4. Ejecutar el servidor de desarrollo
Para verificar que todo está configurado correctamente, inicia el servidor de desarrollo con:

```bash
yarn dev
```

### 6. Compilar el proyecto para producción
Cuando estés listo para preparar tu proyecto para producción, puedes ejecutar el siguiente comando:

```bash
yarn build
```

Este comando generará una versión optimizada de tu aplicación en la carpeta `dist/`.
---

## Estructura del Proyecto
```
├── src/
│   ├── main.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

### Archivos importantes:
Archivos dentro de `src/`
- `main.css`: Archivo de estilos globales.
- `main.tsx`: El archivo que actúa como el punto de entrada de la aplicación. También es donde puedes inicializar otras configuraciones o integraciones (por ejemplo, Redux, Router, etc.).
- `vite-env.d.ts`: Este archivo es generado automáticamente y define tipos globales para el entorno de Vite. Garantiza que tu proyecto TypeScript tenga las definiciones correctas para las funciones que Vite expone.

Archivos de configuración
- `tailwind.config.js`: El archivo de configuración de Tailwind CSS.
- `tsconfig.app.json`: Un archivo de configuración específico de TypeScript para la aplicación principal.
- `tsconfig.node.json`: Este archivo de configuración de TypeScript es específico para Node.js.

Otros archivos
- `vite.config.ts`: El archivo de configuración de Vite. Aquí puedes definir reglas personalizadas para cómo se comporta Vite durante el desarrollo y la construcción (build). Puedes configurar plugins, rutas, alias, proxies, etc.
- `yarn.lock`: Este archivo es generado automáticamente por Yarn y bloquea las versiones exactas de las dependencias instaladas en tu proyecto.

---

## Dependencias clave

Aquí están algunas de las dependencias clave de este proyecto:

- **React**: Biblioteca principal para construir interfaces de usuario.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript.
- **Tailwind CSS**: Framework de utilidades CSS.
- **Yarn**: Gestor de paquetes para instalar y administrar las dependencias.
---

Con esta configuración, tendrás una plantilla moderna y eficiente para desarrollar aplicaciones React con TypeScript y Tailwind CSS utilizando Yarn.
