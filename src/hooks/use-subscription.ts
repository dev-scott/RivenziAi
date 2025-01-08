import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const onSubscribe = async (subscriptionType: 'month' | 'year') => {
    setIsProcessing(true);
    const response = await axios.post('/api/payment', {
      type: subscriptionType,
    });
    if (response.data.status === 200) {
      console.log('resposne.data', response);
      return (window.location.href = `${response.data.session_url}`);
    }
    setIsProcessing(false);
  };
  return { onSubscribe, isProcessing };
};

// export const useDowngradeSubscription = () => {
//   const { isPending, mutate } = useMutation();
// };
