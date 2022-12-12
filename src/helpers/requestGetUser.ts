import { UserModel } from '../interfaces/User.interface';

export const result = async (): Promise<{ message: string, error: boolean, status: number, data: UserModel[] }> => {
  try {
    const URL = process.env.REACT_APP_ENDPOINT_GET_USER as string;

    const result = await fetch(URL);

    const json = (await result.json()) as { message: string, error: boolean, status: number, data: UserModel[] };
    console.log(json)
    return json;
  } catch (_err) {
    return { message: (_err as Error).message, error: true, status: 404, data: []};
  }
};
