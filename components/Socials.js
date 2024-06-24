// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return(
    <div className='flex items-center gap-x-5 text-lg'> 
      <Link href={'https://www.youtube.com/@shiiyam/featured'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.instagram.com/shiiyam_/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/Shiiyam03'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/shiiyam03/'} className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href={'https://leetcode.com/u/shiiyam03/'} className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href={'https://www.hackerrank.com/profile/shiiyam03'} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;