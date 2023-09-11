from django.db import models
from modelcluster.models import ClusterableModel

from wagtail.models import Orderable
from wagtail.admin.panels import MultiFieldPanel, FieldPanel, InlinePanel
from wagtail.snippets.models import register_snippet
from wagtail.api import APIField
from modelcluster.fields import ParentalKey


class ApplicationForm(models.Model):
    name = models.CharField("Имя", max_length=128)
    mail = models.EmailField("Почта")
    message = models.TextField("Сообщение", blank=True, null=True)
    is_read = models.BooleanField("Прочитано?", blank=True, default=False)

    def __str__(self):
        return f"Заявка от {self.name}, {'Прочитано!' if self.is_read else 'Не прочитано!'}"

    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки"


register_snippet(ApplicationForm)


class OfferItem(models.Model):
    title = models.CharField('Заголовок', max_length=32)
    offer_1 = models.CharField('Оффер 1', max_length=32)
    offer_2 = models.CharField('Оффер 2', max_length=32)

    page = ParentalKey(
        'home.HomePage',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="offer_items"
    )

    api_fields = [
        APIField('title'),
        APIField('offer_1'),
        APIField('offer_2'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Оффер"
        verbose_name_plural = "Офферы"


class SkillItem(Orderable):
    name = models.CharField('Название', max_length=32)
    image = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.SET_NULL, verbose_name="Иконка")

    page = ParentalKey(
        'home.HomePage',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="skill_items"
    )

    api_fields = [
        APIField('name'),
        APIField('image'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Скилл"
        verbose_name_plural = "Скиллы"


class ServicesItem(Orderable, ClusterableModel):
    title = models.CharField('Название', max_length=32)
    price = models.CharField("Цена", max_length=16)

    page = ParentalKey(
        'home.HomePage',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="services_items"
    )

    api_fields = [
        APIField('title'),
        APIField('simple_text'),
        APIField('price'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"

    panels = [
        MultiFieldPanel([
            FieldPanel('title'),
            InlinePanel('simple_text'),
            FieldPanel('price'),
        ], heading="Начало"),
    ]


class SimpleText(Orderable):
    text = models.TextField('Текст')

    page = ParentalKey(
        'home.ServicesItem',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="simple_text"
    )

    api_fields = [
        APIField('text'),
    ]

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = "Строка"
        verbose_name_plural = "Строки"


class Link(Orderable):
    title = models.CharField("Название", max_length=32)
    url = models.URLField("Cсылка")
    image = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.CASCADE, related_name="+",
                              verbose_name="Иконка")

    page = ParentalKey(
        'home.HomePage',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="links"
    )

    api_fields = [
        APIField('title'),
        APIField('url'),
        APIField('image'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Ссылка"
        verbose_name_plural = "Ссылки"


class PortfolioItem(Orderable):
    title = models.CharField("Название", max_length=32)
    description = models.TextField("Описание")
    url = models.URLField("Cсылка", blank=True, null=True)
    logo = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.CASCADE, related_name="+",
                             verbose_name="Логотип")
    preview = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.CASCADE, related_name="+",
                                verbose_name="Превью")
    full_image = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.CASCADE, related_name="+",
                                   verbose_name="Картинка")

    page = ParentalKey(
        'home.HomePage',
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="portfolio_items"
    )

    api_fields = [
        APIField('description'),
        APIField('url'),
        APIField('logo'),
        APIField('preview'),
        APIField('full_image'),
    ]

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Портфолио"
        verbose_name_plural = "Портфолио"
