import api from './api';

/**
 * @params {string} userId
 */

export const getIntroductionList = async () =>
  await api({
    url: '/members',
    method: 'get',
  });

export const getIntroduction = async (id) => await api({ url: `/member/${id}`, method: 'get' });
