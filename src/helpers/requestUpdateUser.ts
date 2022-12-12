import { UserModel } from '../interfaces/User.interface';

export const result = async (
  id: number,
  newUser?: UserModel,
): Promise<{ message: string, error: boolean, status: number, data?: UserModel }> => {
  try {
    
    const URL = process.env.REACT_APP_ENDPOINT_UPDATE_USER as string;

    const result = await fetch(`${URL}${id}`, {
      method: 'PUT',
      body: JSON.stringify(newUser),
    });

    const json = await result.json();
    console.log(json)
    return json as { message: string, error: boolean,  status: number, data: UserModel };
  } catch (err) {
    return { message: (err as Error).message, error: true, status: 404 };
  }
};
