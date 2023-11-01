import { S } from "./style";
import Title from "../Title";
import { EDUCATION_LIST, IEducation } from "../../input/education";
const Education = () => {
  return (
    <>
      <Title title="Education." />
      <S.EducationContainer>
        {EDUCATION_LIST.map((education: IEducation) => (
          <S.EducationWrapper>
            <S.EducationTitle>{education.TITLE}</S.EducationTitle>
            <S.EducationPeriod>{education.MAJOR}</S.EducationPeriod>
            <S.EducationPeriod>{education.PERIOD}</S.EducationPeriod>
          </S.EducationWrapper>
        ))}
      </S.EducationContainer>
    </>
  );
};

export default Education;
