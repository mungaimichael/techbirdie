import axios from "axios";

const baseUrl = "http://localhost:8086/api/taskmern/tasks";

export const fetchTasks = async () => {
  try {
    // get token from local storage
    let token = localStorage.getItem("access_token");

    const res = await axios.get(`${baseUrl}/all`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const createTask = async (values) => {
  try {
    const { task, description, priority } = values;

    // get token from local storage
    let token = localStorage.getItem("access_token");

    const res = await axios.post(
      `${baseUrl}/addtask`,
      {
        task,
        description,
        completed: false,
        priority,
        // user: req.id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async () => {};
