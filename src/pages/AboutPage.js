import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';

function AboutPage(){
    return(
        <div className="AboutPage">
           <Title title={'About Me'} span={'About Me'} />
           <ImageSection />
           <Title title={'My Skills'} span={'My Skills'} />
          <div className="skillsContainer">
            <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'}/>
            <SkillsSection skill={'Node JS'} progress={'75%'} width={'75%'}/>
            <SkillsSection skill={'HTML'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'CSS'} progress={'60%'} width={'60%'}/>
            <SkillsSection skill={'REACT'} progress={'65%'} width={'65%'}/>
            <SkillsSection skill={'Express JS'} progress={'70%'} width={'70%'}/>
            <SkillsSection skill={'MongoDB'} progress={'55%'} width={'55%'}/>
            <SkillsSection skill={'MySQL'} progress={'60%'} width={'60%'}/>
          </div>
        </div>
    )
}

export default AboutPage;