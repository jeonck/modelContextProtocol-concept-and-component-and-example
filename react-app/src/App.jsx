import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('concept')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          🔌 Model Context Protocol
        </h1>
        <p className="text-xl text-blue-200 text-center mb-12">
          Concept, Components & Examples
        </p>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
            {[
              { id: 'concept', label: '💡 Concept' },
              { id: 'components', label: '⚙️ Components' },
              { id: 'examples', label: '🚀 Examples' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
          {activeTab === 'concept' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">What is MCP?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">🎯 Purpose</h3>
                  <p className="text-gray-300">
                    Model Context Protocol enables AI assistants to securely connect to data sources
                    and tools, extending their capabilities beyond their training data.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-200 mb-3">🔒 Security</h3>
                  <p className="text-gray-300">
                    Built with security-first principles, MCP provides controlled access to resources
                    through a standardized protocol.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-200 mb-3">🌐 Interoperability</h3>
                  <p className="text-gray-300">
                    Universal protocol that works across different AI models and platforms,
                    ensuring consistent integration patterns.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-200 mb-3">⚡ Extensibility</h3>
                  <p className="text-gray-300">
                    Easily extend AI capabilities by connecting to databases, APIs, file systems,
                    and custom tools through standardized interfaces.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">MCP Components</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-3">🔧 MCP Servers</h3>
                  <p className="text-gray-300 mb-4">
                    Lightweight programs that expose specific capabilities to AI assistants through the MCP protocol.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>File system access</li>
                    <li>Database connections</li>
                    <li>API integrations</li>
                    <li>Custom tool implementations</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-3">🤖 MCP Clients</h3>
                  <p className="text-gray-300 mb-4">
                    AI assistants and applications that consume MCP server capabilities.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Claude Desktop</li>
                    <li>Custom AI applications</li>
                    <li>Integration platforms</li>
                    <li>Development tools</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-300/30">
                  <h3 className="text-2xl font-semibold text-white mb-3">📋 Resources & Tools</h3>
                  <p className="text-gray-300 mb-4">
                    Core abstractions that MCP servers expose to clients.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Resources: Data and content access</li>
                    <li>Tools: Interactive capabilities</li>
                    <li>Prompts: Template management</li>
                    <li>Sampling: AI model interactions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Real-World Examples</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-300/30">
                  <h3 className="text-xl font-semibold text-white mb-3">📁 File System Server</h3>
                  <p className="text-gray-300 mb-3">
                    Secure file operations with access controls
                  </p>
                  <code className="text-sm bg-black/30 text-green-300 p-2 rounded block">
                    npm install @modelcontextprotocol/server-filesystem
                  </code>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-6 border border-cyan-300/30">
                  <h3 className="text-xl font-semibold text-white mb-3">🐙 GitHub Integration</h3>
                  <p className="text-gray-300 mb-3">
                    Repository management and code interactions
                  </p>
                  <code className="text-sm bg-black/30 text-green-300 p-2 rounded block">
                    npm install @modelcontextprotocol/server-github
                  </code>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-300/30">
                  <h3 className="text-xl font-semibold text-white mb-3">🗄️ Database Server</h3>
                  <p className="text-gray-300 mb-3">
                    SQLite database operations and queries
                  </p>
                  <code className="text-sm bg-black/30 text-green-300 p-2 rounded block">
                    npm install @modelcontextprotocol/server-sqlite
                  </code>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg p-6 border border-purple-300/30">
                  <h3 className="text-xl font-semibold text-white mb-3">🔍 Web Search</h3>
                  <p className="text-gray-300 mb-3">
                    Internet search and content retrieval
                  </p>
                  <code className="text-sm bg-black/30 text-green-300 p-2 rounded block">
                    npm install @modelcontextprotocol/server-brave-search
                  </code>
                </div>
              </div>

              <div className="mt-8 bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">🚀 Getting Started</h3>
                <p className="text-gray-300 mb-4">
                  Start building with MCP by exploring the official documentation and examples:
                </p>
                <div className="space-y-2">
                  <a href="https://modelcontextprotocol.io/" className="text-blue-300 hover:text-blue-200 block">
                    📖 Official Documentation
                  </a>
                  <a href="https://github.com/modelcontextprotocol" className="text-blue-300 hover:text-blue-200 block">
                    💻 GitHub Repository
                  </a>
                  <a href="https://github.com/modelcontextprotocol/servers" className="text-blue-300 hover:text-blue-200 block">
                    🛠️ Official Server Implementations
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App