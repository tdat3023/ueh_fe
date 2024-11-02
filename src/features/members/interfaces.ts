export interface IMembersData {
  count: number;
  items: IMember[];
}

export interface IMember {
  image?: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: number;
  username: boolean;
  classRoom?: string;
  id: string;
  phoneNumber?: string;
  active: boolean;
}

export interface IMembersSlide {
  isLoading: boolean;
  listMembers: IMembersData;
  error: string | null;
}
