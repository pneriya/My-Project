import React from 'react'
import{BsTwitter,BsInstagram} from 'react-icons/bs'
import{FaFacebookF} from 'react-icons/fa'
import{FaLinkedin} from 'react-icons/fa'
import{FaGithub} from 'react-icons/fa'


export const SocialMedia = () => {
  return (
    <a className="app__social">
        <a href="https://twitter.com/i/flow/login" target="_blank">
            <BsTwitter />
        </a>
        <a href="https://www.facebook.com/prabhat.neriya.1/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">
            <FaFacebookF/>
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=ko32mqz68byj&utm_content=a6t0fgi" target="_blank" >
            <BsInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/prabhat-neriya-332073230/" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://github.com/pneriya" target="_blank">
            <FaGithub/>
        </a>





    </a>
  )
}

export default SocialMedia

