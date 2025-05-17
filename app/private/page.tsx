"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function PrivatePage() {
  const [locationType, setLocationType] = useState("studio")
  const [hours, setHours] = useState(1)
  const [transportFee, setTransportFee] = useState(false)

  const [animatePrice, setAnimatePrice] = useState(false)

  // Function to trigger animation when values change
  const triggerPriceAnimation = () => {
    setAnimatePrice(true)
    setTimeout(() => setAnimatePrice(false), 300)
  }

  // Update the useEffect to trigger animation when values change
  useEffect(() => {
    triggerPriceAnimation()
  }, [locationType, hours, transportFee])

  // Базовая стоимость и расценки
  const basePrice = 0
  const studioPrice = 2200
  const outdoorPrice = 0
  const hourlyRate = 2000
  const transportFeeAmount = 500

  // Расчет итоговой стоимости
  const calculateTotal = () => {
    let total = basePrice + hours * hourlyRate
    if (locationType === "studio") total += studioPrice
    if (transportFee) total += transportFeeAmount
    return total
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Частные фотосессии</h1>
          <p className="text-xl">Рассчитайте стоимость индивидуальной или семейной фотосессии</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Калькулятор стоимости</CardTitle>
            <CardDescription>Выберите параметры для расчета стоимости фотосессии</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <Label>Локация</Label>
              <RadioGroup
                value={locationType}
                onValueChange={setLocationType}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${locationType === "studio" ? "bg-secondary" : ""}`}
                >
                  <RadioGroupItem value="studio" id="studio" className="sr-only" />
                  <Label htmlFor="studio" className="flex justify-between cursor-pointer">
                    <span>Студия</span>
                    <span className="font-medium">+{studioPrice} ₽</span>
                  </Label>
                </div>
                <div
                  className={`border rounded-lg p-4 cursor-pointer ${locationType === "outdoor" ? "bg-secondary" : ""}`}
                >
                  <RadioGroupItem value="outdoor" id="outdoor" className="sr-only" />
                  <Label htmlFor="outdoor" className="flex justify-between cursor-pointer">
                    <span>На улице / дома</span>
                    <span className="font-medium">+{outdoorPrice} ₽</span>
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
                max={5}
                step={1}
                value={[hours]}
                onValueChange={(value) => setHours(value[0])}
                className="cursor-pointer"
              />
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
          <h2 className="text-2xl font-bold mb-4">О частных фотосессиях</h2>
          <p>
            Частная фотосессия — это прекрасная возможность запечатлеть важные моменты вашей жизни, создать красивые
            портреты или семейные фотографии. Мы предлагаем различные варианты фотосессий: в студии, на природе, в
            городских локациях или у вас дома.
          </p>
          <p>
            Студийная съемка позволяет создать контролируемое освещение и фон, что идеально подходит для портретов и
            профессиональных фотографий. Съемка на улице или в домашней обстановке добавляет естественности и
            уникальности вашим фотографиям.
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
