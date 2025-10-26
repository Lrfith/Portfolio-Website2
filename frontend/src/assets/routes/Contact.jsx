import React from 'react'
import { SOCIAL_LINKS } from '../../utils/data.'

const Contact = () => {
    return (

            <div className="flex gap-6 items-center text-lg">
                {SOCIAL_LINKS.map((social, index) => {
                    const Icon = social.icon
                    return (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 p-3 rounded-full border border-gray-700 transition ${social.color} ${social.bgColor} hover:scale-110`}
                        >
                            <Icon className="w-6 h-6" />
                            <span>{social.name}</span>
                        </a>
                    )
                })}
            </div>
    )
}

export default Contact