import styles from "./SkilsStyles.module.css"
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList"
import { useTheme } from "../../common/ThemeContext";
function Skilss() {

  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (

    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skills="Html"/>
            <SkillList src={checkMarkIcon} skills="CSS"/>
            <SkillList src={checkMarkIcon} skills="JavaScript"/>
            <SkillList src={checkMarkIcon} skills="React"/>
            <SkillList src={checkMarkIcon} skills="Node"/>
            <SkillList src={checkMarkIcon} skills="Html"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skills="Python"/>
            <SkillList src={checkMarkIcon} skills="Tailwind CSS"/>
            <SkillList src={checkMarkIcon} skills="Bootstrap"/>
            <SkillList src={checkMarkIcon} skills="Git"/>
            <SkillList src={checkMarkIcon} skills="Core Java"/>
            <SkillList src={checkMarkIcon} skills="Html"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skills="MySql"/>
            <SkillList src={checkMarkIcon} skills="MongoDB"/>
            <SkillList src={checkMarkIcon} skills="Postman"/>
            <SkillList src={checkMarkIcon} skills="Manual Testing"/>
            <SkillList src={checkMarkIcon} skills="Jira"/>
            <SkillList src={checkMarkIcon} skills="MS - Office"/>
        </div>


    </section>
  )
}

export default Skilss
