import { request } from 'ice';

export const getList = async (): Promise<any> => {
  return request('http://api-online.yunliang.cloud/react-core-form/table');
};

export const saveOrUpdate = async (data = {}): Promise<any> => {
  return { code: 200 };
};