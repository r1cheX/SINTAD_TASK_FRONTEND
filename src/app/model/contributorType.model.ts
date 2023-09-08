export interface ContributorType{
    id_tipo_contribuyente?: number;
    id: number;
    nombre: string;
    estado: boolean;
}

export interface DialogContributorType {
    type: 'add' | 'edit';
    contributorType: ContributorType;
}