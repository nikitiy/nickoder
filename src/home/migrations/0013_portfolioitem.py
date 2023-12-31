# Generated by Django 4.2.4 on 2023-09-03 13:44

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0025_alter_image_file_alter_rendition_file'),
        ('home', '0012_homepage_header_link_image_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PortfolioItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('title', models.CharField(max_length=32, verbose_name='Название')),
                ('url', models.URLField(blank=True, null=True, verbose_name='Cсылка')),
                ('full_image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='wagtailimages.image', verbose_name='Картинка')),
                ('page', modelcluster.fields.ParentalKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='portfolio_items', to='home.homepage')),
                ('preview', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='wagtailimages.image', verbose_name='Превью')),
            ],
            options={
                'verbose_name': 'Портфолио',
                'verbose_name_plural': 'Портфолио',
            },
        ),
    ]
