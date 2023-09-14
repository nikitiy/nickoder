from wagtail.models import Page

from .model_fragments import *


class HomePage(Page):
    # Начало
    subtitle = models.TextField("Текст")

    # Ссылка в хидере
    header_link_title = models.CharField("Название", max_length=32)
    header_link_url = models.URLField("Ссылка")
    header_link_image = models.ForeignKey("wagtailimages.Image", null=True, on_delete=models.SET_NULL, related_name="+", verbose_name="Иконка")

    # Оффер
    phone_mockup = models.ForeignKey("wagtailimages.Image",
                                     null=True,
                                     on_delete=models.SET_NULL,
                                     verbose_name="Mockup телефона",
                                     related_name="+")
    laptop_mockup = models.ForeignKey("wagtailimages.Image",
                                      null=True,
                                      on_delete=models.SET_NULL,
                                      verbose_name="Mockup ноутбука",
                                      related_name="+")

    # Обо мне
    subtitle_about_me = models.TextField("Текст")
    photo_about_me = models.ForeignKey("wagtailimages.Image",
                                       null=True,
                                       on_delete=models.SET_NULL,
                                       verbose_name="Фото",
                                       related_name="+")

    # Скиллы
    title_skills = models.CharField("Заголовок", max_length=16)

    # Портфолио
    title_portfolio = models.CharField("Заголовок", max_length=16)

    # Форма
    title_form = models.CharField("Заголовок", max_length=32)
    subtitle_form = models.TextField("Подзаголовок")

    # Услуги
    title_services = models.CharField("Заголовок", max_length=32)

    # Контакты
    phone_number = models.CharField("Номер телефона", max_length=18)
    email = models.EmailField("Почта", max_length=48)
    location = models.CharField("Локация", max_length=64)

    content_panels = Page.content_panels + [

        MultiFieldPanel([
            FieldPanel('subtitle'),

            MultiFieldPanel([
                FieldPanel('header_link_title'),
                FieldPanel('header_link_url'),
                FieldPanel('header_link_image'),
            ], heading="Ссылка в хидере")
        ], heading="Начало"),

        MultiFieldPanel([
            FieldPanel('phone_mockup'),
            FieldPanel('laptop_mockup'),
            InlinePanel('offer_items', label="элемент")
        ], heading="Оффер"),

        MultiFieldPanel([
            FieldPanel('subtitle_about_me'),
            FieldPanel('photo_about_me'),
        ], heading="Обо мне"),

        MultiFieldPanel([
            FieldPanel('title_skills'),
            InlinePanel('skill_items', label="скилл")
        ], heading="Скиллы"),

        MultiFieldPanel([
            FieldPanel('title_portfolio'),
            InlinePanel('portfolio_items')
        ], heading="Портфолио"),

        MultiFieldPanel([
            FieldPanel('title_form'),
            FieldPanel('subtitle_form'),
        ], heading="Форма"),

        MultiFieldPanel([
            FieldPanel('title_services'),
            InlinePanel('services_items', label="элемент")
        ], heading="Услуги"),

        MultiFieldPanel([
            FieldPanel('phone_number'),
            FieldPanel('email'),
            FieldPanel('location'),
            InlinePanel('links', label="Ссылка")
        ], heading="Контакты"),
    ]

    api_fields = [
        APIField('subtitle'),
        APIField('header_link_title'),
        APIField('header_link_url'),
        APIField('header_link_image'),
        APIField('phone_mockup'),
        APIField('laptop_mockup'),
        APIField('offer_items'),
        APIField('subtitle_about_me'),
        APIField('photo_about_me'),
        APIField('title_skills'),
        APIField('skill_items'),
        APIField('title_portfolio'),
        APIField('portfolio_items'),
        APIField('title_form'),
        APIField('subtitle_form'),
        APIField('title_services'),
        APIField('services_items'),
        APIField('phone_number'),
        APIField('email'),
        APIField('location'),
        APIField('links'),
    ]
