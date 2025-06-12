import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  featured: boolean;
  slug: string;
}

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    // Load blog posts from localStorage
    const savedPosts = localStorage.getItem('ifleon-blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Sample blog posts
      const samplePosts: BlogPost[] = [
        {
          id: '1',
          title: 'Building Scalable CI/CD Pipelines with Jenkins and Docker',
          excerpt: 'Learn how to create robust CI/CD pipelines that scale with your development team using Jenkins, Docker, and modern DevOps practices.',
          content: `# Building Scalable CI/CD Pipelines with Jenkins and Docker

In today's fast-paced development environment, having a robust CI/CD pipeline is crucial for delivering quality software quickly and reliably. In this post, we'll explore how to build scalable CI/CD pipelines using Jenkins and Docker.

## Why CI/CD Matters

Continuous Integration and Continuous Deployment (CI/CD) practices help teams:
- Reduce integration problems
- Catch bugs early in the development cycle
- Automate testing and deployment processes
- Improve code quality and reliability

## Setting Up Jenkins with Docker

First, let's set up Jenkins using Docker:

\`\`\`bash
docker run -d -p 8080:8080 -p 50000:50000 \\
  -v jenkins_home:/var/jenkins_home \\
  --name jenkins jenkins/jenkins:lts
\`\`\`

## Creating Your First Pipeline

Here's a sample Jenkinsfile for a Node.js application:

\`\`\`groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/app.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 3000:3000 myapp'
            }
        }
    }
}
\`\`\`

## Best Practices

1. **Use Docker for consistent environments**
2. **Implement proper testing strategies**
3. **Monitor your pipelines**
4. **Use infrastructure as code**

This approach has helped us deliver faster, more reliable deployments for our clients at IFLEON.`,
          author: 'S. Mahendra Reddy',
          publishedAt: '2024-12-20',
          tags: ['DevOps', 'CI/CD', 'Jenkins', 'Docker'],
          githubLink: 'https://github.com/mahiprime2001/jenkins-docker-pipeline',
          featured: true,
          slug: 'building-scalable-cicd-pipelines-jenkins-docker'
        },
        {
          id: '2',
          title: 'Machine Learning Model Deployment with AWS Lambda',
          excerpt: 'Deploy your machine learning models serverlessly using AWS Lambda and API Gateway for cost-effective and scalable AI solutions.',
          content: `# Machine Learning Model Deployment with AWS Lambda

Deploying machine learning models can be challenging, especially when you need to balance cost, scalability, and performance. AWS Lambda provides an excellent serverless solution for deploying ML models.

## Why Serverless ML?

Serverless deployment offers several advantages:
- Pay only for what you use
- Automatic scaling
- No server management
- Built-in high availability

## Preparing Your Model

First, let's prepare a simple scikit-learn model:

\`\`\`python
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Create and train model
X, y = make_classification(n_samples=1000, n_features=4)
model = RandomForestClassifier()
model.fit(X, y)

# Save model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)
\`\`\`

## Lambda Function Code

Here's the Lambda function to serve predictions:

\`\`\`python
import json
import pickle
import numpy as np

def lambda_handler(event, context):
    # Load model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    # Parse input
    body = json.loads(event['body'])
    features = np.array(body['features']).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0].max()
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'prediction': int(prediction),
            'confidence': float(probability)
        })
    }
\`\`\`

## Deployment with Serverless Framework

Use the Serverless Framework for easy deployment:

\`\`\`yaml
service: ml-model-api

provider:
  name: aws
  runtime: python3.9
  region: us-east-1

functions:
  predict:
    handler: handler.lambda_handler
    events:
      - http:
          path: predict
          method: post
\`\`\`

This approach has enabled our clients to deploy ML models cost-effectively while maintaining high performance.`,
          author: 'S. Mahendra Reddy',
          publishedAt: '2024-12-18',
          tags: ['AI', 'Machine Learning', 'AWS', 'Serverless'],
          githubLink: 'https://github.com/mahiprime2001/ml-lambda-deployment',
          demoLink: 'https://api.ifleon.com/ml-demo',
          featured: true,
          slug: 'ml-model-deployment-aws-lambda'
        },
        {
          id: '3',
          title: 'Securing Your Cloud Infrastructure: Best Practices',
          excerpt: 'Essential security practices for cloud infrastructure including IAM policies, network security, and compliance frameworks.',
          content: `# Securing Your Cloud Infrastructure: Best Practices

Cloud security is paramount in today's digital landscape. This guide covers essential security practices for protecting your cloud infrastructure.

## Core Security Principles

### 1. Identity and Access Management (IAM)

Implement the principle of least privilege:

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
\`\`\`

### 2. Network Security

Use VPCs and security groups effectively:

\`\`\`bash
# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16

# Create security group
aws ec2 create-security-group \\
  --group-name web-servers \\
  --description "Security group for web servers"
\`\`\`

### 3. Data Encryption

Always encrypt data at rest and in transit:

\`\`\`python
import boto3
from cryptography.fernet import Fernet

# Generate encryption key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt data
encrypted_data = cipher_suite.encrypt(b"sensitive data")
\`\`\`

## Compliance Frameworks

We help clients implement:
- ISO 27001
- DPDP Act compliance
- SOC 2 Type II
- GDPR requirements

## Monitoring and Alerting

Set up comprehensive monitoring:

\`\`\`yaml
# CloudWatch alarm
Resources:
  HighCPUAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: HighCPUUtilization
      MetricName: CPUUtilization
      Threshold: 80
      ComparisonOperator: GreaterThanThreshold
\`\`\`

Security is not a one-time setup but an ongoing process that requires constant vigilance and updates.`,
          author: 'S. Mahendra Reddy',
          publishedAt: '2024-12-15',
          tags: ['Security', 'Cloud', 'AWS', 'Compliance'],
          githubLink: 'https://github.com/mahiprime2001/cloud-security-templates',
          featured: false,
          slug: 'securing-cloud-infrastructure-best-practices'
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('ifleon-blog-posts', JSON.stringify(samplePosts));
    }
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            IFLEON Tech Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Technical insights, project updates, and source code from our AI, DevOps, and IT consulting work.
            All code examples are available on our GitHub repository.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/mahiprime2001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 
                       transition-colors flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View All Source Code</span>
            </a>
            <Link
              to="/admin"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
                       transition-colors"
            >
              Admin Panel
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                       focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      
                      <div className="flex space-x-3">
                        {post.githubLink && (
                          <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {post.demoLink && (
                          <a
                            href={post.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      
                      <div className="flex space-x-2">
                        {post.githubLink && (
                          <a
                            href={post.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {post.demoLink && (
                          <a
                            href={post.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};