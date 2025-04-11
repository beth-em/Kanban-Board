import { UserData } from './UserData';

export interface TicketData {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedUserId: number;
  assignedUser: UserData | null;
}
