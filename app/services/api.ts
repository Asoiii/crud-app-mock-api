const BASE_URL = 'https://67417a07e4647499008dcdb4.mockapi.io/DataDokter';

export const getDoctors = async () => {
  const response = await fetch(`${BASE_URL}datadokter`);
  return await response.json();
};

export const getPatients = async () => {
  const response = await fetch(`${BASE_URL}datapatient`);
  return await response.json();
};

export const getDetail = async (type: string, id: string) => {
  const response = await fetch(`${BASE_URL}${type}/${id}`);
  return await response.json();
};

export const createData = async (type: string, data: any) => {
  const response = await fetch(`${BASE_URL}${type}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const updateData = async (type: string, id: string, data: any) => {
  const response = await fetch(`${BASE_URL}${type}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteData = async (type: string, id: string) => {
  const response = await fetch(`${BASE_URL}${type}/${id}`, { method: 'DELETE' });
  return await response.json();
};
