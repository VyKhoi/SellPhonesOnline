# Generated by Django 4.1.7 on 2023-03-01 16:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=50)),
                ('Address', models.CharField(max_length=50)),
                ('Phone', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Branch_Product_Color',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Amount', models.IntegerField(default=0)),
                ('idBranch', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.branch')),
            ],
        ),
        migrations.CreateModel(
            name='Branch_Promotion_Product',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('discountRate', models.FloatField(default=0.0)),
                ('idBrandProductColor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.branch_product_color')),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('names', models.CharField(max_length=50, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Earphone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('Branch', models.CharField(max_length=50)),
                ('Version', models.CharField(max_length=50)),
                ('connectionType', models.CharField(max_length=50)),
                ('Design', models.CharField(max_length=50)),
                ('Frequency_Response', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Laptop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('Branch', models.CharField(max_length=50)),
                ('Version', models.CharField(max_length=50)),
                ('CPU', models.CharField(max_length=50)),
                ('RAM', models.CharField(max_length=50)),
                ('ROM', models.CharField(max_length=50)),
                ('Graphic_Card', models.CharField(max_length=50)),
                ('Battery', models.CharField(max_length=30)),
                ('operatorSystem', models.CharField(max_length=50)),
                ('Others', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('namePermission', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('nameRole', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Smartphone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('Branch', models.CharField(max_length=50)),
                ('Version', models.CharField(max_length=50)),
                ('Operator_System', models.CharField(max_length=50)),
                ('CPU', models.CharField(max_length=50)),
                ('RAM', models.CharField(max_length=50)),
                ('ROM', models.CharField(max_length=50)),
                ('Battery', models.CharField(max_length=30)),
                ('Others', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=30)),
                ('Email', models.EmailField(max_length=100)),
                ('Gender', models.BooleanField(default=False)),
                ('Hometown', models.CharField(max_length=50)),
                ('userName', models.CharField(max_length=30)),
                ('passWord', models.CharField(max_length=30)),
                ('birthDay', models.DateField()),
                ('phoneNumber', models.CharField(max_length=20)),
                ('idRole', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.role')),
            ],
        ),
        migrations.CreateModel(
            name='Role_Permission',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('creatAt', models.IntegerField(default=0)),
                ('updateAt', models.IntegerField(default=0)),
                ('idPermission', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.permission')),
                ('idRole', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.role')),
            ],
        ),
        migrations.AddField(
            model_name='role',
            name='permissions',
            field=models.ManyToManyField(through='cellphoneApp.Role_Permission', to='cellphoneApp.permission'),
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=100)),
                ('Content', models.TextField()),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.smartphone')),
                ('product_type1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.laptop')),
                ('product_type2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.earphone')),
            ],
        ),
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('timeStart', models.DateTimeField()),
                ('timeEnd', models.DateTimeField()),
                ('Active', models.BooleanField(default=False)),
                ('idBrandProductColors', models.ManyToManyField(through='cellphoneApp.Branch_Promotion_Product', to='cellphoneApp.branch_product_color')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Color',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('nameColor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.color')),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.smartphone')),
                ('product_type1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.laptop')),
                ('product_type2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.earphone')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('orderDate', models.DateTimeField(auto_now_add=True)),
                ('deliveryAddress', models.CharField(max_length=50)),
                ('deliveryPhone', models.CharField(max_length=50)),
                ('Status', models.CharField(max_length=30)),
                ('idBranchProductColor', models.ManyToManyField(to='cellphoneApp.branch_product_color')),
                ('idUser', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.user')),
            ],
        ),
        migrations.CreateModel(
            name='Manufacture',
            fields=[
                ('names', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.smartphone')),
                ('product_type1', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.laptop')),
                ('product_type2', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.earphone')),
            ],
        ),
        migrations.CreateModel(
            name='ImageProduct',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=50)),
                ('linkImg', models.CharField(max_length=50)),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.smartphone')),
                ('product_type1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.laptop')),
                ('product_type2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.earphone')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('contentComment', models.CharField(max_length=100)),
                ('idUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.user')),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.smartphone')),
                ('product_type1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.laptop')),
                ('product_type2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.earphone')),
            ],
        ),
        migrations.AddField(
            model_name='color',
            name='product_type',
            field=models.ManyToManyField(through='cellphoneApp.Product_Color', to='cellphoneApp.smartphone'),
        ),
        migrations.AddField(
            model_name='color',
            name='product_type1',
            field=models.ManyToManyField(through='cellphoneApp.Product_Color', to='cellphoneApp.laptop'),
        ),
        migrations.AddField(
            model_name='color',
            name='product_type2',
            field=models.ManyToManyField(through='cellphoneApp.Product_Color', to='cellphoneApp.earphone'),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('idBranchProductColor', models.ManyToManyField(to='cellphoneApp.branch_product_color')),
                ('idUser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cellphoneApp.user')),
            ],
        ),
        migrations.AddField(
            model_name='branch_promotion_product',
            name='idPromotion',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.promotion'),
        ),
        migrations.AddField(
            model_name='branch_product_color',
            name='idProductColor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cellphoneApp.product_color'),
        ),
        migrations.AddField(
            model_name='branch',
            name='idProductColors',
            field=models.ManyToManyField(through='cellphoneApp.Branch_Product_Color', to='cellphoneApp.product_color'),
        ),
    ]
