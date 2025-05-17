"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function ReportagePage() {
  const [eventType, setEventType] = useState("wedding")
  const [hours, setHours] = useState(3)

  const [animatePrice, setAnimatePrice] = useState(false)

  // Function to trigger animation when values change
  const triggerPriceAnimation = () => {
    setAnimatePrice(true)
    setTimeout(() => setAnimatePrice(false), 300)
  }

  // Update the useEffect to trigger animation when values change
  useEffect(() => {
    triggerPriceAnimation()
  }, [eventType, hours])

  // Базовая стоимость и расценки
  const basePrice = 3000
  const eventPrices = {
    wedding: 5000,
    concert: 3000,
    sport: 2500,
    corporate: 4000,
  }
  const hourlyRate = 2000

  // Расчет итоговой стоимости
  const calculateTotal = () => {
    return basePrice + eventPrices[eventType as keyof typeof eventPrices] + hours * hourlyRate
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Репортажная съемка</h1>
          <p className="text-xl">Рассчитайте стоимость репортажной фотосъемки для вашего мероприятия</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Калькулятор стоимости</CardTitle>
            <CardDescription>Выберите параметры для расчета стоимости фотосъемки</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <Label>Тематика мероприятия</Label>
              <RadioGroup
                value={eventType}
                onValueChange={setEventType}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${eventType === "wedding" ? "bg-secondary" : ""}`}
                >
                  <RadioGroupItem value="wedding" id="wedding" className="sr-only" />
                  <Label htmlFor="wedding" className="flex justify-between cursor-pointer">
                    <span>Свадьба</span>
                    <span className="font-medium">+{eventPrices.wedding} ₽</span>
                  </Label>
                </div>
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${eventType === "concert" ? "bg-secondary" : ""}`}
                >
                  <RadioGroupItem value="concert" id="concert" className="sr-only" />
                  <Label htmlFor="concert" className="flex justify-between cursor-pointer">
                    <span>Концерт/Выступление</span>
                    <span className="font-medium">+{eventPrices.concert} ₽</span>
                  </Label>
                </div>
                <div className={`border rounded-lg p-4 cursor-pointer ${eventType === "sport" ? "bg-secondary" : ""}`}>
                  <RadioGroupItem value="sport" id="sport" className="sr-only" />
                  <Label htmlFor="sport" className="flex justify-between cursor-pointer">
                    <span>Спортивное мероприятие</span>
                    <span className="font-medium">+{eventPrices.sport} ₽</span>
                  </Label>
                </div>
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${eventType === "corporate" ? "bg-secondary" : ""}`}
                >
                  <RadioGroupItem value="corporate" id="corporate" className="sr-only" />
                  <Label htmlFor="corporate" className="flex justify-between cursor-pointer">
                    <span>Корпоративное мероприятие</span>
                    <span className="font-medium">+{eventPrices.corporate} ₽</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="hours">Количество часов: {hours}</Label>
                <span className="font-medium">{hours * hourlyRate} ₽</span>
              </div>
              <Slider
                id="hours"
                min={1}
                max={10}
                step={1}
                value={[hours]}
                onValueChange={(value) => setHours(value[0])}
                className="cursor-pointer"
              />
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
          <h2 className="text-2xl font-bold mb-4">О репортажной съемке</h2>
          <p>
            Репортажная фотосъемка — это искусство запечатлеть события в их естественном течении, сохраняя атмосферу и
            эмоции момента. Наши фотографы имеют большой опыт работы на различных мероприятиях: от свадеб и
            корпоративных вечеринок до спортивных соревнований и концертов.
          </p>
          <p>
            Мы используем профессиональное оборудование и обладаем навыками работы в различных условиях освещения, что
            позволяет нам создавать качественные фотографии даже в сложных ситуациях. После съемки вы получите тщательно
            отобранные и обработанные фотографии, которые сохранят воспоминания о вашем мероприятии на долгие годы.
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
