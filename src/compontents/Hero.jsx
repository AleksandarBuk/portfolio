import styles from '../style';
import { ArrowRightIcon } from '@heroicons/react/outline'; // Import a suitable icon for animation

const Hero = () => {
  // Function to handle external navigation, defined within the component
  const navigateToExternalSite = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingX}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
          I'm Alex, a Software Engineer with a heart for innovation and a passion for engineering.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I am committed to devising innovative, real-time solutions that propel businesses forward.
          Where coding meets creativity, that's where you'll find my zeal for problem-solving and my drive for excellence.
          If you can conceptualize it, I can create it.
        </p>
        
      </div>

      {/* Image Container */}
      <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6`}>
        <button 
          onClick={() => navigateToExternalSite('http://16.171.160.221:8000/')}
          className="animate-bounce text-6xl font-bold text-gradient mb-4"
        >
          My Blog
        </button>
        <p className="text-xl text-white mb-4">
          Check out my blog 
        </p>
      </div>
    </section>
  );
}

export default Hero;
