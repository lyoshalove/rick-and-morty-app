import { useQuery } from '@apollo/client';
import React from 'react';
import { ScrollView } from 'react-native';
import { CharacterDetailCard } from '../../components/CharacterDetailCard';
import { InformationList } from '../../components/List/InfomationList';
import { GET_ONE_CHARACTER } from '../../query/character';
import styled from 'styled-components/native';
import { EpisodesList } from '../../components/List/EpisodesList';
import { Loader } from '../../components/UI/Loader';
import { SecondaryHeader } from '../../components/SecondaryHeader';

const StyledCharacterInfo = styled.ScrollView`
  background-color: #fff;
  padding: 20px 0 30px;
`;

export const CharacterScreen: React.FC = ({ route }) => {
  const { id } = route?.params;
  const { data, loading, error } = useQuery(GET_ONE_CHARACTER, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <SecondaryHeader title={data.character.name} />
      <CharacterDetailCard
        name={data.character.name}
        image={data.character.image}
        status={data.character.status}
        species={data.character.species}
      />
      <StyledCharacterInfo>
        <InformationList
          gender={data.character.gender}
          type={data.character.type}
          origin={data.character.origin.name}
          location={data.character.location.name}
        />
        <EpisodesList title="Episodes" id={id} />
      </StyledCharacterInfo>
    </ScrollView>
  );
};
