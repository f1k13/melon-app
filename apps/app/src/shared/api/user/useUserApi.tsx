import { useMutation, useQuery } from "@tanstack/react-query";
import { userApi } from ".";

function useAuthUserApi() {
  const { mutate, isPending, mutateAsync } = useMutation({
    mutationKey: ["auth"],
    mutationFn: userApi.authUser,
  });

  return {
    mutate,
    isPending,
    mutateAsync,
  };
}

function useGetMeUserApi() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-me"],
    queryFn: userApi.getMe,
  });

  return {
    data,
    isLoading,
  };
}

function useGetAllInterests() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-interests"],
    queryFn: userApi.getAllInterests,
  });
  return {
    data,
    isLoading,
  };
}

export const useUserApi = {
  useAuthUserApi,
  useGetMeUserApi,
  useGetAllInterests,
};
