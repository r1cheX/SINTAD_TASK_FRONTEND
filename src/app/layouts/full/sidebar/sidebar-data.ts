import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
    {
        navCap: 'Inicio',
    },
    {
        displayName: 'Dashboard',
        iconName: 'layout-dashboard',
        route: '/dashboard',
    },
    {
        navCap: 'Mantenedores',
    },
    {
        displayName: 'Entidad',
        iconName: 'building',
        route: '/mantainers/entity',
    },
    {
        displayName: 'Tipo de Documento',
        iconName: 'book-2',
        route: '/mantainers/document-type',
    },
    {
        displayName: 'Tipo de contribuyente',
        iconName: 'users',
        route: '/mantainers/contributor-type',
    },
    // {
    //   displayName: 'Menu',
    //   iconName: 'layout-navbar-expand',
    //   route: '/ui-components/menu',
    // },
    // {
    //   displayName: 'Tooltips',
    //   iconName: 'tooltip',
    //   route: '/ui-components/tooltips',
    // },
    // {
    //   navCap: 'Auth',
    // },
    // {
    //   displayName: 'Login',
    //   iconName: 'lock',
    //   route: '/authentication/login',
    // },
    // {
    //   displayName: 'Register',
    //   iconName: 'user-plus',
    //   route: '/authentication/register',
    // },
    // {
    //   navCap: 'Extra',
    // },
    // {
    //   displayName: 'Icons',
    //   iconName: 'mood-smile',
    //   route: '/extra/icons',
    // },
    // {
    //   displayName: 'Sample Page',
    //   iconName: 'aperture',
    //   route: '/extra/sample-page',
    // },
];
