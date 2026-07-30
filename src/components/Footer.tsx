import { profile } from '@/data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {profile.fullName}
        </p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  )
}
