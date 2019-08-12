/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type SkillListProps = {
  nodes: string[],
  category: string,
  icon: string
}

const SkillList = ({ nodes, category, icon }: SkillListProps) => (
  <div>
    <div
      sx={{
        letterSpacing: `wide`,
        pb: 2,
        fontSize: 3,
        fontWeight: `bold`,
        lineHeight: 1,
      }}
    >
      {category}
    </div>    
    {
      nodes.map((node) => (<div>{icon} {node}</div>))
    }
  </div>
)

export default SkillList;
