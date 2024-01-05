const Tabs = ({ tabs, activeTab }) => {
  const renderTabs = tabs.map((tab) => {
    const classesTab =
      "grow bg-neutral-800 px-5 py-1 transition duration-500 hover:bg-neutral-700 focus:bg-neutral-700"
    const classesTabActive = `${classesTab} bg-gray-300 text-neutral-800 hover:bg-gray-300 hover:text-neutral-800`

    return (
      <button
        className={tab.title === activeTab ? classesTabActive : classesTab}
        data-category={tab.category}
        // onClick={handleTabClick}
        key={tab.id}>
        {tab.title}
      </button>
    )
  })

  return (
    <div className="flex flex-wrap justify-center mb-8 border-[1px] gap-[1px] bg-zinc-600 rounded-md overflow-hidden">
      {renderTabs}
    </div>
  )
}

export default Tabs
