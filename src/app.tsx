import * as React from "react";
import { Button } from "honeycomb-react/dist/components/Button";

import { Example } from "./components/example";

export class App extends React.Component {
    render() {
        return <React.Fragment>
            <p>App</p>
            <Button size="regular" text="Button text"></Button>
            <Example first="Edward" last="Casbon" />
        </React.Fragment>;
    }
}