import axios from 'axios';

export const SubscriptionAfterLogin = () => {
  const onSubscribe = async () => {
    try {
      const baseURL = 'http://localhost:3000'; // Assurez-vous que cette variable est définie dans .env.local

      const response = await axios.get(`${baseURL}/api/payment`);
      console.log('response api payment', response);

      if (response.data.status === 200) {
        console.log('response.data', response.data);
        window.location.href = `${response.data.session_url}`;
      }
    } catch (error) {
      console.error('Error in onSubscribe:', error);
    }
  };

  return { onSubscribe };
};
