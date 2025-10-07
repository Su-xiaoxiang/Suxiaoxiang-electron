const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">欢迎使用 Electron React 应用</h1>
                        <p className="text-gray-600 mb-6">这是一个基于 Electron 和 React 构建的桌面应用程序。</p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                            <p className="text-blue-700">点击上方导航栏可以在不同页面之间切换。</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">技术栈</h2>
                            <ul className="grid grid-cols-2 gap-2 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Electron
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    React 19
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    TypeScript
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Tailwind CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage