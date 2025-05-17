import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl">Свяжитесь с нами для заказа фотосессии или получения дополнительной информации</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Связаться с нами</CardTitle>
              <CardDescription>Выберите удобный способ связи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-0.5 text-gray-500" />
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-2">Быстрый ответ в мессенджере</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="http://wa.me/+79935844456" target="_blank">
                      Написать в WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="h-5 w-5 mt-0.5 text-gray-500" />
                <div>
                  <h3 className="font-medium">Telegram</h3>
                  <p className="text-sm text-muted-foreground mb-2">Удобное общение в мессенджере</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://t.me/whats8979" target="_blank">
                      Написать в Telegram
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-gray-500" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">info@dokerphoto.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-0.5 text-gray-500" />
                <div>
                  <h3 className="font-medium">Город</h3>
                  <p className="text-sm text-muted-foreground">Воронеж</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Заказать фотосессию</CardTitle>
              <CardDescription>Выберите тип фотосессии</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm">
                Для заказа фотосессии, пожалуйста, свяжитесь с нами любым удобным способом. Укажите тип фотосессии,
                который вы выбрали, и мы обсудим все детали.
              </p>

              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link
                    href="http://wa.me/+79935844456?text=Здравствуйте!%20Хочу%20заказать%20фотосессию%20для%20организации."
                    target="_blank"
                  >
                    Для организаций
                  </Link>
                </Button>

                <Button asChild className="w-full">
                  <Link
                    href="http://wa.me/+79935844456?text=Здравствуйте!%20Хочу%20заказать%20частную%20фотосессию."
                    target="_blank"
                  >
                    Частная фотосессия
                  </Link>
                </Button>

                <Button asChild className="w-full">
                  <Link
                    href="http://wa.me/+79935844456?text=Здравствуйте!%20Хочу%20заказать%20репортажную%20съемку."
                    target="_blank"
                  >
                    Репортажная съемка
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">О нас</h2>
          <p>
            DokerPhoto — это профессиональная фотостудия в Воронеже, специализирующаяся на различных видах фотосъемки:
            от корпоративных портретов до репортажей и частных фотосессий. Мы работаем с клиентами по всему городу и
            области, предлагая гибкие условия и индивидуальный подход к каждому проекту.
          </p>
          <p>
            Наша цель — создавать качественные фотографии, которые не только соответствуют вашим ожиданиям, но и
            превосходят их. Мы используем современное оборудование и постоянно совершенствуем свои навыки, чтобы
            предоставлять услуги высочайшего качества.
          </p>
          <p>
            Если у вас есть вопросы или вы хотите заказать фотосессию, не стесняйтесь связаться с нами любым удобным
            способом. Мы всегда рады помочь вам запечатлеть важные моменты вашей жизни или создать профессиональный
            имидж для вашей компании.
          </p>
        </div>
      </div>
    </div>
  )
}
