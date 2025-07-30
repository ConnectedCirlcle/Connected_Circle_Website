// Netlify serverless function to handle API requests
import { storage } from "../../server/storage.js";
import {
  insertContactSubmissionSchema,
  insertFocusGroupSignupSchema,
  insertSubscriberSchema
} from "../../shared/schema.js";
import { ZodError } from "zod";
import fetch from "node-fetch";

// Helper to parse request body
const parseBody = (event) => {
  try {
    return JSON.parse(event.body);
  } catch (error) {
    return {};
  }
};

// Helper to create response
const createResponse = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
};

export async function handler(event, context) {
  // Handle OPTIONS request for CORS
  if (event.httpMethod === "OPTIONS") {
    return createResponse(200, {});
  }

  const path = event.path.replace('/.netlify/functions/api', '');
  const method = event.httpMethod;

  try {
    // Handle different API endpoints
    if (method === "POST" && path === "/api/subscribe") {
      const data = insertSubscriberSchema.parse(parseBody(event));
      
      // Hardcoded Web3Forms access key
      // Get a new key from https://web3forms.com/
      const accessKey = "9351a811-c29a-4b38-8c78-4c3e121ab51f";
      
      try {
        // Send the form data to Web3Forms
        const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            email: data.email,
            from_name: "Heart Household Podcast Newsletter Subscription"
          })
        });
        
        const web3formsResult = await web3formsResponse.json();
        
        // Log the full response for debugging
        console.log("Web3Forms API Response:", JSON.stringify(web3formsResult));
        
        if (web3formsResult.success) {
          // Still store the subscription in our database for record keeping
          const subscriber = await storage.addSubscriber(data);
          return createResponse(201, { message: "Subscription successful", subscriber });
        } else {
          console.error("Web3Forms error details:", web3formsResult);
          throw new Error(web3formsResult.message || "Failed to process subscription through Web3Forms");
        }
      } catch (error) {
        console.error("Web3Forms submission error:", error);
        return createResponse(500, { message: "Failed to process subscription", error: error.message });
      }
    }
    
    else if (method === "POST" && path === "/api/contact") {
      const data = insertContactSubmissionSchema.parse(parseBody(event));
      
      // Hardcoded Web3Forms access key
      // Get a new key from https://web3forms.com/
      const accessKey = "9351a811-c29a-4b38-8c78-4c3e121ab51f";
      
      try {
        // Send the form data to Web3Forms
        const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            from_name: "Heart Household Podcast Contact Form"
          })
        });
        
        const web3formsResult = await web3formsResponse.json();
        
        // Log the full response for debugging
        console.log("Web3Forms API Response (Contact):", JSON.stringify(web3formsResult));
        
        if (web3formsResult.success) {
          // Still store the submission in our database for record keeping
          const submission = await storage.addContactSubmission(data);
          return createResponse(201, { message: "Message sent successfully", submission });
        } else {
          console.error("Web3Forms error details (Contact):", web3formsResult);
          throw new Error(web3formsResult.message || "Failed to send message through Web3Forms");
        }
      } catch (error) {
        console.error("Web3Forms submission error (Contact):", error);
        return createResponse(500, { message: "Failed to send message", error: error.message });
      }
    }
    
    else if (method === "POST" && path === "/api/focus-group-signup") {
      const data = insertFocusGroupSignupSchema.parse(parseBody(event));
      
      // Hardcoded Web3Forms access key
      // Get a new key from https://web3forms.com/
      const accessKey = "9351a811-c29a-4b38-8c78-4c3e121ab51f";
      
      try {
        // Send the form data to Web3Forms
        const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: data.name,
            email: data.email,
            family_structure: data.familyStructure,
            reason: data.reason,
            from_name: "Heart Household Podcast Focus Group Signup"
          })
        });
        
        const web3formsResult = await web3formsResponse.json();
        
        // Log the full response for debugging
        console.log("Web3Forms API Response (Focus Group):", JSON.stringify(web3formsResult));
        
        if (web3formsResult.success) {
          // Still store the submission in our database for record keeping
          const signup = await storage.addFocusGroupSignup(data);
          return createResponse(201, { message: "Signup received", signup });
        } else {
          console.error("Web3Forms error details (Focus Group):", web3formsResult);
          throw new Error(web3formsResult.message || "Failed to send focus group signup through Web3Forms");
        }
      } catch (error) {
        console.error("Web3Forms submission error (Focus Group):", error);
        return createResponse(500, { message: "Failed to process signup", error: error.message });
      }
    }
    
    // Poll vote endpoint removed

    // If no route matches
    return createResponse(404, { message: "Not found" });
  } catch (error) {
    if (error instanceof ZodError) {
      return createResponse(400, { message: "Invalid data", errors: error.errors });
    } else if (error instanceof Error) {
      return createResponse(500, { message: error.message });
    } else {
      return createResponse(500, { message: "An unknown error occurred" });
    }
  }
}