import React from 'react'
import AboutSection from '../moleculs/AboutSection'
import EducationSection from '../moleculs/EducationSection'
import ExperienceSection from '../moleculs/ExperienceSection'
import SkillsSection from '../moleculs/SkillsSection'

const MainSide = () => {
  return (
    <div className='pt-[40px] pb-[11px] pr-[36px] flex flex-col gap-y-[50px] h-screen overflow-y-auto'>
      <AboutSection/>
      <EducationSection/>
      <ExperienceSection/>
      <SkillsSection/>
    </div>
  )
}

export default MainSide