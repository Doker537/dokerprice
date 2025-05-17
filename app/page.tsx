import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Калькулятор стоимости фотосессии</h1>
        <p className="text-xl mb-8">Сконструируйте идеальную фотосессию и узнайте её стоимость за несколько кликов</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="flex flex-col">
          <CardHeader>
            <Link href="/organizations" className="hover:underline">
              <CardTitle>Для организаций</CardTitle>
            </Link>
            <CardDescription>Корпоративные фотосессии и мероприятия</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <p className="mb-4">Профессиональные фотографии для вашей компании, включая:</p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Корпоративные портреты</li>
              <li>Фотографии офиса и рабочих процессов</li>
              <li>Мероприятия и конференции</li>
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/organizations">Рассчитать стоимость</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <Link href="/private" className="hover:underline">
              <CardTitle>Частные фотосессии</CardTitle>
            </Link>
            <CardDescription>Индивидуальные и семейные фотосессии</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <p className="mb-4">Запечатлите важные моменты вашей жизни:</p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Портретные фотосессии</li>
              <li>Семейные фотосессии</li>
              <li>Студийные и выездные съемки</li>
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/private">Рассчитать стоимость</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <Link href="/reportage" className="hover:underline">
              <CardTitle>Репортажи</CardTitle>
            </Link>
            <CardDescription>Фотосъемка событий и мероприятий</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1">
            <p className="mb-4">Профессиональная репортажная съемка:</p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Свадьбы и торжества</li>
              <li>Концерты и выступления</li>
              <li>Спортивные мероприятия</li>
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link href="/reportage">Рассчитать стоимость</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">О калькуляторе</h2>
        <p className="text-lg mb-8">
          Наш калькулятор позволяет быстро и удобно рассчитать стоимость фотосессии в Воронеже, учитывая все ваши
          пожелания и требования. Выберите нужные параметры, и вы сразу увидите итоговую стоимость услуг.
        </p>
        <Button asChild size="lg">
          <Link href="/contacts">Заказать фотосессию</Link>
        </Button>
      </section>
    </div>
  )
}
