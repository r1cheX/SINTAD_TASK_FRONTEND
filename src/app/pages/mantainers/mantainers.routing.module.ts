import { Routes } from '@angular/router';

// ui
import { EntityComponent } from './entity/entity.component';
import { ContributorTypeComponent } from './contributor-type/contributor-type.component';
import { DocumentTypeComponent } from './document-type/document-type.component';

export const MantainersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'entity',
                component: EntityComponent,
            },
            {
                path: 'document-type',
                component: DocumentTypeComponent,
            },
            {
                path: 'contributor-type',
                component: ContributorTypeComponent,
            },
        ],
    },
];
