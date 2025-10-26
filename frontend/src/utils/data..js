import { Mail, Phone } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        icon: FiGithub,
        url: 'https://github.com/Lrfith',
        color: 'hover:text-gray-400',
        bgColor: 'hover:bg-gray-800',
    },
    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/nuttamonmalakan/',
        color: 'hover:text-blue-400',
        bgColor: 'hover:bg-blue-500/10',
    },
]

export const CONTACT_INFO = [
    {
        icon: Mail,
        label: 'Email',
        value: 'nuttamon.mala@gmail.com',
    },
    {
        icon: Phone,
        label: 'Phone',
         value: ['062-363-0750', '080-057-9562'],
    }
]