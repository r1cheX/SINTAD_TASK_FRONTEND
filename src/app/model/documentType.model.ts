export interface DocumentType{
    id_tipo_documento: number;
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    estado: boolean;
}

export interface DialogDocumentType {
    type: 'add' | 'edit';
    documentType: DocumentType;
}