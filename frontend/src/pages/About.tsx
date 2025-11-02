import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface TimelineStep {
  title: string;
  description: string;
}

interface TechnologyCategory {
  category: string;
  items: string[];
}

const About: React.FC = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const timeline: TimelineStep[] = [
    {
      title: 'Data Collection',
      description: 'Gathered 4,164 images from CASIA dataset (2,100 real, 2,064 fake)',
    },
    {
      title: 'ELA Preprocessing',
      description: 'Applied Error Level Analysis to highlight compression inconsistencies',
    },
    {
      title: 'Model Training',
      description: 'Trained CNN with data augmentation for 24 epochs',
    },
    {
      title: 'Validation',
      description: 'Achieved 93.56% accuracy on test dataset',
    },
  ];

  const technologies: TechnologyCategory[] = [
    {
      category: 'Machine Learning',
      items: ['TensorFlow 2.15', 'Keras', 'scikit-learn', 'NumPy'],
    },
    {
      category: 'Image Processing',
      items: ['PIL/Pillow', 'OpenCV', 'scikit-image'],
    },
    {
      category: 'Backend',
      items: ['Flask', 'Python 3.12', 'REST API'],
    },
    {
      category: 'Frontend',
      items: ['React 18', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    },
  ];

  const features: Feature[] = [
    {
      icon: '🔍',
      title: 'Error Level Analysis',
      description:
        'ELA reveals differences in compression levels across an image. Manipulated areas typically show different error levels than the rest of the image.',
    },
    {
      icon: '🧠',
      title: 'Deep Learning Classification',
      description:
        'A Convolutional Neural Network trained on thousands of images learns to identify patterns that distinguish real from manipulated images.',
    },
    {
      icon: '📊',
      title: 'High Accuracy',
      description:
        'Our model achieves 93.56% overall accuracy, with 99.48% accuracy on fake images and 91.22% on real images.',
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description:
        'Optimized inference pipeline provides results in less than a second, making it suitable for real-time applications.',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About This Project
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            An advanced AI-powered system for detecting image forgeries using Error
            Level Analysis and deep learning techniques.
          </p>
        </motion.div>

        {/* What is it? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What is Image Forgery Detection?
          </h2>
          <div className="space-y-4 text-white/80 text-lg">
            <p>
              Image forgery detection is a critical field in digital forensics that
              aims to identify manipulated or altered images. With the rise of
              sophisticated editing tools and AI-generated content, distinguishing
              authentic images from fake ones has become increasingly important.
            </p>
            <p>
              Our system combines traditional image forensics techniques with modern
              deep learning to provide accurate and reliable detection of image
              manipulation. Whether it's copy-move forgery, splicing, or retouching,
              our AI can identify the telltale signs.
            </p>
          </div>
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Development Process
          </h2>
          <div className="space-y-6">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/70 flex items-center">
                      <span className="mr-2 text-purple-400">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Model Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Model Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-8 rounded-2xl border-2 border-green-500/50">
              <div className="text-5xl font-bold text-green-400 mb-2">93.56%</div>
              <div className="text-xl text-white font-semibold mb-2">
                Overall Accuracy
              </div>
              <p className="text-white/70">
                Combined accuracy across all test images
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-orange-600/20 p-8 rounded-2xl border-2 border-red-500/50">
              <div className="text-5xl font-bold text-red-400 mb-2">99.48%</div>
              <div className="text-xl text-white font-semibold mb-2">
                Fake Detection
              </div>
              <p className="text-white/70">
                Accuracy in identifying manipulated images
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-8 rounded-2xl border-2 border-blue-500/50">
              <div className="text-5xl font-bold text-blue-400 mb-2">91.22%</div>
              <div className="text-xl text-white font-semibold mb-2">
                Real Detection
              </div>
              <p className="text-white/70">
                Accuracy in identifying authentic images
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dataset Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dataset Information
          </h2>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">CASIA Dataset</h3>
            <p className="text-white/80 mb-6">
              The CASIA Image Tampering Detection Evaluation Database is one of the
              most widely used datasets for image forgery detection research. It
              contains both authentic and tampered images with various types of
              manipulation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">2,100</div>
                <div className="text-white/70">Authentic Images (Au)</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">2,064</div>
                <div className="text-white/70">Tampered Images (Tp)</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Try It Out?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Upload your own images and see the detection system in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/detection">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-2xl shadow-purple-500/50"
                >
                  Try Detection
                </motion.button>
              </Link>
              <Link to="/profile">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect text-white rounded-full font-bold text-lg border-2 border-purple-500/50 shadow-2xl"
                >
                  View Profile
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
