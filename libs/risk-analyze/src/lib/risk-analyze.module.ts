import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { riskAnalyzeRoutes } from './lib.routes';
import { RiskAnalyzeComponent } from './risk-analyze.component';

@NgModule({
  declarations: [RiskAnalyzeComponent],
  imports: [RouterModule.forChild(riskAnalyzeRoutes)],
  exports: [RiskAnalyzeComponent],
  providers: []
})
export class RiskAnalyzeModule {}
