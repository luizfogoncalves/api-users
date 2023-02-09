import * as bcrypt from 'bcrypt';

export const generateHash = async (password) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}