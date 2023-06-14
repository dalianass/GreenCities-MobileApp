import User from "./user";

interface Report {
  id: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  title: string;
  address: string;
  photo: string;
  deleted: boolean;
  createdBy: User;
  finishedBy: User;
  isFinished: boolean;
  latitude: number;
  longitude: number;
}

export default Report;