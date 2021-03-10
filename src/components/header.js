import React from 'react'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import SEO from './seo'
import Social from './social'

function Header (props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const mainMenu = [
    {title: 'News', url: '/blog'},
    {title: 'Download', url: '/download'},
    {title: 'Add-ons', url: '/addons'},
    {title: 'More', url: '#'},
  ]
  let breadcrumbs = ''
  if (props.frontmatter.breadcrumbs !== undefined) {
    breadcrumbs = props.frontmatter.breadcrumbs
  }
  return (
    <>
      <SEO title={props.frontmatter.title} breadcrumbs={breadcrumbs} />
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-24" src="/images/kodi-logo-with-text.png" alt="Kodi Logo" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  {mainMenu.map((item, index) => (
                    <a href={item.url} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{item.title}</a>
                  ))}
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <Social />
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <Transition show={!isHamburgerOpen}>
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Transition>
                <Transition show={isHamburgerOpen}>
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Transition>
              </button>
            </div>
          </div>
        </div>
        <Transition show={isHamburgerOpen}>
          <div class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mainMenu.map((item, index) => (
                <a href="{item.url}" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{item.title}</a>
              ))}
            </div>
            <div class="pt-4 pb-3 border-t border-gray-700">
              <div class="flex items-center px-5">
                <Social />
              </div>
            </div>
          </div>
        </Transition>
      </nav>
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            {props.frontmatter.title}
          </h1>
        </div>
      </header>
    </>
  )
}

export default Header
