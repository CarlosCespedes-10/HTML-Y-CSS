import * as React from 'react';
import styled from 'styled-components';
import Article from './components/Article.jsx';
import Image from '../src/components/fondo.jsx';

const AppWrapper = styled.div``;

function App() {
    return (
        <AppWrapper>
        <Article></Article>
        <Image></Image>
        </AppWrapper>
    );
}
export default App; 