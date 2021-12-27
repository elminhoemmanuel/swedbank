module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      
      extend: {
        colors: {
          orange:"#F35B1C",
          pinklight:"#FDBA14",
          stepbg:"#FDC129",
          pink:"#FA8125",
          pinkbg:"#FBF2EA",

        }
      },
  
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '769px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
      }
    },
    plugins: [],
  }
  