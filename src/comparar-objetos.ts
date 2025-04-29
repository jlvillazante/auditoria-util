import { CambioCampoDto } from "./interfaces/cambio-campo.interface";

export function compararObjetos<T extends object>(
  original: T,
  modificado: Partial<T>,
  campos: (keyof T)[]
): CambioCampoDto[] {
  const cambios: CambioCampoDto[] = [];

  for (const campo of campos) {
    const valorOriginal = (original as any)[campo];
    const valorNuevo = (modificado as any)[campo];

    if (valorNuevo !== undefined && valorOriginal !== valorNuevo) {
      cambios.push({
        campoModificado: campo as string,
        valorAnterior: valorOriginal?.toString() ?? null,
        valorNuevo: valorNuevo?.toString() ?? null,
      });
    }
  }

  return cambios;
}
