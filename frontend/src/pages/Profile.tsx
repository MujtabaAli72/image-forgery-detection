import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  accuracy: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

const Profile: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = (): void => {
    navigator.clipboard.writeText('m.elya1412@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills: string[] = [
    'Python',
    'TensorFlow',
    'Keras',
    'Deep Learning',
    'Computer Vision',
    'Machine Learning',
    'Flask',
    'React',
    'TypeScript',
    'Data Science',
    'Neural Networks',
  ];

  const projects: Project[] = [
    {
      title: 'Image Forgery Detection',
      description:
        'Deep learning system using CNN and ELA for detecting manipulated images with 93.56% accuracy',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'ELA'],
      accuracy: '93.56%',
    },
  ];

  const achievements: Achievement[] = [
    {
      icon: '🎯',
      title: '93.56% Model Accuracy',
      description: 'Achieved high accuracy on CASIA dataset',
    },
    {
      icon: '📊',
      title: '4,164 Images Trained',
      description: 'Trained on extensive dataset of real and fake images',
    },
    {
      icon: '🧠',
      title: 'Advanced CNN Architecture',
      description: 'Implemented sophisticated neural network design',
    },
    {
      icon: '⚡',
      title: 'Real-time Detection',
      description: 'Optimized for fast inference and deployment',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl md:text-7xl font-bold text-white shadow-2xl shadow-purple-500/50">
                MA
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl -z-10"
              />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Mujtaba Ali
              </h1>
              <p className="text-xl text-purple-300 mb-4">
                AI/ML Engineer | Data Scientist | Deep Learning Specialist
              </p>
              <p className="text-white/80 text-lg mb-6 max-w-2xl">
                Passionate about computer vision and deep learning. Specialized in
                developing innovative solutions for image analysis and forgery
                detection using state-of-the-art neural networks.
              </p>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyEmail}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {copied ? 'Copied!' : 'm.elya1412@gmail.com'}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect p-8 rounded-3xl mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect p-8 rounded-3xl mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Featured Project</h2>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="px-4 py-2 bg-green-500 text-white rounded-full font-bold">
                  {project.accuracy}
                </span>
              </div>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-white/70">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect p-8 rounded-3xl mt-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About This Project
            </span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                🎓 Research & Development
              </h3>
              <p className="text-white/80">
                This project was developed as part of advanced research in digital
                forensics and image analysis. It combines traditional image processing
                techniques like Error Level Analysis with modern deep learning
                approaches to achieve state-of-the-art detection accuracy.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                🔬 Technical Approach
              </h3>
              <p className="text-white/80">
                The system uses a Convolutional Neural Network (CNN) architecture
                trained on the CASIA dataset. Images are preprocessed using ELA to
                highlight compression artifacts, then fed through multiple
                convolutional layers for feature extraction and classification.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">📈 Results</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Training Accuracy: 97.18%</li>
                <li>• Validation Accuracy: 92.20%</li>
                <li>• Overall Accuracy: 93.56%</li>
                <li>• Fake Image Detection: 99.48%</li>
                <li>• Real Image Detection: 91.22%</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="glass-effect p-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Connect!
            </h2>
            <p className="text-white/80 mb-6 text-lg">
              Interested in collaboration or have questions about the project?
            </p>
            <motion.a
              href="mailto:m.elya1412@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-purple-500/50"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
