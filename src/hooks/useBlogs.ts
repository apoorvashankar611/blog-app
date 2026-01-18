import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogApi } from "@/services/api";
import { CreateBlogDto } from "@/types/blog";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogApi.getAll,
  });
};

export const useBlog = (id: number | null) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogApi.getById(id!),
    enabled: id !== null,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blog: CreateBlogDto) => blogApi.create(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
