import { UserLogin } from "../interfaces/UserLogin";
import API_BASE_URL from "./config"; 

const login = async (userInfo: UserLogin): Promise<string> => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"    // Tells the server you're sending JSON
      },
      body: JSON.stringify(userInfo)   // converts { username, password } into a JSON string
    });

    // Check to see if status is successful, if so, returns a token or error if unsuccessful
    if (!response.ok) {
      throw new Error("Login failed! Try again.");
    } 

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export { login };
