import bcrypt from 'bcrypt';

//--HASH THE PASSWORD --
export const passHash = (password) => bcrypt.hashSync(password, Number(process.env.passNumber));

//TODO--- DECRYPT PASSWORD----
export const passdecrypt = (pass, hashedPassword) => bcrypt.compareSync(pass, hashedPassword);