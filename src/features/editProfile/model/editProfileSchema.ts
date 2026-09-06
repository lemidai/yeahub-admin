import z from "zod";

const socialNetworkSchema = z
  .object({
    code: z.string(),
    title: z.string(),
  })
  .optional();

export const editProfileFormSchema = z.object({
  avatar: z.object({
    serverAvatar: z.string(),
    selectedAvatar: z.instanceof(File).optional(),
  }),
  username: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.email(),
  specialization: z.number(),
  city: z.string().optional(),
  socialNetwork: z.array(socialNetworkSchema),
  description: z.string().optional(),
  skills: z.array(z.number()),
});
