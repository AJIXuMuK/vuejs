import * as React from 'react';

/**
 * Simple component props
 */
export interface IReactComponentProps {
    text: string;
}

/**
 * Sample component with no state
 */
export class ReactComponent extends React.Component<IReactComponentProps, {}> {
    constructor(props: IReactComponentProps) {
        super(props);
    }

    public render(): React.ReactElement<IReactComponentProps> {
        return (<div>{this.props.text}</div>);
    }
}