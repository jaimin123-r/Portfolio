import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import my from '../../public/My-1.jpg';

const skills = [
  { 
    name: 'Python', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.38.09-.5.25-.12.16-.18.38-.18.61 0 .2.06.37.17.51.12.13.29.2.49.2.2 0 .38-.07.5-.2.12-.13.18-.3.18-.51 0-.23-.06-.45-.18-.61-.12-.16-.3-.25-.48-.25z" fill="#306998"/>
        <path d="M12.74 23.65l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.84l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h2.09l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.26.02-.21.01h-5.84l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v5.93h-2.09l-.14-.01zm6.47-14.25c.2 0 .38-.09.5-.25.12-.16.18-.38.18-.61 0-.2-.06-.37-.17-.51-.12-.13-.29-.2-.49-.2-.2 0-.38.07-.5.2-.12.13-.18.3-.18.51 0 .23.06.45.18.61.12.16.3.25.48.25z" fill="#FFD43B"/>
      </svg>
    )
  },
  { 
    name: 'C/C++', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00599C"/>
        <text x="12" y="16" textAnchor="middle" className="text-white text-xs font-bold">C++</text>
      </svg>
    )
  },
  { 
    name: 'MySQL', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.002c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.854.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.357-.622zM15.5 17.588c-.225 0-.406-.15-.544-.448-.138-.302-.207-.684-.207-1.148 0-.448.069-.824.207-1.126.138-.302.319-.452.544-.452.225 0 .406.15.544.452.138.302.207.678.207 1.126 0 .464-.069.846-.207 1.148-.138.299-.319.448-.544.448z" fill="#4479A1"/>
      </svg>
    )
  },
  { 
    name: 'HTML', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#E34C26"/>
      </svg>
    )
  },
  { 
    name: 'CSS', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716H9.24l.24 2.573h6.117l-.366 3.523-2.91.804-2.956-.81-.188-2.11H6.64l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6"/>
      </svg>
    )
  },
  { 
    name: 'Bootstrap', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M6.002 3.416L12.002 0.696l6 2.72v5.168l-6 2.72-6-2.72V3.416zm6 7.92l-6-2.72v5.168l6 2.72 6-2.72V8.616l-6 2.72z" fill="#7952B3"/>
      </svg>
    )
  },
  { 
    name: 'JavaScript', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E"/>
      </svg>
    )
  },
  { 
    name: 'React', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB"/>
      </svg>
    )
  },
  { 
    name: 'Node', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.274-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#539E43"/>
      </svg>
    )
  },
  { 
    name: 'Express', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-3.47 2.75-8.843 1.443-10.3-2.204a6.122 6.122 0 01.024-5.043c.266-.693.548-1.381.887-2.07.515-1.064 1.343-1.867 2.478-2.324 2.204-.754 4.647-.63 6.58.499 2.319 1.369 3.315 4.006 2.71 6.847-.097.451-.189.903-.189 1.362-.097-.097-.189-.189-.378-.189-.266-.097-.63-.097-.936-.097-4.647 0-9.295-.024-13.942.024-.189.097-.42.189-.609.189z" fill="#68A063"/>
      </svg>
    )
  },
  { 
    name: 'MongoDB', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="#589636"/>
      </svg>
    )
  },
  { 
    name: 'Tailwind CSS', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4"/>
      </svg>
    )
  },
];

const interests = [
  'Artificial Intelligence',
  'Open Source Contributing',
  'Learn New Programming Languages',
  'Explore New Things',
  'Playing Chess',
  'Cricket'
];

function About() {
  const containerRef = useRef(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };
  
  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      name="About" 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={containerRef}
    >
      {/* Wave Header */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-white max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Aspiring Full Stack Developer
            </motion.p>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block h-20 w-full" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-gray-50"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              className="fill-gray-100 opacity-70"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Profile Image */}
      <motion.div 
        className="flex justify-center -mt-24 z-20 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.6
        }}
      >
        <div className="relative">
          <motion.img 
            src={my} 
            alt="Profile" 
            className="h-64 w-64 rounded-full border-4 border-white shadow-xl object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping-slow opacity-20"></div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me */}
          <motion.section 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="h-10 w-1 bg-blue-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Computer Applications graduate from Gujarat University with a strong foundation in programming, data structures, and modern web technologies. I aim to craft high-quality software that not only functions well but also offers intuitive and engaging user experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Continuously learning and evolving, I strive to deliver impactful solutions that add value to both users and organizations.
            </p>
            
            <div className="flex items-center mt-8">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-700 font-medium">jaiminconnect@gmail.com</span>
            </div>
            
            <motion.a 
              href="mailto:jaiminconnect@gmail.com"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </motion.section>
          
          {/* Skills */}
          <motion.section 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="h-10 w-1 bg-blue-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">My Skills</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="group flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br from-blue-50 to-indigo-50 cursor-pointer transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05
                  }}
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm text-center group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Interests */}
          <motion.section 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="h-10 w-1 bg-blue-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Interests & Hobbies</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl group hover:bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
    </motion.div>
  );
}

export default About;