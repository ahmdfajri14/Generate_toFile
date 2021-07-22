import './App.css';
import {Card, Grid, CardContent} from "@material-ui/core";
import React from "react";
import Button from "./components/Button";
import Link from "./components/Link";

class App extends React.Component {
  constructor(props) {
    super(props);
}
  generateAlphabetical() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }

  generateRealNumber () {
    var numbers = Math.floor(Math.random() * 100000) + 1;
    return numbers;
  }

  generateInteger () {
    var integers = Math.floor(Math.random() * 100) + 1;
    return integers;
  }

  generateAlphanumerics() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }
  generate() {
    var generate = {
      alphabeticalCount: this.generateAlphabetical(),
      floatCount: this.generateRealNumber(),
      intCount: this.generateInteger(),
      alphanumericCount: this.generateAlphanumerics()
    }
     return generate;
  }
  generateFile = () => {
    const element = document.createElement("a");
    const file = new Blob([this.generate()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  state = {isHiddenResult: true, isHiddenLink: true, link: 'bit.ly'}
  toggleHiddenLink = () => {
    this.setState((prevState)=>({isHiddenLink: !prevState.isHiddenLink}))
  }
  toggleHiddenResult = () => {
    this.setState((prevState)=>({isHiddenResult: !prevState.isHiddenResult}))
  }

  render () {
    return (
      <div className="App">
       <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card data-testid="card" style={{ width: 300, height: 300 }}>
        <CardContent data-testid="card-content">
        <Button
            label="Generate"
            testID="generate-btn"
            color="secondary"
            handler={this.toggleHiddenLink}
          />
  {!this.state.isHiddenLink && <div>
<Link  generateFile={this.generateFile} link={this.state.link} />
</div>
}
            <Button label="Report" testID="report-btn" handler={this.toggleHiddenResult} /> 
            <Grid item>
              {!this.state.isHiddenResult && <div>
                <p>Alphabetical String: {this.generateAlphabetical()}</p>
                <p>Real numbers: {this.generateRealNumber()}</p>
                <p>Integers: {this.generateInteger()}</p>
                <p>Alphanumerics: {this.generateAlphanumerics()}</p>
                </div>}
            </Grid>
      </CardContent>
      </Card>
    </Grid>

      </div>
    )
  }
}

export default App;
