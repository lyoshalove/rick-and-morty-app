import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabBar } from './src/components/TabBar';
import { RootNavigation } from './src/navigation/root';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigation />
        {/* <TabBar /> */}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
