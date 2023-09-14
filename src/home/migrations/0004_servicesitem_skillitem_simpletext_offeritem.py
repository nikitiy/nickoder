# Generated by Django 4.2.4 on 2023-08-31 17:42

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0025_alter_image_file_alter_rendition_file'),
        ('home', '0003_homepage_email_homepage_laptop_mockup_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServicesItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('title', models.CharField(max_length=32, verbose_name='Название')),
                ('price', models.CharField(max_length=16, verbose_name='Цена')),
                ('page', modelcluster.fields.ParentalKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='services_item', to='home.homepage')),
            ],
            options={
                'verbose_name': 'Услуга',
                'verbose_name_plural': 'Услуги',
            },
        ),
        migrations.CreateModel(
            name='SkillItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('name', models.CharField(max_length=32, verbose_name='Название')),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='wagtailimages.image')),
                ('page', modelcluster.fields.ParentalKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='skill_item', to='home.homepage')),
            ],
            options={
                'verbose_name': 'Скилл',
                'verbose_name_plural': 'Скиллы',
            },
        ),
        migrations.CreateModel(
            name='SimpleText',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('text', models.TextField(verbose_name='Текст')),
                ('page', modelcluster.fields.ParentalKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='simple_text', to='home.servicesitem')),
            ],
            options={
                'verbose_name': 'Строка',
                'verbose_name_plural': 'Строки',
            },
        ),
        migrations.CreateModel(
            name='OfferItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=32, verbose_name='Заголовок')),
                ('offer_1', models.CharField(max_length=32, verbose_name='Оффер 1')),
                ('offer_2', models.CharField(max_length=32, verbose_name='Оффер 2')),
                ('page', modelcluster.fields.ParentalKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='offer_item', to='home.homepage')),
            ],
            options={
                'verbose_name': 'Оффер',
                'verbose_name_plural': 'Офферы',
            },
        ),
    ]