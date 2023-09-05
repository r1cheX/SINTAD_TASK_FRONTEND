export interface Entity{
    id_entidad: string;
    id_tipo_documento: string;
    nro_documento: string;
    razon_social: string;
    nombre_comercial: string;
    id_tipo_contribuyente: string;
    direccion: string;
    telefono: string;
    estado: string;
}

export interface DialogEntity {
    type: 'add' | 'edit';
    document?: Entity;
}