import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            
            <div className='app-title-text'>
              <h1 className='app-title'>Serverless React app with Fauna DB Example</h1>
              <p className='app-intro'>
                  React + serverlessfunctions + FaunaDB
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <div className='view-src'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/agustind/netlify-faunadb'>
              <img className='github-icon' src={github} alt='view code on github' />
              View the source on GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
