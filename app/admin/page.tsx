"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminPage() {
  // Состояние для авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState(false)

  // Состояние для цен организаций
  const [orgBasePrice, setOrgBasePrice] = useState(3000)
  const [orgHourlyRate, setOrgHourlyRate] = useState(2000)
  const [orgRetouchRate, setOrgRetouchRate] = useState(300)
  const [orgTransportFee, setOrgTransportFee] = useState(500)
  const [orgInstantPreviewFee, setOrgInstantPreviewFee] = useState(1000)

  // Состояние для цен частных фотосессий
  const [privateBasePrice, setPrivateBasePrice] = useState(2000)
  const [privateStudioPrice, setPrivateStudioPrice] = useState(1500)
  const [privateHourlyRate, setPrivateHourlyRate] = useState(1500)
  const [privateTransportFee, setPrivateTransportFee] = useState(500)

  // Состояние для цен репортажей
  const [reportageBasePrice, setReportageBasePrice] = useState(3000)
  const [reportageWeddingPrice, setReportageWeddingPrice] = useState(5000)
  const [reportageConcertPrice, setReportageConcertPrice] = useState(3000)
  const [reportageSportPrice, setReportageSportPrice] = useState(2500)
  const [reportageCorporatePrice, setReportageCorporatePrice] = useState(4000)
  const [reportageHourlyRate, setReportageHourlyRate] = useState(2000)

  // Функция авторизации
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Простая проверка (в реальном приложении должна быть безопасная аутентификация)
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true)
      setLoginError(false)
    } else {
      setLoginError(true)
    }
  }

  // Функция сохранения настроек
  const handleSaveSettings = (tab: string) => {
    // В реальном приложении здесь был бы API-запрос для сохранения настроек
    alert(`Настройки для раздела "${tab}" успешно сохранены!`)
  }

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Вход в панель администратора</CardTitle>
              <CardDescription>Введите учетные данные для доступа</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Ошибка</AlertTitle>
                    <AlertDescription>Неверное имя пользователя или пароль</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Войти
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Панель администратора</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Выйти
          </Button>
        </div>

        <Tabs defaultValue="organizations">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="organizations">Для организаций</TabsTrigger>
            <TabsTrigger value="private">Частные фотосессии</TabsTrigger>
            <TabsTrigger value="reportage">Репортажи</TabsTrigger>
          </TabsList>

          <TabsContent value="organizations">
            <Card>
              <CardHeader>
                <CardTitle>Настройки цен для организаций</CardTitle>
                <CardDescription>Измените параметры расчета стоимости для корпоративных клиентов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="org-base-price">Базовая стоимость (₽)</Label>
                    <Input
                      id="org-base-price"
                      type="number"
                      value={orgBasePrice}
                      onChange={(e) => setOrgBasePrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-hourly-rate">Стоимость часа съемки (₽)</Label>
                    <Input
                      id="org-hourly-rate"
                      type="number"
                      value={orgHourlyRate}
                      onChange={(e) => setOrgHourlyRate(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-retouch-rate">Стоимость ретуши за фото (₽)</Label>
                    <Input
                      id="org-retouch-rate"
                      type="number"
                      value={orgRetouchRate}
                      onChange={(e) => setOrgRetouchRate(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-transport-fee">Транспортные расходы (₽)</Label>
                    <Input
                      id="org-transport-fee"
                      type="number"
                      value={orgTransportFee}
                      onChange={(e) => setOrgTransportFee(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-preview-fee">Моментальный просмотр фото (₽)</Label>
                    <Input
                      id="org-preview-fee"
                      type="number"
                      value={orgInstantPreviewFee}
                      onChange={(e) => setOrgInstantPreviewFee(Number(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="pt-6">
                <Button onClick={() => handleSaveSettings("Для организаций")}>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="private">
            <Card>
              <CardHeader>
                <CardTitle>Настройки цен для частных фотосессий</CardTitle>
                <CardDescription>Измените параметры расчета стоимости для частных клиентов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="private-base-price">Базовая стоимость (₽)</Label>
                    <Input
                      id="private-base-price"
                      type="number"
                      value={privateBasePrice}
                      onChange={(e) => setPrivateBasePrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="private-studio-price">Доплата за студию (₽)</Label>
                    <Input
                      id="private-studio-price"
                      type="number"
                      value={privateStudioPrice}
                      onChange={(e) => setPrivateStudioPrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="private-hourly-rate">Стоимость часа съемки (₽)</Label>
                    <Input
                      id="private-hourly-rate"
                      type="number"
                      value={privateHourlyRate}
                      onChange={(e) => setPrivateHourlyRate(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="private-transport-fee">Транспортные расходы (₽)</Label>
                    <Input
                      id="private-transport-fee"
                      type="number"
                      value={privateTransportFee}
                      onChange={(e) => setPrivateTransportFee(Number(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="pt-6">
                <Button onClick={() => handleSaveSettings("Частные фотосессии")}>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="reportage">
            <Card>
              <CardHeader>
                <CardTitle>Настройки цен для репортажей</CardTitle>
                <CardDescription>Измените параметры расчета стоимости для репортажной съемки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="reportage-base-price">Базовая стоимость (₽)</Label>
                    <Input
                      id="reportage-base-price"
                      type="number"
                      value={reportageBasePrice}
                      onChange={(e) => setReportageBasePrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reportage-hourly-rate">Стоимость часа съемки (₽)</Label>
                    <Input
                      id="reportage-hourly-rate"
                      type="number"
                      value={reportageHourlyRate}
                      onChange={(e) => setReportageHourlyRate(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reportage-wedding-price">Свадьба (₽)</Label>
                    <Input
                      id="reportage-wedding-price"
                      type="number"
                      value={reportageWeddingPrice}
                      onChange={(e) => setReportageWeddingPrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reportage-concert-price">Концерт/Выступление (₽)</Label>
                    <Input
                      id="reportage-concert-price"
                      type="number"
                      value={reportageConcertPrice}
                      onChange={(e) => setReportageConcertPrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reportage-sport-price">Спортивное мероприятие (₽)</Label>
                    <Input
                      id="reportage-sport-price"
                      type="number"
                      value={reportageSportPrice}
                      onChange={(e) => setReportageSportPrice(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reportage-corporate-price">Корпоративное мероприятие (₽)</Label>
                    <Input
                      id="reportage-corporate-price"
                      type="number"
                      value={reportageCorporatePrice}
                      onChange={(e) => setReportageCorporatePrice(Number(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="pt-6">
                <Button onClick={() => handleSaveSettings("Репортажи")}>Сохранить изменения</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
