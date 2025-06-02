import { z } from "zod";

export const upsertPatientSchema = z.object({
  id: z.string().uuid().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: "Por favor, digite o nome do paciente." }),
  email: z.string().min(1, { message: "Por favor, digite o e-mail." }).email({
    message: "E-mail inválido.",
  }),
  phoneNumber: z.string().trim().min(1, {
    message: "Por favor, digite o telefone do paciente.",
  }),
  sex: z.enum(["male", "female"], {
    required_error: "Por favor, selecione o sexo do paciente.",
  }),
});

export type UpsertPatientSchema = z.infer<typeof upsertPatientSchema>;
