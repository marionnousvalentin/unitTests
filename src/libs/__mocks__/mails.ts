export const sendMail = jest
  .fn()
  .mockResolvedValue({ email: "toto", name: "name", firstName: "firstName" });
