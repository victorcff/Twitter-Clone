import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Dot,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Victor Cavalcanti</strong>
            <span>@victorcff</span>
            <Dot />
            <time>18 de fev</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              49
            </Status>
            <Status>
              <RetweetIcon />
              49
            </Status>
            <Status>
              <LikeIcon />
              1264
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;