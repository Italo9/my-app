import { UserModel } from '../interfaces/User.interface';

export const result = async (
  createUser: UserModel,
): Promise<{ message: string, error: boolean, status: number }> => {
  try {
    const URL = process.env.REACT_APP_ENDPOINT_CREATE_USER as string;

    const result = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(createUser),
    });

    const json = await result.json();
    console.log(json)
    return json as { message: string, error: boolean, status: number };
  } catch (err) {
    return { message: (err as Error).message, error: true, status: 404 };
  }
};
