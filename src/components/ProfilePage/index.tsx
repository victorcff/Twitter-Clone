import React from 'react';

import Feed from '../Feed'

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>
          Editar Perfil
        </EditButton>

        <h1>Victor Cavalcanti</h1>
        <h2>@victorcff</h2>

        <p>
          Developer at <a href='https://rocketseat.com.br'>@RocketSeat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de setembro de 1994
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>107</strong>
          </span>
          <span>
            <strong>56</strong> seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;