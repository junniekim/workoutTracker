import React, { createContext, useContext, useState } from "react";

export interface UserData {
  _id: string;
  birthday: string;
  customWorkout: string[];
  bodyweight_history: {
    date: string;
    weight: number;
  }[];
  dateentered: string;
  email_address: string;
  first_name: string;
  last_name: string;
  password: string;
  phone_number: string;
  profile_picture: string;
  workoutHistory: [
    {
      date: string;
      daily_picture: string;
      journal: string;
      rate: number;
      workout_list: {
        cardio: boolean;
        note: string;
        rep: number;
        set: number;
        weight: number;
        workout: string;
      }[];
    }
  ];
}

interface UserContextType {
  userData: UserData | null;
  setUser: (userData: UserData | null) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const setUser = (data: UserData | null) => {
    setUserData(data);
  };

  const clearUser = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
