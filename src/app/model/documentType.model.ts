export interface DocumentType{
    id_tipo_documento: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    estado: string;
}

export interface DialogDocumentType {
    type: 'add' | 'edit';
    document?: DocumentType;
}