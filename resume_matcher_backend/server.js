const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS to handle cross-origin requests

const app = express();
const port = 3000;

// Example of some projects you might have in your `projects.json`
// Make sure your projects.json file is correctly placed in the root of your project folder
const projects = require('./projects.json'); // assuming projects are in a JSON file

// Enable CORS (Cross-Origin Resource Sharing) to allow your frontend to connect to the server
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// POST endpoint to handle resume matching
app.post('/match', (req, res) => {
  const { resume } = req.body;

  // Ensure the resume text exists
  if (!resume) {
    return res.status(400).json({ error: 'Resume text is required' });
  }

  // Find the best project match based on the resume content
  const bestMatch = findBestProject(resume);
  
  // If no match is found, return a response indicating that
  if (bestMatch) {
    res.json({
      bestMatch: bestMatch.title,
      explanation: bestMatch.explanation,
    });
  } else {
    res.json({ bestMatch: null });
  }
});

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 1); // remove short fragments
}

const stopWords = new Set([
  'a', 'an', 'the', 'and', 'or', 'in', 'on', 'at', 'with', 'to', 'of', 'for',
  'by', 'from', 'as', 'is', 'are', 'was', 'were', 'it', 'this', 'that', 'these', 'those',
  'i', 'we', 'you', 'he', 'she', 'they', 'my', 'your', 'their', 'our',
  'have', 'has', 'had', 'do', 'did', 'done', 'be', 'being', 'been',
  'project', 'work', 'job', 'experience', 'skills', 'responsibilities'
]);

function findBestProject(resumeText) {
  const resumeWords = new Set(
    normalizeText(resumeText).filter(word => !stopWords.has(word))
  );

  let bestProject = null;
  let bestScore = 0;

  projects.forEach(proj => {
    const descriptionWords = normalizeText(proj.description).filter(
      word => !stopWords.has(word)
    );

    const uniqueWords = new Set(descriptionWords);
    const score = Array.from(uniqueWords).reduce(
      (acc, word) => acc + (resumeWords.has(word) ? 1 : 0),
      0
    );

    // Debug output to see what's happening
    console.log(`[DEBUG] ${proj.title} - score: ${score}`);

    if (score > bestScore) {
      bestScore = score;
      bestProject = proj;
    }
  });

  if (bestProject) {
    const explanation = `Based on your resume, you're a great fit for the project: "${bestProject.title}".\n\n` +
                        `Your resume includes key phrases that match the project description: "${bestProject.description}"`;
    bestProject.explanation = explanation;
  }

  return bestProject;
}

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
