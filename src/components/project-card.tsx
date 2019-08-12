/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  lang: string
  bg: string
}

const ProjectCard = ({ link, title, children, lang, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
        ".lang": {
          background: `rgba(255,255,255,0.3)`
        }
      },
    }}
  >
    <div
      sx={{
        letterSpacing: `wide`,
        pb: 4,
        fontSize: [4, 5],
        fontWeight: `bold`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>

    { lang ? (
      <div 
        className="lang"
        sx={{
          opacity: 0.75,
          position: `absolute`,
          top: `25px`,
          right: `30px`,
          textShadow: `0px 2px 8px rgba(0,0,0,0.4)`,
          border: `2px solid rgba(255,255,255,1)`,
          borderRadius: `lg`,
          padding: `3px 10px 3px 10px`,
          fontWeight: `bold`,
          transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        }}
     >
        {lang}
      </div>)
    : ''}
    <div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`}}>{children}</div>
  </a>
)

export default ProjectCard
