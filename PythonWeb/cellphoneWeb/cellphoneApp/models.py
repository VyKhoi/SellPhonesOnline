from django.db import models

# Create models here.

class Product(models.Model): 
    Name = models.CharField(max_length=100)  
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    Branch = models.CharField(max_length=50)
    Version = models.CharField(max_length=50)
    
    class Meta:
        abstract = True

class Color(models.Model):
    names = models.CharField(max_length=50, primary_key=True)
    product_type = models.ManyToManyField('Smartphone', through='Product_Color')
    product_type1 = models.ManyToManyField('Laptop', through='Product_Color')
    product_type2 = models.ManyToManyField('Earphone', through='Product_Color')
class Manufacture(models.Model):
    names = models.CharField(max_length=50, primary_key=True)
    product_type = models.ForeignKey('Smartphone', on_delete=models.PROTECT)
    product_type1 = models.ForeignKey('Laptop', on_delete=models.PROTECT)
    product_type2 = models.ForeignKey('Earphone', on_delete=models.PROTECT)

class Product_Color(models.Model):
    Id = models.AutoField(primary_key=True)
    product_type = models.ForeignKey('Smartphone', on_delete=models.CASCADE)
    product_type1 = models.ForeignKey('Laptop', on_delete=models.CASCADE)
    product_type2 = models.ForeignKey('Earphone', on_delete=models.CASCADE)
    nameColor = models.ForeignKey(Color, on_delete=models.CASCADE)
    Price = models.DecimalField(max_digits=10, decimal_places=2)

class Laptop(Product):
    CPU = models.CharField(max_length=50)
    RAM = models.CharField(max_length=50)
    ROM = models.CharField(max_length=50)
    Graphic_Card = models.CharField(max_length=50)
    Battery = models.CharField(max_length=30)
    operatorSystem = models.CharField(max_length=50)
    Others = models.CharField(max_length=50)
    

class Smartphone(Product):
    Operator_System = models.CharField(max_length=50)
    CPU = models.CharField(max_length=50)
    RAM = models.CharField(max_length=50)
    ROM = models.CharField(max_length=50)
    Battery = models.CharField(max_length=30)
    Others = models.CharField(max_length=50)

class Earphone(Product):
    connectionType = models.CharField(max_length=50)
    Design = models.CharField(max_length=50)
    Frequency_Response = models.CharField(max_length=50)

class Review(models.Model):
    Id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=100)
    Content = models.TextField()
    product_type = models.ForeignKey('Smartphone', on_delete=models.CASCADE)
    product_type1 = models.ForeignKey('Laptop', on_delete=models.CASCADE)
    product_type2 = models.ForeignKey('Earphone', on_delete=models.CASCADE)

class ImageProduct(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    linkImg = models.CharField(max_length=50)
    product_type = models.ForeignKey('Smartphone', on_delete=models.CASCADE)
    product_type1 = models.ForeignKey('Laptop', on_delete=models.CASCADE)
    product_type2 = models.ForeignKey('Earphone', on_delete=models.CASCADE)

class Branch(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50)
    Address = models.CharField(max_length=50)
    Phone = models.CharField(max_length=20)
    idProductColors = models.ManyToManyField(Product_Color, through='Branch_Product_Color')
    
class Branch_Product_Color(models.Model):
    Id = models.AutoField(primary_key=True)
    idProductColor = models.ForeignKey(Product_Color, on_delete=models.PROTECT)
    idBranch = models.ForeignKey(Branch, on_delete=models.PROTECT)
    Amount = models.IntegerField(default=0)

class Promotion(models.Model):
    Id = models.AutoField(primary_key=True)
    timeStart = models.DateTimeField()
    timeEnd = models.DateTimeField()
    Active = models.BooleanField(default=False)
    idBrandProductColors = models.ManyToManyField(Branch_Product_Color, through='Branch_Promotion_Product')

class Branch_Promotion_Product(models.Model):
    Id = models.AutoField(primary_key=True)
    idPromotion = models.ForeignKey(Promotion, on_delete=models.PROTECT)
    idBrandProductColor = models.ForeignKey(Branch_Product_Color, on_delete=models.PROTECT)
    discountRate = models.FloatField(default=0.0)

class Comment(models.Model):
    Id = models.AutoField(primary_key=True)
    contentComment = models.CharField(max_length=100)
    idUser = models.ForeignKey('User', on_delete=models.CASCADE)
    product_type = models.ForeignKey('Smartphone', on_delete=models.CASCADE)
    product_type1 = models.ForeignKey('Laptop', on_delete=models.CASCADE)
    product_type2 = models.ForeignKey('Earphone', on_delete=models.CASCADE)


class Order(models.Model):
    Id = models.AutoField(primary_key=True)
    orderDate = models.DateTimeField(auto_now_add=True)
    deliveryAddress = models.CharField(max_length=50)
    deliveryPhone = models.CharField(max_length=50)
    Status = models.CharField(max_length=30)
    idBranchProductColor = models.ManyToManyField(Branch_Product_Color)
    idUser = models.ForeignKey('User', on_delete=models.PROTECT)

class User(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30)
    Email = models.EmailField(max_length=100)
    Gender = models.BooleanField(default=False)
    Hometown = models.CharField(max_length=50)
    userName = models.CharField(max_length=30)
    passWord = models.CharField(max_length=30)
    birthDay = models.DateField()
    phoneNumber = models.CharField(max_length=20)
    idRole = models.ForeignKey('Role', on_delete=models.PROTECT)

class Cart(models.Model):
    Id = models.AutoField(primary_key=True)
    idUser = models.ForeignKey(User, on_delete=models.CASCADE)
    idBranchProductColor = models.ManyToManyField(Branch_Product_Color)
    
class Role(models.Model):
    Id = models.AutoField(primary_key=True)
    nameRole = models.CharField(max_length=30)
    permissions = models.ManyToManyField('Permission', through='Role_Permission')

class Permission(models.Model):
    Id = models.AutoField(primary_key=True)
    namePermission = models.CharField(max_length=30)

class Role_Permission(models.Model):
    Id = models.AutoField(primary_key=True)
    idRole = models.ForeignKey(Role, on_delete=models.PROTECT)
    idPermission = models.ForeignKey(Permission, on_delete=models.PROTECT)
    creatAt = models.IntegerField(default=0)
    updateAt = models.IntegerField(default=0)