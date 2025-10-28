import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, TrendingUp, Leaf, Globe, Zap } from "lucide-react";

const dataSources = [
  {
    title: "联合国气候行动",
    description: "联合国官方气候变化信息和报告",
    url: "https://www.un.org/zh/climatechange/",
    icon: "🌍"
  },
  {
    title: "世界气象组织 (WMO)",
    description: "全球气候数据和气象报告",
    url: "https://wmo.int/zh-hans",
    icon: "📊"
  },
  {
    title: "IPCC 气候变化专门委员会",
    description: "权威的气候变化科学评估",
    url: "https://www.ipcc.ch/languages-2/chinese/",
    icon: "📈"
  },
  {
    title: "中国生态环境部",
    description: "中国应对气候变化的政策与行动",
    url: "https://www.mee.gov.cn/",
    icon: "🇨🇳"
  },
  {
    title: "中国政府网",
    description: "中国应对气候变化政策文件",
    url: "https://www.gov.cn/",
    icon: "📋"
  },
  {
    title: "百度百科",
    description: "全球变暖的详细百科知识",
    url: "https://baike.baidu.com/",
    icon: "📚"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">全球变暖信息网</h1>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#definition" className="text-gray-600 hover:text-blue-600 transition">定义</a>
            <a href="#causes" className="text-gray-600 hover:text-blue-600 transition">成因</a>
            <a href="#impacts" className="text-gray-600 hover:text-blue-600 transition">影响</a>
            <a href="#china" className="text-gray-600 hover:text-blue-600 transition">中国力量</a>
            <a href="#sources" className="text-gray-600 hover:text-blue-600 transition">数据来源</a>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            了解全球变暖<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">保护我们的地球</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            全球变暖是当今最紧迫的环境挑战之一。了解其定义、成因、影响，以及我们可以采取的行动。
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              开始了解
            </Button>
            <Button size="lg" variant="outline">
              查看数据源
            </Button>
          </div>
        </div>
      </section>

      {/* 定义部分 */}
      <section id="definition" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-600" />
            全球变暖的定义
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">什么是全球变暖？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  全球变暖是指因温室效应加剧，导致地球大气与海洋温度长期上升的气候变化现象。这是由于人类活动释放的温室气体（如二氧化碳、甲烷等）不断积累在大气中，形成一层"温室"，阻止地球热量散失。
                </p>
                <p className="text-sm text-gray-600 italic">
                  数据来源：联合国气候行动、IPCC第六次评估报告
                </p>
              </CardContent>
            </Card>
            <Card className="border-cyan-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-cyan-600">关键数据</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">2023年全球年均温度</p>
                  <p className="text-2xl font-bold text-blue-600">高于工业化前1.45°C</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">全球海平面上升速度</p>
                  <p className="text-2xl font-bold text-cyan-600">约3.4毫米/年</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 成因部分 */}
      <section id="causes" className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-orange-500" />
            全球变暖的主要成因
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">化石燃料燃烧</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">煤炭、石油和天然气的燃烧占全球温室气体排放的75%以上</p>
                <div className="text-3xl font-bold text-blue-600">75%+</div>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">森林砍伐</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">减少了地球吸收二氧化碳的能力，同时释放储存的碳</p>
                <div className="text-3xl font-bold text-blue-600">10-15%</div>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">农业和工业活动</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">农业产生甲烷，工业排放各种温室气体</p>
                <div className="text-3xl font-bold text-blue-600">10-15%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 影响部分 */}
      <section id="impacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-red-500" />
            全球变暖的主要影响
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900">极端天气事件增加</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    更频繁的热浪
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    更强烈的风暴
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    极端降雨和干旱
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    野火频率增加
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900">生态系统破坏</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    物种灭绝加速
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    珊瑚礁漂白
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    冰川和冰盖融化
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    生物多样性丧失
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900">海平面上升</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    沿海城市被淹没风险
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    岛屿国家面临威胁
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    盐碱化农田
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    基础设施受损
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900">人类社会影响</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    粮食安全威胁
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    水资源短缺
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    疾病传播加剧
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    经济损失巨大
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 中国力量部分 */}
      <section id="china" className="py-16 bg-gradient-to-r from-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Leaf className="w-8 h-8 text-green-600" />
            中国力量：应对气候变化
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-green-700">双碳目标</CardTitle>
                <CardDescription>中国的气候承诺</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">碳达峰</p>
                  <p className="text-xl font-bold text-green-700">2030年前</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">碳中和</p>
                  <p className="text-xl font-bold text-green-700">2060年前</p>
                </div>
                <p className="text-sm text-gray-600 italic">
                  这是中国向国际社会作出的庄严承诺，体现了大国担当。
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700">主要政策措施</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>优化能源结构，大力发展新能源</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>推进工业绿色低碳转型</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>建设绿色建筑和绿色交通</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>保护森林和生态系统</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>推动循环经济发展</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>加强国际合作</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md border-l-4 border-l-yellow-500">
            <h4 className="text-lg font-bold text-gray-900 mb-4">中国的成就</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">可再生能源装机容量</p>
                <p className="text-2xl font-bold text-green-600">全球第一</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">新能源汽车产销量</p>
                <p className="text-2xl font-bold text-green-600">全球第一</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">森林覆盖率提升</p>
                <p className="text-2xl font-bold text-green-600">显著增长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 权威数据来源 */}
      <section id="sources" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-blue-600" />
            权威数据来源
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            点击下方按钮访问权威机构的官方网站，获取最新的全球变暖数据和研究报告。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source, idx) => (
              <Card key={idx} className="shadow-md hover:shadow-lg transition hover:border-blue-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{source.title}</CardTitle>
                      <CardDescription>{source.description}</CardDescription>
                    </div>
                    <span className="text-2xl">{source.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                      访问网站
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">关于我们</h4>
              <p className="text-sm">致力于提供全球变暖的科学知识和权威信息。</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#definition" className="hover:text-white transition">定义</a></li>
                <li><a href="#causes" className="hover:text-white transition">成因</a></li>
                <li><a href="#impacts" className="hover:text-white transition">影响</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">资源</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#china" className="hover:text-white transition">中国力量</a></li>
                <li><a href="#sources" className="hover:text-white transition">数据来源</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">联系方式</h4>
              <p className="text-sm">Email: info@globalwarming.cn</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 全球变暖信息网. 保护地球，从了解开始。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
