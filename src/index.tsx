import React from 'react';
import ReactDOM from 'react-dom/client';
import "assets/tailwind/index.css";
import "assets/css/global.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, concat } from '@apollo/client';

// ---------Apollo Client-------
const httpLink = new HttpLink({ uri: "https://gapi.storyblok.com/v1/api" });
const authMiddleware = new ApolloLink((operation, forward) => {

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: process.env.REACT_APP_PREVIEW_TOKEN,
      version: "public",
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
