import axiosInstance from "../axiosInstance"; // Update the import path as necessary

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_REQUEST" });

    const { data } = await axiosInstance.get("/api/v1/user");

    console.log('GET_USER Response Data:', data); // Debugging line

    dispatch({ type: "GET_USER_SUCCESS", payload: data.user });
  } catch (error) {
    console.error('GET_USER Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "GET_USER_FAILURE", payload: errorMessage });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const { data } = await axiosInstance.post(
      "/api/v1/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('LOGIN Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "LOGIN_FAILURE", payload: errorMessage });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_REQUEST" });

    const { data } = await axiosInstance.get("/api/v1/logout");

    dispatch({ type: "LOGOUT_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('LOGOUT Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "LOGOUT_FAILURE", payload: errorMessage });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });

    const { data } = await axiosInstance.get("/api/v1/me");

    dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
  } catch (error) {
    console.error('LOAD_USER Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "LOAD_USER_FAILURE", payload: errorMessage });
  }
};

export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });

    const { data } = await axiosInstance.put(
      "/api/v1/admin/update",
      { name, email, password, skills, about },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "UPDATE_USER_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('UPDATE_USER Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "UPDATE_USER_FAILURE", payload: errorMessage });
  }
};

export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TIMELINE_REQUEST" });

    const { data } = await axiosInstance.post(
      "/api/v1/admin/timeline/add",
      { title, description, date },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "ADD_TIMELINE_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('ADD_TIMELINE Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "ADD_TIMELINE_FAILURE", payload: errorMessage });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_TIMELINE_REQUEST" });

    const { data } = await axiosInstance.delete(`/api/v1/admin/timeline/${id}`);

    dispatch({ type: "DELETE_TIMELINE_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('DELETE_TIMELINE Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "DELETE_TIMELINE_FAILURE", payload: errorMessage });
  }
};

export const addProject = (title, url, image, description, techStack) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_PROJECT_REQUEST" });

    const { data } = await axiosInstance.post(
      "/api/v1/admin/project/add",
      { title, url, image, description, techStack },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "ADD_PROJECT_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('ADD_PROJECT Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "ADD_PROJECT_FAILURE", payload: errorMessage });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PROJECT_REQUEST" });

    const { data } = await axiosInstance.delete(`/api/v1/admin/project/${id}`);

    dispatch({ type: "DELETE_PROJECT_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('DELETE_PROJECT Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "DELETE_PROJECT_FAILURE", payload: errorMessage });
  }
};

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({ type: "CONTACT_US_REQUEST" });

    const { data } = await axiosInstance.post(
      "/api/v1/contact",
      { name, email, message },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "CONTACT_US_SUCCESS", payload: data.message });
  } catch (error) {
    console.error('CONTACT_US Error:', error); // Debugging line
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch({ type: "CONTACT_US_FAILURE", payload: errorMessage });
  }
};
