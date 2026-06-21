import React from 'react'
import { CircleCheck, Heart } from 'lucide-react'

function Button(props) {
    const { variant = "a", title = "Button", rightIcon = false, leftIcon = false, titleColor, bgColor } = props
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: variant === "c" ? "none" : "2px solid #309cff", paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, width: 120, gap: 10, borderRadius:variant === "a" ? 0: 10, backgroundColor: bgColor ? bgColor : "#ffffff" }}>
            {rightIcon && rightIcon}
            <p style={{ color: titleColor ? titleColor : '#309cff', fontWeight: 600 }}>{title}</p>
            {leftIcon && <CircleCheck color="#309cff" />}
        </div>
    )
}

export default Button