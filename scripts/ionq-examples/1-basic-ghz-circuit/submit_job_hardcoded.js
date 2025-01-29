import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function submitJob(apiKey) {
  // 1. Read the JSON file.
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const jobFilePath = path.join(__dirname, 'ghz-job.json');
    
  let jobData;
  try {
    const fileContents = fs.readFileSync(jobFilePath, 'utf-8');
    jobData = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading or parsing job file:", error);
    return;
  }

  // 2. Construct and send the fetch request.
  const url = "https://api.ionq.co/v0.3/jobs";
  const headers = {
    "Authorization": `apiKey ${apiKey}`,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log("Job submitted successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error submitting job:", error);
  }
}

const apiKey = "iz0g8Uk0mZTgSWWIjJzmCbYq3VqrlFfk"; // Replace with your actual API key
submitJob(apiKey);