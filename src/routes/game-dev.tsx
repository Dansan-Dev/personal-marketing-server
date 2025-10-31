import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game-dev')({
  component: GameDevPage,
})

function GameDevPage() {
  return (
    <div className="text-center">
      <h1>Game Development</h1>
    </div>
  )
}

