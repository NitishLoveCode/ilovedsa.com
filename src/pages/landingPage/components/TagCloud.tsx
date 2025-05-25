import React, { useState } from 'react';
import './TagCloud.css';

interface Tag {
  name: string;
  url: string;
}

const TagCloud: React.FC = () => {
  const [rotation, setRotation] = useState<number>(54);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const tags: Tag[] = [
    { name: "Vue.js", url: "https://vuejs.org/" },
    // ... (rest of the tags array remains the same)
    { name: "Rivets.js", url: "http://rivetsjs.com/" }
  ];

  const handleControlClick = (index: number): void => {
    const rotations = [
      108, 126, 144, 162, 180, 198, 216, 234, 252, 270,
      288, 306, 324, 342, 0, 18, 36, 54, 72, 90
    ];
    setRotation(rotations[index]);
  };

  // Helper function for CSS custom properties
  const cssVariables = (vars: Record<string, string | number>) => {
    return vars as React.CSSProperties;
  };

  return (
    <div className="tagcloud-wrapper">
      <div 
        className="tagcloud-controls" 
        style={cssVariables({
          '--num-elements': 20, 
          '--_current-rotation': rotation
        })}
      >
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="tagcloud-control-button" 
            style={cssVariables({ '--index': i + 1 })}
          >
            <input 
              type="radio" 
              name="tagcloud-control-input" 
              onClick={() => handleControlClick(i)}
            />
          </div>
        ))}

        <div 
          className="tagcloud-rotation" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ul 
            className="tagcloud-tags" 
            style={cssVariables({
              '--num-elements': tags.length,
              '--tagcloud-animation-play-state': isHovered ? 'paused' : 'running'
            })}
          >
            {tags.map((tag, index) => (
              <li 
                key={index} 
                className="tagcloud-tag" 
                style={cssVariables({ '--index': index + 1 })}
              >
                <div>
                  <a href={tag.url} target="_blank" rel="noopener noreferrer">
                    {tag.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TagCloud;