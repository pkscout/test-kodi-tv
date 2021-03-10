import React from 'react'
import Header from './header'

function Layout (props) {
  return (
    <>
      <div>
        <Header frontmatter={props.pageContext.frontmatter} />
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <div class="prose prose-blue prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl">
                {props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout
