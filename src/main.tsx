import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/index.css'
import { RouteScrollReset } from '@/components/RouteScrollReset'
import Home from '@/routes/Home'
import BlogIndex from '@/routes/BlogIndex'
import BlogPost from '@/routes/BlogPost'
import CaseStudyRoute from '@/routes/CaseStudyRoute'
import NotFound from '@/routes/NotFound'

// RouteScrollReset owns page position. Disable the browser's delayed restoration
// so a refreshed article cannot jump back into the middle after React mounts.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies/:id" element={<CaseStudyRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
