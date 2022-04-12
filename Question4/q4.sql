CREATE TABLE IF NOT EXISTS `product_price` (
    Brand varchar(100)  NOT NULL,
    Name varchar(100)  NOT NULL,
    Price int NOT NULL
  );
INSERT INTO `product_price` (`Brand`, `Name`, `Price`) VALUES
    ('AMD', 'Product1', 10),
    ('AMD', 'Product2', 30),
    ('AMD', 'Product3', 60),
    ('AMD', 'Product5', 40),
    ('ACME', 'Product1', 44),
    ('ACME', 'Product2', 1),
    ('ACME', 'Product4', 90);

--------------------------------------------------------------------------

Select product_price.Name, product_price.Brand,product_price.Price, datas.Rank from product_price join 
(
	(Select  Name, Brand,  Price, RANK() Over ( ORDER BY Price DESC, Brand) 'Rank' from product_price where product_price.Brand = "AMD")
union 
	(Select  Name, Brand,  Price, RANK() Over ( ORDER BY Price DESC, Brand) 'Rank' from product_price where product_price.Brand = "ACME")
) as datas  on
(product_price.Name=datas.Name and product_price.Price=datas.Price and product_price.Brand=datas.Brand);

// -----------------------------------------------------------------------
(
	(Select  Name, Brand, Price, RANK() Over ( ORDER BY Price DESC, Brand) 'Rank' from product_price where product_price.Brand = "AMD" limit 1 offset 1)
union
	(Select  Name, Brand,  Price, RANK() Over ( ORDER BY Price DESC, Brand) 'Rank' from product_price where product_price.Brand = "ACME" limit 1 offset 1)
);