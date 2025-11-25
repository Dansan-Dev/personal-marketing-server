import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/elderpath_crusade')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Elderpath Crusade"
      description="A game demo for my rougelike, chess-like, deckbuilder game. Built with LibGDX Java engine and ported to Windows, Linux, and Mac."
      tech={[
        'Java',
        'LibGDX',
        'Gradle',
        'Game Development',
        'Cross-platform Development'
      ]}
      highlights={[
        'Cross-platform game development using LibGDX framework',
        'Successfully ported to Windows, Linux, and macOS',
        'Demonstrates proficiency in Java programming',
        'Designing for good user experience'
      ]}
      links={{
        extra: [
          { name: 'Download', link: 'https://games.danielsandstrom.org/games/elderpath-crusade', live: true }
        ]
      }}
      reflections="This project showcases my ability to work with complex architectures, game development frameworks and create cross-platform applications. Building with LibGDX provided valuable experience in game architecture, rendering, and platform-specific adaptations through gradle builds."
    />
  </div>
}
