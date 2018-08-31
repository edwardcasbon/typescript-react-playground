import * as React from "react";

export interface ExampleProps {
    first: string;
    middle?: string;
    last: string;
}

export class Example extends React.Component<ExampleProps, {}> {
    render() {
        return <p>Hello from example component to {this.props.first} {this.props.last}.</p>;
    }
}