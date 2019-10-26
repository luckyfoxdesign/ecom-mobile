import React from "react"
import PropTypes from "prop-types"
import s from './layout.module.styl'
import './normalize.css'

const Layout = ({ children }) => {
  return (
    <div className={s.content}>
      <div className={s.wrapper}>
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
