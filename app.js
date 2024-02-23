// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Karthik Bejjanki',
    email: 'karthik.bejjanki@ucf.edu',
    phone: '+1 (407) 533-1632',
    linkedin: 'karthikbejjanki',
    github: 'karthik0411',
    experience: [
      {
        title: 'Teaching Assistant (Part-Time)',
        company: 'University of Central Florida',
        location: 'Orlando, United States',
        date: '05/2023 – present',
        description: [
          'Facilitated professors conducting lab sessions and administering assessments for a 300-student class, encompassing assignments, quizzes, projects, mid-terms, and final exams.',
          'Enhanced student learning through interactive recitation sessions and providing guidance, leading to a remarkable 20% increase in student success rates in courses such as "Discrete Computational Structures" and "Theory of Computation."'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'Ericsson',
        location: 'Hyderabad, India',
        date: '11/2020 – 01/2023',
        description: [
          'Developed a robust microservice metrics dashboard for IDUN Platform (Ericsson Intelligent RAN Automation), integrating data from Jenkins, SonarQube, Jira, and Gerrit using Rest APIs, Python, React.js, and the ELK stack. Resulted in real-time insights, accelerating decisions and improving issue resolution efficiency by 25%.',
          'Spearheaded the development of efficient CI/CD pipelines for Cloud ENIQ (Ericsson Network IQ statistics) microservices using Jenkins, Docker, and Kubernetes, achieving a 90% reduction in manual interventions.',
          'Designed Python, Bash, YAML, Groovy, and PowerShell scripts to automate critical tasks such as code linting, unit testing, and deployment within the CI/CD pipelines. This initiative yielded a notable 40% increase in pipeline performance.',
          'Directed seamless integration and peak performance of mission-critical applications in Unix/Linux environments through strategic deployment and orchestration.',
          'Led the implementation of Docker, Kubernetes, and Helm charts to optimize Ericsson\'s Intelligent RAN management, leading to a substantial 30% reduction in operational workload and a commendable 15% boost in network performance.'
        ]
      },
      {
        title: 'Software Engineer Intern',
        company: 'OpenText',
        location: 'Hyderabad, India',
        date: '03/2020 – 11/2020',
        description: [
          'Engineered comprehensive VBScript test suites for the Windows application "EnterpriseScan,” leading to an impressive 30% reduction in critical bugs and ensuring rigorous testing and high-quality assurance.',
          'Enhanced test coverage for "DocuSign" software by refining test cases, contributing to a collaborative effort that achieved a 20% enhancement in test coverage and improved testing strategies.',
          'Collaborated seamlessly with developers and QA team members, actively reviewing software requirements and providing valuable insights on testability and usability. This effort contributed to a 15% enhancement in software quality.'
        ]
      }
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        institution: 'University of Central Florida',
        location: 'Orlando, United States',
        date: '01/2023 – 12/2024',
        grade: '3.9/4',
        coursework: [
          'Machine Learning',
          'Computer Vision',
          'Natural Language Processing',
          'Design & Analysis of Algorithms',
          'Advance Computer Architecture',
          'Current Topics in Machine Learning'
        ]
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Kakatiya Institute of Technology & Science',
        location: 'Warangal, India',
        date: '08/2016 – 09/2020',
        grade: '8.54/10',
        coursework: [
          'C',
          'C++',
          'Data Structures and Algorithms',
          'Software Engineering',
          'Database Management Systems',
          'Machine Learning',
          'Cryptography and Network Security',
          'Artificial Intelligence',
          'Data warehousing and Data mining',
          'Programming with Python'
        ]
      }
    ],
    skills: {
      programmingLanguages: ['C', 'C++', 'Java', 'Python'],
      tools: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Tableau', 'Kibana', 'Power BI'],
      webTechnologies: ['Html', 'CSS', 'JavaScript'],
      cloudPlatforms: ['Microsoft Azure', 'Amazon Web Services'],
      databases: ['MySQL', 'Elastic Search', 'MongoDB'],
      frameworks: ['Springboot', 'ReactJS', 'AngularJS', '.NET', 'ASP .NET']
    },
    projects: [
      {
        title: 'Cache Optimization',
        description: 'Created a Java-based caching system, dynamically tuning cache size using hit rates for a substantial 30% performance boost. Demonstrated adept resource management for enhanced system efficiency.'
      },
      {
        title: 'Heart Disease Prediction using Machine Learning',
        description: 'Developed a Python-based Machine Learning model utilizing Random Forest, Support Vector Machine, and K-nearest neighbor algorithms to forecast heart disease with 87% precision. Demonstrated data-driven skills and analytical insight.'
      },
      {
        title: 'Data Compression using Huffman Coding',
        description: 'Implemented Huffman coding in Java, achieving lossless data compression for text and image files with a notable 40% reduction in file sizes. Highlighted expertise in improving data handling and transfer efficiency.'
      }
    ],
    certificates: [
      'Certified Kubernetes Administrator (CKA)',
      'Microservices Solutioning Program',
      'Java, C++ Certification offered by HackerRank',
      'Spring Framework with Spring Boot course offered by Udemy'
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
