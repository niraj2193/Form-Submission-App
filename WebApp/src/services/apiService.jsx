const API_URL = process.env.REACT_APP_API_URL;

// Service call to add user
export async function addUser(userData) {
  try {
    const response = await fetch(`${API_URL}/UserInfo/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error adding user. please try again!`);
    }

    return await response.json();
  } catch (error) {
    console.error("addUser failed: please try again!");
    throw error;
  }
}

// Service call to get all users
export async function getUsers() {
  try {
    const response = await fetch(`${API_URL}/UserInfo/getAllUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching users. Please try again!");
    }

    return await response.json(); // Assuming the response is a JSON array of users
  } catch (error) {
    console.error("getUsers failed: please try again!");
    throw error;
  }
}
