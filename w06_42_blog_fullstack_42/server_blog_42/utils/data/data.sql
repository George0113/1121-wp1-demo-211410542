CREATE TABLE card_42(
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    descrip varchar(255),
    category varchar(255),
    img varchar(255),
    remote_url varchar(255)
)

INSERT INTO card_42 (id, title, descrip, category, img, remote_url)
VALUES
(1,'seven reasons why coffee is awesome','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-1.jpg',''),
(2,'travel to paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-2.jpg',''),
(3,'seven reasons why coffee is awesome','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-3.jpg',''),
(4,'seven reasons why coffee is awesome','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-4.jpg',''),
(5,'seven reasons why coffee is awesome','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-5.jpg',''),
(6,'travel to paris','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-6.jpg',''),
(7,'seven reasons why coffee is awesome','Lorem ipsum dolor, sit amet consectetur adipisicing elit.','lifestyle','./images/photo-7.jpg',''),
(8,'seven reasons why coffee is awesome', 'sit amet consectetur adipisicing elit.','lifestyle','./images/photo-8.jpg',''),
(9,'seven reasons why coffee is awesome', 'sit amet consectetur adipisicing elit.','lifestyle','./images/photo-9.jpg','')
