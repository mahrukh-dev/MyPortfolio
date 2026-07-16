import {
  SiFlutter,
  SiDart,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiKotlin,
  SiAndroidstudio,
  SiFigma,
  SiPostman,
  SiGit,
  SiJira,
  SiGooglemaps,
  SiTensorflow,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si'
// AWS has no simple-icons entry in this package version (trademark reasons) —
// lucide's Cloud icon stands in for any AWS/cloud-storage tech.
import { Cloud } from 'lucide-react'

// Central place mapping the icon-key strings used in content.js to an
// actual icon component. Add an entry here whenever you reference a new
// key in content.js so the tech-stack badges keep rendering correctly.
export const iconMap = {
  flutter: SiFlutter,
  dart: SiDart,
  react: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  kotlin: SiKotlin,
  androidstudio: SiAndroidstudio,
  figma: SiFigma,
  postman: SiPostman,
  git: SiGit,
  jira: SiJira,
  cloud: Cloud,
  googlemaps: SiGooglemaps,
  tensorflow: SiTensorflow,
  javascript: SiJavascript,
  python: SiPython,
  postgresql: SiPostgresql,
  graphql: SiGraphql,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
}

export function TechIcon({ name, size = 16 }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} title={name} />
}
