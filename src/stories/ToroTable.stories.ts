// ToroTableComponent.stories.ts
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToroTableComponent } from '../app/components/toro-table/toro-table.component';
import { MatTableModule } from '@angular/material/table';

export default {
  component: ToroTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToroTableComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
      ],
    }),
  ],
} as Meta;

export const Primary: Story = (args) => ({
  props: args,
  template: `<app-toro-table></app-toro-table>`,
});
Primary.args = {
  label: 'ToroTableComponent',
  primary: true,
};
