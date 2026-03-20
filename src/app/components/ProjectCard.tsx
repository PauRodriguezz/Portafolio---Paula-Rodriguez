import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
  expandedContent?: React.ReactNode;
  buttonColor?: string;
  buttonHoverColor?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  toolBorderColor?: string;
  toolTextColor?: string;
  titleColor?: string;
  behanceLink?: string;
  buttonLabel?: string;
  hideSecondaryButton?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  tools,
  imageUrl,
  gradientFrom,
  gradientTo,
  expandedContent,
  buttonColor = '#6695a5',
  buttonHoverColor = '#557a88',
  tagBgColor = 'rgb(243, 244, 246)',
  tagTextColor = 'rgb(107, 114, 128)',
  toolBorderColor = 'rgb(209, 213, 219)',
  toolTextColor = 'rgb(55, 65, 81)',
  titleColor = '#6695a5',
  behanceLink,
  buttonLabel,
  hideSecondaryButton,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-[20px] shadow-lg overflow-hidden w-full max-w-[900px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Image with gradient background */}
        <div
          className="relative flex items-center justify-center p-8 md:p-12 min-h-[300px]"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-w-[400px] object-contain rounded-lg"
          />
          
          {/* Project name badge */}
          
        </div>

        {/* Right side - Content */}
        <div className="p-8 md:p-10 flex flex-col">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-['Montserrat',sans-serif] text-[12px] tracking-wide"
                style={{ backgroundColor: tagBgColor, color: tagTextColor }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-['Orelega_One',sans-serif] text-[32px] lg:text-[40px] mb-4" style={{ color: titleColor }}>
            {title}
          </h3>

          {/* Description */}
          <p className="font-['Montserrat',sans-serif] text-gray-600 mb-6 leading-relaxed text-[16px]">
            {description}
          </p>

          {/* Tools/Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 font-['Montserrat',sans-serif] text-[13px]"
                style={{ borderColor: toolBorderColor, color: toolTextColor }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ backgroundColor: buttonColor }}
              className="text-white px-6 py-3 rounded-[12px] font-['Montserrat',sans-serif] text-[16px] transition-colors flex items-center gap-2"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonColor}
            >
              {isExpanded ? 'Ver menos' : 'Ver más'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </button>
            {!hideSecondaryButton && (
            <button 
              style={{ color: buttonColor, borderColor: buttonColor }}
              className="bg-transparent px-6 py-3 rounded-[12px] border font-['Montserrat',sans-serif] text-[16px] transition-colors"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = buttonColor;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = buttonColor;
              }}
              onClick={() => {
              if (behanceLink) window.open(behanceLink, "_blank");
  }}
            >
              {buttonLabel}
            </button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-8 pt-4 border-t border-gray-200">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}