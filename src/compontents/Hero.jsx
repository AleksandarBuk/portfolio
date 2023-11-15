import styles from '../style';
import { ArrowRightIcon } from '@heroicons/react/outline'; // Import a suitable icon for animation

const Hero = () => {
  return (
    <section id="home" className={`flex flex-row ${styles.paddingX}`}>
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="text-4xl font-bold text-white mb-3">I'm Alex, a Software Engineer with a heart for innovation and a passion for crafting transformative digital solutions.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I am committed to devising innovative, real-time solutions that propel businesses forward.
        Where coding meets creativity, that's where you'll find my zeal for problem-solving and my drive for excellence.        </p>
        <p className="text-xl text-white mb-4"></p>
        <p className="text-2xl text-white mb-4 font-semibold">Areas of Development:</p>
      </div>

      
      {/* Image Container */}
      <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6 `}>
        <h1 className="animate-bounce text-6xl font-bold text-gradient mb-4 ${styles.flexEnd}">MyBlog</h1>
        <p className="text-xl text-white mb-4">Check out my blog</p>
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-50 blue__gradient" />
      </div>
    </section>
  );
}

export default Hero;
