import { NgModule } from '@angular/core';

import { FinanceManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FinanceManagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FinanceManagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FinanceManagementSharedCommonModule {}
