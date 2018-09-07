import Vue from 'vue';
import ImageViewerWebPartComponent from './components/ImageViewerWebPart/ImageViewerWebPart.vue';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';


import * as strings from 'ImageViewerWebPartStrings';

import { PropertyFieldImageUrl } from '../../propertyFields/imageUrl/PropertyFieldImageUrl';

export interface IImageViewerWebPartProps {
  imageUrl: string;
}

export default class ImageViewerWebPart extends BaseClientSideWebPart<IImageViewerWebPartProps> {

  public render(): void {
    const id: string = `wp-${this.instanceId}`;
    this.domElement.innerHTML = `<div id="${id}"></div>`;

    let el = new Vue({
      el: `#${id}`,
      render: h => h(ImageViewerWebPartComponent, {
        props: {
          imageUrl: this.properties.imageUrl
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
                PropertyFieldImageUrl('imageUrl', {
                  key: 'imageUrl',
                  label: strings.ImageUrlFieldLabel,
                  value: this.properties.imageUrl,
                  properties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
