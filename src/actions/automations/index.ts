'use server';
import { onCurrentUser } from '../user';
import { getAutomations } from './query';

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);
    console.log('automations', automations);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    console.log('error', error);
    return { status: 500, data: [] };
  }
};
