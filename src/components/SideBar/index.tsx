import React from 'react';

import News from '../News'

import List from '../List'

import StickyBox from 'react-sticky-box'

import FollowSuggestions from '../FollowSuggestions'

import { 
  Container,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List 
            title='Talvez você curta'
            elements={[
              <FollowSuggestions 
                name='Henrique Rodrigues'
                nickname='@biumd'
              />,
              <FollowSuggestions 
                name='Pedro Albuquerque'
                nickname='@albuquerquecal'
              />,
              <FollowSuggestions 
                name='Gabrielle Nobre'
                nickname='@elle.goncalves'
              />
            ]}
          />
          <List 
            title='Talvez você curta'
            elements={[
              <h1>Teste</h1>,
              <h1>Teste</h1>,
              <h1>Teste</h1>,
              <h1>Teste</h1>,
            ]}
          />
          <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List 
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;