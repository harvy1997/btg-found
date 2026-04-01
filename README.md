# 🏦 BTG Bank — Gestión de Fondos de Inversión (FPV/FIC)

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-DD0031?style=for-the-badge&logo=primeng&logoColor=white)](https://primeng.org/)

Aplicación web desarrollada como **prueba técnica para Ingeniero Front-End**, basada en un caso de negocio real de BTG: la gestión de fondos de inversión (FPV/FIC).

El objetivo es ofrecer una experiencia moderna, intuitiva y responsiva que permita a los usuarios administrar sus inversiones de forma clara y eficiente.

---

## 🎯 Objetivo de la prueba

Diseñar e implementar una aplicación que permita a un usuario:

- Gestionar su participación en fondos de inversión.
- Visualizar su saldo y movimientos.
- Recibir notificaciones al realizar operaciones.

---

## ✨ Funcionalidades implementadas

### 📊 Gestión de fondos
- Visualización de fondos disponibles (FPV / FIC).
- Suscripción a fondos validando monto mínimo requerido.
- Cancelación de participación con actualización automática del saldo.

### 💰 Control financiero
- Visualización del saldo total del usuario.
- Validación de saldo disponible antes de cada operación.
- Mensajes de error claros en caso de fondos insuficientes.

### 🧾 Historial de transacciones
- Registro de suscripciones y cancelaciones.
- Visualización cronológica de movimientos.

### 🔔 Notificaciones
- Selección de método de notificación:
  - 📧 Email
  - 📱 SMS
- Preparado para integración con servicios externos.

### 🔐 Autenticación (estructura base)
- Manejo de sesión mediante store (`AuthStore`).
- Arquitectura preparada para guards y escalabilidad futura.

---

## 🌓 Experiencia de usuario

- Diseño completamente responsivo (mobile-first).
- Sidebar adaptativo + navegación inferior en móviles.
- Soporte para modo oscuro.
- Interfaz moderna con microinteracciones suaves.
- Estética tipo **glassmorphism**.

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | Angular (Signals & Standalone Components) |
| **Estilos** | Tailwind CSS + SCSS |
| **UI** | PrimeNG |
| **Alertas** | SweetAlert2 |
| **Estado** | Stores con Signals (`FondoStore`, `AuthStore`) |
| **Iconos** | Material Symbols |

---

## 🚀 Ejecución del proyecto

### Requisitos
- Node.js (v18+)
- Angular CLI

### Instalación

git clone https://github.com/harvy1997/btg-found.git
cd btg-found
npm install
npm run dev


### 📂 Estructura del proyecto

src/app/
├── core/
│   ├── interfaces/     # Modelos de datos
│   └── services/       # Lógica de negocio y stores
├── layout/             # Layout principal (sidebar, header)
├── pages/              # Vistas principales
└── shared/             # Componentes reutilizables