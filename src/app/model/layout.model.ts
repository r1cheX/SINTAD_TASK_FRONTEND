export interface NavItem {
    displayName?: string;
    disabled?: boolean;
    external?: boolean;
    twoLines?: boolean;
    chip?: boolean;
    iconName?: string;
    navCap?: string;
    chipContent?: string;
    chipClass?: string;
    subtext?: string;
    route?: string;
    children?: NavItem[];
    ddType?: string;
}


export const navItems: NavItem[] = [
    {
        navCap: 'Inicio',
    },
    {
        displayName: 'Dashboard',
        iconName: 'layout-dashboard',
        route: 'main/dashboard',
    },
    {
        navCap: 'Mantenedores',
    },
    {
        displayName: 'Entidad',
        iconName: 'building',
        route: 'main/entity',
    },
    {
        displayName: 'Tipo de Documento',
        iconName: 'book-2',
        route: 'main/document-type',
    },
    {
        displayName: 'Tipo de contribuyente',
        iconName: 'users',
        route: 'main/contributor-type',
    },
    {
        navCap: 'Búsqueda',
    },
    {
        displayName: 'Meilisearch',
        iconName: 'search',
        route: 'main/meilisearch',
    },
];
