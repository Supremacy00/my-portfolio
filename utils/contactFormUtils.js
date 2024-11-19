import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export const saveContactFormData = async ({ name, email, message }) => {
  try {
    // Ensure db is properly initialized
    if (!db) {
      throw new Error("Database not initialized");
    }
    // Attempt to add document to Firestore
    const docRef = await addDoc(collection(db, "contact_messages"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });
    // Validate that the document was added successfully
    if (!docRef.id) {
      throw new Error("Failed to add document to Firestore");
    }

    return { success: true };
  } catch (error) {
    console.error("Error saving message:", error.message || error);

    // Return a failure response
    return {
      success: false,
      error: error.message || "Failed to submit form. Please try again.",
    };
  }
};
