import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import styles from './SimpleWebPart.module.scss';

/**
 * Component's properties
 */
export interface ISimpleWebPartProps {
    description: string;
}

/**
 * Class-component
 */
@Component
export default class SimpleWebPart extends Vue implements ISimpleWebPartProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public description: string;

    /**
     * Readonly property to return styles
     */
    public get styles(): { [key: string]: string } {
        return styles;
    }
}