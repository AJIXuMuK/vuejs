import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import styles from './PropertyFieldImageUrl.module.scss';

import {
    IPropertyFieldImageUrlHostProps
} from './IPropertyFieldImageUrlHost';

/**
 * Class-component
 */
@Component
export default class PropertyFieldImageUrlHost extends Vue implements IPropertyFieldImageUrlHostProps {
    @Prop()
    public label: string;

    @Prop()
    public value?: string;

    @Prop()
    public uniqueKey: string;
    
    @Prop()
    public onValueChanged: (value: string) => void;

    /**
     * reactive properties of the component
     */
    public data(): any {
        return {
            // text box value
            inputValue: this.value
        };
    }

    /**
     * Readonly property to return styles
     */
    public get styles(): { [key: string]: string } {
        return styles;
    }

    /**
     * Unique input id
     */
    public get inputId(): string {
        return `Input${this.uniqueKey}`;
    }

    /**
     * input onchange event handler
     * @param event 
     */
    private _onChange(event) {
        if (this.onValueChanged) {
            this.onValueChanged(this.$data.inputValue);
        }
    }
}