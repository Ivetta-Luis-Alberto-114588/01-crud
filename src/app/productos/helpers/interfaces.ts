export interface Tipo {
    id: number;
    descripcion: string;
}

export interface Ubicacion {
    id: number;
    nombre: string;
}

export interface Comentario {
    id: number,
    comentario: string
}

export interface UbicacionProducto {
    ubicacion: Ubicacion; 
    cantidad: number; 
}

export interface Producto {
    id: number;
    nombre: string;
    comentarios: Comentario[],
    tipo: number,
    ubicaciones: UbicacionProducto[]; 
} 


  

  
