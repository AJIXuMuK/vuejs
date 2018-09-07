import { Vue, Component, Prop, Provide } from 'vue-property-decorator';
import styles from './ImageViewerWebPart.module.scss';

/**
 * Component's properties
 */
export interface IImageViewerWebPartProps {
    imageUrl: string;
}

/**
 * Class-component
 */
@Component
export default class ImageViewerWebPart extends Vue implements IImageViewerWebPartProps {

    /**
     * implementing ISimpleWebPartProps interface
     */
    @Prop()
    public imageUrl: string;

    /**
     * Readonly property to return styles
     */
    public get styles(): { [key: string]: string } {
        return styles;
    }
}