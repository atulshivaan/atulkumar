

function SkillList({src, skills}) {
  return (
    <div>
      <span>
        <img src={src} alt="checkmark Icon" />
        <p>{skills}</p>
      </span>
    </div>
  );
}

export default SkillList;
