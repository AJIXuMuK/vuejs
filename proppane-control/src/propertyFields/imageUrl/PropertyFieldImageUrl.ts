import { IPropertyPaneField, PropertyPaneFieldType } from '@microsoft/sp-webpart-base';
import { IPropertyFieldImageUrlProps, IPropertyFieldImageUrlPropsInternal } from './IPropertyFieldImageUrl';

// Importing Vue.js
import Vue from 'vue';
// Improting Vue.js SFC
import ImageUrlComponent from './PropertyFieldImageUrlHost.vue';

class PropertyFieldImageUrlBuilder implements IPropertyPaneField<IPropertyFieldImageUrlProps> {
    //Properties defined by IPropertyPaneField
	public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
	public targetProperty: string;
	public properties: IPropertyFieldImageUrlPropsInternal;
    private elem: HTMLElement;
    private value: string;
    private changeCB?: (targetProperty?: string, newValue?: any) => void;
    
    public constructor(_targetProperty: string, _properties: IPropertyFieldImageUrlProps) {
		this.targetProperty = _targetProperty;
		this.properties = {
			key: _properties.key,
			label: _properties.label,
            onPropertyChange: _properties.onPropertyChange,
            value: _properties.value,
            onRender: this.onRender.bind(this),
            properties: _properties.properties
        };
        
        this.value = _properties.value;
        if (this.value === undefined) {
            this.value = '';
        }
    }
    
    public render(): void {
        if (!this.elem) {
            return;
        }

        this.onRender(this.elem);
    }

    private onRender(elem: HTMLElement, ctx?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void): void {
		if (!this.elem) {
			this.elem = elem;
		}
        this.changeCB = changeCallback;
        
        const id: string = `ppf-${this.properties.key}`;

        elem.innerHTML = '';

        // root div element of the control
        const element: HTMLDivElement = document.createElement('div');
        element.id = id;
        elem.appendChild(element);

        let vueEl = new Vue({
            render: h => h(ImageUrlComponent, {
              props: {
                uniqueKey: this.properties.key,
                value: this.value,
                label: this.properties.label,
                onValueChanged: this._onInputChange.bind(this)
              }
            })
          });

          vueEl.$mount(element);
    }

    private _onInputChange(newValue: string): void {
        if (this.properties.onPropertyChange && newValue !== this.value) {
            this.properties.onPropertyChange(this.targetProperty, this.value, newValue);
            this.value = newValue;
            this.properties.properties[this.targetProperty] = newValue;
            if (typeof this.changeCB !== 'undefined' && this.changeCB !== null) {
				this.changeCB(this.targetProperty, newValue);
			}
        }
    }
}

export function PropertyFieldImageUrl(targetProperty: string, properties: IPropertyFieldImageUrlProps): IPropertyPaneField<IPropertyFieldImageUrlProps> {
	return new PropertyFieldImageUrlBuilder(targetProperty, properties);
}