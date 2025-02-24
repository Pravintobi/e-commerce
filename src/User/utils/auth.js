import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import 'dotenv/config';

const authentication = async(str)=>{

    const salt= await bcrypt.genSalt(config.SALT);
    
    const hash = await bcrypt.hash(str, salt)

    return hash
}

const comparepass = async(hash, str)=>{

   return await bcrypt.compare(str, hash)

}

export default {
    authentication,
    comparepass
}