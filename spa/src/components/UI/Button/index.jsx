import React, { useEffect, useRef } from 'react'
import { ButtonBase } from './styles'

const Button = ({ ripple, children, ...rest }) => {
  const ref = useRef(null)

  useEffect(() => {
    const btn = ref.current

    function createRipple (e) {
      const circle = document.createElement('span')

      if (btn) {
        btn.appendChild(circle)
        
        let d = Math.max(btn.clientWidth, btn.clientHeight)

        circle.style.width = circle.style.height = d + 'px'

        circle.style.left = e.offsetX - d / 2 + 'px'
        circle.style.top = e.offsetY - d / 2 + 'px' 

        circle.classList.add('ripple')

        setTimeout(function() {
          circle.remove()
        }, 1000)
      }
    }

    if (ripple) {
      btn?.addEventListener('click', createRipple)
    }

    return () => {
      btn?.removeEventListener('click', createRipple)
    }
  })

  return (
    <ButtonBase
      ref={ref}
      {...rest}>
        { children }
    </ButtonBase>
  )
}

export default Button