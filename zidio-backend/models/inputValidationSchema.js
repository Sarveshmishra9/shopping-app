const z = require("zod");

exports.signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

exports.loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
