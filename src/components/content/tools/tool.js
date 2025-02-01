import React from "react";
import "../tools/tool.scss";

const Tool = () => {
  const icons = [
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/figma.png?raw=true", name: "Figma" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/html.png?raw=true", name: "HTML" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/css.png?raw=true", name: "CSS" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/node.png?raw=true", name: "Node.js" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/php.png?raw=true", name: "PHP" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/react.png?raw=true", name: "React" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/white.png?raw=true", name: "SCSS" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/photoshop.png?raw=true", name: "Photoshop" },
    { url: "https://github.com/rokadeyashkumar/tool-icon/blob/icons/tools-icon/llustrator.png?raw=true", name: "Illustrator" },
  ];

  return (
    <div className="tool-marquee">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {icons.map((icon, index) => (
            <div key={index} className="icon-container">
              <img src={icon.url} alt={icon.name} className="tool-icon" />
              <span className="icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content">
          {icons.map((icon, index) => (
            <div key={`dup-${index}`} className="icon-container">
              <img src={icon.url} alt={icon.name} className="tool-icon" />
              <span className="icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;
