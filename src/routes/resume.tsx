import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="text-center">
      <h1>Resume</h1>
    </div>
  )
}

