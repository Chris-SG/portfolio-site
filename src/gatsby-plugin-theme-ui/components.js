import React from "react"
import ProjectCard from "../components/project-card"
import SkillList from "../components/skill-list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, lang, bg, children }) => (
    <ProjectCard link={link} title={title} lang={lang} bg={bg}>
      {children}
    </ProjectCard>
  ),

  SkillList: ({ nodes, category, icon }) => (
    <SkillList nodes={nodes} category={category} icon={icon}>
    </SkillList>
  ),

  FontAwesomeIcon: ({
    icon,
    mask,
    className,
    color,
    spin,
    pulse,
    border,
    fixedWidth,
    inverse,
    listItem,
    flip,
    size,
    pull,
    rotation,
    transform,
    symbol,
    style,
    tabIndex,
    title
  }) => (
    <FontAwesomeIcon icon={icon}>
    </FontAwesomeIcon> 
  ),
}
