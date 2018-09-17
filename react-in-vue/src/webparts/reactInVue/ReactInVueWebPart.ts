import Vue from 'vue';
import ReactInVueWebPartComponent from './components/ReactInVueWebPart/ReactInVueWebPart.vue';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';


import * as strings from 'ReactInVueWebPartStrings';

export interface IReactInVueWebPartProps {
  description: string;
  title: string;
}

export default class ReactInVueWebPart extends BaseClientSideWebPart<IReactInVueWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      render: h => h(ReactInVueWebPartComponent, {
        props: {
          description: this.properties.description,
          title: this.properties.title,
          displayMode: this.displayMode,
          onTitleChanged: (newTitle: string) => { this.properties.title = newTitle; },
          onButtonClicked: () => { alert('Button Clicked!'); }
        }
      })
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
