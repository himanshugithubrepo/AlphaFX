import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'


export default function SocialAside(){
    return(
        <div className="flex w-full justify-start items-center px-4 py-2">
            <a href="https://github.com/himanshugithubrepo" target="_blank" rel="noopener noreferrer" className='px-1'>
        <FaGithub className="hover:text-black" />
      </a>
      <a href="https://www.linkedin.com/in/-himanshu--sharma----" target="_blank" rel="noopener noreferrer" className='px-2'>
        <FaLinkedin className="hover:text-blue-700" />
      </a>
      <a href="https://twitter.com/himanshuXdev" target="_blank" rel="noopener noreferrer" className='px-2'>
        <FaXTwitter className="hover:text-black" />
      </a>
      <a href="mailto:himanshu.er2025@gmail.com" className='px-2'>
        <SiGmail className="hover:text-red-500" />
      </a>
        </div>
    )
}