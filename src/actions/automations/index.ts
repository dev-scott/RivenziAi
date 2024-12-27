'use server';
import { onCurrentUser } from '../user';
import { findUser } from '../user/queries';
import {
  createAutomation,
  findAutomation,
  getAutomations,
  updateAutomation,
} from './query';

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

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: 'Automation created', res: create };
    return { status: 404, data: 'Oops! something wen wrong' };
  } catch (error) {
    console.log('error', error);
    return { status: 500, data: 'Internal server error' };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);

    if (automation) return { status: 200, data: automation };
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const getProfilePosts = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    console.log('the profile', profile);
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    );
    const parsed = await posts.json();
    if (parsed) return { status: 200, data: parsed };
    console.log('🔴 Error in getting posts');
    return { status: 404 };
  } catch (error) {
    console.log('🔴 server side Error in getting posts ', error);
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) {
      return { status: 200, data: 'Automation successfully updated' };
    }
    return { status: 404, data: 'Oops! could not find automation' };
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(id, { active: state });
    if (update)
      return {
        status: 200,
        data: `Automation ${state ? 'activated' : 'disabled'}`,
      };
    return { status: 404, data: 'Automation not found' };
  } catch (error) {
    return { status: 500, data: 'Oops! something went wrong' };
  }
};
