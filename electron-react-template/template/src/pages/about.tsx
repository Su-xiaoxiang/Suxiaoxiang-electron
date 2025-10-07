const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">关于我们</h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Electron React 应用</h2>
                            <p className="text-gray-600 mb-4">这是一个基于 Electron 和 React 构建的桌面应用程序，具有现代化的 UI 设计和流畅的用户体验。</p>
                            
                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">核心特性</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">跨平台桌面应用支持</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">现代化 UI 设计</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">热重载开发体验</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">模块化架构设计</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">技术栈</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Electron</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React 19</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vite</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage