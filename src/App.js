import { Card } from "@material-ui/core";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import "./App.css";
import Title from "./Title";

function App() {
  return (
    <AppStyled>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>AirSmart</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Helmet>

        <Card elevation="5" className="card-container">
          <Title />
          <iframe
            title="AirSmartDashboard"
            width="100%"
            height="80%"
            src="https://lookerstudio.google.com/embed/reporting/36b9d705-de43-4f24-8ee6-2fda685dca57/page/4vLdD"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </Card>
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(91, 204, 142, 0.9), rgba(4, 71, 28, 0.9));
  background-color: black;

  .card-container {
    height: 80vh;
  }
`;

export default App;
