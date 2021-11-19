import api from './api';

export const PostMusic = async (param) =>
  await api({ url: '/music/list', method: 'post', data: param });

export const GetMusicList = async () => await api({ url: '/music/list', method: 'get' });
