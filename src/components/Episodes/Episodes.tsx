import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Header } from '../Header';
import { useQuery } from '@apollo/client';
import { GET_ALL_EPISODES } from '../../query/episodes';
import { Loader } from '../UI/Loader';
import { EpisodesSeasonList } from '../List/EpisodesSeasonList';

interface IEpisode {
  episode: string;
  name: string;
  created: string;
}

interface IDataEpisode {
  title: string;
  info: IEpisode[];
}

export const Episodes: React.FC = () => {
  const [dataEpisodes, setDataEpisodes] = useState<IDataEpisode[]>([]);
  const page = useRef(1);
  const { data, loading, error, refetch } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page.current,
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    <Text>Error...</Text>;
  }

  function loadMore() {
    if (data.episodes.results.length) {
      setDataEpisodes(prev => [
        ...prev,
        {
          title: `Episode ${dataEpisodes.length + 1}`,
          info: [...data.episodes.results],
        },
      ]);
      page.current += 1;
      refetch({ page: page.current });
    }
  }

  return (
    <ScrollView>
      <Header title="Episode" />
      <Button title="refetch" onPress={() => loadMore()} />
      {dataEpisodes.map(list => {
        return (
          <EpisodesSeasonList
            key={list.title}
            title={list.title}
            info={list.info}
          />
        );
      })}
    </ScrollView>
  );
};
