import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'


export default function SocialAside(){
    return(
        <Link to="/">
            <div className="flex flex-col px-4 py-2 font-heading">
            <div className='text-center text-3xl'>Alpha<span className='text-green-400'>FX</span></div>
            <div className='text-end'>Studio</div>
        </div>
        </Link>
        
    )
}