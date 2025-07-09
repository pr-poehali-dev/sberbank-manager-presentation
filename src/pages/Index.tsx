import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Index = () => {
  // Данные для диаграмм
  const kfiRegionsData = [
    { name: "Кемеровская", value: 800, percentage: 22.6 },
    { name: "Красноярская", value: 600, percentage: 17.0 },
    { name: "Новосибирская", value: 500, percentage: 14.1 },
    { name: "Омская", value: 400, percentage: 11.3 },
    { name: "Алтайская", value: 350, percentage: 9.9 },
    { name: "Другие", value: 888, percentage: 25.1 },
  ];

  const vsbRegionsData = [
    { name: "Кемеровская", value: 2174, percentage: 61.7 },
    { name: "Новосибирская", value: 1171, percentage: 33.2 },
    { name: "Абаканская", value: 179, percentage: 5.1 },
    { name: "Алтайская", value: 162, percentage: 4.6 },
    { name: "Красноярская", value: 138, percentage: 3.9 },
  ];

  const holdingsData = [
    { name: "ГАЗПРОМ", clients: 850, color: "#00A651" },
    { name: "РОСНЕФТЬ", clients: 720, color: "#003D82" },
    { name: "Евраз Групп", clients: 450, color: "#8E9196" },
    { name: "СУЭК", clients: 380, color: "#F5F5F5" },
  ];

  const COLORS = [
    "#00A651",
    "#003D82",
    "#8E9196",
    "#333333",
    "#F5F5F5",
    "#E5DEFF",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Хедер с логотипом */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#00A651] rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Сбербанк</h1>
                <p className="text-sm text-gray-600">
                  Аналитическая презентация
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="text-[#00A651] border-[#00A651]"
            >
              Менеджер ВСБ/КФИ
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Титульная секция */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Анализ рынка клиентов для ВСБ и КФИ
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Исследование показывает, что рынок клиентов для КФИ включает около 3
            538 компаний, а для ВСБ — около 3 524 компаний, с общим числом более
            7 000, при условии отсутствия дубликатов.
          </p>
        </div>

        {/* Основные метрики */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-[#00A651] to-[#00A651]/80 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">КФИ Клиенты</p>
                  <p className="text-3xl font-bold">3,538</p>
                </div>
                <Icon name="Users" size={32} className="text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-[#003D82] to-[#003D82]/80 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">ВСБ Клиенты</p>
                  <p className="text-3xl font-bold">3,524</p>
                </div>
                <Icon name="Building" size={32} className="text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Общий рынок</p>
                  <p className="text-3xl font-bold">7,000+</p>
                </div>
                <Icon name="TrendingUp" size={32} className="text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-[#8E9196] to-[#8E9196]/80 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Топ регионов</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <Icon name="MapPin" size={32} className="text-white/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Диаграммы распределения */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* КФИ Регионы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="PieChart" className="text-[#00A651]" />
                <span>Топ-5 регионов КФИ</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={kfiRegionsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {kfiRegionsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} компаний`, "Количество"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ВСБ Регионы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BarChart3" className="text-[#003D82]" />
                <span>Топ-5 регионов ВСБ</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vsbRegionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value} компаний`, "Количество"]}
                  />
                  <Bar dataKey="value" fill="#003D82" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Крупные холдинги */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Building2" className="text-[#00A651]" />
              <span>Крупные холдинги и государственные предприятия</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {holdingsData.map((holding, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: holding.color }}
                  >
                    {holding.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {holding.clients}
                  </p>
                  <p className="text-sm text-gray-600">клиентов</p>
                  <Progress
                    value={(holding.clients / 850) * 100}
                    className="mt-2"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <Icon
                  name="Info"
                  className="inline mr-2 text-blue-600"
                  size={16}
                />
                Среди клиентов преобладают крупные холдинги, что подчеркивает
                фокус на государственные и промышленные предприятия
                энергетического и горнодобывающего секторов.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ключевые выводы */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Target" className="text-[#00A651]" />
              <span>Ключевые выводы и рекомендации</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#00A651]">
                  Основные выводы:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-[#00A651] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Рынок сосредоточен в регионах Сибири и Урала
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-[#00A651] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Общее количество клиентов превышает 7 000
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-[#00A651] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Преобладают крупные государственные предприятия
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-[#003D82]">
                  Рекомендации:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="ArrowRight"
                      className="text-[#003D82] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Сосредоточить маркетинговые усилия на топ-регионах
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="ArrowRight"
                      className="text-[#003D82] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Разработать стратегии для крупных холдингов
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon
                      name="ArrowRight"
                      className="text-[#003D82] mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">
                      Провести сегментирование по отраслям
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
