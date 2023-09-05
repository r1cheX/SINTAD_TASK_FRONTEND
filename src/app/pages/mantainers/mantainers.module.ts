import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { MantainersRoutes } from './mantainers.routing.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// Material
import { MaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';

// components
import { EntityComponent } from './entity/entity.component';
import { DocumentTypeComponent } from './document-type/document-type.component';
import { ContributorTypeComponent } from './contributor-type/contributor-type.component';
import { ModalAddEditEntityComponent } from './entity/component/modal-add-edit-entity/modal-add-edit-entity.component';
import { ModalDeleteEntityComponent } from './entity/component/modal-delete-entity/modal-delete-entity.component';
import { ModalAddEditDocumentTypeComponent } from './document-type/component/modal-add-edit-document-type/modal-add-edit-document-type.component';
import { ModalAddEditContributorTypeComponent } from './contributor-type/component/modal-add-edit-contributor-type/modal-add-edit-contributor-type.component';
import { ModalDeleteContributorTypeComponent } from './contributor-type/component/modal-delete-contributor-type/modal-delete-contributor-type.component';
import { ModalDeleteDocumentTypeComponent } from './document-type/component/modal-delete-document-type/modal-delete-document-type.component';

@NgModule({
  declarations: [
    EntityComponent,
    DocumentTypeComponent,
    ContributorTypeComponent,
    ModalAddEditEntityComponent,
    ModalDeleteEntityComponent,
    ModalAddEditDocumentTypeComponent,
    ModalDeleteDocumentTypeComponent,
    ModalAddEditContributorTypeComponent,
    ModalDeleteContributorTypeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MantainersRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
})
export class MantainersModule {}
