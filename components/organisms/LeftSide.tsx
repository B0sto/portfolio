import React, { useState } from 'react'
import Image from 'next/image'
import LeftSideComponent from '../atoms/LeftSideComponent'
import BurgerIcon from '@/public/BurgerIcon'
import BackIcon from '@/public/BackIcon'

const LeftSide = () => {
  const [isReduced, setIsReduced] = useState(false);

  const handleReduce = () => {
    setIsReduced(prev => !prev)
  }

  return (
    <div className={`${isReduced ? 'w-[54px] px-[7px]' : 'w-[250px] px-[20px]'} bg-[#222935] pt-[20px] pb-[31px] h-screen relative transition-all duration-250 shrink-0`}>
      <div className="user_container flex justify-center items-center gap-y-[10px] flex-col pb-[40px]">
        <Image src="/Avatar.svg" alt='image' width={isReduced ? 40 : 100} height={isReduced ? 40 : 100}></Image>
        {!isReduced && (
          <p className='font-bold leading-[19.2px] font-opensans text-white'>John Doe</p>
        )}
      </div>

      <div className='about_container flex flex-col gap-y-[38.5px] justify-center'>
        <LeftSideComponent iconName='About.svg' text={!isReduced ? 'About me' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Education.svg' text={!isReduced ? 'Education' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Experience.svg' text={!isReduced ? 'Experience' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Skills.svg' text={!isReduced ? 'Skills' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Portfolio.svg' text={!isReduced ? 'Portfolio' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Contacts.svg' text={!isReduced ? 'Contacts' : ''} isReduced={isReduced} />
        <LeftSideComponent iconName='Feedbacks.svg' text={!isReduced ? 'Feedbacks' : ''} isReduced={isReduced} />

      </div>

      {/* <div className="flex gap-x-[10px] justify-center items-center">
          <BackIcon />
          <p className='text-[14px] leading-[16.8px] font-opensans text-white'>Go back</p>

        </div> */}

      <div className={`absolute top-[20px] ${isReduced ? 'left-[54px]' : 'left-[250px]'} transition-all duration-250`}>
        <BurgerIcon onClick={handleReduce} />
      </div>
    </div>
  )
}

export default LeftSide