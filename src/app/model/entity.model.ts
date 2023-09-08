export interface Entity{
    id: number;
    nroDocumento: string;
    razonSocial: string;
    nombreComercial: string;
    idTipoDocumento: number;
    idTipoContribuyente: number;
    direccion: string;
    telefono: string;
    estado: boolean;
    tipoContribuyenteNombre?: string;
    tipoDocumentoNombre?: string;
}

export interface DialogEntity {
    type: 'add' | 'edit';
    entity: Entity;
}