# @jvillazante/auditoria-util

**Librería de utilidades para auditoría de cambios en objetos**.

Esta librería proporciona funciones genéricas para comparar objetos en proyectos TypeScript y registrar cambios de manera estructurada, ideal para integrar en ecosistemas de microservicios con auditoría centralizada.

---

## 📦 Instalación

### Desde NPM

```bash
npm install @jvillazante/auditoria-util
```

### Desde repositorio local (desarrollo)

```bash
npm install ../ruta/a/auditoria-util
```

---

## 🚀 Uso básico

### Importar la función de comparación

```typescript
import { compararObjetos, CambioCampoDto } from '@jvillazante/auditoria-util';

const cambios: CambioCampoDto[] = compararObjetos(personaActual, dto, [
  'nombre',
  'primer_apellido',
  'fecha_nacimiento',
  'sexoId',
]);

if (cambios.length > 0) {
  // Enviar cambios a tu sistema de auditoría
}
```

### Definición de `CambioCampoDto`

```typescript
export interface CambioCampoDto {
  campoModificado: string;
  valorAnterior?: string | null;
  valorNuevo?: string | null;
}
```

---

## 🛠 Scripts disponibles

- `npm run build` → Compila TypeScript a JavaScript en `dist/`

---

## 📋 Requerimientos

- Node.js 18+
- TypeScript 5+

---

## 📂 Estructura del proyecto

```
auditoria-util/
 ├── src/
 │    ├── comparar-objetos.ts
 │    ├── interfaces/
 │         └── cambio-campo.interface.ts
 │    └── index.ts
 ├── package.json
 ├── tsconfig.json
 ├── .npmignore
 ├── .gitignore
 └── README.md
```

---

## 👤 Autor

- **Jose Luis Villazante**  
  [GitHub](https://github.com/jvillazante)

## 📄 Licencia

Este proyecto está licenciado bajo la licencia **MIT**.

---
