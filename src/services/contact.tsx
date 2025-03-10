import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export interface formDataInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const getContactForms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    throw error;
  }
};

export const postContactForm = async (formData: formDataInterface) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contacts`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
