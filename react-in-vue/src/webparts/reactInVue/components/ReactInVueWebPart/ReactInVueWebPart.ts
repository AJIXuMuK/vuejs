import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import styles from './ReactInVueWebPart.module.scss';
import { ReactComponent } from '../ReactComponent/ReactComponent';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DisplayMode } from '@microsoft/sp-core-library';
import { ReactComponent as ReactComponentDecorator } from '../../../../utils/ReactComponentDecorator';
import { VuePlugin, ReactInVue } from 'vuera';
/**
 * Component's properties
 */
export interface IReactInVueWebPartProps {
    description: string;
    title: string;
    displayMode: DisplayMode;
    onButtonClicked: () => void;
    onTitleChanged: (value: string) => void;
}

//
// setting up the plugin to work with React components inside Vue
//
Vue.use(VuePlugin);

/**
 * Class-component
 */
@Component({
    components: {
        'react-component': ReactInVue(ReactComponent),
        'web-part-title': ReactInVue(WebPartTitle),
        'primary-button': ReactInVue(PrimaryButton)
    }
})
export default class ReactInVueWebPart extends Vue implements IReactInVueWebPartProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public description: string;
    @Prop()
    public title: string;
    @Prop()
    public displayMode: DisplayMode;
    @Prop()
    public onButtonClicked: () => void;
    @Prop()
    public onTitleChanged: (value: string) => void;

    /**
     * Vue component from custom component
     */
    //@ReactComponentDecorator(ReactComponent, 'react-component')
    //public reactComponent: ReactComponent;

    /**
     * Vue compoenent from SPFx Reusable React controls repo
     */
    //@ReactComponentDecorator(WebPartTitle, 'web-part-title')
    //public webPartTitle: WebPartTitle;

    /**
     * Vue compoenent from Office UI Fabric Primary Buttom
     */
    //@ReactComponentDecorator(PrimaryButton, 'primary-button')
    //public primaryButton: PrimaryButton;

    /**
     * Readonly property to return styles
     */
    public get styles(): { [key: string]: string } {
        return styles;
    }

    private _onTitleUpdate(value: string): void {
        if (this.onTitleChanged) {
            this.onTitleChanged(value);
        }
    }

    private _onButtonClicked(): void {
        if (this.onButtonClicked) {
            this.onButtonClicked();
        }
    }
}