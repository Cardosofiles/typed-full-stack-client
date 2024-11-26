import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useCreateUser } from "./http/generated/api";

const createUserSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export function CreateUser() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const { mutateAsync: createUser } = useCreateUser();

  function handleCreateUser(data: CreateUserSchema) {
    createUser({ data: { name: data.name } });
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(handleCreateUser)}>
      <input
        className="rounded-md p-2 text-zinc-950 "
        type="text"
        placeholder="Name"
        {...register("name")}
      />

      {errors.name && <span>{errors.name.message}</span>}

      <button
        className="border border-zinc-500 px-8 py-2 rounded-lg"
        type="submit"
      >
        Create User
      </button>
    </form>
  );
}
