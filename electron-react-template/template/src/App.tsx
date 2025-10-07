import { useState } from 'react'
// 导入页面组件
import HomePage from './pages/home.tsx'
import AboutPage from './pages/about.tsx'

function App() {
    // 页面状态管理
    const [currentPage, setCurrentPage] = useState('home')

    // 渲染当前页面
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />
            case 'about':
                return <AboutPage />
            default:
                return <HomePage />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 导航栏 */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <h2 className="text-xl font-bold text-gray-900">Electron App</h2>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex space-x-4">
                                <button
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                                        currentPage === 'home'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setCurrentPage('home')}
                                >
                                    首页
                                </button>
                                <button
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                                        currentPage === 'about'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setCurrentPage('about')}
                                >
                                    关于
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 页面内容 */}
            <main>
                {renderPage()}
            </main>
        </div>
    )
}

export default App