// AppComponent.stories.ts
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app/app.component';
import { MatTableModule } from '@angular/material/table';

export default {
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
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
  template: `<app-root></app-root>`,
});
Primary.args = {
  label: 'AppComponent',
  primary: true,
};
