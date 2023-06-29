import bcrypt from 'bcrypt';


const password = 'Password1'

const harsh = await bcrypt.hash(password, 10)

console.log(harsh);