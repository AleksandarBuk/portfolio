import { stats } from "../constants";
import styles from "../style";

const Skills = () => (
  <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
    <div> 
      <p className="text-2xl text-white mb-4 font-semibold">Areas of Development:</p>
    </div>

    <div className="flex flex-row flex-wrap justify-start items-center">
      {stats.map((stat) => (
        <div key={stat.id} className="m-20"> {/* Increased margin */}
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
