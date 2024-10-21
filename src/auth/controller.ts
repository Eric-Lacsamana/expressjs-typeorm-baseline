import { Request, Response, NextFunction } from "express";
import bcyrpt from "bcryptjs";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { username, password } = req.body;

        const hashedPassword = await bcyrpt.hash(password, 10);

        console.log('test', username, password);


    } catch (err) {
        throw new Error('Error registration')
    }
    
}