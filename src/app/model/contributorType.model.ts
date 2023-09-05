export interface ContributorType{
    id_tipo_contribuyente: number;
    nombre: string;
    estado: string;
}

export interface DialogContributorType {
    type: 'add' | 'edit';
    document?: ContributorType;
}