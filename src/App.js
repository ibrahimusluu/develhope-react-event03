import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <Counter
          initialValue={0}
          incrementAmount={2}
          incrementInterval={1000}
        />
        <ClickTracker />
      </div>
    );
  }
}
