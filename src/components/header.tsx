import React from 'react'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import SEO from './seo'
import Social from './social'
import HeaderDropdownMenu from './headermenu'

const mainMenu = [
  { title: 'About',
    url: '/about',
    collapseto: 'more',
    description: 'More information about Kodi and our other software packages, how to contact us, our sponsors, and the Kodi foundation.',
    footer: null,
    dropdown: [ 
      {title: 'About Kodi', url: '/about', description: 'Find out everything Kodi can do for you.'},
      {title: 'Contact', url: '/about/contact', description: 'Contact the Kodi team about support corporate enquiries, or sponsorships.'},
      {title: 'Sponsors', url: '/about/sponsors', description: 'a list of companies supporting the work we do.'},
      {title: 'Software', url: '/about/software', description: 'Information about the suite of software we offer.'},
      {title: 'Foundation', url: '/about/software', description: 'A description of the structure of functions of the Kodi Foundation.'},
    ]
  },
  { title: 'News', url: '/blog', collapseto: null, description: null, dropdown: null, footer: null },
  { title: 'Download', url: '/download', collapseto: null, description: null, dropdown: null, footer: null },
  { title: 'Add-ons',
    url: '/addons',
    collapseto: null,
    description: null,
    footer: 'Add-on availability depends on your version of Kodi, so please select the version you are running.',
    dropdown: [
      {title: 'Matrix Add-ons', url: '/addons/matrix', description: 'Add-ons for Kodi 19, the latest and greatest version of Kodi.'},
      {title: 'Leia Add-ons', url: '/addons/leia', description: 'Add-ons for Kodi 18, the most recent previous version of Kodi.'}
    ]
  },
  { title: 'Get Help',
    url: '/gethelp',
    collapseto: 'more',
    description: "Information on our forums, user documentation, and developer resources.",
    footer: null,
    dropdown: [
      {title: 'Forum', url: 'https://forum.kodi.tv', description: 'Our user forum for asking questions and finding answers.'},
      {title: 'Wiki', url: 'https://kodi.wiki', description: 'Our user documentation and how-to guides.'},
      {title: 'Developer Resources', url: 'https://docs.kodi.tv', description: 'Documentation, including skin development and interfaces for Python and C++ .'}
    ]
  },
  { title: 'Contribute',
    url: '/contribute',
    collapseto: 'more',
    description: 'Learn about working on the Kodi project, donating, or even buying merchandise.',
    footer: null,
    dropdown: [ 
      {title: 'Working on Kodi', url: '/contribute', description: 'We are always looking for people to help develop and support Kodi.'},
      {title: 'Donate', url: '/donate', description: 'Funds we raise go to improving and extending the goals of the Kodi Foundation.'},
      {title: 'Store', url: '/store', description: 'Buy Kodi merchandise.'},
    ]
  },
]

function menuCollapse(menuname) {
  let newmenu = {title: menuname, url: null, collapseto: null, description: null, footer: null, dropdown: []}
  for (let i=0; i < mainMenu.length; i++) {
    if (mainMenu[i].collapseto !== null) {
      if (mainMenu[i].collapseto.toLowerCase() === menuname.toLowerCase()) {
        newmenu.dropdown.push(mainMenu[i])
      }
    }
  }
  return newmenu
}

function Header (props) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
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
                <a href="/"><img class="h-8 w-24" src="/images/kodi-logo-with-text.png" title="Home" alt="Kodi Logo" /></a>
              </div>
              <div class="hidden lg:block">
                <div class="ml-10 flex items-baseline space-x-2">
                  {mainMenu.map((item, index) => (
                    item.dropdown == null
                      ? <a href={item.url} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{item.title}</a>
                      : <HeaderDropdownMenu menu={item} />
                  ))}
                </div>                
              </div>
              <div class="hidden md:block lg:hidden">
                <div class="ml-10 flex items-baseline space-x-4">
                  {mainMenu.map((item, index) => (
                    item.collapseto === null
                      ? item.dropdown == null
                          ? <a href={item.url} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{item.title}</a>
                          : <HeaderDropdownMenu menu={item} />
                      : ''
                  ))}
                  <HeaderDropdownMenu menu={menuCollapse('More')} />
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
