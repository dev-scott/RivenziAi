import {
  MutationFunction,
  MutationKey,
  useMutation,
  useMutationState,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'sonner';

export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey },
    select: (mutation) => {
      return {
        variables: mutation.state.variables,
        status: mutation.state.status,
      };
    },
  });
  const latestVariable = data[data.length - 1];
  return { latestVariable };
};

export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<
    { status: number; data: string },
    { name: string; id: string; createdAt: Date; keywords: [] }
  >,
  queryKey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data) => {
      if (onSuccess) onSuccess();
      return toast(data?.status == 200 ? 'success' : 'Error', {
        description: data.data,
      });
    },
    onSettled: async () => {
      await client.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  return { mutate, isPending };
};
