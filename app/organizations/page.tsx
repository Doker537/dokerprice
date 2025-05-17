"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function OrganizationsPage() {
  const [hours, setHours] = useState(2)
  const [retouchedPhotos, setRetouchedPhotos] = useState(20)
  const [transportFee, setTransportFee] = useState(false)
  const [instantPreview, setInstantPreview] = useState(false)

  const [animatePrice, setAnimatePrice] = useState(false)

  // Function to trigger animation when values change
  const triggerPriceAnimation = () => {
    setAnimatePrice(true)
    setTimeout(() => setAnimatePrice(false), 300)
  }

  useEffect(() => {
    triggerPriceAnimation()
  }, [hours, retouchedPhotos, transportFee, instantPreview])

  // Базовая стоимость и расценки
  const basePrice = 0
  const hourlyRate = 2000
  const retouchRate = 50
  const transportFeeAmount = 500
  const instantPreviewFee = 1000

  // Расчет итоговой стоимости
  const calculateTotal = () => {
    let total = basePrice + hours * hourlyRate + retouchedPhotos * retouchRate
    if (transportFee) total += transportFeeAmount
    if (instantPreview) total += instantPreviewFee
    return total
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Для организаций</h1>
          <p className="text-xl">
            Рассчитайте стоимость корпоративной фотосессии, настроив все параметры под ваши потребности
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Калькулятор стоимости</CardTitle>
            <CardDescription>Выберите параметры для расчета стоимости фотосессии</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="hours">Количество часов: {hours}</Label>
                <span className="font-medium">{hours * hourlyRate} ₽</span>
              </div>
              <Slider
                id="hours"
                min={1}
                max={8}
                step={1}
                value={[hours]}
                onValueChange={(value) => setHours(value[0])}
                className="cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="retouched">Фото в ретуши: {retouchedPhotos}</Label>
                <span className="font-medium">{retouchedPhotos * retouchRate} ₽</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Slider
                    id="retouched-slider"
                    min={0}
                    max={100}
                    step={1}
                    value={[retouchedPhotos]}
                    onValueChange={(value) => setRetouchedPhotos(value[0])}
                    className="cursor-pointer"
                  />
                </div>
                <Input
                  id="retouched"
                  type="number"
                  min="0"
                  max="100"
                  value={retouchedPhotos}
                  onChange={(e) => setRetouchedPhotos(Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="transport-fee">Транспортные расходы</Label>
                <p className="text-sm text-muted-foreground">Если локация дальше МП или на левом берегу</p>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="transport-fee" checked={transportFee} onCheckedChange={setTransportFee} />
                <span className="font-medium">{transportFee ? `+${transportFeeAmount} ₽` : "0 ₽"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="instant-preview">
                  Моментальный просмотр фотографий на ноутбуке во время фотосессии
                </Label>
                <p className="text-sm text-muted-foreground">Возможность просматривать фотографии в процессе съемки</p>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="instant-preview" checked={instantPreview} onCheckedChange={setInstantPreview} />
                <span className="font-medium">{instantPreview ? `+${instantPreviewFee} ₽` : "0 ₽"}</span>
              </div>
            </div>
          </CardContent>
          <Separator className="my-2" />
          <CardFooter className="flex justify-between pt-6">
            <div>
              <p className={`text-2xl font-bold ${animatePrice ? "animate-price-change" : ""}`}>
                Итого: {calculateTotal().toLocaleString()} ₽
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                * Указанная стоимость не является финальной.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contacts">Заказать фотосессию</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">О корпоративных фотосессиях</h2>
          <p>
            Корпоративная фотосессия — это отличный способ создать профессиональный имидж вашей компании. Качественные
            фотографии сотрудников, рабочих процессов и офисных помещений могут быть использованы для вашего сайта,
            социальных сетей, рекламных материалов и корпоративных документов.
          </p>
          <p>
            Наши услуги включают в себя полный цикл работ: от планирования фотосессии до финальной обработки
            изображений. Мы учитываем все ваши пожелания и требования, чтобы результат полностью соответствовал вашим
            ожиданиям.
          </p>
          <p>
            Для получения дополнительной информации или заказа фотосессии, пожалуйста, свяжитесь с нами через форму на
            странице контактов или по указанным телефонам.
          </p>
        </div>
      </div>
    </div>
  )
}
