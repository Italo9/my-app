
export const result = async (
  id: number,
): Promise<{ message: string, error: boolean, status: number }> => {
  try {
    const URL = process.env.REACT_APP_ENDPOINT_DELETE_USER as string;

    const result = await fetch(`${URL}${id}`, {
      method: 'DELETE',
    });

    const json = await result.json();
    console.log(json)
    return json as { message: string, error: boolean, status: number };
  } catch (err) {
    return { message: (err as Error).message, error: true, status: 404 };
  }
};
