const CookieBanner = () => {
  return (
    <div>
        <section className="z-auto fixed max-w-md p-4 mx-auto bg-white border-r-4 border-y-4 border-black bottom-0 dark:border-white dark:bg-black dark:text-white">
            <h2 className="font-semibold text-gray-800 dark:text-white">Kakor</h2>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Vi använder kakor för att förbättra hemsidan. 
                </p>
                <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                    <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
                        Läs mer och hantera dina val.
                    </button>

                    <button className="text-xs dark:bg-white dark:text-black dark:hover:bg-gray-900 bg-black font-medium hover:bg-gray-900  hover:text-white text-white px-4 py-2.5 focus:outline-none">
                        Acceptera
                    </button>
                </div>
        </section>
    </div>
  )
}

export default CookieBanner 