import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, ScrollView, Text, View, Image } from 'react-native';
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { Loader } from '../../components/UI/Loader';
import { GET_ONE_LOCATION } from '../../query/oneLocation';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

export const LocationScreen: React.FC = ({ route }) => {
  const { id } = route?.params;
  const { data, loading, error } = useQuery(GET_ONE_LOCATION, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loader />;
  }

  const StyledLocationInfo = styled.View`
    padding: 20px 0;
    display: flex;
    align-items: center;
  `;

  const StyledType = styled.Text`
    letter-spacing: 0.07px;
    font-size: 11px;
    color: ${theme.colors.basic.lightGray};
  `;

  const StyledName = styled.Text`
    font-weight: 700;
    fonxt-size: 28px;
    letter-spacing: 0.337647px;
    color: ${theme.colors.basic.black};
  `;

  const StyledDimension = styled.Text`
    font-size: 13px;
    font-weight: 900;
    letter-spacing: -0.08px;
    color: ${theme.colors.gray.gray1};
    text-transform: uppercase;
  `;

  const StyledWrapperCard = styled.View`
    border: 1px solid ${theme.colors.basic.cardBorder};
    border-radius: 8px;
    margin: 0 8px 20px;
    width: 46%;
  `;

  const StyledImage = styled.Image`
    width: 100%;
    height: 140px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `;

  const StyledCardStatus = styled.Text`
    font-size: 11px;
    letter-spacing: 0.07px;
    color: ${theme.colors.basic.lightGray};
  `;

  const StyledCardName = styled.Text`
    font-weight: 900;
    font-size: 17px;
    letter-spacing: -0.41px;
    color: ${theme.colors.basic.black};
  `;

  const StyledCardInfo = styled.View`
    padding: 12px;
  `;

  const StyledListWrapper = styled.View`
    background-color: ${theme.colors.basic.white};
    padding: 20px 0 25px;
  `;

  const StyledListTitle = styled.Text`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.38px;
    color: ${theme.colors.gray.gray1};
    padding: 0 15px;
  `;

  return (
    <ScrollView>
      <SecondaryHeader title={data.location.name} />
      <StyledLocationInfo>
        <StyledType>{data.location.type}</StyledType>
        <StyledName>{data.location.name}</StyledName>
        <StyledDimension>{data.location.dimension}</StyledDimension>
      </StyledLocationInfo>
      {data.location.residents.length ? (
        <StyledListWrapper>
          <StyledListTitle>Residents</StyledListTitle>
          <FlatList
            contentContainerStyle={{
              backgroundColor: '#fff',
              paddingTop: 10,
              paddingLeft: 7,
              paddingRight: 7,
            }}
            numColumns={2}
            data={data.location.residents}
            renderItem={({ item }) => {
              return (
                <StyledWrapperCard>
                  <StyledImage source={{ uri: item.image }} alt={item.name} />
                  <StyledCardInfo>
                    <StyledCardStatus>{item.status}</StyledCardStatus>
                    <StyledCardName>{item.name}</StyledCardName>
                  </StyledCardInfo>
                </StyledWrapperCard>
              );
            }}
          />
        </StyledListWrapper>
      ) : (
        <StyledName style={{textAlign: 'center', textTransform: 'uppercase'}}>Персонажей нет</StyledName>
      )}
    </ScrollView>
  );
};
