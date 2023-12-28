CREATE TABLE
    IF NOT EXISTS images (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        url VARCHAR(255) NOT NULL,
        alt VARCHAR(255) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        clicked INT NOT NULL,
        UNIQUE(name)
    );

CREATE TABLE
    IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(21) NOT NULL,
        price INT NOT NULL,
        quantity INT NOT NULL,
        description VARCHAR(255) NOT NULL,
        image UUID NOT NULL,
        category UUID NOT NULL,
        discount INT NOT NULL,
        rating FLOAT NOT NULL,
        clicked INT NOT NULL,
        isForSale BOOLEAN DEFAULT true,
        costPrice INT NOT NULL,
        supplier VARCHAR NOT NULL,
        FOREIGN KEY (category) REFERENCES categories(id),
        FOREIGN KEY (image) REFERENCES images(id),
        UNIQUE(name)
    );


insert into images (url, alt)
values ('https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQA4DVeDbNetPFrF7SVDIqchdadUT7s1yMDYR8WaWZDl5gXgY_P4CyWVI5kb22ZOAnYR3Eangc0y_7bKkFPR8eDmYw5MnikvlscR3_ec2CQfMfk6gocnryVHmdOsg3UAYarHBKsaeTp&usqp=CAc', 'galaxy 23')

insert into images (url, alt)
values ('https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIfzdM0HcsbHtsW7SvtfODLRaptaIIkP7uwkgUGJF1MWgDGvzN7K9TVifObUwolWYE9BIT1oGBqEjP_Ts3SWWK7-Df6HB0jwNQq9QkeRCn5AKEhfx7hy3lZv53lhRNNu2GbS9yZJw&usqp=CAc', 'iPhone 15')


insert into categories(name, clicked)
values ('מכשירי סלולר' , 0)


INSERT INTO images(url, alt)
VALUES('https://bstore.bezeq.co.il/media/49765/740-2.jpg', 'Lenovo IdeaPad 3')

INSERT INTO categories(name, clicked)
VALUES('מחשבים', 0)

INSERT INTO
    products (
        name,
        price,
        quantity,
        description,
        image,
        category,
        discount,
        rating,
        clicked,
        costPrice,
        supplier
    )
VALUES (
        'Samsung Galaxy S23',
        1000,
        540,
        'Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Gray (SM-G991UZAAXAA)', (
            SELECT id
            FROM images
            WHERE
                alt = 'galaxy 23'
        ), (
            SELECT id
            FROM categories
            WHERE
                name = 'מכשירי סלולר'
        ),
        0,
        5,
        0,
        500,
        'ivan electronics'
    ), (
        'Lenovo IdeaPad 3',
        500,
        800,
        'Lenovo IdeaPad 3 14 Laptop, 14.0 FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue', (
            SELECT id
            FROM images
            WHERE
                alt = 'Lenovo IdeaPad 3'
        ), (
            SELECT id
            FROM categories
            WHERE
                name = 'מחשבים'
        ),
        0,
        5,
        0,
        250,
        'josh computing solutions'
    ), (
        'iPhone 12',
        900,
        600,
        'Apple iPhone 15 | 256GB | Space Gray | Unlocked', (
            SELECT id
            FROM images
            WHERE
                alt = 'iPhone 15'
        ), (
            SELECT id
            FROM categories
            WHERE
                name = 'מכשירי סלולר'
        ),
        0,
        4.6,
        0,
        550,
        'Apple Inc.'
    )