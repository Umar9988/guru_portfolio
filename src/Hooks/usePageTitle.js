import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — GURU EDITORS` : 'GURU EDITORS — Professional Video Editing Studio'
  }, [title])
}