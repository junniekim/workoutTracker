import React, { createContext, useContext, useState } from "react";

interface UserData {
  _id: String;
  birthday: String;
  customWorkout: String[];
  bodyweight_history: {
    date: String;
    weight: number;
  }[];
  dateentered: String;
  email_address: String;
  first_name: String;
  last_name: String;
  password: String;
  phone_number: String;
  profile_picture: String;
  workoutHistory: [
    {
      date: String;
      daily_picture: String;
      journal: String;
      rate: number;
      workout_list: {
        note: String;
        rep: number;
        set: number;
        weight: number;
        workout: String;
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
