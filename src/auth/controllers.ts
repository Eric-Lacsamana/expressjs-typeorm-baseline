import { Request, Response, NextFunction } from 'express';
import bcyrpt from 'bcryptjs';


export const register = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { username, password } = req.body;

        const hashedPassword = await bcyrpt.hash(password, 10);

        console.log('test', username, password);
        
        res.send()
    } catch (err) {
        throw new Error('Error registration')
    }
    
}

// // User registration route
// export 
//     const { username, email, password } = req.body;
  
//     // Validate user input (simple validation)
//     if (!username || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }
  
//     try {
//       // Check if user already exists
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ error: 'User already exists' });
//       }
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       // Create a new user
//       const newUser = new User({
//         username,
//         email,
//         password: hashedPassword,
//       });
  
//       // Save the user to the database
//       await newUser.save();
//       res.status(201).json({ message: 'User created successfully!' });
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
//   });