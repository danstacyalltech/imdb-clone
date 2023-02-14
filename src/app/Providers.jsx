// here we call "use client" to tell Next.js that this component is a client side component.
"use client"

import { ThemeProvider } from "next-themes";

// The providers component is used to wrap all pages in the app so that we can useContext() in any component.
// We pass children because we to pass everything from Layout.jsx to Providers.jsx.
export default function Providers({ children }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<div className="dark:bg-gray-700 dark:text-gray-200 text-grey-700 transition-colors duration-300 min-h-screen select-none">
				{children}
			</div>
		</ThemeProvider>
	)
}
