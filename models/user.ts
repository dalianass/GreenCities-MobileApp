import Role from "./role";

interface User {
    id: number;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    deleted: boolean;
    role: Role[];
  }
  
  export default User;