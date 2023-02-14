// you cannot use hooks in server side components. So, you have to use the "use client" directive to tell Next.js that this component is a client side component.
"use client"
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
	// we are using the useTheme hook to get the current theme and the setTheme function.
	const { systemTheme, theme, setTheme } = useTheme()
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		// if the theme is set to system, then set the theme to the system theme.
		setMounted(true)
	}, [])

	// if the current theme is the system theme, then use the system theme. Otherwise, use the current theme.
	const currentTheme = theme === 'system' ? systemTheme : theme

	return (
		<>
			{/* This check the current theme, decides which icon to display, and then creates an onClick function to switch the theme from light to dark */}
			{mounted && 
				(currentTheme === 'dark' ? (
					<MdLightMode 
						className='text-xl cursor-pointer hover:text-amber-500' 
						onClick={() =>setTheme("light")} 
					/>
				) : (
					<BsFillMoonFill 
						className='text-xl cursor-pointer hover:text-amber-500' 
						onClick={() =>setTheme("dark")} 
					/>
				))
			}
		</>
	)
}
