import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

type BackButtonProps = {
  to: string
  label?: string
  hidden?: boolean
}


export default function BackButton({ to, label = 'Back', hidden=false}: BackButtonProps) {
  return (
    // Zero-height wrapper so it doesn't push content down
    <div className={`back-button relative h-0 ${hidden ? 'hide' : ''}`}>
      <Link
        to={to}
        // Absolute overlay: doesn’t affect layout
        className="back-button-link"
        aria-label={label}
      >
        {
          hidden 
            ? <></>
            : <ArrowLeft className="h-4 w-4" />
        }
        
        {label}
      </Link>
    </div>
  )
}
