"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[3134],{3134:function(n,t,e){e.r(t),t.default="import * as React from 'react';\n\ninterface IState {\n  clicks: number;\n}\n\nexport class Clicker extends React.Component<any, IState> {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      clicks: 0,\n    };\n  }\n\n  public clickHandler = () => {\n    this.setState({ clicks: this.state.clicks + 1 });\n  }\n\n  public render() {\n    return (\n      <div>\n        <p>You have clicked the button {this.state.clicks} time(s).</p>\n        <p>\n          <button onClick={this.clickHandler}>click me</button>\n        </p>\n      </div>\n    );\n  }\n}"}}]);
//# sourceMappingURL=3134.2c970e11.chunk.js.map