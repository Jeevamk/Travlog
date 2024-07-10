import {useState} from "react";


function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={toggleAccordion}
        >
          {title}
          <svg
            className={`w-5 h-5 ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`mt-2 px-4 ${isOpen ? 'block' : 'hidden'}`}>
          {children}
        </div>
      </div>
    );
  }


export default Accordion