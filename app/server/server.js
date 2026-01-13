const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5173;

app.set('trust proxy', 1);

// Middleware
app.use(helmet());
const whitelist = [
  'https://isaiah.harville.dev',
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Contact form rate limiting (more restrictive)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5 // limit each IP to 5 contact form submissions per hour
});

// Mock data - replace with database queries
const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    image: "/images/ecommerce-project.jpg",
    featured: true,
    createdAt: "2024-03-15"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tech: ["React", "Express", "Socket.io", "PostgreSQL", "Redis"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.com",
    image: "/images/taskmanager-project.jpg",
    featured: true,
    createdAt: "2024-02-10"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts and data visualization.",
    tech: ["React", "D3.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.com",
    image: "/images/weather-project.jpg",
    featured: false,
    createdAt: "2024-01-20"
  }
];

const experienceData = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Full Stack Developer",
    duration: "2023 - Present",
    description: "Developed and maintained multiple web applications using React, Node.js, and cloud services.",
    technologies: ["React", "Node.js", "AWS", "MongoDB"]
  },
  {
    id: 2,
    company: "Startup XYZ",
    position: "Frontend Developer",
    duration: "2022 - 2023",
    description: "Built responsive user interfaces and improved application performance by 40%.",
    technologies: ["React", "TypeScript", "Redux", "SCSS"]
  }
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  try {
    const { featured } = req.query;
    let projects = projectsData;

    if (featured === 'true') {
      projects = projects.filter(project => project.featured);
    }

    // Sort by creation date (newest first)
    projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message
    });
  }
});

// Get single project
app.get('/api/projects/:id', (req, res) => {
  try {
    const { id } = req.params;
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
      error: error.message
    });
  }
});

// Get experience
app.get('/api/experience', (req, res) => {
  try {
    res.json({
      success: true,
      data: experienceData,
      count: experienceData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch experience',
      error: error.message
    });
  }
});

// Contact form
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from your portfolio website</small></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please reach out directly: isaiah@harville.dev.'
    });
  }
});

// GitHub integration (optional - fetch repos dynamically)
app.get('/api/github/repos', async (req, res) => {
  try {
    const fetch = require('node-fetch');
    const username = process.env.GITHUB_USERNAME;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: 'GitHub username not configured'
      });
    }

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    const repos = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    // Filter and format repos
    const formattedRepos = repos
      .filter(repo => !repo.fork && !repo.archived)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated_at: repo.updated_at
      }));

    res.json({
      success: true,
      data: formattedRepos,
      count: formattedRepos.length
    });

  } catch (error) {
    console.error('GitHub API error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch GitHub repositories',
      error: error.message
    });
  }
});

// Get site statistics (optional)
app.get('/api/stats', (req, res) => {
  try {
    const stats = {
      totalProjects: projectsData.length,
      featuredProjects: projectsData.filter(p => p.featured).length,
      yearsExperience: experienceData.length,
      lastUpdated: new Date().toISOString()
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics',
      error: error.message
    });
  }
});


const path = require('path');
// 1) serve built client
app.use(express.static(path.join(__dirname, 'client', 'build')));
// 2) fallback for client-side routing
app.get(/^(?!\/api).*/, (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
