const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postSendEmail = async (data) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify(data);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try {
    const response = await fetch(`${API_BASE_URL}/send-email-file`, requestOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Save customer special conditions Error:', error);
    throw error;
  }
};
